---
title: How to add copy icon to code blocks of markdown for Gatsby with Typescript
date: "2021-03-22T10:40:32.169Z"
description: I am going to tell you how to add copy icon to code block and apply a style.
featuredImage: ./top.png
lang: "en"
---

Do you want to put a copy icon on code block? I am going to tell you how to do it.

## Installing a plugin

```bash
yarn add gatsby-remark-code-buttons
```

## Adding plugin to gatsby-config.js

You might be better to put "gatsby-remark-code-buttons" before "gatsby-remark-prismjs". In my case, when I put "gatsby-remark-code-buttons" after "gatsby-remark-prismjs", it did not work for some reasons. I am not sure why it was happened.

```js:title=gatsby-config.js
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-code-buttons",
            options: {
              tooltipText: `Copy to clipboard`,
              toasterText: "Copied to clipboard",
              toasterDuration: 5000,
            },
          },
          // other plugins here
        ]
      }
    }
```

## Changing color and margin of the copy icons

I created remark-copy.css under "./src/styles/". But you can put the file anywhere you want.

```css:title=src/styles/remark-copy.css
.gatsby-code-button-container {
  touch-action: none;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 28px;
  right: 3px;
  z-index: 100;
  pointer-events: none;
}

.gatsby-code-button-icon {
  display: block;
  width: 14px;
  height: 14px;
  fill: gray;
}
```

## Import the plugin

You need to add the below to gatsby-browser.js

```js:title=gatsby-browser.js
import "./src/styles/remark-copy.css";
```
