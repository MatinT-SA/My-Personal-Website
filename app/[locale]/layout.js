// app/[locale]/layout.js - The Final Wrapper (Modified)

import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
// ✅ Import the Header component (now used here exclusively)
import Header from "../components/header/Header";

// ✅ Import the RootLayout (HTML Shell)
import RootLayout from "../layout";

const getMessages = async (locale) => {
  try {
    const messagesModule = await import(`../../messages/${locale}.json`);
    return messagesModule.default;
  } catch (error) {
    notFound();
  }
};

export default async function LocalizedLayout({ children, params }) {
  const { locale } = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  // 💡 Determine direction based on locale
  const direction = locale === "fa" ? "rtl" : "ltr";

  return (
    // ✅ Wrap content in RootLayout, passing locale and direction (fixes flipping)
    <RootLayout lang={locale} dir={direction}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {/* ✅ RENDER THE SINGLE HEADER HERE: Fixes double header and translation access */}
        <Header />
        {children}
      </NextIntlClientProvider>
    </RootLayout>
  );
}
