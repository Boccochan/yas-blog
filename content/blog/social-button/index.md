---
title: How to put twitter and facebook button in React
date: "2020-07-27T21:40:32.169Z"
description: Let's put twitter and facebook button in React. It's easy!
lang: "en"
---

## Installing a plugin

```bash
yarn add react-share
```

## Okay, source code

I hate blah blah boaring explanation. So, I'm going to put source code anyway.
You need to add styled-components as well.

```js:title=social.tsx
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import styled from "styled-components";

const config = {
  via: "yasblog",
  size: 32,
};

interface SocialProps {
  url: string;
  title: string;
  size?: number;
  via?: string;
}

const SocialStyle = styled.div`
  border-top: 1px solid #eae6e6;
  padding-top: 10px;
  margin-top: 60px;
`;

const Facebook = styled(FacebookShareButton)`
  margin: 10px;
`;

const Twitter = styled(TwitterShareButton)`
  margin: 10px;
`;

export class Social extends React.Component<SocialProps, {}> {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <SocialStyle>
        <Facebook url={this.props.url}>
          <FacebookIcon
            size={this.props.size ? this.props.size : config.size}
            round
          />
        </Facebook>
        <Twitter
          url={this.props.url}
          title={this.props.title}
          via={this.props.via ? this.props.via : config.via}
        >
          <TwitterIcon
            size={this.props.size ? this.props.size : config.size}
            round
          />
        </Twitter>
      </SocialStyle>
    );
  }
}
```

## How to get the current page URL

There are a couple of ways, but I prefer this way.

```js
const url = location.href ? location.href : "";
```

Then, you can pass it to Social component.
