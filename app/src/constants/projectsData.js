export const getProjectsData = (t) => {
  const PROJECTS = [
    {
      id: "stelix-website",
      name: "Stelix Website",
      description: t("stelix_website"),
      wistiaId: "tp8e04tq2i",
    },
    {
      id: "stelix",
      name: "Stelix",
      description:
        "یک پروژه فول استک با استفاده از React، Vite، React Query، Supabase و بسیاری تکنولوژی‌ دیگر. یک سیستم پذیرش هتل که شامل احراز هویت، مدیریت رزروها، عملیات CRUD، فرم‌های پیشرفته و داشبورد تحلیلی می‌باشد.",
      wistiaId: "ei6wx8l1ph",
    },
    {
      id: "zesty",
      name: "Zesty",
      description:
        "وب اپ ریسپانسیو برای سفارش غذا از رستوران با استفاده از React + Vite. این اپ از Three.js و Redux Toolkit نیز بهره برده و یک تجربه کاربری دلچسب به کاربر می دهد.",
      wistiaId: "yug44k97un",
    },
    {
      id: "travex",
      name: "Travex",
      description:
        "یک پروژه ریسپانسیو با ری‌اکت با استفاده از useReducer و Context API برای مدیریت کردن state ها. یک نقشه تعاملگرا با استفاده از leaflet. ابزاری همچون Datepicker, React-toastify, react-router-dom برای یک تجربه کاربری دلچسب",
      wistiaId: "yzs3wso7l9",
    },
    {
      id: "rateflicks",
      name: "Rateflicks",
      description:
        "یک اپلیکیشن ری‌اکت برای رتبه‌بندی فیلم ها کاملا ریسپانسیو. قابلیت جستجوی فیلم‌ها، و نمایش بر اساس رتبه بندی ها. قابلیت هایی مانند جستجو، واکشی داده‌ها از API. همچنین از react-spinners و react-toastify استفاده کرده‌ام.",
      wistiaId: "1xj3edyvq7",
    },
    {
      id: "goal-tracker",
      name: "Goal Tracker",
      description:
        "یک وب اپ واکنش‌گرای React برای ردیابی اهداف بر اساس اولویت‌ بندی آن‌ هاست. برنامه یک نوار پیشرفت برای نمایش وضعیت اهداف تکمیل‌ شده داره و با استفاده از React Hooks و مفاهیم پیشرفته‌ای چون forwardRef، کدنویسی شده.",
      wistiaId: "ccdh5lh9yp",
    },
    {
      id: "findish",
      name: "Findish",
      description:
        "این پروژه یک اپلیکیشن دستور پخت کاملاً واکنش‌گراست که با استفاده از جاوااسکریپت خالص (Vanilla JS) و SASS توسعه داده شده است. این برنامه با ادغام API، به کاربران امکان می‌دهد دستور پخت‌های مختلف را جستجو، کشف و به لیست خود اضافه کنند.",
      wistiaId: "ntkhrzhd9x",
    },
    {
      id: "banklist",
      name: "Banklist",
      description:
        "یک پروژه بانکی هست که از دو بخش وبسایت سمت مشتری و یک وب‌ اپ واکنش‌گرا برای کارمندان تشکیل شده. با JS توسعه یافته، برای مدیریت و نمایش تراکنش‌ های بانکی. رابط کاربری روان، قابلیت‌ فیلتر پیشرفته و نمایش کاربردی طیف وسیعی از متدهای آرایه در JS.",
      wistiaId: "9gi2lfw6g1",
    },
    {
      id: "tele-note",
      name: "TeleNote",
      description:
        "یک وب اپ شبکه‌اجتماعی کامل هست که با استفاده از MERN توسعه یافته. کاربران میتوانند اکانت بسازند و فعالیت‌ ها و لحظات خود را با دیگران به اشتراک بذارند. قابلیت‌ هایی مانند عملیات CRUD، لایک کردن، کامنت گذاشتن، جستجوی پیشرفته و صفحه‌بندی.",
      wistiaId: "vx3wuep3a3",
    },
    {
      id: "track-map",
      name: "Track Map",
      description:
        "یک وب اپ نقشه واکنش‌گرا که به کاربران امکان میده فعالیت‌ های خود را بر اساس موقعیت فعلی یا هر مکان دلخواه دیگری ردیابی و ثبت کنند. این برنامه از APIهای مختلفی مانند Big Data Cloud و OpenStreetMap برای ارائه نقشه‌ های دقیق و تعاملی بهره میبرد.",
      wistiaId: "av0onexjn1",
    },
  ];

  return PROJECTS;
};
