import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const request = await requestLocale();
  const locale = hasLocale(routing.locales, requested)
    ? request
    : routing.defaultLocale;

  return {
    locale,
    message: (await import(`../messages/${locale}.json`)).default,
  };
});
