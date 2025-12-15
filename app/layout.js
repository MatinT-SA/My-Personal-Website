// app/[locale]/layout.js

import "@/app/styles/global.css";
import Header from "./components/header/Header";
// Import the constant from your new file structure
import { THEME_COLOR } from "@/lib/colors";

// 1. Viewport Export (Handles themeColor for browser UI)
export const viewport = {
  themeColor: THEME_COLOR,
};

// 2. Metadata Export (Handles SEO, alternates, and social sharing defaults)
export const metadata = {
  // Dual-Language Setup (hreflang)
  alternates: {
    canonical: "https://matintaherzadeh.ir",
    languages: {
      en: "https://matintaherzadeh.ir/en",
      fa: "https://matintaherzadeh.ir/fa",
      "x-default": "https://matintaherzadeh.ir/en",
    },
  },

  // Open Graph/Twitter Defaults
  openGraph: {
    url: "https://matintaherzadeh.ir",
    siteName: "Matin Taherzadeh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// 3. Layout Component
export default function LocaleLayout({ children, params: { locale } }) {
  return (
    // Set the HTML lang attribute dynamically (e.g., lang="en" or lang="fa")
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
