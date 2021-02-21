---
title: Fix the position of a nav bar
date: "2020-07-21T21:40:32.169Z"
description: How to fix the postion of the nav bar?
---

If you want to fix the postion of the nav bar, you need to put just postion: fixed.

```html:title=index.html
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>NAVIGATION</title>
  </head>
  <body>
    <nav>
      <div class="logo">
        <h4>The Nav</h4>
      </div>
    </nav>
    <div class="myarticle">
      hello
    </div>
  </body>
</html>
```

```css:title=style.css
nav {
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: 8vh;
  background-color: red;
}

.myarticle {
  margin-top: 10vh;
  background-color: black;
  margin-right: auto;
  margin-left: auto;
  width: 500px;
  height: 1000px;
}
```

z-index property is needed to put the nav bar at the most front of the website.
Also, we need a margin-top at the myarticle. If not, the myarticle will be under the nav bar.
