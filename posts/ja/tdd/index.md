---
title: ソフトウェアの品質を保ちつつテスト工程を減らすには？
date: "2021-02-14T12:40:32.169Z"
description: いろいろなテスト手法が提案されていますが、どういったものが効率がよいのか考察します。
featuredImage: ./top.jpg
lang: "ja"
feature: true
---

<p class="mt-8 mb-8">
ソフトウェアの品質を高めたい、でもテスト工程を減らしたい、でもどうしたらよいの？と思っている方々もいると思います。
</p>

<p class="mt-8 mb-8">
今回はエンジニア目線から見たテストについて語りたいと思います。
</p>

<nav class='blog-nav'> 
  <div class='inner'>
    <p>目次</p>
    <ol class="top-ol">
      <li class="top-li"><a href="#test-is-important">テストチームって必要なの？</a></li>
      <li class="top-li"><a href="#can-not-release">テスト真面目にやると一生リリースできない</a></li>
      <li class="top-li"><a href="#test-automated">テストの自動化</a></li>
      <li class="top-li"><a href="#test-engineer">ソフトウェアテストエンジニアに会ったことがない</a></li>
      <li class="top-li"><a href="#devops">DevOpsはどうなのよ</a></li>
      <li class="top-li"><a href="#how-is-tdd">TDDは実際どうなのよ</a></li>
      <li class="top-li"><a href="#still-exist-bug">でも、やっぱりバグ出るよね</a></li>
    </ol>
  </div>
</nav>

## 自己紹介

<p class="mt-8 mb-8">
プログラミング歴15年の現役プログラマー。現在は都内のIT企業でソフトウェアの開発を行っております。
DevOpsを実践しながら、毎日戦っています。
</p>

<h2 id="test-is-important">テストチームって必要なの？</h2>

<p class="mt-8 mb-8">
チームとして存在する必要があるかどうかで言えば、なんとも言えません。ただ、テストの仕組みを作る人や計画を練る人、テストを実施する人は必要です。
</p>

<p class="mt-8 mb-8">
テストしなければバグが見つかりません。エンジニアも神ではないので、当然、実装漏れや勘違い、設計が違ったなんてこともあります。
</p>

<p class="mt-8 mb-8">
しかしながら、四度の転職をして、<strong>四度目の転職で、ようやく真面目にテストチームがテストしている会社に転職しました</strong>。
</p>

<p class="mt-8 mb-8">
本当か？と思う方もいるでしょう。もしかしたら、私の経験が世間とズレている可能性は大いにあります。しかし、少なくとも私が知る限りQAチームがあるにもかかわらず、まったくテストしない会社というのが現実に存在します。そのような会社のQAは判子を押すのが仕事だと思っているようで、実質何もしていない人たちでした。
</p>

<p class="mt-8 mb-8">
それらの会社はエンジニアが頑張って品質を担保していました。結果としてエンジニアの負荷が増大し、QAが会社のコストセンターになっていました。
</p>

<p class="mt-8 mb-8">
このような経験から、テストチームやQAチームの存在価値を問われると、私は答えに窮します。ただ、自信を持って言えるのは、テストを誰かがやらなければいけない、ということです。
ですので、この記事では、<strong>誰が</strong>、ではなく、<strong>何を</strong>に焦点を当てていきたいと思います。
</p>

<h2 id="can-not-release">テスト真面目にやると一生リリースできない</h2>

<p class="mt-8 mb-8">
思いつくテストをすべてやると、一生かけてもリリースするのが不可能になります。よって、境界値テストなど、テスト数を減らす手法が数多く編み出されました。
</p>

<p class="mt-8 mb-8">
それらの手法を知ることは大切です。特にブラックボックステストをするときは、ある程度根拠をもってテスト工程を減らす必要があるでしょう。
</p>


<p class="mt-8 mb-8">
例えば、ユーザー情報を入力する画面があったとして、すべての文字列の組み合わせをテストしていたら、計算するのも面倒なくらいに時間がかかるでしょう。
</p>

<p class="mt-8 mb-8">
もし、テスト経験が浅い人であれば、テスト工程を減らすことに抵抗を感じるかもしれません。しかし、現実的に考えると、テスト工程を間引くというのはテストを実施するのと同じくらい大切です。
</p>

<p class="mt-8 mb-8">
こちらの本では、基本的なテストの考え方が説明されているので、ぜひ一読することをお勧めします。
</p>

<div class="amazon">
  <div>
    <div class="left">
      <a target="_blank"  href="https://www.amazon.co.jp/gp/product/4822282511/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4822282511&linkCode=as2&tag=boccochan-22&linkId=0f64562e26aeea22e823ef80e66dcb6e"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4822282511&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=boccochan-22" ></a>
    </div>
    <div class="left summary">
      <h5>
        著: コープランド,リー
      </h5>
      <p>
        平易で実践的な例題を使い、手順を1つ1つ追って説明しているので、新人プログラマや初級のテスト担当者のレベルアップに最適
      </p>
    </div>
  </div>

  <div class="af-list">
    <div class="left hardcover btn">
      <a target="_blank" href="https://www.amazon.co.jp/gp/product/4822282511/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4822282511&linkCode=as2&tag=boccochan-22&linkId=29865a93840df404e5a3de9320cafff4">
        Amazon
      </a>
    </div>
    <div class="left kindle btn">
      <a target="_blank" href="https://www.amazon.co.jp/gp/product/B00HE8082Q/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00HE8082Q&linkCode=as2&tag=boccochan-22&linkId=0884eac331850a032b2b529a061d9354">Kindle</a>
    </div>
  </div>
</div>

<p class="mt-8 mb-8">
一生リリースできないソフトウェアにはなんの価値もありません。リリースできない完璧なソフトウェアよりも、リリースできる細かいバグがあるソフトウェアの方が価値は高いといえます。よっていかに効率よくテストするかが重要でしょう。
</p>

<h2 id="test-automated">テストの自動化</h2>

<p class="mt-8 mb-8">
テストを少しでも効率化するには、テストの自動化は避けられないでしょう。<br/>
私の前半のキャリアのうち半分はテスト自動化のソフトウェアの開発をしていました。
</p>

<p class="mt-8 mb-8">
私が開発していたテストツールと同じような商用ツールはすでに販売されていたのですが、Windows上で動く上に、2ライセンスで数十万円する代物でした。よって、これをLinuxで作り、機能的にはまったく同じかそれ以上のものを作りました。
</p>

<p class="mt-8 mb-8">
Linuxだったので、無限にインストールしても無料、稟議もいらない、しかも品質も担保できる、という仕組みを作り上げました。貢献したことは以下です。
</p>

<p><strong>貢献したこと</strong></p>
<ul class='cp_list'>
  <li>テストの費用を億単位で削減。</li>
  <li>製品の品質向上による社会的信用の向上</li>
  <li>営業のセールストークとして使用</li>
  <li>海外の協力会社へテストツールを提供し、技術的連携の強化</li>
  <li>QAが機能していなくても品質向上</li>
</ul>

<p class="mt-8 mb-8">
<strong>社会的信用の向上</strong>はかなり重要で、以前、私が勤めていた会社の製品が市場で不具合を爆発させたことがあり、信用を失っていました。それを回復するというのは大きな使命であったと思います。
</p>

<p class="mt-8 mb-8">
私の給料なんて、これらの利益に比べたら軽いものではないでしょうか。企業からしたら、安くてリターンのよい投資だったと思います。
</p>

<p class="mt-8 mb-8">
実際はそこまでテストにお金かけられない、と考えている人たちもいるでしょうし、システムによっては確かにテスト自動化するのが難しいものもあると思います。
</p>

<p class="mt-8 mb-8">
しかし、部分的でもよいのでテストを自動化できるところがないか、そして、それを考える人を専属で一人割り当てても、お釣りがくるかもしれませんよ！
</p>


<h2 id="test-engineer">ソフトウェアテストエンジニアに会ったことがない</h2>

<p class="mt-8 mb-8">
これはもしかしたら日本企業の特徴かもしれませんが、私はソフトウェアテストエンジニアと呼べる人にまだ会ったことがないです。おそらく、一番それに近いことをしたことがあるのは私かもしれません。
</p>

<p class="mt-8 mb-8">
以下はIndeedで"Software Test Engineer"で場所をカリフォルニアで検索した際の募集要項にあったものを一部掲載します。ちなみに、<strong>要求が軽いやつ</strong>を選びました。
</p>

<p><strong>Role & Responsibilities</strong></p>
<ul class='cp_list'>
  <li>Review Customer Solution Requirement Docs (SRDs)</li>
  <li>Design and Validate Customer use cases</li>
  <li>Automate use cases using Pythons</li>
  <li>Participate in innovative Software test initiatives</li>
  <li>Work closely with the field to successfully enable the Solutions</li>
</ul>

<p class="mt-8 mb-8">
Automate use cases using Pythonsという所ですが、Pythonでテストケース自動化してね。という意味です。要するに、テストケース考えるのは当たり前で、テストケースを自動化するところまでがあなたの仕事ですよ、という意味です。
</p>

<p class="mt-8 mb-8">
面白いのでもう一つ例をあげましょう。こちらは少々重いヤツです。
</p>

<p><strong>Role & Responsibilities</strong></p>
<ul class='cp_list'>
  <li>Implement software and systems from requirements to production and commercial deployment</li>
  <li>Develop,code, test and debug system software</li>
  <li>Developand manage schedules</li>
  <li>Performand document comprehensive system and unit level testing</li>
  <li>Interfacewith firmware and hardware teams</li>
  <li>Assessthird party and open source software</li>
</ul>

<p class="mt-8 mb-8">
いや、これ普通にソフトウェアエンジニアじゃね？って私が思うのは、私が日本人だからでしょうか。
</p>

<p class="mt-8 mb-8">
以前、オーストラリアの上司とテスターを雇うかどうかの話になったときに、日本人のテスターはスクリプト書けない人多いと思う、と言ったところ、上司は、え、マジで？？という感じで絶句していました。
</p>

<p class="mt-8 mb-8">
ただし、日本だとそもそもお客様神様の文化なので、お客様の使用を細かく実装しようとしすぎて、いちいちテストなんて書いてられない、という反論も聞いたことがあります。確かにそれも一理あります。それが正しいとするならば、ソフトウェアの品質をあげつつテストのコストを下げるには、まず<strong>文化を変える必要がある</strong>ということになりそうです。
</p>

<p class="mt-8 mb-8">
まぁ、それが原因かどうか分かりませんが、今だにソフトウェアテストエンジニアに会ったことがないのです。そして、テストの自動化が難しい原因がおそらくそこにあるのではないかと思います。
</p>


<h2 id="devops">DevOpsはどうなのよ</h2>

<p class="mt-8 mb-8">
DevOpsを聞いたことない人のためにざっくり説明すると、小さいチームを作って、組織の縦割りの壁をなくして、みんな一緒に協力して成果をあげよう、という思想であり方法です。
</p>

<p class="mt-8 mb-8">
私はこの考え方は賛成です。
</p>

<p class="mt-8 mb-8">
基本的に大きい企業よりもベンチャー企業の方が動きは速いです。DevOpsは小さいベンチャーを社内につくる行為とも解釈できます。テストとなんの関係があるの、というと大いにあります。ほとんどの会社において、テストチームを別チームとして扱っています。しかし、同じチームにテスターを入れてしまうわけです。
</p>


<p class="mt-8 mb-8">
私の今のチームでもDevOpsを実践しています。テストする人と嫌でも直接コミュニケーションとるので、無駄なテストというのは今のところ発生していません。
</p>

<p class="mt-8 mb-8">
DevOps界隈では結構有名な本(だと思う)ですが、こちらは大きい組織がいかにしてDevOps体制に行くまでかが記されています。テストとは直接関係ないですが、小説みたいな感じで書いてあるので読みやすいです。ちょっと半沢直樹入ってるかも？
</p>


<div class="amazon">
  <div>
    <div class="left">
      <a target="_blank"  href="https://www.amazon.co.jp/gp/product/B00MGGW9MI/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00MGGW9MI&linkCode=as2&tag=boccochan-22&linkId=0cdc18c05dc8a4e625ca876811329be0"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B00MGGW9MI&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=boccochan-22" ></a>
    </div>
    <div class="left summary">
      <h5>
        著: キム,ジーン / ベア,ケビン
      </h5>
      <p>
        数々の危機を乗り越え、開発と運用が一体となったチーム体制「DevOps」が生まれていく痛快IT物語。
      </p>
    </div>
  </div>

  <div class="af-list">
    <div class="left hardcover btn">
      <a target="_blank" href="https://www.amazon.co.jp/gp/product/4822285359/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4822285359&linkCode=as2&tag=boccochan-22&linkId=aee966be014e7041fa0fae0c7fc63065">Amazon</a>
    </div>
    <div class="left kindle btn">
      <a target="_blank" href="https://www.amazon.co.jp/gp/product/B00MGGW9MI/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00MGGW9MI&linkCode=as2&tag=boccochan-22&linkId=50b4315fe1fe7e46cd98074ebc717a74">Kindle</a>
    </div>
  </div>
</div>


<p class="mt-8 mb-8">
同じチームにテスターがいると、客観性の欠いたテストになりそうです。確かにその傾向がありますので、今度はエンジニアとテスターがどういう距離感で仕事をするのかが現状の課題といったところです。
</p>

<p class="mt-8 mb-8">
それでもやはり、効率面を考えるとDevOps体制は試す価値があります。
</p>


<h2 id="how-is-tdd">TDDは実際どうなのよ</h2>

<p class="mt-8 mb-8">
Test Driven Developmentの略です。テスト駆動開発のことであり、最近注目されている開発手法です。
</p>

<p><strong>フロー</strong></p>
<ol class="cap_list">
  <li>テストを書く</li>
  <li>テストFailするのを確認</li>
  <li>テストがパスするコードを汚く実装する</li>
  <li>テストPassするのを確認</li>
  <li>リファクタリングする</li>
  <li>テストPassするのを確認</li>
  <li>1に戻る</li>
</ol>

<p class="mt-8 mb-8">
この手法のよいところは、テストコードが仕様書である、という点です。実際1年以上TDDを実施して、私が感じた長所短所をあげたいと思います。
</p>


<p><strong>長所</strong></p>
<ul class='cp_list'>
  <li>テストコードを見れば仕様が分かる</li>
  <li>リファクタリングしやすい</li>
  <li>アルゴリズム系のコード実装には最適</li>
  <li>無駄なテストが入りにくい</li>
</ul>

<p><strong>短所</strong></p>
<ul class='cp_list'>
  <li>どこまでTDDを適用すればよいか不明</li>
  <li>仕様変更になったときに辛いことになる</li>
  <li>無理やりやろうとすると、どうテストを実装するかで悩むことが多い</li>
</ul>

<p class="mt-8 mb-8">
アルゴリズムやロジックの実装にはTDDは非常に有用であり、ぜひ導入すべきだと思います。こちらの本が分かりやすいです。
</p>


<div class="amazon">
  <div>
    <div class="left">
      <a target="_blank"  href="https://www.amazon.co.jp/gp/product/B077D2L69C/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B077D2L69C&linkCode=as2&tag=boccochan-22&linkId=962e71fcd223f4693bd450e6ef0e5a83"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B077D2L69C&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=boccochan-22" ></a>
    </div>
    <div class="left summary">
      <h5>
        著: ベック,ケント
      </h5>
      <p>
        TDDは分析技法であり、設計技法であり、実際には開発のすべてのアクティビティを構造化する技法なのだ。
      </p>
    </div>
  </div>

  <div class="af-list">
    <div class="left hardcover btn">
    <a target="_blank" href="https://www.amazon.co.jp/gp/product/4274217884/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4274217884&linkCode=as2&tag=boccochan-22&linkId=32ded40e15603e53e38723423b034e9f">Amazon</a>
    </div>
    <div class="left kindle btn">
      <a target="_blank" href="https://www.amazon.co.jp/gp/product/B077D2L69C/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B077D2L69C&linkCode=as2&tag=boccochan-22&linkId=558730bcc144089e60ae9b2dd5ee1f34">Kindle</a>
    </div>
  </div>
</div>

<p class="mt-8 mb-8">
しかし、結合を伴うようなモノの場合、無理してTDDすると仕様変更が起きた場合にかなり辛いことになります。TDDの適用範囲を間違えると内部設計を縛ってしまうことになるので、かなり変更に弱いソフトウェアになってしまいます。
</p>

<p class="mt-8 mb-8">
よって、私はフレームと部品とを分けて設計するように心がけています。TDDを適用するのは部品のみに絞り、フレームは手動でテストしてあとは結合テストで結合が上手くいっているかを見るようにしています。その話はテストの間引きにも関係していますが、どちらかというと設計寄りの話なので、別の機会に取り上げたいと思います。
</p>

<p class="mt-8 mb-8">
TDDさえやれば完璧かのうような論調で話す人をたまに見かけますが、そんなことはありません。むしろ、他の手法と組み合わせて使うべきです。
</p>

<p class="mt-8 mb-8">
長所もあるので、ぜひ導入を検討しましょう。
</p>

<h2 id="still-exist-bug">でも、やっぱりバグ出るよね</h2>

<p class="mt-8 mb-8">
それでもバグはでます。やはりでます。ですので、バグが出たら、どうすればこのバグは出なかったのかをその都度考えて、可能な範囲で改善していくしかないと私は思います。
</p>

<p class="mt-8 mb-8">
結局、仕様をそもそも勘違いしていたり、単純に想定していなかったりと、いかにも人間臭い理由で問題が起きます。想定していないものや、勘違いがまったく起きないのであれば、交通事故はゼロになるでしょう。
</p>

<p class="mt-8 mb-8">
こういうやり方をやれば、理論的には問題がなくなる、というのは非現実的な考え方だと私は思います。例えばTDDを適用しても、そもそも想定しているケースが抜けていたら、不完全なコードができあがります。他にも、開発している最中に仕様が変わっていき、もともとバグじゃなかったものがバグ扱いされる、というケースもあります。
</p>

<p class="mt-8 mb-8">
どうやってそれらを防ぐのでしょうか？私は答えが見つかりません。
</p>

<p class="mt-8 mb-8">
だからこそ、なぜその問題が起きたのかを分析するかが重要になるのです。ケースバイケースで対応、改善するしかないでしょう。
</p>