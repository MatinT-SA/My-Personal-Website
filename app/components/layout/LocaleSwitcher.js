"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      aria-label="Select Language"
      className="
        fixed bottom-5 left-5 z-50 
        bg-purple-primary text-blue-light 
        rounded-md px-2 py-1.5 text-sm cursor-pointer
        font-medium
        shadow-[0_8px_20px_rgba(0,0,0,0.6)] 
        transition-shadow duration-200 ease-in-out 
        hover:shadow-[0_12px_25px_rgba(0,0,0,0.75)] 
        focus:outline-none focus:ring-2 focus:ring-blue-light
      "
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
    >
      <option value="fa">فارسی</option>
      <option value="en">EN</option>
    </select>
  );
}
