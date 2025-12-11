"use client";

import QuoteCard from "@/app/components/entrepreneur/QuoteCard";
import styles from "@/app/components/entrepreneur/entrepreneur.module.css";
import { getQuotesData } from "@/app/src/constants/quotesData";
import { useQuoteCard } from "@/lib/hooks/useQuoteCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Entrepreneur() {
  const t = useTranslations("entrepreneur");

  const QUOTES = useMemo(() => getQuotesData(t), [t]);

  // Use custom hook for quote card hover state
  const { hoveredCard, handleMouseEnter, handleMouseLeave, isHovered } =
    useQuoteCard();

  return (
    <section
      id="entrepreneur-quotes"
      className={styles.sectionContainer}
      dir="rtl"
    >
      <div
        id="entrepreneur-quotes-container"
        className={styles.quotesContainer}
      >
        <motion.h2
          className="main-titles text-center text-3xl font-bold mb-12 text-purple-primary w-full"
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
