export const getQuotesData = (t) => {
  const QUOTES = [
    {
      id: 1,
      author: t("alan_turing"),
      quote:
        "گاهی اوقات افرادی که هیچکس تصور نمی کند بتوانند کاری انجام دهند، کارهایی را انجام می دهند که هیچکس نمی تواند تصور کند.",
      image: "/images/AlanTuring-optimized.webp",
      alt: "Alan Turing",
      bg: "linear-gradient(45deg, #3503ad, #f7308c)",
      shadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.5)",
    },
    {
      id: 2,
      author: t("bill_gates"),
      quote:
        "جشن گرفتن موفقیت خوب است، اما از آن مهم ‌تر، توجه کردن به درس‌ هایی است که از شکست می ‌گیریم.",
      image: "/images/BillGates1.webp",
      alt: "Bill Gates",
      bg: "linear-gradient(45deg, #ccff00, #09afff)",
      shadow: "0px 0px 15px 7px rgba(0, 0, 0, 0.8)",
    },
    {
      id: 3,
      author: t("margaret_hamilton"),
      quote:
        'هیچوقت نباید از گفتن "نمی دانم" یا "نمی فهمم" یا پرسش سوالات "احمقانه"، ترسید چون هیچ سوالی احمقانه نیست.',
      image: "/images/MargaretHamilton-optimized.webp",
      alt: "Margaret Hamilton",
      bg: "linear-gradient(45deg, #e91e63, #ffeb3b)",
      shadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.5)",
    },
  ];

  return QUOTES;
};
