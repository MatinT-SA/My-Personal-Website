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

export const getContactData = (t) => {
  const CONTACT_INFO = [
    {
      icon: FaMapMarkerAlt,
      title: t("location.title"),
      value: t("location.value"),
      href: "#",
    },
    {
      icon: FaPhone,
      title: t("phone.title"),
      value: t("phone.value"),
      href: "tel:+98-9334363774",
    },
    {
      icon: FaEnvelope,
      title: t("email.title"),
      value: t("email.value"),
      href: "mailto:matin.taherzadeh.mmtsa@gmail.com",
    },
  ];

  const SOCIAL_LINKS = [
    {
      name: "instagram",
      icon: FaInstagram,
      color: "rgb(255, 0, 191)",
      href: "https://www.instagram.com/matin_taherzadeh_sa/",
      label: t("social.instagram"),
    },
    {
      name: "twitter",
      icon: FaTwitter,
      color: "rgb(86, 154, 243)",
      href: "https://twitter.com/MatinT_SA",
      label: t("social.twitter"),
    },
    {
      name: "github",
      icon: FaGithub,
      color: "rgb(255, 123, 0)",
      href: "https://github.com/MatinT-SA",
      label: t("social.github"),
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      color: "rgb(0, 0, 204)",
      href: "https://www.linkedin.com/in/matin-taherzadeh-sa",
      label: t("social.linkedin"),
    },
    {
      name: "whatsapp",
      icon: FaWhatsapp,
      color: "rgb(37, 211, 102)",
      href: "https://api.whatsapp.com/send?phone=989334363774&text=hi%20Matin.%20how%20are%20you%3F",
      label: t("social.whatsapp"),
    },
    {
      name: "telegram",
      icon: FaTelegramPlane,
      color: "#0088cc",
      href: "https://t.me/Matin_T_1999",
      label: t("social.telegram"),
    },
    {
      name: "facebook",
      icon: FaFacebookF,
      color: "#316ff6",
      href: "https://www.facebook.com/MatinTaherzadehShA/",
      label: t("social.facebook"),
    },
  ];

  return { CONTACT_INFO, SOCIAL_LINKS };
};
