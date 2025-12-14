"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { getContactData } from "@/app/src/constants/contactData";
import { useContactScroll } from "@/lib/hooks/useContactScroll";
import ContactInfo from "@/app/components/contact/ContactInfo";
import SocialLinks from "@/app/components/contact/SocialLinks";
import ScrollCTA from "@/app/components/contact/ScrollCTA";
import styles from "@/app/components/contact/contact.module.css";

export default function Contact() {
  const t = useTranslations("contact");

  // Memoize contact data to prevent recreation on each render
  const { CONTACT_INFO, SOCIAL_LINKS } = useMemo(() => getContactData(t), [t]);

  // Use custom hook for scroll behavior
  const { handleScrollToComment } = useContactScroll();

  return (
    <section id="contact" className={styles.sectionContainer}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={`${styles.sectionTitle}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("title")}
        </motion.h2>

        <ContactInfo contactInfo={CONTACT_INFO} />

        <SocialLinks socialLinks={SOCIAL_LINKS} />

        <ScrollCTA cta={t("cta")} onScroll={handleScrollToComment} />
      </div>
    </section>
  );
}
