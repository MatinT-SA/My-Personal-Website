import HomeClient from "./HomeClient";
import AboutMeSection from "./sections/AboutMe";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const t = (key) => {
    return (
      key.split(".").reduce((obj, part) => obj && obj[part], messages) || ""
    );
  };

  const keywordsString = t("seo.home.keywords");
  const keywordsArray = keywordsString
    ? keywordsString.split(",").map((k) => k.trim())
    : [];

  return {
    title: t("seo.home.title"),
    description: t("seo.home.description"),
    keywords: keywordsArray,

    openGraph: {
      title: t("seo.home.title"),
      description: t("seo.home.description"),
      locale: locale === "en" ? "en_US" : "fa_IR",
      url: `https://matintaherzadeh.ir/${locale}`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("seo.home.title"),
      description: t("seo.home.description"),
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;

  const aboutMeContent = <AboutMeSection locale={locale} />;

  return <HomeClient aboutMeServerContent={aboutMeContent} locale={locale} />;
}
