---
title: 【初心者向け】プログラミングに英語は必要です。
date: "2021-02-20T13:40:37+09:00"
description: ソフトウェアは海の向こうからやってくる
featuredImage: ./image-top.jpg
---


「プログラミングは始めてみたけど、英語って必要なんですか？英語苦手なんですけど大丈夫ですか？」と
不安に思っている方々もいると思います。そんな方々の疑問にお答えします。


<nav class="blog-nav">
<div class="inner">
<p>目次</p>
<ol class='top-ol-1'>
<li class='top-li-1'>
<a href='#h-0'>プログラミングに英語は必須です</a>
</li>
<li class='top-li-1'>
<a href='#h-1'>必要な英語のスキルとは</a>
</li>
<li class='top-li-1'>
<a href='#h-2'>どの程度できればよいのか</a>
</li>
<li class='top-li-1'>
<a href='#h-3'>どう学習すればよいのか</a>
</li>
</ol>
</div>
</nav>

<h2>著者紹介</h2>

プログラミング歴15年の現役エンジニアです。現在は都内のIT企業でソフトウェアエンジニアとして勤務しています。

<h2 id="h-0">プログラミングに英語は必須です</h2>


結論を先に言ってしまいますが、英語は必須です。

なぜならば、**ほとんどソフトウェアはアメリカ発であり、情報の大半は英語だから**です。

実際、私が分からないことに出くわした場合、英語で検索することもよくあります。日本語で情報が見つからないことも良くあります。

確かに、日本語での情報もたくさんあります。もちろん、レガシーな枯れた技術だけやるのであれば、それもありだと思います。

しかし、今後も旬な技術者であり続けるのであれば、英語で情報収集する力をつけるべきです。

<h2 id="h-1">必要な英語のスキルとは</h2>


一番必要な英語のスキルは間違いなく**リーディング**でしょう。

とあるサードパーティ製のソフトウェアを使う場合、日本語のサイトが用意されていない場合もあります。そんな時は、英語の文章を読み解き、プログラムに落としていく必要があります。

例えば、このブログサイトはGatsbyを使って作られていますが、Gatsbyの公式サイトに日本語はありません。ある程度自分で英語を読み解く必要もあります。

では、日本語の説明のあるものを使えばよいじゃないか、と考える方もいるかもしれません。しかし、先ほども申し上げた通り、ソフトウェアの大半は海の向こうからやってきます。日本製のものの方が珍しいのです。

諦めてリーディング能力を向上させましょう。そっちの方が最終的には幸せになります。

<h2 id="h-2">どの程度できればよいのか</h2>


ドキュメントを読んでプログラムが組めるくらいに読めればよいです。もう少し詳しく言うと、New York Timesをスラスラ読める必要は全くありません。もっと言うと、技術系の文章以外は読めなくても問題ないです。

これはどういう意味かというと、記事の内容によって、使う英単語が異なります。技術系でよく使われる表現や単語を抑えさえすれば、なんとなく内容が把握できるようになります。

例えば、以下の文章を見てみましょう


Part of what makes Gatsby sites so fast is that a lot of the work is done at build time. During that process, Gatsby creates paths to access content, handling routing for you. Navigating in a Gatsby app requires an understanding of what those paths are and how they’re generated.

This section of guides show you the different ways to create pages in Gatsby, how to handle navigation between and within pages, how to create a shared layout, and how to compose content:


技術系の文章によく出てくる単語は、fast, make, build, process, path, access, handle, route, how to ～, requireなどです。もっと他に沢山ありますが、記事を沢山読んでいくと似たような単語が使われていることに気づくと思います。

そんなの全部覚えられない、という声も聞こえそうです。ただ、先ほど例として挙げた単語のほとんどを中学校で見たことがあるはずです。ちなみに私は高校時代、全国模試で**英語の偏差値15**という不名誉な快挙を成し遂げたことがあります。

こんな私でも上記の文章をスラスラ読めるようになりました。いやー、頑張りました。

重要なことは英語をネイティブのように扱うことでありません。必要な情報を取得できばそれでよいので、技術系の文章が読めるように、技術系の表現になれましょう。

<h2 id="h-3">どう学習すればよいのか</h2>


とにかく、文章全体を可能な限り目を通す、そしてプログラムを書く、そして毎日続ける、です。もし、それでも不明な場合は誰かに質問するのもありです。というのも、一部だけ読んでいると分からない場合もありますし、読んでいるだけだと単語が意味していることが何なのか分からない場合もあります。

以下はStripeという会社が提供しているWeb APIの一文です。


void: This invoice was a mistake, and should be canceled.


これだけだと、voidが何なのかが分かりません。そこで、void状態を知るために別の文章を読んでみます。

Voiding invoices 

To cancel, delete, or reverse an invoice that’s already been finalized, you can void it. Voiding an invoice is similar to deleting it, but maintains a record of when it was created, finalized, and voided. Invoices with a void status aren’t payable. Voiding an invoice effectively zeroes out its amounts in any reports, ensuring an accounting papertrail.

これだけだと、まだ混乱します。voidというのは何やら動詞っぽく使われています。voidという操作は注文をキャンセルできるっぽいですね。しかし、その一方でvoidというステートもあるようです。こちらは動詞ではなく、名詞として使われています。voidという操作をした結果、voidというステートになるのかな？と感じるのですが、それだと'should be chancled'の文脈がよくわかりません(いろんな意味に捉えることができる)。よくわからんので、もう少し他の文章を読んでみると、以下の機能を見つけました。

Void an invoice

Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to deletion, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.

Void an invoiceという機能があることから、おそらくvoidというアクションを実行すると、注文がvoidというステートになり、そのうちその注文がキャンセルとして処理されるのかな、と予測できます。

もちろん確証はないので、実際にやってみるとハッキリするでしょう。さらにStripeの人たちに質問をぶつけるのもありですね。deleteと似ている、といっているので、deleteの説明を読んでみるのもありでしょう。

今の流れを難しいと感じた方、確かに最初は難しいと思います。一朝一夕でできるようになるものではありません。よって、**コツコツやるしかない**のです。

とにかく時間がかかるので、毎日英語のドキュメントを読む癖をつけてください。そして、技術系に分野絞ってもかまいません。むしろ絞りましょう。そして、自分の手で実際に何か作ってみることをお勧めします。





