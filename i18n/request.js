import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const messagesMap = {
  fa: () => import("../messages/fa.json"),
  en: () => import("../messages/en.json"),
};

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = routing.locales.includes(locale)
    ? locale
    : routing.defaultLocale;

  let messages = {};
  try {
    const messagesModule = await messagesMap[finalLocale]();
    messages = messagesModule.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${finalLocale}`, error);
    messages = {};
  }

  return {
    locale: finalLocale,
    messages: messages,
  };
});
