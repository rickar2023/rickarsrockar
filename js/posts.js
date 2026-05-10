/* ============================================================
   RickarsRockar — posts.js
   ★ 新しい投稿を追加するときはこのファイルだけ編集します ★
   ============================================================

   【追加手順】
   1. images/works/ に画像ファイルを入れる（例: my-work.jpg）
   2. 下の POSTS 配列の先頭（↓ここから追加↓ の直後）に
      以下のブロックをコピーして貼り付け、内容を書き換える

   【フィールド説明】
   id      : URLに使われる固有ID（英数字・ハイフンのみ）
   title   : 作品タイトル（大文字英語推奨）
   date    : 投稿日 "YYYY.MM.DD" 形式
   tag     : タグ（1つ）。自由に追加できます
   hero    : true → TOPの看板イラストになる / false → ならない
             ※ true は必ず1つだけにしてください
   image   : 画像パス（例: "images/works/ファイル名.jpg"）
   excerpt : 一覧ページに表示される紹介文（100文字以内推奨）
   body    : 詳細ページの本文。HTMLで記述します
             使えるタグ: <p> <h3> <h4> <ul><li> <img> <blockquote> <a>
   ============================================================ */

const POSTS = [

  /* ↓ ここから追加（最新投稿が一番上） ↓ */
{
  id:      "kurakura03",
  title:   "KURAKURA-T A N K",
  date:    "2026.04.11",          // 日付を最新に設定しました
  tag:     "キャラクター",
  hero:    true,                   // ★これを看板イラスト（TOPヒーロー）に設定★
  image:   "images/works/kurakura03.jpg",
  excerpt: "音声記録資料04-30　2350　本部庁舎前入口",
  body: `
    <p>柊さん　　付き合ってもらえますか</p>
    <p>タワーディフェンス　好きじゃねーんだけどなぁ…</p>
  `,
},
  
{
  id:      "kurakura02",
  title:   "KURAKURA - CITY NIGHT",
  date:    "2026.04.11",          // 日付を最新に設定しました
  tag:     "キャラクター",
  hero:    false,                   // ★これを看板イラスト（TOPヒーロー）に設定★
  image:   "images/works/kurakura02.jpg",
  excerpt: "夜の街を背景にしたキャラクターのイラスト。",
  body: `
    <p>サイバーパンクな雰囲気漂う夜の都市とキャラクターを描きました。</p>
    <p>光の表現にこだわった作品です。</p>
  `,
},
/* ↑ ここまで追加 */

{
  id:      "Vanilla",
  title:   "VANILLA",
  date:    "2026.04.16",
  tag:     "ファンアート",
  hero:    false,          
  image:   "images/works/FAbanira.jpg",
  excerpt: "イチ推しのCRバニラ。",
  body: `
    <p>声がいい、穏やかで、ゲームがうまい…perfect…</p>
    <h3>制作メモ</h3>
    <p>CLIP STUDIO PAINT / Photoshop</p>
  `,
},


{
  id:      "toran01",
  title:   "TORAN - STRATEGY",
  date:    "2026.04.10",
  tag:     "キャラクター",
  hero:    false,          
  image:   "images/works/toran01.jpg",
  excerpt: "緻密な戦略と青い炎を纏うキャラクターのイラスト。",
  body: `
    <p>青いエフェクトと背景の幾何学的な構成にこだわった作品です。</p>
    <h3>制作メモ</h3>
    <p>CLIP STUDIO PAINT / Photoshop</p>
  `,
},
{
  id:      "pfsoz02",
  title:   "PFSOZ - EXPLOSION",
  date:    "2026.04.09",
  tag:     "キャラクター",
  hero:    false,
  image:   "images/works/pfsoz02.jpg",
  excerpt: "炎と光のコントラストを強調した迫力あるシーン。",
  body: `
    <p>キャラクターの感情と周囲の爆発のエネルギーを同期させるイメージで描きました。</p>
  `,
},
{
  id:      "pfsoz01",
  title:   "PFSOZ - ASSASSIN",
  date:    "2026.04.08",
  tag:     "キャラクター",
  hero:    false,
  image:   "images/works/pfsoz01.jpg",
  excerpt: "赤を基調としたダークな世界観のキャラクターイラスト。",
  body: `
    <p>シルエットの格好良さと、質感表現に注力しました。</p>
  `,
},
{
  id:      "monster01",
  title:   "MONSTER - ENCOUNTER",
  date:    "2026.04.07",
  tag:     "モンスター",
  hero:    false,
  image:   "images/works/monster01.jpg",
  excerpt: "巨大なモンスターとの対峙を描いたコンセプトアート。",
  body: `
    <p>スケール感と岩の質感を重視して制作しました。</p>
  `,
},
{
  id:      "kurakura01",
  title:   "KURAKURA - TANK",
  date:    "2026.04.06",
  tag:     "キャラクター",
  hero:    false,
  image:   "images/works/kurakura01.jpg",
  excerpt: "力強い立ち姿と背景のデザインが特徴的な作品。",
  body: `
    <p>キャラクター「タンク」の力強さを表現しました。</p>
  `,
},
{
  id:      "akpl03",
  title:   "AKPL - SUMMER",
  date:    "2026.04.05",
  tag:     "キャラクター",
  hero:    false,
  image:   "images/works/akpl03.jpg",
  excerpt: "夏を感じさせる明るい配色のイラスト。",
  body: `
    <p>季節感を大事にしたライティングを試みました。</p>
  `,
},
{
  id:      "akpl02",
  title:   "AKPL - SNOWCAMP",
  date:    "2026.04.04",
  tag:     "キャラクター",
  hero:    false,
  image:   "images/works/akpl02.jpg",
  excerpt: "雪山でのキャンプシーンを描いた情緒的なイラスト。",
  body: `
    <p>冷たい空気感と焚き火の暖かさの対比をテーマにしています。</p>
  `,
},
{
  id:      "haroulinssr",
  title:   "HAROULIN - MOON",
  date:    "2026.04.02",
  tag:     "キャラクター",
  hero:    false,
  image:   "images/works/haroulinssr.jpg",
  excerpt: "月夜をバックにした幻想的な一枚。",
  body: `
    <p>月光の当たり方と影の境界線を意識して描いています。</p>
  `,
  },
{
  id:      "PFNW05",           // URLになる一意のID（英数字・ハイフンのみ）
  title:   "PFNW-TAMASE",           // タイトル（大文字英語推奨）
  date:    "2025.05.01",            // 投稿日 YYYY.MM.DD 形式
  tag:     "モンスター",           // タグ（1つ）
  hero:    false,                   // TOPの看板にする: true / しない: false
  image:   "images/works/PFNW05.jpg",
  excerpt: "ピクファンNWで使用した夜の昆虫モンスター",
  body: `
    <p>ピクファンでモンスターが描きたくなったので。</p>
    <p>ザクザク書いて楽しい。かなり古いかな～</p>
    <h3>制作メモ</h3>
    <p>SAI</p>
  `,
},
{
  id:      "PFNW04",           // URLになる一意のID（英数字・ハイフンのみ）
  title:   "PFNW-GLAPTOR",           // タイトル（大文字英語推奨）
  date:    "2025.05.01",            // 投稿日 YYYY.MM.DD 形式
  tag:     "モンスター",           // タグ（1つ）
  hero:    false,                   // TOPの看板にする: true / しない: false
  image:   "images/works/PFNW04.jpg",
  excerpt: "草原をかける肉食モンスター",
  body: `
    <p>ピクファンモンスター</p>
    <p>当時結構モンスターにはまってたかも</p>
    <h3>制作メモ</h3>
    <p>SAI</p>
  `,
},

{
  id:      "PFNW01",           // URLになる一意のID（英数字・ハイフンのみ）
  title:   "PFNW-ZANJI",           // タイトル（大文字英語推奨）
  date:    "2025.05.01",            // 投稿日 YYYY.MM.DD 形式
  tag:     "キャラクター",           // タグ（1つ）
  hero:    false,                   // TOPの看板にする: true / しない: false
  image:   "images/works/PFNW01.jpg",
  excerpt: "斬慈　PFNWで生まれた看板＆ゲーム使用キャラ",
  body: `
    <p>ツンツン頭三白眼バトル筋肉</p>
    <p>始まりのキャラクターかも</p>
    <h3>制作メモ</h3>
    <p>SAI</p>
  `,
},
{
  id:      "PFT01",           // URLになる一意のID（英数字・ハイフンのみ）
  title:   "PFT-MIZUKI",           // タイトル（大文字英語推奨）
  date:    "2025.05.01",            // 投稿日 YYYY.MM.DD 形式
  tag:     "キャラクター",           // タグ（1つ）
  hero:    false,                   // TOPの看板にする: true / しない: false
  image:   "images/works/PFT01.jpg",
  excerpt: "ピクファンでかいた魔法少女",
  body: `
    <p>魔法少女イメージ</p>
    <p>普段はおっとり図書委員メガネっ子にしたくて</p>
    <h3>制作メモ</h3>
    <p>SAI</p>
  `,
},
{
  id:      "PFT02",           // URLになる一意のID（英数字・ハイフンのみ）
  title:   "PFT-SHON",           // タイトル（大文字英語推奨）
  date:    "2025.05.01",            // 投稿日 YYYY.MM.DD 形式
  tag:     "キャラクター",           // タグ（1つ）
  hero:    false,                   // TOPの看板にする: true / しない: false
  image:   "images/works/PFT02.jpg",
  excerpt: "ピクファン少年に挑戦してた一枚　狐耳",
  body: `
    <p>普段絶対書かない系</p>
    <p>これはこれでたのしかったかも</p>
    <h3>制作メモ</h3>
    <p>SAI</p>
  `,
},
  {
    id:      "FFRD-VS",
    title:   "OVER　FLOW",
    date:    "2026.05.10",
    tag:     "キャラクター",
    hero:    false,
    image:   "images/works/PFRD01.jpg",
    excerpt: "かつてジンとよばれたもの",
    body: `
      <p>かつてのピクファンのキャラが闇落ちしたような姿をPFRDで作成したもの</p>
      <p>制作：SAI</p>
    `,
  },

    {
    id:      "ff1403",
    title:   "DIAMOND",
    date:    "2026.05.10",
    tag:     "版権",
    hero:    false,
    image:   "images/works/ff1403.jpg",
    excerpt: "ウェルリト",
    body: `
      <p>お兄ちゃんの背中めっちゃ焼かれてるのとか…ね…</p>
    `,
  },


  /* ↑ 新しい投稿は上に追加していく ↑ */

];
