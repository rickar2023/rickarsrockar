# RickarsRockar — 運用マニュアル

---

## ファイル構成

```
rickars_rockar/
├── index.html          ← TOPページ（触らない）
├── post.html           ← 詳細ページ（触らない）
├── css/
│   └── style.css       ← デザイン（触らない）
├── js/
│   ├── posts.js        ← ★ここだけ編集すれば投稿できる★
│   └── site.js         ← 動作エンジン（触らない）
└── images/
    └── works/          ← ★作品画像をここに入れる★
        ├── ignition.jpg
        └── ...
```

---

## 新しいイラストを投稿する（3ステップ）

### Step 1 — 画像を入れる

`images/works/` フォルダに画像ファイルを置く。

- 推奨形式: **JPG** または **PNG**
- 推奨サイズ: 幅 **1200px 以上**
- ファイル名: 英数字・ハイフンのみ（例: `my-new-work.jpg`）

---

### Step 2 — posts.js に追記する

`js/posts.js` をテキストエディタで開き、  
`/* ↓ ここから追加 */` の直下に以下をコピーして貼り付ける。

```javascript
{
  id:      "my-new-work",           // URLになる一意のID（英数字・ハイフンのみ）
  title:   "MY NEW WORK",           // タイトル（大文字英語推奨）
  date:    "2025.05.01",            // 投稿日 YYYY.MM.DD 形式
  tag:     "キャラクター",           // タグ（1つ）
  hero:    false,                   // TOPの看板にする: true / しない: false
  image:   "images/works/my-new-work.jpg",
  excerpt: "一覧ページに出る紹介文（100字以内）",
  body: `
    <p>本文の段落です。</p>
    <p>2段落目。</p>
    <h3>制作メモ</h3>
    <p>制作の背景やツールなど。</p>
  `,
},
```

**ルール: 配列の一番上（先頭）が最新投稿になります。**

---

### Step 3 — ブラウザで確認

`index.html` をブラウザで開いて確認。  
ローカルで画像が表示されない場合は **Live Server**（VS Code拡張）を使う。

---

## 看板イラスト（TOPヒーロー）の設定

TOPページの最上部に横長で表示される「看板」は、  
`hero: true` にした投稿が自動的に使われます。

```javascript
hero: true,   // ← この投稿が看板になる
```

- `hero: true` は **1つだけ** にしてください
- 看板を変えたいときは、新しい投稿を `hero: true` にして、  
  古い投稿を `hero: false` に変える

### 画像のトリミング位置を変えたいとき

`css/style.css` の以下の部分を変更:

```css
.hero-img {
  object-position: center 30%;  /* 数値を変えると上下の位置が変わる */
}
/* 例: 上を見せたい → center top */
/* 例: 下を見せたい → center bottom */
```

---

## 本文（body）で使えるHTML

```html
<!-- 段落 -->
<p>テキスト。改行は p タグで。</p>

<!-- 見出し（オレンジのアクセントバー付き） -->
<h3>制作メモ</h3>

<!-- 小見出し -->
<h4>使用ツール</h4>

<!-- リスト -->
<ul>
  <li>項目1</li>
  <li>項目2</li>
</ul>

<!-- 画像（本文中に追加する場合） -->
<img src="images/works/detail-shot.jpg" alt="詳細カット">

<!-- 引用 -->
<blockquote>引用テキストを入れる</blockquote>

<!-- 外部リンク -->
<a href="https://example.com" target="_blank">リンクテキスト</a>
```

---

## サイトを公開する方法

### Netlify（おすすめ・無料）

1. [netlify.com](https://netlify.com) にアカウント作成
2. `rickars_rockar` フォルダをサイトにドラッグ&ドロップ
3. 即公開される（独自ドメインも設定可）

### GitHub Pages（無料）

1. GitHubで新しいリポジトリを作成
2. フォルダの中身をすべてアップロード
3. Settings → Pages → Source を `main / (root)` に設定
4. `https://ユーザー名.github.io/リポジトリ名/` で公開される

---

## SNSリンクを変更する

`js/site.js` の `buildSidebar()` 関数内の以下を変更:

```javascript
<a href="https://x.com/あなたのID" target="_blank">X</a>
<a href="https://www.pixiv.net/users/あなたのID" target="_blank">Pixiv</a>
<a href="https://あなたのURL.booth.pm/" target="_blank">Booth</a>
```

---

*最終更新: 2025年4月*
