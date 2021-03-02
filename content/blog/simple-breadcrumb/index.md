---
title: Let's make a simple breadcrumbs in Gatsby with typescript
date: "2020-08-01T11:40:32.169Z"
description: It's not that difficult to create breadcrums!
featuredImage: ./breadcrumb.jpg
lang: 'en'
---

## What is breadcrumbs?

![breadcrumb](./breadcrumb.jpg)

Breadcrumbs is the user history or just path of the current page. The purpose of breadcrumbs is to avoid getting lost in your website.
There is some plugins for breadcrumb, but this time, we are going to create a very simple breadcrumbs by ourselves.

## Target envrionment

- Gatsby
- React
- Typescript

## Installing plugin

We are going to use styled-components

```bash
yarn add styled-components
```

## Component

```js:title=src/components/breadcrumbs.tsx
import React from "react";
import path from "path";
import { Link } from "gatsby";
import styled from "styled-components";

type Props = {
  currentPath: string[],
};

const Break = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;

const History = styled(Link)`
  box-shadow: none;
`;

const Flex = styled.div`
  display: flex;
`;

export const Breadcrumbs = (props: Props) => {
  let linkPath = "";

  const lastPage =
    props.currentPath.length > 0 ? props.currentPath.length - 1 : 0;

  return (
    <Flex>
      {props.currentPath.map((page, index) => {
        linkPath = path.join(linkPath, page);

        // If your home url is not /, you do not need the blowing
        page = page === "/" ? "home" : page;

        return (
          <div>
            {index !== lastPage ? (
              <Flex>
                <History to={linkPath}>{page}</History>
                <Break>&gt;</Break>
              </Flex>
            ) : (
              <div>{page}</div>
            )}
          </div>
        );
      })}
    </Flex>
  );
};
```

## How it uses?

We should call the breadcrumbs component in layout since we do not want to call in each component. If you don't have layout component, I recommend you to create it. I am not going to explain about layout too much here.

```js:title=src/components/layout.tsx
// Some code should be here

import React, { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";

type Props = PageRendererProps;

export const Layout = (props: Props) => {
  const { location } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const home = ["/"];
  const path = home.concat(
    location.pathname.split("/").filter((name) => name !== "")
  );

  return (
    <React.Fragment>
      <main>
        {location.pathname !== rootPath && <Breadcrumbs currentPath={path} />}
        <div>Hello!!</div>
      </main>
    </React.Fragment>
  );
};
```

I think that we do not need to put breadcrumbs in home, so we check rootPath in our code.
