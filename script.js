/* ==========================================================================
   مسلسلي — منطق الموقع
   لإضافة مسلسل جديد أو حلقة جديدة: عدّل مصفوفة SERIES_DATA بالأسفل فقط.
   ========================================================================== */

/* ----------------------------------------------------------------------
   1) البيانات — عدّل هنا فقط لإضافة مسلسلاتك وحلقاتك الحقيقية
   ----------------------------------------------------------------------
   poster / backdrop : رابط صورة (اتركه كما هو أو استبدله بصورتك)
   episodes.videoUrl  : ضع هنا رابط الفيديو المباشر (.mp4 مثلاً)
                         أو رابط تضمين (YouTube / Vimeo / Google Drive...)
                         والسكريبت سيكتشف النوع تلقائيًا ويشغّله.
------------------------------------------------------------------------- */

const DEFAULT_SERIES_DATA = [
  {
    id: "esref-ruya",
    title: "حلم أشرف",
    genre: "جريمة ودراما",
    year: "2024",
    seasons: "الموسم 2",
    poster: "https://www.qrmzi.tv/wp-content/uploads/2025/11/Esref-Ruya-cover.jpg",
    backdrop: "https://www.qrmzi.tv/wp-content/uploads/2025/11/Esref-Ruya-cover.jpg",
    description: "أشرف تيك، يتيم فقد حب حياته رؤيا التي كانت سبب جريمته الأولى، يتقاطع طريقه مع المغنية نيسان التي تُزرع بجانبه بمكيدة لمحاولة القبض عليه، قبل أن يكتشف أنها هي حبيبته رؤيا منذ الطفولة. فهل ستكشف مصيرها للشرطة، أم ستحافظ على حبها؟",
    episodes: [
      { title: "الحلقة 47", desc: "الحلقة السابعة والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف — مترجمة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e47" },
    ]
  },
  {
    id: "shadows-of-the-city",
    title: "ظلال المدينة",
    genre: "دراما اجتماعية",
    year: "2024",
    seasons: "الموسم 1",
    poster: "https://picsum.photos/seed/lamaa-1/500/750",
    backdrop: "https://picsum.photos/seed/lamaa-1-wide/1600/900",
    description: "في أحياء المدينة القديمة، تتقاطع حياة خمس عائلات حول سر واحد يهدد بقلب كل شيء رأسًا على عقب.",
    episodes: [
      { title: "الحلقة 1 — البداية", desc: "تتعرف الجارتان على بعضهما للمرة الأولى وسط أجواء مشحونة.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { title: "الحلقة 2 — السر", desc: "تفاصيل جديدة تظهر عن الماضي المشترك بين العائلتين.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { title: "الحلقة 3 — المواجهة", desc: "أول اشتباك مباشر يهدد بكشف كل الأوراق.", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ]
  },
  {
    id: "beirut-nights",
    title: "ليالي بيروت",
    genre: "رومانسي",
    year: "2023",
    seasons: "الموسم 2",
    poster: "https://picsum.photos/seed/lamaa-2/500/750",
    backdrop: "https://picsum.photos/seed/lamaa-2-wide/1600/900",
    description: "قصة حب تنمو بين شرفتين متقابلتين، وسط مدينة لا تنام ولا تنسى.",
    episodes: [
      { title: "الحلقة 1 — لقاء الشرفة", desc: "اللقاء الأول الذي يغيّر مسار الصيف بأكمله.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { title: "الحلقة 2 — رسائل", desc: "تبدأ الرسائل القصيرة تتحول إلى شيء أعمق.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    ]
  },
  {
    id: "sand-palace",
    title: "قصر الرمال",
    genre: "تاريخي",
    year: "2022",
    seasons: "الموسم 1",
    poster: "https://picsum.photos/seed/lamaa-3/500/750",
    backdrop: "https://picsum.photos/seed/lamaa-3-wide/1600/900",
    description: "في زمن الممالك القديمة، يخوض أمير شاب رحلة لاستعادة عرش أجداده.",
    episodes: [
      { title: "الحلقة 1 — العرش الضائع", desc: "الأمير يكتشف حقيقة نفيه من القصر.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
      { title: "الحلقة 2 — الحليف الأول", desc: "تحالف غير متوقع يغيّر موازين القوى.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
      { title: "الحلقة 3 — العاصفة", desc: "معركة كبرى تقترب من أسوار القصر.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    ]
  },
  {
    id: "winter-whisper",
    title: "همس الشتاء",
    genre: "غموض وإثارة",
    year: "2024",
    seasons: "الموسم 1",
    poster: "https://picsum.photos/seed/lamaa-4/500/750",
    backdrop: "https://picsum.photos/seed/lamaa-4-wide/1600/900",
    description: "قرية معزولة تحت الثلج، وحادثة اختفاء غامضة تكشف أسرارًا ظلت مدفونة لعقود.",
    episodes: [
      { title: "الحلقة 1 — الاختفاء", desc: "تختفي فتاة القرية في ليلة عاصفة دون أثر.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
      { title: "الحلقة 2 — آثار في الثلج", desc: "خيط أول يقود المحقق إلى الغابة المجاورة.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
    ]
  },
  {
    id: "threads-of-fate",
    title: "خيوط القدر",
    genre: "دراما عائلية",
    year: "2021",
    seasons: "الموسم 3",
    poster: "https://picsum.photos/seed/lamaa-5/500/750",
    backdrop: "https://picsum.photos/seed/lamaa-5-wide/1600/900",
    description: "ثلاثة أشقاء يجدون أنفسهم في مواجهة إرث العائلة بعد غياب طويل.",
    episodes: [
      { title: "الحلقة 1 — العودة", desc: "عودة الابن الأكبر بعد عشر سنوات من الغياب.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" },
      { title: "الحلقة 2 — الوصية", desc: "قراءة الوصية تكشف مفاجأة لم يتوقعها أحد.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" },
    ]
  },
  {
    id: "time-of-illusion",
    title: "زمن الوهم",
    genre: "خيال علمي",
    year: "2025",
    seasons: "الموسم 1",
    poster: "https://picsum.photos/seed/lamaa-6/500/750",
    backdrop: "https://picsum.photos/seed/lamaa-6-wide/1600/900",
    description: "عالمة فيزياء تكتشف أن الجدول الزمني الذي تعيش فيه ليس الوحيد.",
    episodes: [
      { title: "الحلقة 1 — الشرخ", desc: "أول إشارة على وجود خلل في الجدول الزمني.", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" },
    ]
  },
];

/* ----------------------------------------------------------------------
   1ب) تخزين البيانات — كل تعديل من لوحة التحكم يُحفظ في متصفح الجهاز
   (localStorage). هذا مناسب لموقع بلا خادم: التعديلات تبقى على نفس
   الجهاز/المتصفح الذي حفظتها منه. لعرض نفس التعديلات لكل الزوار من كل
   الأجهزة تحتاج لاحقًا قاعدة بيانات أو خادم حقيقي.
------------------------------------------------------------------------- */

const STORAGE_KEY = "masalsali_series_data";
const SESSION_KEY = "masalsali_admin_session";
const LEGACY_STORAGE_KEY = "lamaa_series_data";
const LEGACY_SESSION_KEY = "lamaa_admin_session";

/* نقل البيانات المحفوظة تحت الاسم القديم (لمعة) إلى الاسم الجديد حتى لا تُفقد */
function migrateLegacyData() {
  try {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacy) {
        localStorage.setItem(STORAGE_KEY, legacy);
        localStorage.removeItem(LEGACY_STORAGE_KEY);
      }
    }
    if (!localStorage.getItem(SESSION_KEY)) {
      const legacySession = localStorage.getItem(LEGACY_SESSION_KEY);
      if (legacySession) {
        localStorage.setItem(SESSION_KEY, legacySession);
        localStorage.removeItem(LEGACY_SESSION_KEY);
      }
    }
  } catch (e) {
    console.warn("تعذّرت ترحيل البيانات القديمة.", e);
  }
}

migrateLegacyData();

function loadSeriesData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) {
    console.warn("تعذّرت قراءة البيانات المحفوظة، سيتم استخدام البيانات الافتراضية.", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_SERIES_DATA));
}

function saveSeriesData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SERIES_DATA));
    return true;
  } catch (e) {
    alert("تعذّر حفظ البيانات — قد تكون الصور المرفوعة كبيرة جدًا على مساحة التخزين المتاحة بالمتصفح. جرّب صورًا أصغر أو استخدم روابط صور بدل الرفع المباشر.");
    return false;
  }
}

let SERIES_DATA = loadSeriesData();

/* ----------------------------------------------------------------------
   2) عناصر DOM
------------------------------------------------------------------------- */

const el = (id) => document.getElementById(id);

const views = {
  home: el("homeView"),
  series: el("seriesView"),
  player: el("playerView"),
  admin: el("adminView"),
};

let currentSeries = null;

/* ----------------------------------------------------------------------
   3) أدوات مساعدة — تشغيل الفيديو من أي نوع رابط
------------------------------------------------------------------------- */

function toEmbeddableUrl(rawUrl) {
  // يوتيوب: يحوّل رابط المشاهدة العادي إلى رابط تضمين
  const ytMatch = rawUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/);
  if (ytMatch) {
    return { type: "iframe", url: `https://www.youtube.com/embed/${ytMatch[1]}` };
  }
  // فيميو
  const vimeoMatch = rawUrl.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return { type: "iframe", url: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
  }
  // ملف فيديو مباشر (mp4 / webm / ogg / mov / m3u8)
  if (/\.(mp4|webm|ogg|mov|m3u8)(\?.*)?$/i.test(rawUrl)) {
    return { type: "video", url: rawUrl };
  }
  // جوجل درايف: يحوّل أي رابط مشاركة إلى رابط معاينة قابل للتضمين
  const driveIdMatch = rawUrl.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|preview\?id=|uc\?[^#]*\bid=)([\w-]+)/);
  if (driveIdMatch) {
    return { type: "iframe", url: `https://drive.google.com/file/d/${driveIdMatch[1]}/preview` };
  }
  // أي رابط آخر (مشغل خارجي...) — يُعرض داخل iframe
  return { type: "iframe", url: rawUrl };
}

function showPlayerMessage(container, message) {
  container.innerHTML = "";
  const ph = document.createElement("div");
  ph.className = "player-placeholder";
  ph.textContent = message;
  container.appendChild(ph);
}

function enableHls(video, url) {
  const nativeHls = video.canPlayType && video.canPlayType("application/vnd.apple.mpegurl");
  if (nativeHls) {
    video.src = url;
    return;
  }

  const start = () => {
    if (!window.Hls || !window.Hls.isSupported()) {
      showPlayerMessage(video.parentNode, "المتصفح الحالي لا يدعم تشغيل روابط HLS (.m3u8).");
      return;
    }
    video.removeAttribute("src");
    const hls = new window.Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    let fatalErrors = 0;
    hls.on(window.Hls.Events.ERROR, (_event, data) => {
      if (!data.fatal) return;
      fatalErrors += 1;
      if (fatalErrors > 3) {
        showPlayerMessage(video.parentNode, "تعذّر تشغيل هذا الفيديو — تحقق من رابط .m3u8.");
        return;
      }
      if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
      else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
      else showPlayerMessage(video.parentNode, "تعذّر تشغيل هذا الفيديو (HLS).");
    });
  };

  if (window.Hls) {
    start();
  } else {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/hls.js@1";
    s.onload = start;
    s.onerror = () => showPlayerMessage(video.parentNode, "تعذّر تحميل مشغّل HLS — تحقق من اتصال الإنترنت.");
    document.head.appendChild(s);
  }
}

function renderPlayer(container, videoUrl) {
  container.innerHTML = "";
  if (!videoUrl) {
    showPlayerMessage(container, "لم يتم إضافة رابط فيديو لهذه الحلقة بعد.");
    return;
  }

  const { type, url } = toEmbeddableUrl(videoUrl);

  if (type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    container.appendChild(video);
    if (/\.m3u8(\?.*)?$/i.test(url)) {
      enableHls(video, url);
    } else {
      video.src = url;
    }
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    container.appendChild(iframe);
  }
}

/* ----------------------------------------------------------------------
   4) التنقل بين الصفحات
------------------------------------------------------------------------- */

function showView(name) {
  Object.entries(views).forEach(([key, node]) => {
    node.hidden = key !== name;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  showView("home");
}

function goToSeries(seriesId) {
  const series = SERIES_DATA.find((s) => s.id === seriesId);
  if (!series) return;
  currentSeries = series;
  renderSeriesView(series);
  showView("series");
}

function playEpisode(seriesId, episodeIndex) {
  const series = SERIES_DATA.find((s) => s.id === seriesId);
  if (!series) return;
  const episode = series.episodes[episodeIndex];
  if (!episode) return;

  currentSeries = series;
  el("playerSeriesName").textContent = series.title;
  el("playerEpisodeTitle").textContent = episode.title;
  el("playerEpisodeDesc").textContent = episode.desc || "";
  renderPlayer(el("playerFrame"), episode.videoUrl);
  renderEpisodeList(el("playerEpisodeList"), series, episodeIndex);
  showView("player");
}

/* ----------------------------------------------------------------------
   5) عرض شبكة المسلسلات (الصفحة الرئيسية)
------------------------------------------------------------------------- */

function renderPosterGrid(list) {
  const grid = el("posterGrid");
  grid.innerHTML = "";

  list.forEach((series, index) => {
    const card = document.createElement("div");
    card.className = "poster-card reveal";
    card.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
    const title = escapeHtml(series.title);
    card.innerHTML = `
      <img src="${escapeHtml(series.poster)}" alt="${title}" loading="lazy">
      <div class="poster-card-fade"></div>
      <span class="poster-card-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 5.5L18 12L8 18.5V5.5Z" fill="currentColor"/></svg>
      </span>
      <div class="poster-card-label">
        <p class="poster-card-title">${title}</p>
        <p class="poster-card-genre">${escapeHtml(series.genre)} · ${escapeHtml(series.year)}</p>
      </div>
      <button class="poster-card-btn" aria-label="افتح ${title}"></button>
    `;
    applyImageFallback(card.querySelector("img"));
    card.querySelector(".poster-card-btn").addEventListener("click", () => goToSeries(series.id));
    grid.appendChild(card);
    revealObserver.observe(card);
  });

  el("resultsCount").textContent = `${list.length} مسلسل`;
  el("emptyState").hidden = list.length !== 0;
}

let currentSearchQuery = "";

function renderCatalog() {
  const q = currentSearchQuery.trim().toLowerCase();
  const filtered = q
    ? SERIES_DATA.filter((s) => s.title.toLowerCase().includes(q) || s.genre.toLowerCase().includes(q))
    : SERIES_DATA;
  renderPosterGrid(filtered);
}

function setupSearch() {
  el("searchInput").addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    renderCatalog();
  });
}

/* ----------------------------------------------------------------------
   6) عرض القسم الرئيسي (Hero)
------------------------------------------------------------------------- */

function renderHero() {
  const featured = SERIES_DATA[0];
  if (!featured) {
    el("heroSection").hidden = true;
    return;
  }
  el("heroSection").hidden = false;
  el("heroImage").src = featured.backdrop;
  el("heroImage").alt = featured.title;
  applyImageFallback(el("heroImage"));
  el("heroTitle").textContent = featured.title;
  el("heroDesc").textContent = featured.description;

  el("heroWatchBtn").onclick = () => playEpisode(featured.id, 0);
  el("heroInfoBtn").onclick = () => goToSeries(featured.id);
}

/* ----------------------------------------------------------------------
   7) عرض صفحة تفاصيل المسلسل
------------------------------------------------------------------------- */

function renderEpisodeList(container, series, activeIndex = -1) {
  container.innerHTML = "";
  series.episodes.forEach((ep, index) => {
    const li = document.createElement("li");
    li.className = "reveal";
    li.style.setProperty("--reveal-delay", `${Math.min(index * 60, 300)}ms`);
    const btn = document.createElement("button");
    btn.className = "episode-item";
    if (index === activeIndex) btn.style.borderColor = "var(--gold)";
    btn.innerHTML = `
      <span class="episode-num">${index + 1}</span>
      <span class="episode-text">
        <p class="episode-title">${escapeHtml(ep.title)}</p>
        <p class="episode-sub">${escapeHtml(ep.desc || "")}</p>
      </span>
      <span class="episode-play">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 4L20 12L6 20V4Z" fill="currentColor"/></svg>
      </span>
    `;
    btn.addEventListener("click", () => playEpisode(series.id, index));
    li.appendChild(btn);
    container.appendChild(li);
    revealObserver.observe(li);
  });
}

function renderSeriesView(series) {
  el("seriesBackdrop").src = series.backdrop;
  el("seriesBackdrop").alt = series.title;
  applyImageFallback(el("seriesBackdrop"));
  el("seriesPoster").src = series.poster;
  el("seriesPoster").alt = series.title;
  applyImageFallback(el("seriesPoster"));
  el("seriesGenre").textContent = series.genre;
  el("seriesTitle").textContent = series.title;
  el("seriesMeta").textContent = `${series.seasons} · ${series.episodes.length} حلقة · ${series.year}`;
  el("seriesDesc").textContent = series.description;
  el("episodeCount").textContent = `${series.episodes.length} حلقة`;

  el("playFirstBtn").onclick = () => playEpisode(series.id, 0);

  renderEpisodeList(el("episodeList"), series);
}

/* ----------------------------------------------------------------------
   8) الأحداث العامة
------------------------------------------------------------------------- */

el("fullscreenBtn").addEventListener("click", () => {
  const frame = el("playerFrame");
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  } else if (frame.requestFullscreen) {
    frame.requestFullscreen();
  } else if (frame.webkitRequestFullscreen) {
    frame.webkitRequestFullscreen();
  }
});

el("brandHome").addEventListener("click", goHome);
el("backToHome").addEventListener("click", goHome);
el("backToSeries").addEventListener("click", () => {
  if (currentSeries) goToSeries(currentSeries.id);
  else goHome();
});

/* ----------------------------------------------------------------------
   8ب) لوحة التحكم — كلمة السر
   لتغيير كلمة السر لاحقًا: عدّل القيمة التالية فقط.
------------------------------------------------------------------------- */

const ADMIN_PASSWORD = "123456";

const PLACEHOLDER_IMG = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><rect width="400" height="600" fill="#201726"/><text x="50%" y="50%" font-family="serif" font-size="130" fill="#E3B23C" text-anchor="middle" dominant-baseline="middle">&#1605;</text></svg>`
);

function applyImageFallback(img) {
  if (!img) return;
  img.addEventListener("error", () => {
    img.src = PLACEHOLDER_IMG;
  });
}

function isAdminLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "1";
}

function setAdminLoggedIn(value) {
  if (value) localStorage.setItem(SESSION_KEY, "1");
  else localStorage.removeItem(SESSION_KEY);
}

function openPasswordModal() {
  el("passwordInput").value = "";
  el("passwordModalError").hidden = true;
  el("passwordModal").hidden = false;
  el("passwordInput").focus();
}

function closePasswordModal() {
  el("passwordModal").hidden = true;
}

function handlePasswordSubmit() {
  const value = el("passwordInput").value.trim();

  if (value === ADMIN_PASSWORD) {
    setAdminLoggedIn(true);
    closePasswordModal();
    enterAdmin();
  } else {
    el("passwordModalError").textContent = "كلمة السر غير صحيحة، حاول مرة أخرى.";
    el("passwordModalError").hidden = false;
  }
}

el("adminOpenBtn").addEventListener("click", () => {
  if (isAdminLoggedIn()) {
    enterAdmin();
  } else {
    openPasswordModal();
  }
});

el("passwordModalSubmit").addEventListener("click", handlePasswordSubmit);
el("passwordInput").addEventListener("keydown", (e) => { if (e.key === "Enter") handlePasswordSubmit(); });
el("passwordModalClose").addEventListener("click", closePasswordModal);
el("passwordModal").addEventListener("click", (e) => {
  if (e.target === el("passwordModal")) closePasswordModal();
});

el("adminExitBtn").addEventListener("click", goHome);

/* ----------------------------------------------------------------------
   8ج) لوحة التحكم — إدارة المسلسلات والحلقات
------------------------------------------------------------------------- */

let adminEditingId = null; // null = لا يوجد نموذج مفتوح, "new" = مسلسل جديد, وإلا id المسلسل

function enterAdmin() {
  adminEditingId = null;
  renderAdminSeriesList();
  el("adminSeriesForm").hidden = true;
  el("adminEmptyHint").hidden = false;
  showView("admin");
}

function renderAdminSeriesList() {
  const list = el("adminSeriesList");
  list.innerHTML = "";
  SERIES_DATA.forEach((series) => {
    const li = document.createElement("li");
    const row = document.createElement("button");
    row.type = "button";
    row.className = "admin-series-row" + (series.id === adminEditingId ? " active" : "");
    row.innerHTML = `<img src="${escapeHtml(series.poster) || PLACEHOLDER_IMG}" alt=""><span>${escapeHtml(series.title)}</span>`;
    applyImageFallback(row.querySelector("img"));
    row.addEventListener("click", () => loadSeriesIntoForm(series));
    li.appendChild(row);
    list.appendChild(li);
  });
}

function emptyEpisode() {
  return { title: "", desc: "", videoUrl: "" };
}

function renderEpisodeEditor(episodes) {
  const wrap = el("fEpisodesList");
  wrap.innerHTML = "";
  episodes.forEach((ep, index) => {
    const row = document.createElement("div");
    row.className = "admin-episode-edit-row";
    row.innerHTML = `
      <div class="ep-num">${index + 1}</div>
      <div>
        <input type="text" class="ep-title" placeholder="عنوان الحلقة" value="${escapeHtml(ep.title)}">
        <input type="text" class="ep-desc" placeholder="وصف مختصر (اختياري)" value="${escapeHtml(ep.desc || "")}">
      </div>
      <div>
        <input type="text" class="ep-url" placeholder="رابط الفيديو (mp4 أو يوتيوب أو رابط تضمين)" value="${escapeHtml(ep.videoUrl || "")}">
      </div>
      <button type="button" class="ep-remove" title="حذف الحلقة">✕</button>
    `;
    row.querySelector(".ep-remove").addEventListener("click", () => {
      row.remove();
      renumberEpisodeRows();
    });
    wrap.appendChild(row);
  });
}

function renumberEpisodeRows() {
  el("fEpisodesList").querySelectorAll(".admin-episode-edit-row").forEach((row, i) => {
    row.querySelector(".ep-num").textContent = i + 1;
  });
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

el("fAddEpisodeBtn").addEventListener("click", () => {
  const wrap = el("fEpisodesList");
  const index = wrap.querySelectorAll(".admin-episode-edit-row").length;
  const row = document.createElement("div");
  row.className = "admin-episode-edit-row";
  row.innerHTML = `
    <div class="ep-num">${index + 1}</div>
    <div>
      <input type="text" class="ep-title" placeholder="عنوان الحلقة">
      <input type="text" class="ep-desc" placeholder="وصف مختصر (اختياري)">
    </div>
    <div>
      <input type="text" class="ep-url" placeholder="رابط الفيديو (mp4 أو يوتيوب أو رابط تضمين)">
    </div>
    <button type="button" class="ep-remove" title="حذف الحلقة">✕</button>
  `;
  row.querySelector(".ep-remove").addEventListener("click", () => {
    row.remove();
    renumberEpisodeRows();
  });
  wrap.appendChild(row);
  row.querySelector(".ep-title").focus();
});

function loadSeriesIntoForm(series) {
  adminEditingId = series ? series.id : "new";
  el("adminEmptyHint").hidden = true;
  el("adminSeriesForm").hidden = false;
  el("adminFormError").hidden = true;

  el("fTitle").value = series ? series.title : "";
  el("fGenre").value = series ? series.genre : "";
  el("fYear").value = series ? series.year : "";
  el("fSeasons").value = series ? series.seasons : "";
  el("fDesc").value = series ? series.description : "";
  el("fPosterUrl").value = series ? series.poster || "" : "";
  el("fBackdropUrl").value = series ? series.backdrop || "" : "";
  el("fPosterPreview").src = (series && series.poster) || PLACEHOLDER_IMG;
  el("fBackdropPreview").src = (series && series.backdrop) || PLACEHOLDER_IMG;
  applyImageFallback(el("fPosterPreview"));
  applyImageFallback(el("fBackdropPreview"));

  renderEpisodeEditor(series && series.episodes && series.episodes.length ? series.episodes : [emptyEpisode()]);
  el("adminDeleteSeriesBtn").hidden = !series;

  renderAdminSeriesList();
}

el("adminAddSeriesBtn").addEventListener("click", () => loadSeriesIntoForm(null));

/* رفع الصور من الجهاز وتحويلها لمعاينة فورية */
function wireImageUpload(fileInputId, urlInputId, previewId) {
  el(fileInputId).addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      alert("الصورة كبيرة جدًا (أكثر من 4 ميجابايت). فضّل صورة أصغر لضمان حفظها بنجاح.");
    }
    const reader = new FileReader();
    reader.onload = () => {
      el(urlInputId).value = reader.result;
      el(previewId).src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  el(urlInputId).addEventListener("input", () => {
    el(previewId).src = el(urlInputId).value || PLACEHOLDER_IMG;
  });
}

wireImageUpload("fPosterFile", "fPosterUrl", "fPosterPreview");
wireImageUpload("fBackdropFile", "fBackdropUrl", "fBackdropPreview");

/* حفظ المسلسل */
el("adminSeriesForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = el("fTitle").value.trim();
  if (!title) {
    el("adminFormError").textContent = "يرجى كتابة اسم المسلسل.";
    el("adminFormError").hidden = false;
    return;
  }

  const episodes = Array.from(el("fEpisodesList").querySelectorAll(".admin-episode-edit-row"))
    .map((row) => ({
      title: row.querySelector(".ep-title").value.trim(),
      desc: row.querySelector(".ep-desc").value.trim(),
      videoUrl: row.querySelector(".ep-url").value.trim(),
    }))
    .filter((ep) => ep.title || ep.videoUrl);

  const seriesObj = {
    id: adminEditingId && adminEditingId !== "new" ? adminEditingId : `series-${Date.now()}`,
    title,
    genre: el("fGenre").value.trim() || "بدون تصنيف",
    year: el("fYear").value.trim(),
    seasons: el("fSeasons").value.trim() || "الموسم 1",
    poster: el("fPosterUrl").value.trim(),
    backdrop: el("fBackdropUrl").value.trim() || el("fPosterUrl").value.trim(),
    description: el("fDesc").value.trim(),
    episodes,
  };

  const existingIndex = SERIES_DATA.findIndex((s) => s.id === seriesObj.id);
  if (existingIndex >= 0) {
    SERIES_DATA[existingIndex] = seriesObj;
  } else {
    SERIES_DATA.push(seriesObj);
  }

  if (!saveSeriesData()) return;

  adminEditingId = seriesObj.id;
  renderAdminSeriesList();
  el("adminDeleteSeriesBtn").hidden = false;
  renderCatalog();
  renderHero();

  const submitBtn = el("adminSeriesForm").querySelector('button[type="submit"]');
  const original = submitBtn.textContent;
  submitBtn.textContent = "تم الحفظ ✓";
  setTimeout(() => { submitBtn.textContent = original; }, 1400);
});

/* حذف المسلسل */
el("adminDeleteSeriesBtn").addEventListener("click", () => {
  if (!adminEditingId || adminEditingId === "new") return;
  if (!confirm("هل تريد حذف هذا المسلسل نهائيًا؟")) return;

  SERIES_DATA = SERIES_DATA.filter((s) => s.id !== adminEditingId);
  saveSeriesData();

  adminEditingId = null;
  el("adminSeriesForm").hidden = true;
  el("adminEmptyHint").hidden = false;
  renderAdminSeriesList();
  renderCatalog();
  renderHero();
});

/* ----------------------------------------------------------------------
   8د) لمسات التصميم — ظهور تدريجي، رأس منكمش، عودة للأعلى، تنقل الجوال
------------------------------------------------------------------------- */

/* الظهور التدريجي عند التمرير */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -36px 0px" });

/* زر العودة للأعلى */
const scrollTopBtn = el("scrollTopBtn");

function onPageScroll() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 420);
}

window.addEventListener("scroll", onPageScroll, { passive: true });
onPageScroll();

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* زر مسح البحث */
const searchClearBtn = el("searchClearBtn");
const searchInputEl = el("searchInput");

function updateSearchClear() {
  searchClearBtn.classList.toggle("visible", searchInputEl.value.length > 0);
}
searchInputEl.addEventListener("input", updateSearchClear);
searchClearBtn.addEventListener("click", () => {
  searchInputEl.value = "";
  currentSearchQuery = "";
  searchInputEl.focus();
  updateSearchClear();
  renderCatalog();
});

/* ----------------------------------------------------------------------
   9) البدء
------------------------------------------------------------------------- */

renderHero();
renderCatalog();
setupSearch();
