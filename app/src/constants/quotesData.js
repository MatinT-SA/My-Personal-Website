export const getQuotesData = (t) => {
  const QUOTES = [
    {
      id: 1,
      author: t("quotes.alan_turing.name"),
      quote: t("quotes.alan_turing.text"),
      image: "/images/AlanTuring-optimized.webp",
      alt: "Alan Turing",
      bg: "linear-gradient(45deg, #3503ad, #f7308c)",
      shadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.5)",
    },
    {
      id: 2,
      author: t("quotes.bill_gates.name"),
      quote: t("quotes.bill_gates.text"),
      image: "/images/BillGates1.webp",
      alt: "Bill Gates",
      bg: "linear-gradient(45deg, #ccff00, #09afff)",
      shadow: "0px 0px 15px 7px rgba(0, 0, 0, 0.8)",
    },
    {
      id: 3,
      author: t("quotes.margaret_hamilton.name"),
      quote: t("quotes.margaret_hamilton.text"),
      image: "/images/MargaretHamilton-optimized.webp",
      alt: "Margaret Hamilton",
      bg: "linear-gradient(45deg, #e91e63, #ffeb3b)",
      shadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.5)",
    },
  ];

  return QUOTES;
};
