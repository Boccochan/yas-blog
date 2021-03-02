---
title: How CPU executes software?
date: "2021-03-02T21:11:41+09:00"
description: It is very important concept for all programmers
featuredImage: ./image-top.jpg
---


If you just started to learn programming, you might wonder how comptures execute your program. I am going to explain how it works simply.


<nav class="blog-nav">
<div class="inner">
<p>目次</p>
<ol class='top-ol-1'>
<li class='top-li-1'>
<a href='#h-0'>Program</a>
</li>
<li class='top-li-1'>
<a href='#h-1'>Fetching</a>
</li>
</ol>
</div>
</nav>

<h2>著者紹介</h2>

プログラミング歴15年の現役エンジニアです。現在は都内のIT企業でソフトウェアエンジニアとして勤務しています。

<h2 id="h-0">Program</h2>


A program consists of a chunk of tiny machine codes. Each code is very simple, but they are just chunk of numbers. It is difficult to understand for us. Fortunately, we do not need to learn those primitive codes. Compliter or interpreter handles them. You might have heard assembler language. The assembler is almost the same as machine language, but it is readable for us.

Here is sample of those assembler code. 

| code | parameters |explain |
| ---- | ---- | ---- |
| MOV | address | move data |
| ADD | number, address | Add number |

CPU has their own dialect of assembler language. Compilers or interpreters absorbs those dialects. So, you will never see those language as long as you write iphone or web application.

Do you need to know assembler languages? No, but you must understand how CPU executes programming even if you are learning web programming. And you need to know about assembler language a little bit for understanding around CPU.

A program is a chunk of machine code. That is the very very important concept. Please do not forget if you are programmer.

<h2 id="h-1">Fetching</h2>


CPU fetches a machine code from memory. The most of time the memory will be DRAM. I do not explain about cache here for making things simple.


![image](./image-cpu.jpg)


The most important thing is that CPU can fetch one machine code at the same time. In addition, CPU can fetch a machine code in order, such as address 0x0000, 0x0002,  0x0004 and so on. This explanation is not accurate since 'if' statement can change the order. But I would like to make things simple for now. 

You might think about multi-core CPU like Core i series. Those CPU can handle multiple code at the same time, but still each core executes one machine code at the same time.

CPU read a machine code in order from DRAM. This is also very important to understand synchronous, asynchronous, thread and process.


