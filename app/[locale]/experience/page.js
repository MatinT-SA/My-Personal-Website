import { getTranslations } from "next-intl/server";
import ExperiencePageClient from "./ExperiencePageClient";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "seo.experience" });

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: `https://matintaherzadeh.com/${locale}/experience`,
      languages: {
        fa: "https://matintaherzadeh.com/fa/experience",
        en: "https://matintaherzadeh.com/en/experience",
        "x-default": "https://matintaherzadeh.com/fa/experience",
      },
    },
  };
}

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
