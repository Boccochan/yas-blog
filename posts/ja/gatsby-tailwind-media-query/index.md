---
title: Gatsby+Tailwindでレスポンシブデザイン
date: "2021-02-07T11:40:32.169Z"
description: Gatsby+tailwind+PostCSSでレスポンシブデザイン(media query)に対応する
featuredImage: ./tailwind.png
lang: "ja"
---

## Gatsby+Tailwindでレスポンシブデザイン

<div class="mt-8 mb-8">

<nav class='blog-nav'> 
  <div class='inner'>
    <p>目次</p>
    <ol class="top-ol">
      <li class="top-li">tailwindを使ってmedia query</li>
      <li class="top-li">tailwindのmedia queryを拡張する</li>
      <li class="top-li">media queryでcssファイルに記述する</li>
      <li class="top-li">Reactでmedia queryを利用する</li>
    </ol>
  </div>
</nav>

</div>

<p class="mb-8">
Gatsbyでmedia queryを実装する方法について調べました。<br/>
セレクタ一つ一つにmedia queryを適用する方法はすぐに分かったのですが、まとめてやる方法がなかなか見つからなかったので記事にします。<br/>
私の環境ではPostCSSを使用していますが、emotionでも似たような感じだと思います。
</p>

## tailwindを使ってmedia query

<p class="mt-8 mb-8">
公式のドキュメントの<strong>Breakpoints</strong>にも載っていますが、一応ここでも紹介します。<br/>

</p>

```tsx:title=index.ts

<h1 className="text-1xl md:text-2xl">
	Hello
</h1>

```

<p class="mt-8 mb-8">
mdやらsmというのを指定すると、画面サイズによって自動で切り替えてくれます。<br/>
ちなみに、mdというのは768px以上という意味です。よって、mdだけ指定してもmd未満のやつには適用されません。<br/>
よって上記の例では、text-1xlというのを指定していますが、これはmd以下のものを想定しています。
</p>

## tailwindのmedia queryを拡張する

<p class="mt-8 mb-8">
もしmedia queryを拡張したい場合は、tailwind.config.jsを編集します。tailwind.config.jsをpackage.jsonと同じディレクトリに作成します。
現時点での私のtailwind.config.jsは以下です。
</p>


```js:title=tailwind.config.js
module.exports = {
  theme: {
    screens: {
      xs: '280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    // PurgeCSS options
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
}


```

<p class="mt-8 mb-8">
screensのところにデフォルトにはない<strong>xs</strong>というBreakpointsが追加されています。
</p>

## media queryでcssファイルに記述する

<p class="mt-8 mb-8">
Breakpointsを使用する方法は便利ですが、まとめてやりたい場合は結構面倒です。<br/>
そんな場合はcssファイルに以下のように記述します。ファイルの置き場所はどこでもよいですが、私はsrc/stylesディレクトリの下に置いてます。
</p>

```css:title=main.css
.menu {
  @apply text-gray-900;
}

@screen md {
  .menu {
    @apply text-red-500;
  }
}
```

## Reactでmedia queryを利用する

<p class="mt-8 mb-8">
あとは、main.cssをReactで読み込み、classNameで<strong>menu</strong>を指定します。
</p>


```tsx:title=index.ts
import React from 'react'
import '@/styles/main.css'

const IndexPage = () => 
	<h1 className='menu'>Hello</h1>

export default IndexPage
```

<p class="mt-8 mb-8">
ちなみに、pathに@エイリアスを指定しているので、上記のコード動かない可能性あります。<br/>
gatsby-plugin-alias-importsを使えば解決できますが、別の記事で紹介したいと思います。
</p>

