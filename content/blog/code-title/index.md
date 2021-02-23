---
title: Putting titles on code blocks of Gatsby markdown
date: "2020-07-26T21:40:32.169Z"
description: How to put a file name on code blocks.
lang: "en"
---

## Installing plugin

```bash
yarn add gatsby-remark-code-titles
```

## Putting plugin into gatsby-config.js

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-code-titles`,
      ];
    }
  ],
};
```

## Creating css

```css:title=src/styles/remark-code-title.css
.gatsby-code-title {
  background: #999;
  color: #eee;
  margin: 24px 0px -24px;
  padding: 6px 12px;
  font-size: 0.8em;
  line-height: 1;
  font-weight: bold;
  display: table;
  border-radius: 4px 4px 0 0;
}
```

## Modifying gatsby-browser.js

```js:title=gatsby-browser.js
import "./src/styles/remark-code-title.css";
```

## Now, ready to go

We can put a title if we write like this.

````
    ```js:title=index.js
    // Insert your code
    ```
````

Then, we can see a title on a code block
