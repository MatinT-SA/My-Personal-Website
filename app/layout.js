import "@/app/styles/global.css";
import Header from "./components/header/Header";
import { THEME_COLOR } from "@/lib/colors";

export const viewport = {
  themeColor: THEME_COLOR,
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body
        className="antialiased
          bg-linear-to-r from-white to-[#ffe6ff]
          overflow-x-hidden text-black font-shabnam"
      >
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}
