"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookF,
} from "react-icons/fa";
import ContactCard from "../components/contact/ContactCard";
import SocialButton from "../components/contact/SocialButton";

const CONTACT_INFO = [
  {
    icon: FaMapMarkerAlt,
    title: "محل اقامت",
    value: "ایران، کرج",
    href: "#",
  },
  {
    icon: FaPhone,
    title: "شماره تلفن",
    value: "98-9334363774+",
    href: "tel:+98-9334363774",
  },
  {
    icon: FaEnvelope,
    title: "ایمیل",
    value: "matin.taherzadeh.mmtsa@gmail.com",
    href: "mailto:matin.taherzadeh.mmtsa@gmail.com",
  },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "rgb(255, 0, 191)",
    href: "https://www.instagram.com/matin_taherzadeh_sa/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    color: "rgb(86, 154, 243)",
    href: "https://twitter.com/MatinT_SA",
  },
  {
    name: "Github",
    icon: FaGithub,
    color: "rgb(255, 123, 0)",
    href: "https://github.com/MatinT-SA",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "rgb(0, 0, 204)",
    href: "https://www.linkedin.com/in/matin-taherzadeh-sa",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    color: "rgb(37, 211, 102)",
    href: "https://api.whatsapp.com/send?phone=989334363774&text=hi%20Matin.%20how%20are%20you%3F",
  },
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    color: "#0088cc",
    href: "https://t.me/Matin_T_1999",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "#316ff6",
    href: "https://www.facebook.com/MatinTaherzadehShA/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 my-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="main-titles text-center text-3xl font-bold mb-12 text-purple-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          راه های ارتباطی
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-y-12 gap-x-10">
          {CONTACT_INFO.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-y-4 my-8">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialButton key={index} {...link} isEven={index % 2 === 1} />
          ))}
        </div>

        <motion.p
          className="text-center text-xl font-medium mx-auto mt-20 mb-12 max-w-[83%] text-purple-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.35, delay: 0.3 }}
        >
          اگر میخوای برام پیام ارسال کنی، بهترین کار اینه که از بخش بعدی، یعنی
          ارسال پیام ها دیدن کنی. جای دوری نرو! همین پایینم :)
        </motion.p>
      </div>
    </section>
  );
}
