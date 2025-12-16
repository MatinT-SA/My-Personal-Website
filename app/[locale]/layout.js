import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import LocaleSwitcher from "../components/layout/LocaleSwitcher";
import { setRequestLocale } from "next-intl/server";

import { getTranslations } from "next-intl/server";

const getMessages = async (locale) => {
  try {
    const messagesModule = await import(`../../messages/${locale}.json`);
    return messagesModule.default;
  } catch {
    notFound();
  }
};

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    title: t("title", { defaultValue: "Matin Taherzadeh" }),
    description: t("description", {
      defaultValue: "Matin Taherzadeh portfolio",
    }),

    alternates: {
      canonical: `https://matintaherzadeh.ir/${locale}`,
      languages: {
        fa: "https://matintaherzadeh.ir/fa",
        en: "https://matintaherzadeh.ir/en",
        "x-default": "https://matintaherzadeh.ir/fa",
      },
    },

    openGraph: {
      url: `https://matintaherzadeh.ir/${locale}`,
      siteName: t("title", { defaultValue: "Matin Taherzadeh" }),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalizedLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const direction = locale === "fa" ? "rtl" : "ltr";
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body
        className={`antialiased
          bg-linear-to-r from-white to-[#ffe6ff]
          overflow-x-hidden text-black font-shabnam`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <LocaleSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
