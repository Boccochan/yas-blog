---
title: Part2, How to design css. What is the good css design.
date: "2020-08-05T22:40:32.169Z"
description: How to design css, and decide names.
lang: "en"
---

In the previous part, we studied the foundamental idea of designing css. We are going to study how to implement them.

## Name rules

There are a couple of ways to decide them. For example, if you are making class for layer, you can put ly- or l- in the first of the name. If you are making class for modules, you can put el- or bl-. Of course, you can make your own rules. Everyone can understand the scope of the class.

## Loose coupling

CSS should be independent from HTML element as much as possible. Since css is global, they could be applied everywhere in HTML files. So, we should avoid to use HTML elements for selectors such as h1 or p if possible. We should assign class to div instead.

## Abstraction

If the level of abstraction of css is high, they are reusable for other modules.

```css:title=styles.css
.el_btn {
  width: 120px;
  padding: 20px 10px;
  font-size: 18px;
  text-align: center;
}

.hp_info {
  background-color: blue;
  color: white;
}

.hp_warning {
  background-color: red;
  color: white;
}
```

```html:title=index.html
<a class="el_btn hp_info" href="#">Info</a>
<a class="el_btn hp_warning" href="#">Warning</a>
```

In this case, el_btn is reusable.

## Multi-class

We might want to change the part of css elements. In that case, we can add it as a different class.
For example, if we want to add shadow, we can add hp_boxShadow like below.

```css:title=style.css
.el_btn {
  width: 120px;
  padding: 20px 10px;
  font-size: 18px;
  text-align: center;
}

.hp_info {
  background-color: blue;
  color: white;
}

.hp_warning {
  background-color: red;
  color: white;
}

.hp_boxShadow {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
```

```html:title=index.html
<a class="el_btn hp_info" href="#">Info</a>
<a class="el_btn hp_info hp_boxShadow" href="#">Shadow</a>
```

Multi-class is pretty handy, but don't use it too much. It is going to be chaos.
