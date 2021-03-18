---
title: Hands on experience of a micro service architecture
date: "2021-03-19T00:40:32.169Z"
description: How to build a software with micro service
featuredImage: ./top.png
lang: "en"
feature: true
---

When I started to learn a micro service architecture, I did not understand how to implement it at all.
But I have been studying the micro service architecture over three years, I just started to know how to implement it. It is not perfect yet, but I would like to share my knowledge with you!

## Asyncronous is the key 

Each component such as containers or AWS Lambda should work asynchronously. If each component or parts of your system execute requests synchronously, the system does not work well. 

![async.png](./async.png)


Component A waits the processing of Components B and C. In that case, Component A can not do anything during waiting a response from Component B. You can imagin what will happen if all components wait responses from other components. So, Component A should not wait the response from Component B. 

Of course, asynchronous execution might not fit for your system if the ordering of requests is important. If so, you might need to think other architecture.

If the ordering is not important for your system, you should think asynchronous execution. 
