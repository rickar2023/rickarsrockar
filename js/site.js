/* ============================================================
   RickarsRockar — site.js
   ページ描画エンジン。このファイルは編集不要です。
   ============================================================ */

const PER_PAGE = 6;

/* ─── 共通サイドバー ─── */
function buildSidebar() {
  const tags = [...new Set(POSTS.map(p => p.tag))];
  const yearMap = {};
  POSTS.forEach(p => {
    const y = p.date.split('.')[0];
    yearMap[y] = (yearMap[y] || 0) + 1;
  });
  const archiveHTML = Object.entries(yearMap)
    .sort((a, b) => b[0] - a[0])
    .map(([y, n]) => `<li><a href="index.html?year=${y}">${y}<span class="n">${n}</span></a></li>`)
    .join('');

  const recentHTML = POSTS.slice(0, 4).map(p => `
    <a href="post.html?id=${p.id}" class="rmi">
      <div class="rmi-th">
        <img src="${p.image}" alt="${p.title}"
          onerror="this.style.display='none'">
      </div>
      <div class="rmi-info">
        <span class="rmi-t">${p.title}</span>
        <span class="rmi-d">${p.date}</span>
      </div>
    </a>`).join('');

  return `
    <aside>
      <div class="side-sec">
        <h4>Illustrator</h4>
        <div class="prof">
          <div class="prof-ico">
            <!-- プロフィール画像を使うとき: <img src="images/profile.jpg" alt=""> -->
            <!-- 画像なしのとき: -->
            <span>✦</span>
          </div>
          <span class="prof-name">RICKARS ROCKAR</span>
          <p class="prof-bio">黒とオレンジで世界を切り取るイラストレーター。かっこいいものだけを描く。</p>
          <div class="soc">
            <a href="https://x.com/namakemono_rc" target="_blank">X</a>
            <a href="https://www.pixiv.net/users/427076" target="_blank">Pixiv</a>
            <a href="about.html">About</a>
          </div>
        </div>
      </div>

      <div class="side-sec">
        <h4>Tags</h4>
        <div class="tc">
          ${tags.map(t => `<a href="index.html?tag=${encodeURIComponent(t)}" class="ct">${t}</a>`).join('')}
        </div>
      </div>

      <div class="side-sec">
        <h4>Archive</h4>
        <ul class="arc">${archiveHTML}</ul>
      </div>

      <div class="side-sec">
        <h4>Recent Works</h4>
        <div class="rmini">${recentHTML}</div>
      </div>
    </aside>`;
}

/* ─── INDEX ページ ─── */
function renderIndex() {
  const params = new URLSearchParams(location.search);
  const filterTag  = params.get('tag')  || null;
  const filterYear = params.get('year') || null;
  const page = parseInt(params.get('page') || '1');

  /* 絞り込み */
  let posts = POSTS;
  if (filterTag)  posts = posts.filter(p => p.tag === filterTag);
  if (filterYear) posts = posts.filter(p => p.date.startsWith(filterYear));

  /* ヒーロー: hero:true の投稿（絞り込みに関係なく最新ヒーローを表示） */
  const heroPost = POSTS.find(p => p.hero);

  /* ページング */
  const total = Math.ceil(posts.length / PER_PAGE);
  const sliced = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  /* ページタイトル */
  document.title = filterTag
    ? `${filterTag} — RickarsRockar`
    : 'RickarsRockar — Illustration Gallery';

  const app = document.getElementById('app');
  app.innerHTML = buildHero(heroPost) + `
    <div class="wrap">
      <main>
        <p class="sec-label">${filterTag ? 'Tag: ' + filterTag : filterYear ? filterYear : 'Latest Works'}</p>
        <div class="grid">
          ${sliced.map(buildCard).join('')}
        </div>
        ${buildPagination(page, total, filterTag, filterYear)}
      </main>
      ${buildSidebar()}
    </div>`;
}

function buildHero(post) {
  if (!post) return '';
  return `
    <section class="hero">
      <img src="${post.image}" alt="${post.title}" class="hero-img"
        onerror="this.style.display='none'">
      <div class="hero-ov"></div>
      <div class="hero-txt">
        <div class="hero-inner">
          <span class="badge">Latest</span>
          <h2 class="hero-title">${post.title}</h2>
          <p class="hero-excerpt">${post.excerpt}</p>
          <a href="post.html?id=${post.id}" class="btn-more">View Work →</a>
        </div>
      </div>
    </section>`;
}

function buildCard(post) {
  return `
    <a href="post.html?id=${post.id}" class="card">
      <div class="card-thumb">
        <img src="${post.image}" alt="${post.title}"
          onerror="this.style.display='none'; this.parentNode.classList.add('no-img-placeholder')">
        <span class="ctag">${post.tag}</span>
      </div>
      <div class="card-body">
        <h3>${post.title}</h3>
        <span class="dt">${post.date}</span>
        <p class="ex">${post.excerpt}</p>
      </div>
    </a>`;
}

function buildPagination(current, total, tag, year) {
  if (total <= 1) return '';
  const tagQ  = tag  ? `&tag=${encodeURIComponent(tag)}`   : '';
  const yearQ = year ? `&year=${encodeURIComponent(year)}` : '';
  let html = '<div class="pgn">';
  for (let i = 1; i <= total; i++) {
    html += `<a href="index.html?page=${i}${tagQ}${yearQ}" class="pg${i === current ? ' active' : ''}">${i}</a>`;
  }
  if (current < total) {
    html += `<a href="index.html?page=${current + 1}${tagQ}${yearQ}" class="pg">›</a>`;
  }
  html += '</div>';
  return html;
}

/* ─── DETAIL ページ ─── */
function renderPost() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    document.getElementById('app').innerHTML = `
      <div style="text-align:center;padding:6rem 2rem;color:var(--mu)">
        <p style="font-size:3rem;font-family:var(--ft);margin-bottom:1rem;color:var(--wh)">404</p>
        <p style="margin-bottom:1.5rem">投稿が見つかりませんでした。</p>
        <a href="index.html" class="btn-more">← Gallery へ戻る</a>
      </div>`;
    return;
  }

  document.title = `${post.title} — RickarsRockar`;

  const idx  = POSTS.findIndex(p => p.id === id);
  const prev = POSTS[idx + 1] || null;
  const next = POSTS[idx - 1] || null;

  document.getElementById('app').innerHTML = `

    <!-- ① パンくず（画像の上、薄く） -->
    <div class="post-breadcrumb-bar">
      <nav class="breadcrumb">
        <a href="index.html">Gallery</a>
        <span>›</span>
        <a href="index.html?tag=${encodeURIComponent(post.tag)}">${post.tag}</a>
        <span>›</span>
        ${post.title}
      </nav>
    </div>

    <!-- ② メインイラスト（縦横比そのまま・最大幅で表示） -->
    <div class="post-image-stage">
      <div class="post-image-wrap">
        <img src="${post.image}" alt="${post.title}" class="post-main-img"
          onerror="this.parentNode.classList.add('img-error')">
      </div>
    </div>

    <!-- ③ タイトル＋本文＋サイドバー -->
    <div class="wrap">
      <main>
        <div class="post-meta">
          <span class="ptag">${post.tag}</span>
          <span class="pdate">${post.date}</span>
        </div>

        <h1 class="post-title">${post.title}</h1>

        <article class="post-body">
          ${post.body}
        </article>

        <nav class="post-nav">
          <div class="pnav-prev">
            ${prev ? `<a href="post.html?id=${prev.id}" class="pnav-link">
              <span class="nav-lbl">← Prev</span>
              <span class="nav-ttl">${prev.title}</span>
            </a>` : ''}
          </div>
          <a href="index.html" class="pnav-home">Gallery</a>
          <div class="pnav-next">
            ${next ? `<a href="post.html?id=${next.id}" class="pnav-link">
              <span class="nav-lbl">Next →</span>
              <span class="nav-ttl">${next.title}</span>
            </a>` : ''}
          </div>
        </nav>
      </main>
      ${buildSidebar()}
    </div>`;
}
