---
title: Pros and Cons of TDD
date: "2021-03-21T00:40:32.169Z"
description: I have done Test Driven Development through 1 year. I would like to share my hands-on experience.
featuredImage: ./top.jpg
lang: "en"
feature: true
---

TDD is a Test Driven Development. I assume that you already know how to do it. So, I am going to share my hands-on experience of TDD with you. I found pros and cons as other technique.

You are planning TDD? My experience would be useful for you.

## Pros and Cons

| Pros | Cons |
| ---- | ---- |
| Do not need to write specification document since test cases are specification | If specificaton is changed, whole test code and source code must be changed |
| Refactoring will be easier | Difficult to decide which code should be applied TDD |
| If you write an algorithm or logic, TDD might be a great option | Taking a time to develop if you compare to NOT TDD |

## You must understand what you are doing

First of all, you must understand what you are doing clearly if you want to do TDD. It sounds normal? In some cases, I do not think so.

For example, if you just started to use AWS, you understand how to use AWS resources? No, you do not. It will take a time to get used to AWS stuffs. You need to setup AWS resources, consider about specification, architecture, how to use those resources and so on. There are so many things to do.

It will take a time forever if you are not used to the environment. Then, you want to do TDD? In that case, I do not want to recommend TDD. Probably, **you will change or rewrite your software multiple times**. That means you must change your test case multiple times. Actually, I did it. **It was really painful and pointless**.

If the specification or design will be changed frequently, TDD will be a heavy burden. In other words, TDD will be a great option if you know what you are going to do clearly.

## Logic and algorithm fit TDD

TDD is a great option for writing logic and algorithm. Logic and algorithm should be independent from other stuffs such as Database or Web API. So, it is easy to do TDD.

Bugs tend to came from conditional statements or calculation. TDD can make the specification clear, also it is easy to refactor the logic and algorithm.

Of course, if you forget or misunderstand specification, it will be bug. To be honest, I am not sure how it avoid yet. Reviewing or pair programming might be the answer for it.

You should create logic or algorithm independently from other stuffs as much as possible. Then, TDD will help to make it better.

## TDD is just option

You should combine TDD with other technique such as unit test or others. 

I was forced TDD every single time in the past. It was **horibble experience**. I hated TDD for a while because of that. If your team or project often change the speficition, you should not do TDD. It will be hell.

On the other hand, you are used to your programming language or development environment, it is worth to do TDD.

Anyway, TDD is just option or the way of the development. Do not think TDD solve all problems.