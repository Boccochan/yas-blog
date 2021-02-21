---
title: Gatsbyで多言語対応を自動化する(i18n)
date: "2021-02-10T11:40:32.169Z"
description: Gatsby＋Typescriptで多言語対応(i18n)
featuredImage: ./world.jpg
---

## Gatsby ＋ Typescript で多言語対応(i18n)

<div class="mt-8 mb-8">
<nav class='blog-nav'> 
  <div class='inner'>
    <p>目次</p>
    <ol class="top-ol">
      <li class="top-li">極力自動化して多言語化するには</li>
      <li class="top-li">必要なパッケージをインストールする</li>
      <li class="top-li">ディレクトリ構成</li>
      <li class="top-li">各言語用のファイルを用意</li>
      <li class="top-li">config.ts の作成</li>
      <li class="top-li">React Context で現在の言語を取得</li>
      <li class="top-li">gatsby-config.js に設定を追加</li>
      <li class="top-li">gatsby-node.js の準備</li>
      <li class="top-li">gatsby-ssr.js の準備</li>
      <li class="top-li">gatsby-browser.js の準備</li>
      <li class="top-li">Seo 対応</li>
      <li class="top-li">Link を i18n へ対応</li>
      <li class="top-li">_redirects の中身を見てみる</li>
      <li class="top-li">i18n を使って文字を表示してみる</li>
      <li class="top-li">動作確認</li>
    </ol>
  </div>
</nav>
</div>

<p class="mb-8">
Gatsbyでi18n対応する方法を紹介します。<br/>
手動で頑張って対応していく方法もありますが、この記事では極力自動化することを念頭に置いております。
urlのパスから、netlify上でredirectをする方法まで紹介します。
</p>

<p class="mb-8">
なお、こちらで紹介しているソースコードはこちらのサイトを参考にしました。<br/>
<a href=https://itnext.io/techniques-approaches-for-multi-language-gatsby-apps-8ba13ff433c5>How to approach multi-language Gatsby apps</a><br/>
一部動作しないところがあったので、修正しています。
</p>

## 極力自動化して多言語化するには

<p class="mt-8 mb-8">
GatsbyはSSGなので、ビルド時にファイルをすべて用意する必要があります。gatsby-plugin-i18nを使うと、各言語用にファイルを用意することになります。
しかしながら、ミスが出る上に、いちいちファイルを用意するのは面倒です。そこで、自動的に言語ごとに各ページをビルドするように、gatsby-node.js/gatsby-ssr.jsを作成します。
netlifyは_redirectsというファイルを元にリダイレクトが定義できます。gatsbyのプラグインで_redirectを生成してくれるものがあるのでそれも導入します。
</p>

## 必要なパッケージをインストールする

<p class="mt-8 mb-8">
まずは必要なパッケージをインストールします。

</p>

```bash
yarn add i18next react-i18next gatsby-plugin-netlify
```

## ディレクトリ構成

<p class="mt-8 mb-8">
私のディレクトリ構造は以下です。お使いの環境に合わせていただいてかまいせん。
</p>

```
-- src/
  -- components/
    -- Link.tsx
    -- Seo.tsx
  -- i18n/
    -- config.ts
    -- PageContext.jsx
    -- locales/
      -- ja.json
      -- en.json
  -- pages/
    -- index.tsx
-- gatsby-config.js
-- gatsby-node.js
-- gatsby-ssr.js
-- package.json
```

## 各言語用のファイルを用意

```json:title=ja.json
{
  "blog": "ブログ"
}
```

```json:title=en.json
{
  "blog": "Blog"
}
```

## config.ts の作成

<p class="mt-8 mb-8">
下記はi18nを初期化するコードです。resourcesのところでファイルを指定しています。<br/>
先程作成した言語ファイルのパスを指定して下さい。
</p>

```ts:title=config.ts
import i18next from "i18next";

i18next.init({
  fallbackLng: "en",
  resources: {
    ja: {
      translations: require("./locales/ja.json"),
    },
    en: {
      translations: require("./locales/en.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ["ja", "en"];

export default i18next;
```

## React Context で現在の言語を取得

<p class="mt-8 mb-8">
Contextによって、現在の言語の設定をどの階層からも取得できるようにします。

</p>

```tsx:title=PageContext.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const PageContext = React.createContext({});

export const usePageContext = () => React.useContext(PageContext);

export const PageContextProvider = ({ value, children }) => {
  const { i18n } = useTranslation();

  if (i18n.language !== value.lang) {
    i18n.changeLanguage(value.lang);
  }

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
```

## gatsby-config.js に設定を追加

<p class="mt-8 mb-8">
gatsby-plugin-netlifyと、言語の設定を追加します。
</p>

```js:title=gatsby-config.js
require('ts-node').register({ files: true })

module.exports = {
  siteMetadata: {
    ...
    supportedLanguages: ['en', 'ja'],
    defaultLanguage: 'en',
  },
  plugins: [
    ...
    `gatsby-plugin-netlify`,
  ],
}

```

## gatsby-node.js の準備

<p class="mt-8 mb-8">
こちらで各言語ごとのファイルを生成するように記述します。
</p>

```js:title=gatsby-node.js
require("ts-node").register({ files: true });

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const config = require("./gatsby-config");
/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect },
}) => {
  const isEnvDevelopment = process.env.NODE_ENV === "development";
  const originalPath = page.path;

  // Delete the original page (since we are gonna create localized versions of it) and add a
  // redirect header
  await deletePage(page);

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async (lang) => {
      const localizedPath = `/${lang}${page.path}`;

      // create a redirect based on the accept-language header
      createRedirect({
        fromPath: originalPath,
        toPath: localizedPath,
        Language: lang,
        isPermanent: false,
        redirectInBrowser: isEnvDevelopment,
        statusCode: 301,
      });

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang,
        },
      });
    })
  );

  // Create a fallback redirect if the language is not supported or the
  // Accept-Language header is missing for some reason
  createRedirect({
    fromPath: originalPath,
    toPath: `/${config.siteMetadata.defaultLanguage}${page.path}`,
    isPermanent: false,
    redirectInBrowser: isEnvDevelopment,
    statusCode: 301,
  });
};
```

## gatsby-ssr.js の準備

<p class="mt-8 mb-8">
各エレメントをContextでWrapします。
</p>

```js:title=gatsby-ssr.js
import React from "react";
import { PageContextProvider } from "./src/i18n/PageContext";
import i18n from "@/i18n/config";
import { I18nextProvider } from "react-i18next";

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
};

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider value={props.pageContext}>
      {element}
    </PageContextProvider>
  );
};
```

## gatsby-browser.js の準備

```js:title=gatsby-browser.js
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export { wrapPageElement, wrapRootElement } from "./gatsby-ssr";
```

## seo 対応

<p class="mt-8 mb-8">
React helmetに以下のように設定します。
</p>

```js:title=Seo.tsx
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { usePageContext } from '../i18n/PageContext'

interface Meta {
  name: string
  content: string
}

interface Props {
  description?: string
  lang?: string
  meta?: Meta[]
  title: string
}

const SEO = ({ description = '', meta = [], title }: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  // Get lang from context!!
  const { lang } = usePageContext()

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO


```

## Link を i18n へ対応

<p class="mt-8 mb-8">
Linkに渡すパスを以下のように設定します。今回はLinkは使いませんが、もし必要なりましたら、下記コードを参考にして下さい。
</p>

```tsx:title=Link.tsx
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { usePageContext } from "../i18n/PageContext";

const Link = ({ to, ...rest }) => {
  const { lang } = usePageContext();

  return <GatsbyLink {...rest} to={`/${lang}${to}`} />;
};

export default Link;
```

## \_redirects の中身を見てみる

<p class="mt-8 mb-8">
ここまで来たら準備OKです。gatsby buildを実行すると、publicディレクトリ(ビルド成果物が出力されるディレクトリ)に_redirectsというファイルができています。
</p>

```title=_redirects

## Created with gatsby-plugin-netlify
/404/  /en/404/  301  Language=en
/404/  /ja/404/  301  Language=ja
/blog/  /en/blog/  301  Language=en
/blog/  /ja/blog/  301  Language=ja
/contact/  /en/contact/  301  Language=en
/contact/  /ja/contact/  301  Language=ja
/  /en/  301  Language=en
/  /ja/  301  Language=ja
/lab/  /en/lab/  301  Language=en
/lab/  /ja/lab/  301  Language=ja
/404/  /en/404/  301
/blog/  /en/blog/  301
/contact/  /en/contact/  301
/  /en/  301
/lab/  /en/lab/  301
```

## i18n を使って文字を表示してみる

```tsx:title=index.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const [t] = useTranslation();
  return <h1>{t("blog")}</h1>;
};

export default IndexPage;
```

<p class="mt-8 mb-8">
gatsby developで起動し、ブラウザのurlへlocalhost:8000/ja/と入力すると日本語に切り替わります。<br/>
ポート番号はお使いの環境に合わせて下さい。
</p>

![blog-ja-image](./blog-ja.png)

## 動作確認

<p class="mt-8 mb-8">
netlifyへデプロイすれば、自動でブラウザの言語を理解してリダイレクトしてくれます。<br/>
なお、netlifyのバグっぽいのですが、ブラウザの言語に複数設定している場合redirectが正しく動作しないようです。<br/>
ローカルでは自動判定はしないようです。デバッグする場合は、ブラウザのURLに直接入力する必要があります。
</p>
