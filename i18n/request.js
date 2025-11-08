import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const messagesMap = {
  fa: () => import("@/messages/fa.json"),
  en: () => import("@/messages/en.json"),
};

export default getRequestConfig(async ({ locale }) => {
  const finalLocale = routing.locales.includes(locale)
    ? locale
    : routing.defaultLocale;

  const messagesModule = await messagesMap[finalLocale]();
  return {
    locale: finalLocale,
    messages: messagesModule.default,
  };
});
