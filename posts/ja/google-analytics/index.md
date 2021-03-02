---
title: 【最新】Gatsby+NetlifyでGoogle Analyticsを設定する
date: "2021-02-04T11:40:32.169Z"
description: すでにアカウントを持っている場合について説明
featuredImage: ./logo.png
lang: "ja"
---

## 【最新】GatsbyでGoogle Analyticsを設定する

<div class="mt-8 mb-8">

<nav class='blog-nav'> 
  <div class='inner'>
    <p>目次</p>
    <ol class="top-ol">
      <li class="top-li">Google Analyticsの設定</li>
      <li class="top-li">gatsby-plugin-google-gtagの設定</li>
      <li class="top-li">Netlifyの設定</li>
      <li class="top-li">動作確認</li>
    </ol>
  </div>
</nav>
</div>

ネットで調査した方法だとなかなか上手く行かなかったので、Gatsby + Netlifyの組み合わせでのGoogle Analyticsの設定方法を紹介します。
この記事は、すでにアカウントがある方を想定しています。


## Google Analyticsの設定

<p class="mt-8 mb-8">
ログイン後、画面左下の<strong>管理</strong>をクリックします。
</p>

![google-analytics](./google-analytics.png)

<p class="mt-8 mb-8">
以下の画面が表示されたら、<strong>プロパティの作成</strong>をクリックして下さい。
</p>

![register](./register.png)

<p class="mt-8 mb-8">
プロパティ、タイムゾーン、通過はお好みで設定して下さい。<br/>
すべて入力したら<strong>次へ</strong>をクリックします。
</p>

![property-setting](./property-setting.png)

<p class="mt-8 mb-8">
規模、目的はお好みで設定して下さい。<br/>
すべて入力したら<strong>作成</strong>をクリックします。
</p>


![about-buisiness.png](./about-buisiness.png)

<p class="mt-8 mb-8">
データストリームは<strong>ウェブ</strong>をクリックします。<br/>
</p>

![data-stream](./data-stream.png)

<p class="mt-8 mb-8">
URL、名前を入力して、<strong>ストリームを作成</strong>をクリックします。
</p>

![web-site](./web-site.png)

<p class="mt-8 mb-8">
以下の表示に切り替わるので、クリックして下さい。
</p>


![stream](./stream.png)

<p class="mt-8 mb-8">
下記のGから始まる<strong>測定ID</strong>を後ほど使用します。
</p>

![gtag](./gtag.png)

## gatsby-plugin-google-gtagの設定


<p class="mt-8 mb-8">
gatsby-plugin-google-gtagのインストール
</p>

```bash
yarn add -D gatsby-plugin-google-gtag
```

<p class="mt-8 mb-8">
もしくは
</p>


```bash
npm install --save-dev gatsby-plugin-google-gtag
```

<p class="mt-8 mb-8">
gatsby-config.jsonの設定をします。GOOGLE_ANALYTICS_IDは環境変数です。<br/>
Netlifyで設定することが可能です。
</p>


```json:gatsby-config.json
{
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID,
        ],
      },
    },
  ]
}
```

## Netlifyの設定

<p class="mt-8 mb-8">
<strong>Site settings</strong>より、Build & deployを選択します。
</p>

![site-settings](./site-settings.png)


<p class="mt-8 mb-8">
<strong>Site settings</strong>より、Build & deployを選択します。<br/>
あとは、environmentよりGOOGLE_ANALYTICS_IDを設定します。値にいれるのは、先程Google Analyticsで作成した<strong>測定ID</strong>です。<br/>
設定が完了したらsaveをクリックします。
</p>

![env](./env.png)

## 動作確認

<p class="mt-8 mb-8">
まずは、自分のGatsbyをNetlifyへデプロイして下さい。
ただしく設定されていれば1日も経てばGoogle Analyticsに何やら表示されます。
</p>

