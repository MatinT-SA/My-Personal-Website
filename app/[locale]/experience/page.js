// app/[locale]/experience/page.js
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ExperiencePageClient from "./ExperiencePageClient";

export default async function ExperiencePage({ params }) {
  const { locale } = params;

  setRequestLocale(locale);

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ExperiencePageClient />
    </NextIntlClientProvider>
  );
}
