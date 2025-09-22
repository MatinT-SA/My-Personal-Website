"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const QUOTES = [
  {
    id: 1,
    author: "Alan Turing",
    quote:
      "گاهی اوقات افرادی که هیچکس تصور نمی کند بتوانند کاری انجام دهند، کارهایی را انجام می دهند که هیچکس نمی تواند تصور کند.",
    image: "/Content/images/AlanTuring-optimized.webp",
    alt: "Alan Turing",
    bg: "linear-gradient(45deg, #3503ad, #f7308c)",
    shadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.5)",
  },
  {
    id: 2,
    author: "Bill Gates",
    quote:
      "جشن گرفتن موفقیت خوب است، اما از آن مهم ‌تر، توجه کردن به درس‌ هایی است که از شکست می ‌گیریم.",
    image: "/Content/images/BillGates1.webp",
    alt: "Bill Gates",
    bg: "linear-gradient(45deg, #ccff00, #09afff)",
    shadow: "0px 0px 15px 7px rgba(0, 0, 0, 0.8)",
  },
  {
    id: 3,
    author: "Margaret Hamilton",
    quote:
      'هیچوقت نباید از گفتن "نمی دانم" یا "نمی فهمم" یا پرسش سوالات "احمقانه"، ترسید چون هیچ سوالی احمقانه نیست.',
    image: "/Content/images/MargaretHamilton-optimized.webp",
    alt: "Margaret Hamilton",
    bg: "linear-gradient(45deg, #e91e63, #ffeb3b)",
    shadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.5)",
  },
];

export default function Entrepreneur() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section
      id="entrepreneur-quotes"
      className="bg-[rgba(168,198,222,0.2)] rounded-[15px_300px] md:rounded-[15px_150px] sm:rounded-[15px_75px] py-12 my-8 mx-20"
      dir="rtl"
    >
      <div
        id="entrepreneur-quotes-container"
        className="w-full flex justify-around relative flex-wrap gap-y-12"
      >
        <motion.h2
          className="main-titles text-center text-3xl font-bold mb-12 text-purple-primary w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          سخنان نوابغ دنیای کامپیوتر
        </motion.h2>

        {QUOTES.map((quote) => (
          <div key={quote.id} className="w-[265px] flex flex-col items-center">
            <motion.div
              className="w-full h-[400px] relative bg-black flex justify-center items-center rounded-[10%] mx-auto"
              initial={{ opacity: 0, y: "25%" }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ x: 4, skewX: 0.5, skewY: -0.4 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.4,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className="w-1/2 h-full absolute left-0 top-0 pointer-events-none rounded-[10%]"
                style={{
                  background: quote.bg,
                  boxShadow: quote.shadow,
                  opacity: 0.3,
                }}
              />

              <div
                className="w-full h-full flex justify-center items-center rounded-[10%] overflow-hidden absolute"
                style={{
                  transform: "skew(10px, 10px)",
                }}
              >
                <Image
                  src={quote.image}
                  alt={quote.alt}
                  width={265}
                  height={400}
                  quality={75}
                  priority={false}
                  className="w-full h-full object-cover rounded-[10%]"
                />
              </div>

              <motion.div
                className="w-[50px] h-[50px] absolute right-5 bottom-5 rounded-full cursor-pointer shadow-md"
                style={{
                  background: quote.bg,
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={() => handleMouseEnter(quote.id)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  width: hoveredCard === quote.id ? "100%" : "50px",
                  height: hoveredCard === quote.id ? "100%" : "50px",
                  right: hoveredCard === quote.id ? 0 : 20,
                  bottom: hoveredCard === quote.id ? 0 : 20,
                  borderRadius: hoveredCard === quote.id ? "10%" : "50%",
                  opacity: hoveredCard === quote.id ? 0.9 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="flex justify-center items-center text-xs tracking-wide text-white absolute inset-0"
                  style={{
                    display: hoveredCard === quote.id ? "none" : "flex",
                    transitionDelay: "0.5s",
                  }}
                >
                  بخوان
                </span>
              </motion.div>

              <motion.div
                className="p-5 box-border text-white text-center leading-loose text-2xl z-10 pointer-events-none"
                initial={{ opacity: 0, visibility: "hidden" }}
                animate={{
                  opacity: hoveredCard === quote.id ? 1 : 0,
                  visibility: hoveredCard === quote.id ? "visible" : "hidden",
                }}
                transition={{
                  duration: 0.2,
                  delay: hoveredCard === quote.id ? 0.5 : 0,
                }}
              >
                {quote.quote}
              </motion.div>
            </motion.div>

            <h3 className="author-name mt-4">{quote.author}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
