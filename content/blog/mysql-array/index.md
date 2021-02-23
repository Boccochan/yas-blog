---
title: How to pass array to INSERT query for MySql
date: "2020-09-09T11:40:32.169Z"
description: The way to pass array by Typescript and MySQL
lang: "en"
---

## Table

The name of table is fruit.

| key   | description |
| ----- | ----------- |
| id    | primary key |
| name  | varchar(32) |
| price | int         |

## What I want to do

I wanted to insert multiple line to the fruit table without loop.

## Source code

```js:title=index.ts
import { createPool, Pool, MysqlError, PoolConnection } from "mysql";

const pool = createPool({
  connectionLimit: 10,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "YOUR-PASSWORD",
  database: "typescript",
});

const insertFruit = (val: any[]): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    pool.query(
      "insert into fruit (name, price) values ?",
      [val],
      (err: MysqlError | null, results: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve("success!");
      }
    );
  });
};

(async () => {
  let val = [] as any[];

  for (let i = 0; i < 100; i++) {
    val.push([Math.random().toString(32).substring(2), i]);
  }

  console.log(val);

  await insertHoge(val);
  pool.end();
})();

```

You need to put array into the array of the insert query.

```js:title=index.ts
val = [
  ["apple", 200],
  ["orange", 120],
  ["banana", 300],
];

pool.query(
  "insert into fruit (name, price) values ?",
  [val],
  (err: MysqlError | null, results: any) => {
    if (err) {
      reject(err);
      return;
    }
    resolve("success!");
  }
);
```
