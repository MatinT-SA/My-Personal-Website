"use client";

import QuoteCard from "@/app/components/entrepreneur/QuoteCard";
import { getQuotesData } from "@/app/src/constants/quotesData";
import { useQuoteCard } from "@/lib/hooks/useQuoteCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Entrepreneur() {
  const t = useTranslations("entrepreneur");

  const QUOTES = useMemo(() => getQuotesData(t), [t]);

  const { hoveredCard, handleMouseEnter, handleMouseLeave, isHovered } =
    useQuoteCard();

  return (
    <section
      className="rounded-4xl lg:rounded-[15px_150px] xl:rounded-[15px_250px] pt-8 py-10 sm:py-20 mx-3 md:mx-5 lg:mx-7 xl:mx-20 my-8 bg-blue-light-transparent"
      dir="rtl"
    >
      <div className="w-full flex justify-around relative flex-wrap gap-7 sm:gap-3">
        <motion.h2
          className="text-center text-3xl font-bold mb-12 text-purple-primary w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("title")}
        </motion.h2>

        {QUOTES.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            isHovered={isHovered(quote.id)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}
