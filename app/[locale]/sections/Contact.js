"use client";

import { motion } from "framer-motion";

import ContactCard from "@/app/components/contact/ContactCard";
import SocialButton from "@/app/components/contact/SocialButton";
import { useTranslations } from "next-intl";
import { getContactData } from "@/app/src/constants/contactData";

export default function Contact() {
  const t = useTranslations("contact");
  const { CONTACT_INFO, SOCIAL_LINKS } = getContactData(t);

  const hanldeScrollToComment = () => {
    const commentSection = document.getElementById("comment");
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="pt-12 mt-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="main-titles text-center text-3xl font-bold mb-16 text-purple-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("title")}
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-y-12 gap-x-12">
          {CONTACT_INFO.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-y-4 my-16">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialButton key={index} {...link} isEven={index % 2 === 1} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center my-12">
          <motion.p
            className="text-center text-lg md:text-xl font-bold mx-auto max-w-[83%] text-purple-primary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.35, delay: 0.3 }}
          >
            {t("cta")}
          </motion.p>

          <motion.div
            onClick={hanldeScrollToComment}
            className="text-4xl text-purple-primary drop-shadow-lg cursor-pointer select-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            &#x2193;
          </motion.div>
        </div>
      </div>
    </section>
  );
}
