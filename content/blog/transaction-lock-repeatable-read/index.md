---
title: Thinking transaction isolation level and lock
date: "2020-09-06T21:40:32.169Z"
description: How to run transaction and protect record
---

I did not understand DB transction. I thouhgt that DB transaction locks and protects query.

# What I did

I wrote some query by typescript like below. The query reads records if there is one record which has the same val on the table. Then, the next query insert the same value to the record. I run the index.ts on two terminals at the same time.

```js:title=index.ts
import { createPool, Pool, MysqlError, PoolConnection } from "mysql";

const pool = createPool({
  connectionLimit: 10,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "typescript",
});

const getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
};

const begin = (connection: PoolConnection) => {
  return new Promise((resolve, reject) => {
    connection.beginTransaction((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const query = (
  connection: PoolConnection,
  statement: string,
  params: any | undefined = undefined
) => {
  return new Promise((resolve, reject) => {
    connection.query(statement, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const commit = (connection: PoolConnection) => {
  return new Promise((resolve, reject) => {
    connection.commit((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const rollback = (connection: PoolConnection, err: any) => {
  return new Promise((resolve, reject) => {
    connection.rollback(() => {
      reject();
    });
  });
};

(async () => {
  console.log("start == ");
  const con = (await getConnection()) as PoolConnection;

  try {
    await begin(con);
    const result = (await query(
      con,
      "SELECT val, COUNT(*) as num FROM hoge GROUP BY val HAVING num<2 "
    )) as any;

    console.log(result);

    for (let res of result) {
      await query(con, "INSERT INTO hoge SET ?", { val: res.val });
    }
  } catch (err) {
    await rollback(con, err);
  } finally {
    await commit(con);
    con.release();
  }

  pool.end();

  console.log("end == ");
})();

```

# Expectation

I thought that there are two records which have the same val column on the table. But the result was that there are three records which have the same val column.

# What was happened?

The transaction isolation level was repeatable-read. MySQL does not block the first select query with the isolation level. So, if we want to block the select, we need to lock or change the isolation level. In this case, select for udpate is better choice because we just need to change the query a little bit.

# Select for update.

We just need to put FOR UPDATE in the end of the first query like below.

```js:title=index.ts
    const result = (await query(
      con,
      "SELECT val, COUNT(*) as num FROM hoge GROUP BY val HAVING num<2 FOR UPDATE"
    )) as any;
```

We can see that there are just two records which have the same val on the table even if we run the index.ts on two terminals at the same.
