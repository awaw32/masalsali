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
    year: "2025-2026",
    seasons: "موسمان كاملان (47 حلقة)",
    poster: "https://upload.wikimedia.org/wikipedia/tr/1/14/E%C5%9FrefR%C3%BCya.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/tr/1/14/E%C5%9FrefR%C3%BCya.jpg",
    description: "أشرف تيك، يتيم فقد حب حياته رؤيا التي كانت سبب جريمته الأولى، يتقاطع طريقه مع المغنية نيسان التي تُزرع بجانبه بمكيدة لمحاولة القبض عليه، قبل أن يكتشف أنها هي حبيبته رؤيا منذ الطفولة. فهل ستكشف مصيرها للشرطة، أم ستحافظ على حبها؟",
    episodes: [
      { title: "الحلقة 1", desc: "الحلقة 1 الأولى من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e01" },
      { title: "الحلقة 2", desc: "الحلقة 2 الثانية من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e02" },
      { title: "الحلقة 3", desc: "الحلقة 3 الثالثة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e03" },
      { title: "الحلقة 4", desc: "الحلقة 4 الرابعة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e04" },
      { title: "الحلقة 5", desc: "الحلقة 5 الخامسة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e05" },
      { title: "الحلقة 6", desc: "الحلقة 6 السادسة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e06" },
      { title: "الحلقة 7", desc: "الحلقة 7 السابعة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e07" },
      { title: "الحلقة 8", desc: "الحلقة 8 الثامنة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e08" },
      { title: "الحلقة 9", desc: "الحلقة 9 التاسعة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e09" },
      { title: "الحلقة 10", desc: "الحلقة 10 العاشرة من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e10" },
      { title: "الحلقة 11", desc: "الحلقة 11 الحادية عشر من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e11" },
      { title: "الحلقة 12", desc: "الحلقة 12 الثانية عشر من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e12" },
      { title: "الحلقة 13", desc: "الحلقة 13 الثالثة عشر من مسلسل الجريمة والأكشن التركي حلم أشرف، مترجمة كاملة بجودة HD — نهاية الموسم الأول.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e13" },
      { title: "الحلقة 14", desc: "الحلقة 14 الرابعة عشر من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD — انطلاق الموسم الثاني.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e14" },
      { title: "الحلقة 15", desc: "الحلقة 15 الخامسة عشر من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e15" },
      { title: "الحلقة 16", desc: "الحلقة 16 السادسة عشر من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e16" },
      { title: "الحلقة 17", desc: "الحلقة 17 السابعة عشر من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e17" },
      { title: "الحلقة 18", desc: "الحلقة 18 الثامنة عشر من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e18" },
      { title: "الحلقة 19", desc: "الحلقة 19 التاسعة عشر من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e19" },
      { title: "الحلقة 20", desc: "الحلقة 20 العشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e20" },
      { title: "الحلقة 21", desc: "الحلقة 21 الحادية والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e21" },
      { title: "الحلقة 22", desc: "الحلقة 22 الثانية والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e22" },
      { title: "الحلقة 23", desc: "الحلقة 23 الثالثة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e23" },
      { title: "الحلقة 24", desc: "الحلقة 24 الرابعة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e24" },
      { title: "الحلقة 25", desc: "الحلقة 25 الخامسة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e25" },
      { title: "الحلقة 26", desc: "الحلقة 26 السادسة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e26" },
      { title: "الحلقة 27", desc: "الحلقة 27 السابعة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e27" },
      { title: "الحلقة 28", desc: "الحلقة 28 الثامنة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e28" },
      { title: "الحلقة 29", desc: "الحلقة 29 التاسعة والعشرون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e29" },
      { title: "الحلقة 30", desc: "الحلقة 30 الثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e30" },
      { title: "الحلقة 31", desc: "الحلقة 31 الحادية والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e31" },
      { title: "الحلقة 32", desc: "الحلقة 32 الثانية والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e32" },
      { title: "الحلقة 33", desc: "الحلقة 33 الثالثة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e33" },
      { title: "الحلقة 34", desc: "الحلقة 34 الرابعة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e34" },
      { title: "الحلقة 35", desc: "الحلقة 35 الخامسة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e35" },
      { title: "الحلقة 36", desc: "الحلقة 36 السادسة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e36" },
      { title: "الحلقة 37", desc: "الحلقة 37 السابعة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e37" },
      { title: "الحلقة 38", desc: "الحلقة 38 الثامنة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e38" },
      { title: "الحلقة 39", desc: "الحلقة 39 التاسعة والثلاثون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e39" },
      { title: "الحلقة 40", desc: "الحلقة 40 الأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e40" },
      { title: "الحلقة 41", desc: "الحلقة 41 الحادية والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e41" },
      { title: "الحلقة 42", desc: "الحلقة 42 الثانية والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e42" },
      { title: "الحلقة 43", desc: "الحلقة 43 الثالثة والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e43" },
      { title: "الحلقة 44", desc: "الحلقة 44 الرابعة والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e44" },
      { title: "الحلقة 45", desc: "الحلقة 45 الخامسة والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e45" },
      { title: "الحلقة 46", desc: "الحلقة 46 السادسة والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e46" },
      { title: "الحلقة 47 — الأخيرة", desc: "الحلقة 47 السابعة والأربعون من مسلسل الجريمة والمافيا التركي حلم أشرف، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/esref-ruya-s01e47" },
    ]
  },
  {
    id: "siyah-kalp",
    title: "قلب أسود",
    genre: "دراما عائلية",
    year: "2024-2025",
    seasons: "الموسم 1 (35 حلقة)",
    poster: "https://img-s3.onedio.com/id-69a2406178af2910ed519838/rev-0/w-900/h-1323/f-jpg/s-0d484fa5ee6faa905602377a8e789a88dad4e331.jpg",
    backdrop: "https://img-s3.onedio.com/id-69a2406178af2910ed519838/rev-0/w-900/h-1323/f-jpg/s-0d484fa5ee6faa905602377a8e789a88dad4e331.jpg",
    description: "سمرو، التي تركت أطفالها عندما كانت شابة وأسّست لنفسها عائلة وحياة جديدة، تُكتشف حقيقتها بعد سنوات عندما يتّضح لملك ونوح أنهما ابناها، فيسعيان وراءها ليفاجئا بحياتها الجديدة كلها في كابادوكيا مع زوجها من أغنى رجال الأعمال. رحلة انتقام ومصارعة عائلية تتعقد بعلاقات الحب الجديدة.",
    episodes: [
      { title: "الحلقة 1", desc: "الحلقة 1 الأولى من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e01" },
      { title: "الحلقة 2", desc: "الحلقة 2 الثانية من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e02" },
      { title: "الحلقة 3", desc: "الحلقة 3 الثالثة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e03" },
      { title: "الحلقة 4", desc: "الحلقة 4 الرابعة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e04" },
      { title: "الحلقة 5", desc: "الحلقة 5 الخامسة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e05" },
      { title: "الحلقة 6", desc: "الحلقة 6 السادسة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e06" },
      { title: "الحلقة 7", desc: "الحلقة 7 السابعة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e07" },
      { title: "الحلقة 8", desc: "الحلقة 8 الثامنة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e08" },
      { title: "الحلقة 9", desc: "الحلقة 9 التاسعة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e09" },
      { title: "الحلقة 10", desc: "الحلقة 10 العاشرة من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e10" },
      { title: "الحلقة 11", desc: "الحلقة 11 الحادية عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e11" },
      { title: "الحلقة 12", desc: "الحلقة 12 الثانية عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e12" },
      { title: "الحلقة 13", desc: "الحلقة 13 الثالثة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e13" },
      { title: "الحلقة 14", desc: "الحلقة 14 الرابعة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e14" },
      { title: "الحلقة 15", desc: "الحلقة 15 الخامسة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e15" },
      { title: "الحلقة 16", desc: "الحلقة 16 السادسة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e16" },
      { title: "الحلقة 17", desc: "الحلقة 17 السابعة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e17" },
      { title: "الحلقة 18", desc: "الحلقة 18 الثامنة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e18" },
      { title: "الحلقة 19", desc: "الحلقة 19 التاسعة عشر من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e19" },
      { title: "الحلقة 20", desc: "الحلقة 20 العشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e20" },
      { title: "الحلقة 21", desc: "الحلقة 21 الحادية والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e21" },
      { title: "الحلقة 22", desc: "الحلقة 22 الثانية والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e22" },
      { title: "الحلقة 23", desc: "الحلقة 23 الثالثة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e23" },
      { title: "الحلقة 24", desc: "الحلقة 24 الرابعة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e24" },
      { title: "الحلقة 25", desc: "الحلقة 25 الخامسة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e25" },
      { title: "الحلقة 26", desc: "الحلقة 26 السادسة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e26" },
      { title: "الحلقة 27", desc: "الحلقة 27 السابعة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e27" },
      { title: "الحلقة 28", desc: "الحلقة 28 الثامنة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e28" },
      { title: "الحلقة 29", desc: "الحلقة 29 التاسعة والعشرون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e29" },
      { title: "الحلقة 30", desc: "الحلقة 30 الثلاثون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e30" },
      { title: "الحلقة 31", desc: "الحلقة 31 الحادية والثلاثون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e31" },
      { title: "الحلقة 32", desc: "الحلقة 32 الثانية والثلاثون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e32" },
      { title: "الحلقة 33", desc: "الحلقة 33 الثالثة والثلاثون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e33" },
      { title: "الحلقة 34 — نهاية الموسم", desc: "الحلقة 34 الرابعة والثلاثون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e34" },
      { title: "الحلقة 35", desc: "الحلقة 35 الخامسة والثلاثون من المسلسل التركي قلب أسود، مترجمة كاملة بجودة HD — حلقة ختامية إضافية.", videoUrl: "https://w.anaplayer.online/albaplayer/siyah-kalp-s01e35" },
    ]
  },
  {
    id: "muhtemel-ask",
    title: "حب محتمل",
    genre: "رومانسي كوميدي",
    year: "2026",
    seasons: "الموسم 1 (20 حلقة)",
    poster: "https://upload.wikimedia.org/wikipedia/tr/3/38/MuhtemelAsk.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/tr/3/38/MuhtemelAsk.jpg",
    description: "دفنة، امرأة ناجحة بنت حياتها المهنية بجهدها وتعودت على الاستقلال، تكتشف مع الوقت أنها أصبحت وحيدة رغم نجاحها. وبينما تحاول فتح قلبها للحب لأول مرة، تجد نفسها عالقة بالمشاعر والغيرة بين رجلين مختلفين تمامًا: قادر الصريح الحاضر بقوة، وطوله الذي يخلط الأوراق ويعيد رسم المشهد.",
    episodes: [
      { title: "الحلقة 1", desc: "الحلقة 1 الأولى من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-t2dy1ufi9zd2.html", altUrls: ["https://mp4plus.cyou/embed-2dbzdi31ov6p.html","https://anafast.cyou/embed-zffky8alwi4d.html","https://vidoba.cyou/embed-ls55wzcd2af0.html","https://vidspeed.space/embed-g87sfloe2esy.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e01"] },
      { title: "الحلقة 2", desc: "الحلقة 2 الثانية من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-zdveq9x0d081.html", altUrls: ["https://mp4plus.cyou/embed-nge8l3l5vswr.html","https://anafast.cyou/embed-mw325sfxs70r.html","https://vidoba.cyou/embed-cb1jui0ocihj.html","https://vidspeed.space/embed-wj2slgm7fkib.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e02"] },
      { title: "الحلقة 3", desc: "الحلقة 3 الثالثة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-ez2gdgt10m06.html", altUrls: ["https://mp4plus.cyou/embed-ojf4ktok1syc.html","https://anafast.cyou/embed-kia6wgf48r17.html","https://vidoba.cyou/embed-mzkm16hmvhly.html","https://vidspeed.space/embed-agmj51qmzoc4.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e03"] },
      { title: "الحلقة 4", desc: "الحلقة 4 الرابعة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-zqglsbltdjvj.html", altUrls: ["https://mp4plus.cyou/embed-cn2r05ohf6ol.html","https://anafast.cyou/embed-e6zx4tmvjfhy.html","https://vidoba.cyou/embed-utatrsomtpcu.html","https://vidspeed.space/embed-dfwspiv9om6g.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e04"] },
      { title: "الحلقة 5", desc: "الحلقة 5 الخامسة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-iez4sa8n0etp.html", altUrls: ["https://mp4plus.cyou/embed-kcgi604mmzai.html","https://anafast.cyou/embed-hmbgchhpfcyc.html","https://vidspeed.space/embed-50xh7wpl2hi4.html","https://ok.ru/videoembed/15488448662219?autoplay=1","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e05"] },
      { title: "الحلقة 6", desc: "الحلقة 6 السادسة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-8yd7z7dj0yeo.html", altUrls: ["https://mp4plus.cyou/embed-cucjna88znmd.html","https://anafast.cyou/embed-2pwhenx4mtly.html","https://vidoba.cyou/embed-om5whnnsizy8.html","https://vidspeed.space/embed-4spbdb45zge6.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e06"] },
      { title: "الحلقة 7", desc: "الحلقة 7 السابعة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-tus7tgcmgu5m.html", altUrls: ["https://mp4plus.cyou/embed-bxbbqtb6387t.html","https://anafast.cyou/embed-x9x2e5abonfo.html","https://vidspeed.space/embed-b61193w3571e.html","https://ok.ru/videoembed/15657286896331?autoplay=1","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e07"] },
      { title: "الحلقة 8", desc: "الحلقة 8 الثامنة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-x20127vfq5cp.html", altUrls: ["https://mp4plus.cyou/embed-si49px2kkvnq.html","https://anafast.cyou/embed-1wq8b5pycekq.html","https://vidoba.cyou/embed-qhv5a9is35r1.html","https://vidspeed.space/embed-uaueulffozog.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e08"] },
      { title: "الحلقة 9", desc: "الحلقة 9 التاسعة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-r6ag550dses0.html", altUrls: ["https://mp4plus.cyou/embed-fzf22os04xkg.html","https://anafast.cyou/embed-gqjfiqepkiy8.html","https://vidoba.cyou/embed-481bsgqx1ylb.html","https://vidspeed.space/embed-bcmf883gvrpr.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e09"] },
      { title: "الحلقة 10", desc: "الحلقة 10 العاشرة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-8gen1mg9907t.html", altUrls: ["https://mp4plus.cyou/embed-lgzavzzzfdzn.html","https://vidoba.cyou/embed-d3mlpil20qkj.html","https://vidspeed.space/embed-nqjh8s466mos.html","https://ok.ru/videoembed/15891826346699?autoplay=1","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e10"] },
      { title: "الحلقة 11", desc: "الحلقة 11 الحادية عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-quo41kbwlgwv.html", altUrls: ["https://mp4plus.cyou/embed-4vxpxfc4vfw4.html","https://anafast.cyou/embed-s0879olngzm0.html","https://vidoba.cyou/embed-mmexx1641498.html","https://vidspeed.space/embed-olf4sfjxeprc.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e11"] },
      { title: "الحلقة 12", desc: "الحلقة 12 الثانية عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-esqmz2hb4zs8.html", altUrls: ["https://mp4plus.cyou/embed-se6c6zvyd4ao.html","https://anafast.cyou/embed-7gui06fiyro1.html","https://vidoba.cyou/embed-kaq4yja7ay6r.html","https://vidspeed.space/embed-o7m6tv53s2we.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e12"] },
      { title: "الحلقة 13", desc: "الحلقة 13 الثالثة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-e13zvr0smk0e.html", altUrls: ["https://mp4plus.cyou/embed-nrg8pymiffo6.html","https://vidoba.cyou/embed-gc5ncc30w7sr.html","https://vidspeed.space/embed-18g5nqk8k9to.html","https://ok.ru/videoembed/16120713317067?autoplay=1","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e13"] },
      { title: "الحلقة 14", desc: "الحلقة 14 الرابعة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-7osb12imhrz0.html", altUrls: ["https://mp4plus.cyou/embed-vyfmgyzniqil.html","https://anafast.cyou/embed-fgqgaqgxm2q5.html","https://vidoba.cyou/embed-yr8xef93q7yx.html","https://vidspeed.space/embed-81vrb64qszne.html","https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e14"] },
      { title: "الحلقة 15", desc: "الحلقة 15 الخامسة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://cdnplus.space/embed-czm8efu8nqwh.html", altUrls: ["https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e15"] },
      { title: "الحلقة 16", desc: "الحلقة 16 السادسة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e16" },
      { title: "الحلقة 17", desc: "الحلقة 17 السابعة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e17" },
      { title: "الحلقة 18", desc: "الحلقة 18 الثامنة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e18" },
      { title: "الحلقة 19", desc: "الحلقة 19 التاسعة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e19" },
      { title: "الحلقة 20", desc: "الحلقة 20 العشرون من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e20" },
    ]
  },
  {
    id: "bahar",
    title: "بهار",
    genre: "دراما طبية عائلية",
    year: "2024-2025",
    seasons: "3 مواسم كاملة (64 حلقة)",
    poster: "https://upload.wikimedia.org/wikipedia/tr/0/08/BaharDizi.jpg",
    backdrop: "https://upload.wikimedia.org/wikipedia/tr/0/08/BaharDizi.jpg",
    description: "بهار، ربة منزل محبة لعائلتها اعتزلت مهنة الطب منذ زواجها، تكتشف بعد أزمة صحية مفاجئة أن حياتها المثالية لم تكن كما بدت، فتقرر العودة إلى ممارسة الطب واستعادة حياتها وتحقيق أحلامها من جديد. دراما طبية عائلية مقتبسة من المسلسل الكوري الشهير الطبيبة تشا، بطولة ديمت إفجار وبورا جولسوي ومحمد يلماز آك.",
    episodes: [
      { title: "الحلقة 1", desc: "الحلقة 1 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e01" },
      { title: "الحلقة 2", desc: "الحلقة 2 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e02" },
      { title: "الحلقة 3", desc: "الحلقة 3 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e03" },
      { title: "الحلقة 4", desc: "الحلقة 4 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e04" },
      { title: "الحلقة 5", desc: "الحلقة 5 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e05" },
      { title: "الحلقة 6", desc: "الحلقة 6 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e06" },
      { title: "الحلقة 7", desc: "الحلقة 7 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e07" },
      { title: "الحلقة 8", desc: "الحلقة 8 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e08" },
      { title: "الحلقة 9", desc: "الحلقة 9 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e09" },
      { title: "الحلقة 10", desc: "الحلقة 10 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e10" },
      { title: "الحلقة 11", desc: "الحلقة 11 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e11" },
      { title: "الحلقة 12", desc: "الحلقة 12 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e12" },
      { title: "الحلقة 13", desc: "الحلقة 13 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e13" },
      { title: "الحلقة 14", desc: "الحلقة 14 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e14" },
      { title: "الحلقة 15", desc: "الحلقة 15 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e15" },
      { title: "الحلقة 16", desc: "الحلقة 16 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e16" },
      { title: "الحلقة 17", desc: "الحلقة 17 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e17" },
      { title: "الحلقة 18", desc: "الحلقة 18 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e18" },
      { title: "الحلقة 19", desc: "الحلقة 19 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e19" },
      { title: "الحلقة 20", desc: "الحلقة 20 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e20" },
      { title: "الحلقة 21", desc: "الحلقة 21 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e21" },
      { title: "الحلقة 22", desc: "الحلقة 22 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e22" },
      { title: "الحلقة 23", desc: "الحلقة 23 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e23" },
      { title: "الحلقة 24", desc: "الحلقة 24 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e24" },
      { title: "الحلقة 25", desc: "الحلقة 25 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e25" },
      { title: "الحلقة 26", desc: "الحلقة 26 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e26" },
      { title: "الحلقة 27", desc: "الحلقة 27 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e27" },
      { title: "الحلقة 28", desc: "الحلقة 28 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e28" },
      { title: "الحلقة 29", desc: "الحلقة 29 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e29" },
      { title: "الحلقة 30", desc: "الحلقة 30 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e30" },
      { title: "الحلقة 31", desc: "الحلقة 31 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e31" },
      { title: "الحلقة 32", desc: "الحلقة 32 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e32" },
      { title: "الحلقة 33", desc: "الحلقة 33 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e33" },
      { title: "الحلقة 34", desc: "الحلقة 34 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e34" },
      { title: "الحلقة 35", desc: "الحلقة 35 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e35" },
      { title: "الحلقة 36", desc: "الحلقة 36 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e36" },
      { title: "الحلقة 37", desc: "الحلقة 37 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e37" },
      { title: "الحلقة 38", desc: "الحلقة 38 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e38" },
      { title: "الحلقة 39", desc: "الحلقة 39 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e39" },
      { title: "الحلقة 40", desc: "الحلقة 40 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e40" },
      { title: "الحلقة 41", desc: "الحلقة 41 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e41" },
      { title: "الحلقة 42", desc: "الحلقة 42 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e42" },
      { title: "الحلقة 43", desc: "الحلقة 43 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e43" },
      { title: "الحلقة 44", desc: "الحلقة 44 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e44" },
      { title: "الحلقة 45", desc: "الحلقة 45 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e45" },
      { title: "الحلقة 46", desc: "الحلقة 46 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e46" },
      { title: "الحلقة 47", desc: "الحلقة 47 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e47" },
      { title: "الحلقة 48", desc: "الحلقة 48 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e48" },
      { title: "الحلقة 49", desc: "الحلقة 49 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e49" },
      { title: "الحلقة 50", desc: "الحلقة 50 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e50" },
      { title: "الحلقة 51", desc: "الحلقة 51 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e51" },
      { title: "الحلقة 52", desc: "الحلقة 52 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e52" },
      { title: "الحلقة 53", desc: "الحلقة 53 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e53" },
      { title: "الحلقة 54", desc: "الحلقة 54 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e54" },
      { title: "الحلقة 55", desc: "الحلقة 55 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e55" },
      { title: "الحلقة 56", desc: "الحلقة 56 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e56" },
      { title: "الحلقة 57", desc: "الحلقة 57 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e57" },
      { title: "الحلقة 58", desc: "الحلقة 58 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e58" },
      { title: "الحلقة 59", desc: "الحلقة 59 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e59" },
      { title: "الحلقة 60", desc: "الحلقة 60 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e60" },
      { title: "الحلقة 61", desc: "الحلقة 61 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e61" },
      { title: "الحلقة 62", desc: "الحلقة 62 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e62" },
      { title: "الحلقة 63", desc: "الحلقة 63 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e63" },
      { title: "الحلقة 64 — الحلقة الأخيرة", desc: "الحلقة 64 من مسلسل الدراما الطبية والعائلية التركي بهار، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/bahar-s01e64" }
    ]
  },
  {
    id: "gullerin-savasi",
    title: "حرب الورود",
    genre: "دراما رومانسية",
    year: "2014-2016",
    seasons: "موسمان كاملان (68 حلقة)",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G%C3%BCllerin_Sava%C5%9F%C4%B1.png/500px-G%C3%BCllerin_Sava%C5%9F%C4%B1.png",
    backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G%C3%BCllerin_Sava%C5%9F%C4%B1.png/500px-G%C3%BCllerin_Sava%C5%9F%C4%B1.png",
    description: "جولرو، فتاة وُلدت في أحد أحياء إسطنبول البسيطة وترعرعت قرب قصر كبير يعمل فيه والدها بستانيًا، وعاشت طفولتها محاطة بأحلام أوسع من عالمها. مع عودة جولفيم صاحبة القصر ودخول عمر إلى حياتهما، يتحول الإعجاب القديم إلى صراع مشاعر وحب متبادل بين امرأتين تحلمان بحياة واحدة. بطولة دملة سونميز وجالان إرغدور.",
    episodes: [
      { title: "الحلقة 1", desc: "الحلقة 1 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e01" },
      { title: "الحلقة 2", desc: "الحلقة 2 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e02" },
      { title: "الحلقة 3", desc: "الحلقة 3 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e03" },
      { title: "الحلقة 4", desc: "الحلقة 4 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e04" },
      { title: "الحلقة 5", desc: "الحلقة 5 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e05" },
      { title: "الحلقة 6", desc: "الحلقة 6 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e06" },
      { title: "الحلقة 7", desc: "الحلقة 7 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e07" },
      { title: "الحلقة 8", desc: "الحلقة 8 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e08" },
      { title: "الحلقة 9", desc: "الحلقة 9 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e09" },
      { title: "الحلقة 10", desc: "الحلقة 10 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e10" },
      { title: "الحلقة 11", desc: "الحلقة 11 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e11" },
      { title: "الحلقة 12", desc: "الحلقة 12 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e12" },
      { title: "الحلقة 13", desc: "الحلقة 13 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e13" },
      { title: "الحلقة 14", desc: "الحلقة 14 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e14" },
      { title: "الحلقة 15", desc: "الحلقة 15 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e15" },
      { title: "الحلقة 16", desc: "الحلقة 16 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e16" },
      { title: "الحلقة 17", desc: "الحلقة 17 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e17" },
      { title: "الحلقة 18", desc: "الحلقة 18 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e18" },
      { title: "الحلقة 19", desc: "الحلقة 19 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e19" },
      { title: "الحلقة 20", desc: "الحلقة 20 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e20" },
      { title: "الحلقة 21", desc: "الحلقة 21 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e21" },
      { title: "الحلقة 22", desc: "الحلقة 22 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e22" },
      { title: "الحلقة 23", desc: "الحلقة 23 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e23" },
      { title: "الحلقة 24", desc: "الحلقة 24 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e24" },
      { title: "الحلقة 25", desc: "الحلقة 25 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e25" },
      { title: "الحلقة 26", desc: "الحلقة 26 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e26" },
      { title: "الحلقة 27", desc: "الحلقة 27 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e27" },
      { title: "الحلقة 28", desc: "الحلقة 28 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e28" },
      { title: "الحلقة 29", desc: "الحلقة 29 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e29" },
      { title: "الحلقة 30", desc: "الحلقة 30 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e30" },
      { title: "الحلقة 31", desc: "الحلقة 31 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e31" },
      { title: "الحلقة 32", desc: "الحلقة 32 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e32" },
      { title: "الحلقة 33", desc: "الحلقة 33 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e33" },
      { title: "الحلقة 34", desc: "الحلقة 34 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e34" },
      { title: "الحلقة 35", desc: "الحلقة 35 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e35" },
      { title: "الحلقة 36", desc: "الحلقة 36 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e36" },
      { title: "الحلقة 37", desc: "الحلقة 37 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e37" },
      { title: "الحلقة 38", desc: "الحلقة 38 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e38" },
      { title: "الحلقة 39", desc: "الحلقة 39 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e39" },
      { title: "الحلقة 40", desc: "الحلقة 40 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e40" },
      { title: "الحلقة 41", desc: "الحلقة 41 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e41" },
      { title: "الحلقة 42", desc: "الحلقة 42 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e42" },
      { title: "الحلقة 43", desc: "الحلقة 43 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e43" },
      { title: "الحلقة 44", desc: "الحلقة 44 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e44" },
      { title: "الحلقة 45", desc: "الحلقة 45 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e45" },
      { title: "الحلقة 46", desc: "الحلقة 46 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e46" },
      { title: "الحلقة 47", desc: "الحلقة 47 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e47" },
      { title: "الحلقة 48 — نهاية الموسم الأول", desc: "الحلقة 48 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e48" },
      { title: "الحلقة 49", desc: "الحلقة 49 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e49" },
      { title: "الحلقة 50", desc: "الحلقة 50 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e50" },
      { title: "الحلقة 51", desc: "الحلقة 51 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e51" },
      { title: "الحلقة 52", desc: "الحلقة 52 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e52" },
      { title: "الحلقة 53", desc: "الحلقة 53 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e53" },
      { title: "الحلقة 54", desc: "الحلقة 54 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e54" },
      { title: "الحلقة 55", desc: "الحلقة 55 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e55" },
      { title: "الحلقة 56", desc: "الحلقة 56 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e56" },
      { title: "الحلقة 57", desc: "الحلقة 57 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e57" },
      { title: "الحلقة 58", desc: "الحلقة 58 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e58" },
      { title: "الحلقة 59", desc: "الحلقة 59 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e59" },
      { title: "الحلقة 60", desc: "الحلقة 60 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e60" },
      { title: "الحلقة 61", desc: "الحلقة 61 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e61" },
      { title: "الحلقة 62", desc: "الحلقة 62 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e62" },
      { title: "الحلقة 63", desc: "الحلقة 63 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e63" },
      { title: "الحلقة 64", desc: "الحلقة 64 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e64" },
      { title: "الحلقة 65", desc: "الحلقة 65 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e65" },
      { title: "الحلقة 66", desc: "الحلقة 66 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e66" },
      { title: "الحلقة 67", desc: "الحلقة 67 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e67" },
      { title: "الحلقة 68 — نهاية المسلسل", desc: "الحلقة 68 من مسلسل الدراما الرومانسية التركي حرب الورود، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/gullerin-savasi-s01e68" }
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
const WATCH_KEY = "masalsali_watch_progress";
const FAV_KEY = "masalsali_favorites";
const ADMIN_DATA_URL = "admin-data.json";

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

function loadSeriesData(base) {
  const defaults = base || JSON.parse(JSON.stringify(DEFAULT_SERIES_DATA));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) {
        // دمج: الافتراضيات تُحدِّث الحلقات لأي مسلسل يحمل نفس الـ id،
        // والمسلسلات المضافة يدويًا بالأدمن تبقى كما هي.
        const storedById = new Map(parsed.map((s) => [s.id, s]));
        const merged = [];
        for (const d of defaults) {
          const match = storedById.get(d.id);
          if (match && match.editedByAdmin) {
            // عُدّل من لوحة التحكم (اسم/صورة/وصف/حذف حلقات...) — احترمه كما هو تمامًا
            merged.push(match);
          } else if (match && Array.isArray(match.episodes) && match.episodes.length > d.episodes.length) {
            // نسخة قديمة غير معدلة فيها حلقات إضافية من نسخة سابقة — احترمها
            merged.push(match);
          } else {
            // نسخة قديمة غير معدلة أو لا توجد — حدِّث ببيانات الافتراضيات (حلقات أو تفاصيل جديدة)
            merged.push(d);
          }
        }
        for (const s of parsed) if (!merged.some((m) => m.id === s.id)) merged.push(s);
        return merged;
      }
    }
  } catch (e) {
    console.warn("تعذّرت قراءة البيانات المحفوظة، سيتم استخدام البيانات الافتراضية.", e);
  }
  return defaults;
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

/* ----------------------------------------------------------------------
   1ج) متابعة المشاهدة + المفضلة — تُحفظ على جهاز الزائر نفسه
------------------------------------------------------------------------- */

function getWatchProgress() {
  try {
    const raw = localStorage.getItem(WATCH_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (e) {
    return {};
  }
}

function watchProgressFor(seriesId) {
  const entry = getWatchProgress()[seriesId];
  return entry && Number.isInteger(entry.index) && entry.index >= 0 ? entry.index : -1;
}

function recordWatchProgress(seriesId, episodeIndex) {
  try {
    const progress = getWatchProgress();
    progress[seriesId] = { index: episodeIndex, at: Date.now() };
    localStorage.setItem(WATCH_KEY, JSON.stringify(progress));
    renderContinueSection();
  } catch (e) {
    /* تجاهل أخطاء التخزين */
  }
}

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function isFavorite(seriesId) {
  return getFavorites().includes(seriesId);
}

function toggleFavorite(seriesId) {
  const list = getFavorites();
  const idx = list.indexOf(seriesId);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(seriesId);
  try { localStorage.setItem(FAV_KEY, JSON.stringify(list)); } catch (e) { /* تجاهل */ }
  syncFavButtons();
  renderCatalog();
}

function syncFavButtons() {
  document.querySelectorAll(".fav-btn").forEach((btn) => {
    const id = btn.getAttribute("data-series");
    const fav = isFavorite(id);
    btn.classList.toggle("active", fav);
    btn.setAttribute("aria-label", fav ? "إزالة من مفضلتي" : "أضف إلى مفضلتي");
  });
  const toggle = document.getElementById("favToggleBtn");
  if (toggle && currentSeries) {
    const fav = isFavorite(currentSeries.id);
    toggle.classList.toggle("active", fav);
    toggle.textContent = fav ? "♥ في مفضلتك" : "♥ أضف إلى مفضلتي";
  }
}

function wireFavButton(btn, seriesId) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(seriesId);
  });
}

let SERIES_DATA = [];

/* ----------------------------------------------------------------------
   1د) مزامنة تعديلات لوحة التحكم مع كل الزوار عبر ملف admin-data.json
   الملف يُرفع مع الموقع؛ وأي تعديل من اللوحة يُصدَّر منه ويُنشر بالرفع.
------------------------------------------------------------------------- */

async function fetchRemoteOverrides() {
  try {
    const res = await fetch(ADMIN_DATA_URL, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch (e) {
    console.warn("لم يُعثر على ملف admin-data.json (طبيعي إن لم تنشر تعديلات بعد).", e);
    return null;
  }
}

function mergeRemoteOverrides(base, overrides) {
  const byId = new Map(overrides.map((s) => [s.id, s]));
  const out = base.map((d) => byId.get(d.id) || d);
  for (const s of overrides) {
    if (!out.some((m) => m.id === s.id)) out.push(s);
  }
  return out;
}

async function boot() {
  try {
    let base = JSON.parse(JSON.stringify(DEFAULT_SERIES_DATA));
    try {
      const remote = await fetchRemoteOverrides();
      if (Array.isArray(remote) && remote.length) base = mergeRemoteOverrides(base, remote);
    } catch (e) {
      console.warn("تعذّر دمج ملف التعديلات.", e);
    }
    SERIES_DATA = loadSeriesData(base);
    renderHero();
    buildFilterOptions();
    renderCatalog();
    renderContinueSection();
    syncFavButtons();
    setupSearch();
    setupFavorites();

    const target = new URLSearchParams(window.location.search).get("s");
    if (target && SERIES_DATA.some((x) => x.id === target)) {
      goToSeries(target);
    }
  } finally {
    const loader = el("appLoader");
    if (loader) loader.hidden = true;
  }

  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    } catch (e) { /* تجاهل */ }
  }
}

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
        if (tryNextSource(true)) return;
        showPlayerMessage(video.parentNode, "تعذّر تشغيل هذا الفيديو — تحقق من رابط .m3u8.");
        return;
      }
      if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
      else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
      else {
        if (tryNextSource(true)) return;
        showPlayerMessage(video.parentNode, "تعذّر تشغيل هذا الفيديو (HLS).");
      }
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

function getEpisodeSources(episode) {
  const sources = [];
  const push = (u) => {
    const clean = u ? String(u).trim() : "";
    if (clean && !sources.includes(clean)) sources.push(clean);
  };
  push(episode.videoUrl);
  (episode.altUrls || []).forEach(push);
  return sources;
}

function sourceMemoryKey() {
  if (!currentPlayingSeriesId || currentEpisodeIndex < 0) return null;
  return `masalsali_source_${currentPlayingSeriesId}_e${currentEpisodeIndex}`;
}

function renderSourceTabs(sources) {
  const bar = el("playerSources");
  const box = el("playerSourcesBtns");
  const hint = el("playerSourcesHint");
  if (!bar || !box) return;
  if (sources.length < 2) {
    bar.hidden = true;
    box.innerHTML = "";
    return;
  }
  bar.hidden = false;
  box.innerHTML = "";
  sources.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "player-source-btn";
    btn.dataset.index = String(i);
    btn.textContent = `المشغّل ${i + 1}`;
    btn.addEventListener("click", () => selectSource(src, i));
    if (getActiveSource() === src) btn.classList.add("active");
    box.appendChild(btn);
  });
  const active = box.querySelector(".active");
  if (active) active.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
}

function flashHint() {
  const hint = el("playerSourcesHint");
  if (!hint) return;
  hint.classList.remove("visible");
  requestAnimationFrame(() => hint.classList.add("visible"));
  setTimeout(() => hint.classList.remove("visible"), 6000);
}

function getActiveSource() {
  const key = sourceMemoryKey();
  if (!key) return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setActiveSource(url) {
  const key = sourceMemoryKey();
  if (!key || !url) return;
  try {
    localStorage.setItem(key, url);
  } catch {
    /* تجاهل */
  }
}

function selectSource(sourceUrl, index) {
  setActiveSource(sourceUrl);
  const all = getEpisodeSources(currentEpisode);
  all.forEach((src, i) => {
    const btn = el("playerSourcesBtns")?.querySelector(`[data-index="${i}"]`);
    if (btn) btn.classList.toggle("active", src === sourceUrl);
  });
  renderActiveSource(sourceUrl);
}

function tryNextSource(auto) {
  const all = getEpisodeSources(currentEpisode);
  if (all.length < 2) return false;
  const active = getActiveSource();
  const idx = all.findIndex((u) => u === active);
  const next = (idx + 1) % all.length;
  setActiveSource(all[next]);
  renderActiveSource(all[next]);
  if (auto) flashHint();
  return true;
}

function renderActiveSource(url) {
  const container = el("playerFrame");
  if (!container || !currentEpisode) return;
  if (!url) {
    showPlayerMessage(container, "لم يتم إضافة رابط فيديو لهذه الحلقة بعد.");
    return;
  }

  const { type, url: embedUrl } = toEmbeddableUrl(url);

  if (type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.addEventListener("ended", () => {
      const series = SERIES_DATA.find((s) => s.id === currentPlayingSeriesId);
      if (series && currentEpisodeIndex < series.episodes.length - 1) {
        playEpisode(series.id, currentEpisodeIndex + 1);
      }
    });
    video.addEventListener("error", () => {
      if (tryNextSource(true)) return;
      showPlayerMessage(container, "تعذّر تشغيل الفيديو — قد يكون الرابط معطلاً أو الصيغة غير مدعومة في هذا المتصفح.");
    });
    container.appendChild(video);
    if (/\.m3u8(\?.*)?$/i.test(embedUrl)) {
      enableHls(video, embedUrl);
    } else {
      video.src = embedUrl;
    }
  } else {
    const loader = document.createElement("div");
    loader.className = "player-frame-load";
    loader.innerHTML = '<span class="frame-spinner"></span><p>جارٍ تحميل المشغّل...</p><p class="player-load-note">إن استغرق مشغّل رقمًّا وقتًا طويلًا، جرّب رقمًا آخر من الأعلى.</p>';
    container.appendChild(loader);

    let loaded = false;
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    container.appendChild(iframe);

    iframe.addEventListener("load", () => {
      loaded = true;
      if (loader.isConnected) loader.remove();
    });
    setTimeout(() => {
      if (loaded || !loader.isConnected) return;
      loader.className = "player-frame-error";
      loader.innerHTML = `
        <span class="frame-error-icon">!</span>
        <p>استغرق المشغّل وقتًا طويلًا — إن لم يعمل جرّب مشغّلاً آخر من الأعلى.</p>
        <button type="button" class="btn btn-gold btn-sm" data-retry>إعادة المحاولة</button>`;
      const retry = loader.querySelector("[data-retry]");
      if (retry) retry.addEventListener("click", () => {
        if (tryNextSource(false)) return;
        renderActiveSource(url);
      });
    }, 15000);
  }
}

function renderPlayer(episode) {
  currentEpisode = episode;
  const container = el("playerFrame");
  if (!container) return;
  container.innerHTML = "";
  const sources = getEpisodeSources(episode);
  if (!sources.length) {
    showPlayerMessage(container, "لم يتم إضافة رابط فيديو لهذه الحلقة بعد.");
    renderSourceTabs([]);
    return;
  }

  renderSourceTabs(sources);
  const active = getActiveSource();
  renderActiveSource(active && sources.includes(active) ? active : sources[0]);
}

/* ----------------------------------------------------------------------
   4) التنقل بين الصفحات
------------------------------------------------------------------------- */

function stopActivePlayer() {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    if (exit) exit.call(document);
  }
  const frame = el("playerFrame");
  if (frame) frame.innerHTML = "";
}

function showView(name) {
  const leavingPlayer = name !== "player" && views.player && !views.player.hidden;
  Object.entries(views).forEach(([key, node]) => {
    node.hidden = key !== name;
  });
  if (leavingPlayer) stopActivePlayer();
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

let currentPlayingSeriesId = null;
let currentEpisodeIndex = -1;
let currentEpisode = null;

function playEpisode(seriesId, episodeIndex) {
  const series = SERIES_DATA.find((s) => s.id === seriesId);
  if (!series) return;
  const episode = series.episodes[episodeIndex];
  if (!episode) return;

  currentSeries = series;
  currentPlayingSeriesId = seriesId;
  currentEpisodeIndex = episodeIndex;
  el("playerSeriesName").textContent = series.title;
  el("playerEpisodeTitle").textContent = episode.title;
  el("playerEpisodeDesc").textContent = episode.desc || "";
  renderPlayer(episode);
  renderEpisodeList(el("playerEpisodeList"), series, episodeIndex);
  updatePlayerNav();
  showView("player");
  recordWatchProgress(seriesId, episodeIndex);
}

function updatePlayerNav() {
  const series = SERIES_DATA.find((s) => s.id === currentPlayingSeriesId);
  const valid = series && Number.isInteger(currentEpisodeIndex);
  el("prevEpisodeBtn").hidden = !(valid && currentEpisodeIndex > 0);
  el("nextEpisodeBtn").hidden = !(valid && currentEpisodeIndex < series.episodes.length - 1);
}

/* ----------------------------------------------------------------------
   5) عرض شبكة المسلسلات (الصفحة الرئيسية)
------------------------------------------------------------------------- */

function createPosterCard(series, index, onOpen) {
  const card = document.createElement("div");
  card.className = "poster-card reveal";
  card.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
  const title = escapeHtml(series.title);
  card.innerHTML = `
      <img src="${escapeHtml(series.poster)}" alt="${title}" loading="lazy" decoding="async">
      <div class="poster-card-fade"></div>
      <span class="poster-card-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 5.5L18 12L8 18.5V5.5Z" fill="currentColor"/></svg>
      </span>
      <div class="poster-card-label">
        <p class="poster-card-title">${title}</p>
        <p class="poster-card-genre">${escapeHtml(series.genre)} · ${escapeHtml(series.year)}</p>
      </div>
      <button type="button" class="poster-card-btn" aria-label="افتح ${title}"></button>
      <button type="button" class="fav-btn" data-series="${escapeHtml(series.id)}" aria-label="أضف إلى مفضلتي">♥</button>
    `;
  applyImageFallback(card.querySelector("img"));
  card.querySelector(".poster-card-btn").addEventListener("click", () => {
    if (onOpen) onOpen();
    else goToSeries(series.id);
  });
  wireFavButton(card.querySelector(".fav-btn"), series.id);
  revealObserver.observe(card);
  return card;
}

function renderPosterGrid(list) {
  const grid = el("posterGrid");
  grid.innerHTML = "";

  list.forEach((series, index) => {
    grid.appendChild(createPosterCard(series, index));
  });

  el("resultsCount").textContent = `${list.length} مسلسل`;
  el("emptyState").hidden = list.length !== 0;
  syncFavButtons();
}

function renderContinueSection() {
  const section = el("continueSection");
  const grid = el("continueGrid");
  const progress = getWatchProgress();

  const entries = Object.entries(progress)
    .filter(([, e]) => e && Number.isInteger(e.index) && e.index >= 0)
    .sort((a, b) => (b[1].at || 0) - (a[1].at || 0));

  const list = entries
    .map(([id]) => SERIES_DATA.find((s) => s.id === id))
    .filter((s) => s && progress[s.id].index < s.episodes.length);

  if (!list.length) {
    section.hidden = true;
    grid.innerHTML = "";
    return;
  }

  section.hidden = false;
  grid.innerHTML = "";
  list.forEach((series, index) => {
    const epIndex = progress[series.id].index;
    const card = createPosterCard(series, index, () => playEpisode(series.id, epIndex));
    const badge = document.createElement("span");
    badge.className = "progress-badge";
    badge.textContent = `وصلت للحلقة ${epIndex + 1}`;
    card.appendChild(badge);
    grid.appendChild(card);
  });
  syncFavButtons();
}

let currentSearchQuery = "";
let favFilterActive = false;

function applySort(list) {
  const mode = el("sortSelect").value;
  const copy = list.slice();
  if (mode === "recent") copy.sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0));
  else if (mode === "title") copy.sort((a, b) => a.title.localeCompare(b.title, "ar"));
  else if (mode === "episodes") copy.sort((a, b) => b.episodes.length - a.episodes.length);
  return copy;
}

function buildFilterOptions() {
  const select = el("genreFilter");
  const current = select.value;
  const genres = [...new Set(SERIES_DATA.map((s) => s.genre).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ar"));
  select.innerHTML = `<option value="">كل الأنواع</option>` +
    genres.map((g) => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
  select.value = current;
}

function renderCatalog() {
  let list = SERIES_DATA.slice();
  if (favFilterActive) {
    const favs = getFavorites();
    list = list.filter((s) => favs.includes(s.id));
  }
  const genre = el("genreFilter").value;
  if (genre) list = list.filter((s) => s.genre === genre);
  const q = currentSearchQuery.trim().toLowerCase();
  if (q) list = list.filter((s) => s.title.toLowerCase().includes(q) || s.genre.toLowerCase().includes(q));
  renderPosterGrid(applySort(list));
}

function setupFavorites() {
  el("favFilterBtn").addEventListener("click", () => {
    favFilterActive = !favFilterActive;
    el("favFilterBtn").classList.toggle("active", favFilterActive);
    el("favFilterBtn").textContent = favFilterActive ? "♥ مفضلتي (عرض الكل)" : "♥ مفضلتي";
    renderCatalog();
  });
  el("favToggleBtn").addEventListener("click", () => {
    if (currentSeries) toggleFavorite(currentSeries.id);
  });
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
  el("heroImage").setAttribute("fetchpriority", "high");
  el("heroImage").setAttribute("decoding", "async");
  applyImageFallback(el("heroImage"));
  el("heroTitle").textContent = featured.title;
  el("heroDesc").textContent = featured.description;

  el("heroWatchBtn").onclick = () => playEpisode(featured.id, 0);
  el("heroInfoBtn").onclick = () => goToSeries(featured.id);
}

/* ----------------------------------------------------------------------
   7) عرض صفحة تفاصيل المسلسل
------------------------------------------------------------------------- */

/* ============ إعدادات الإعلانات (Adstera) ============
   لتفعيل الإعلانات:
   1) افتح index.html — داخل كل قفص `<div class="ad-slot" ...>` الصق كود Adstera
      مكان تسمية "إعلان" (تظهر فوق التذييل وفي صفحة المشغّل).
   2) لتفعيل الكتل الـ Native داخل قائمة الحلقات اجعل native = true أدناه. */
const AD_SETTINGS = {
  player: false,
  footer: false,
  native: false,
  nativeEvery: 6,
  nativeMax: 3,
};

function makeAdSlot(zone) {
  const box = document.createElement("div");
  box.className = `ad-slot ad-slot-${zone}`;
  box.dataset.adZone = zone;
  box.innerHTML = '<span class="ad-slot-label">إعلان</span>';
  return box;
}

function injectNativeAdSlots(listEl) {
  if (!AD_SETTINGS.native) return;
  if (!listEl || listEl.querySelector(".ad-native-shell")) return;
  const items = listEl.querySelectorAll("li");
  const step = Math.max(4, AD_SETTINGS.nativeEvery);
  const limit = Math.max(1, AD_SETTINGS.nativeMax);
  let inserted = 0;
  for (let after = step; after < items.length && inserted < limit; after += step) {
    const shell = document.createElement("li");
    shell.className = "ad-native-shell";
    shell.appendChild(makeAdSlot("native"));
    listEl.insertBefore(shell, items[after]);
    inserted++;
  }
}

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
  injectNativeAdSlots(container);
}

function renderSeriesView(series) {
  el("seriesBackdrop").src = series.backdrop;
  el("seriesBackdrop").alt = series.title;
  el("seriesBackdrop").setAttribute("decoding", "async");
  applyImageFallback(el("seriesBackdrop"));
  el("seriesPoster").src = series.poster;
  el("seriesPoster").alt = series.title;
  el("seriesPoster").setAttribute("decoding", "async");
  applyImageFallback(el("seriesPoster"));
  el("seriesGenre").textContent = series.genre;
  el("seriesTitle").textContent = series.title;
  el("seriesMeta").textContent = `${series.seasons} · ${series.episodes.length} حلقة · ${series.year}`;
  el("seriesDesc").textContent = series.description;
  el("episodeCount").textContent = `${series.episodes.length} حلقة`;

  const resumeIndex = watchProgressFor(series.id);
  const resumeBtn = el("playFirstBtn");
  if (resumeIndex >= 0 && resumeIndex < series.episodes.length) {
    resumeBtn.textContent = `أكمل المشاهدة — ${series.episodes[resumeIndex].title}`;
    resumeBtn.onclick = () => playEpisode(series.id, resumeIndex);
  } else {
    resumeBtn.textContent = "تشغيل الحلقة الأولى";
    resumeBtn.onclick = () => playEpisode(series.id, 0);
  }
  syncFavButtons();

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

el("prevEpisodeBtn").addEventListener("click", () => {
  if (currentPlayingSeriesId && currentEpisodeIndex > 0) {
    playEpisode(currentPlayingSeriesId, currentEpisodeIndex - 1);
  }
});

el("nextEpisodeBtn").addEventListener("click", () => {
  const s = SERIES_DATA.find((x) => x.id === currentPlayingSeriesId);
  if (s && currentEpisodeIndex < s.episodes.length - 1) {
    playEpisode(currentPlayingSeriesId, currentEpisodeIndex + 1);
  }
});

/* فلترة وترتيب المكتبة */
el("genreFilter").addEventListener("change", renderCatalog);
el("sortSelect").addEventListener("change", renderCatalog);

/* مشاركة */
function copyFallback(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  } catch (e) { /* تجاهل */ }
  alert("تم نسخ رابط المشاركة — ألصقه أينما شئت.");
}

function shareSeries(series) {
  const text = `شاهد المسلسل "${series.title}" على مسلسلي`;
  if (navigator.share) navigator.share({ title: series.title, text, url: window.location.href }).catch(() => {});
  else copyFallback(`${text}\n${window.location.href}`);
}

function shareEpisode() {
  if (!currentSeries) return;
  const series = SERIES_DATA.find((s) => s.id === currentPlayingSeriesId);
  const ep = series && Number.isInteger(currentEpisodeIndex) ? series.episodes[currentEpisodeIndex] : null;
  const text = `أشاهد الآن ${currentSeries.title}${ep ? " — " + ep.title : ""} على مسلسلي`;
  if (navigator.share) navigator.share({ title: currentSeries.title, text, url: window.location.href }).catch(() => {});
  else copyFallback(`${text}\n${window.location.href}`);
}

el("seriesShareBtn").addEventListener("click", () => { if (currentSeries) shareSeries(currentSeries); });
el("playerShareBtn").addEventListener("click", shareEpisode);

/* ----------------------------------------------------------------------
   8ب) لوحة التحكم — كلمة السر
   لتغيير كلمة السر لاحقًا: عدّل القيمة التالية فقط.
------------------------------------------------------------------------- */

const ADMIN_PASSWORD = "123456";

function getAdminPassword() {
  return localStorage.getItem("masalsali_admin_password") || ADMIN_PASSWORD;
}

function setAdminPassword(pw) {
  localStorage.setItem("masalsali_admin_password", pw);
}

el("changePasswordBtn").addEventListener("click", () => {
  const input = el("changePasswordInput");
  const value = input.value.trim();
  if (value.length < 4) {
    alert("كلمة السر يجب أن تكون 4 أحرف أو أكثر.");
    input.focus();
    return;
  }
  setAdminPassword(value);
  input.value = "";
  const btn = el("changePasswordBtn");
  const original = btn.textContent;
  btn.textContent = "تم الحفظ ✓";
  setTimeout(() => { btn.textContent = original; }, 1400);
});

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

  if (value === getAdminPassword()) {
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

/* إنشاء ملف admin-data.json لإظهار تعديلات اللوحة لكل الزوار بعد رفعه مع الموقع */
function exportAdminData() {
  const overrides = SERIES_DATA.filter((s) => s.editedByAdmin);
  if (!overrides.length) {
    alert("لا توجد تعديلات محفوظة من لوحة التحكم لتصديرها. عدّل مسلسلاً أو أضف حلقة واحفظها أولًا.");
    return;
  }
  const payload = overrides.map((s) => ({
    id: s.id,
    title: s.title,
    genre: s.genre,
    year: s.year,
    seasons: s.seasons,
    poster: s.poster,
    backdrop: s.backdrop,
    description: s.description,
    editedByAdmin: true,
    episodes: (s.episodes || []).map((e) => ({ title: e.title, desc: e.desc, videoUrl: e.videoUrl })),
  }));
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "admin-data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  el("adminSyncHint").hidden = false;
}

el("adminExportBtn").addEventListener("click", exportAdminData);

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
  return { title: "", desc: "", videoUrl: "", altUrls: [] };
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
        <input type="text" class="ep-alt" placeholder="روابط مشغّلات بديلة — افصل بفواصل (اختياري)" value="${escapeHtml((ep.altUrls || []).join(", "))}">
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
      <input type="text" class="ep-alt" placeholder="روابط مشغّلات بديلة — افصل بفواصل (اختياري)">
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
      altUrls: row.querySelector(".ep-alt").value.split(",")
        .map((u) => u.trim())
        .filter((u) => u),
    }))
    .filter((ep) => ep.title || ep.videoUrl || ep.altUrls.length);

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
    editedByAdmin: true,
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
  buildFilterOptions();
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
  buildFilterOptions();
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
   9) البدء — تحميل البيانات (مع ملف تعديلات الأدمن إن وُجد) ثم العرض
------------------------------------------------------------------------- */

boot();
