---
title: Part1, How to design css. What is the good css design.
date: "2020-08-02T12:40:32.169Z"
description: Basics for designing css
---

Designing css is not easy. Since css elements are global which means that they could be applied for each HTML elements, css might be going to be chaos. So, we are considering what is the good css design here.

## What is important?

If a project is not that huge, we do not need to think design or names of css elements. However, if the project has over 100 pages?
Yes, we need to think about them carefully. To be honest, if you can use Vue or React, it might be very helpfull since they can handle scopes of css.
But, even if we are using those framework or library, it is better to know the basic idea of designing css.

There are four points to design css.

- Expectable
- Reusable
- Maintainable
- Scalable

### Expectable

Other programmer or web designer should be able to know the css element is for what and scope.

### Reusable

Everyone can use the css elements everywhere as much as possible. Of course, they don't destroy the design.

### Maintainable

Most of huge projects could be running over years. That means, a lot of programmers or web designers will change source code or add modules.
It should not break other parts and easy to change.

### Scalable

Sometimes, we might want to add some properties or modules. If css is messy or complexed, it is going to be taugh.

## How to do it?

There is not one correct answer for it. There are various ways. But, the foundamental idea is the same.
We should divide three parts of the css.

- Base
- Layout
- Module

### Base

The base is applied to every single page. So, we should not put very specific elements here. For example, we should put reset css and font here.
But we should not put layout or modules such as menu, sidebar or footer.

### Layout

The layout is applied to layout of the website. That is where we are goint to put navbar, sidebar or footer. But we don't put menu itself. We just define the location, width or height.

### Module

They are menu, button, card and so forth. Modules should be reusable in the other HTML elements.

## What we are studying in Part2?

We are studying chips of design css, digging scopes and how to decide the name of elements.
