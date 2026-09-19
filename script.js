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
    poster: "https://www.qrmzi.tv/wp-content/uploads/2025/11/Esref-Ruya-cover.jpg",
    backdrop: "https://www.qrmzi.tv/wp-content/uploads/2025/11/Esref-Ruya-cover.jpg",
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
    seasons: "الموسم 1 (34 حلقة)",
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
    poster: "https://w1.qrmzi.cyou/wp-content/uploads/2026/06/Muhtemel-Ask-Poster.jpg",
    backdrop: "https://w1.qrmzi.cyou/wp-content/uploads/2026/06/Muhtemel-Ask-Cover-470x255.jpg",
    description: "دفنة، امرأة ناجحة بنت حياتها المهنية بجهدها وتعودت على الاستقلال، تكتشف مع الوقت أنها أصبحت وحيدة رغم نجاحها. وبينما تحاول فتح قلبها للحب لأول مرة، تجد نفسها عالقة بالمشاعر والغيرة بين رجلين مختلفين تمامًا: قادر الصريح الحاضر بقوة، وطوله الذي يخلط الأوراق ويعيد رسم المشهد.",
    episodes: [
      { title: "الحلقة 1", desc: "الحلقة 1 الأولى من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e01" },
      { title: "الحلقة 2", desc: "الحلقة 2 الثانية من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e02" },
      { title: "الحلقة 3", desc: "الحلقة 3 الثالثة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e03" },
      { title: "الحلقة 4", desc: "الحلقة 4 الرابعة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e04" },
      { title: "الحلقة 5", desc: "الحلقة 5 الخامسة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e05" },
      { title: "الحلقة 6", desc: "الحلقة 6 السادسة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e06" },
      { title: "الحلقة 7", desc: "الحلقة 7 السابعة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e07" },
      { title: "الحلقة 8", desc: "الحلقة 8 الثامنة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e08" },
      { title: "الحلقة 9", desc: "الحلقة 9 التاسعة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e09" },
      { title: "الحلقة 10", desc: "الحلقة 10 العاشرة من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e10" },
      { title: "الحلقة 11", desc: "الحلقة 11 الحادية عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e11" },
      { title: "الحلقة 12", desc: "الحلقة 12 الثانية عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e12" },
      { title: "الحلقة 13", desc: "الحلقة 13 الثالثة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e13" },
      { title: "الحلقة 14", desc: "الحلقة 14 الرابعة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e14" },
      { title: "الحلقة 15", desc: "الحلقة 15 الخامسة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e15" },
      { title: "الحلقة 16", desc: "الحلقة 16 السادسة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e16" },
      { title: "الحلقة 17", desc: "الحلقة 17 السابعة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e17" },
      { title: "الحلقة 18", desc: "الحلقة 18 الثامنة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e18" },
      { title: "الحلقة 19", desc: "الحلقة 19 التاسعة عشر من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e19" },
      { title: "الحلقة 20", desc: "الحلقة 20 العشرون من المسلسل الرومانسي الكوميدي حب محتمل، مترجمة كاملة بجودة HD.", videoUrl: "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e20" },
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
  const defaults = JSON.parse(JSON.stringify(DEFAULT_SERIES_DATA));
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
          if (match && Array.isArray(match.episodes) && match.episodes.length > d.episodes.length) {
            merged.push(match); // الأدمن أضاف حلقات يدويًا أكبر — احترمها
          } else {
            merged.push(d); // حدِّث ببيانات الافتراضيات (حلقات أو تفاصيل جديدة)
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
