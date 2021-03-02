---
title: Media query for React with typescript
date: "2020-07-17T21:40:32.169Z"
description: How to implement responsible design on React with typescript
featuredImage: ./select.jpg
lang: 'en'
---

Media query is important to support responsible design.

There are a couple of ways to do that with React.

1. Write media query css
2. Using react-responsive
3. Using styled-media-query


<div class="mt-8 mb-8">
<nav class='blog-nav'> 
  <div class='inner'>
    <p>Index</p>
    <ol class="top-ol">
      <li class="top-li">Write media query css</li>
      <li class="top-li">Using react-responsive</li>
      <li class="top-li">Using react-responsive</li>
      <li class="top-li">Using react-responsive</li>
      <li class="top-li">Using react-responsive</li>
    </ol>
  </div>
</nav>
</div>


I'm going to tell you how to use styled-media-query here.

## Installing styled-components and styled-media-query

```bash
yarn add styled-components
yarn add styled-media-query
```

## How to use them

```js:title=card.ts
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const SytledCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 2px 2px 2px 2px;
  display: block;
  height: 200px;
  width: 300px;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;

  background-color: #fffdfd;
  ${media.lessThan("small")`
    height: 160px;
    width: 240px;
  `}
`;

const Card = () => {
  return <SytledCard>Hello</SytledCard>;
};

export default Card;
```

Also, you can see the sample code at [the github repository](https://github.com/morajabi/styled-media-query).

The good part of them is that you can write styles for each components and do not need to write css files.
