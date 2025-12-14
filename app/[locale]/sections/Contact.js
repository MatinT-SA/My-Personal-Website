"use client";

import ContactInfo from "@/app/components/contact/ContactInfo";
import ScrollCTA from "@/app/components/contact/ScrollCTA";
import SocialLinks from "@/app/components/contact/SocialLinks";
import { getContactData } from "@/app/src/constants/contactData";
import { useContactScroll } from "@/lib/hooks/useContactScroll";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Contact() {
  const t = useTranslations("contact");

  const { CONTACT_INFO, SOCIAL_LINKS } = useMemo(() => getContactData(t), [t]);

  const { handleScrollToComment } = useContactScroll();

  return (
    <section id="contact" className="pt-12 mt-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-3xl font-bold mb-4 lg:mb-12 text-purple-primary"
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
