"use client";

import { useState, useEffect } from "react";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import Button from "@/app/components/ui/Button";
import Loader from "@/app/components/ui/Loader";
import { SITE_VERSION } from "@/app/config";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) setLoading(false);
  }, [pathname]);

  const handleNavigation = async (href) => {
    const html = document.documentElement;
    const body = document.body;
    const originalBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    html.scrollTop = 0;
    body.scrollTop = 0;
    html.style.scrollBehavior = originalBehavior;
    body.style.scrollBehavior = originalBehavior;

    setLoading(true);

    const MIN_LOADER_TIME = 400;
    const start = Date.now();

    if (href !== pathname) {
      await router.push(href);
    }

    const elapsed = Date.now() - start;
    const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);

    setTimeout(() => {
      setLoading(false);
    }, remaining);
  };

  return (
    <div className="footer-outer relative h-30 overflow-hidden">
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-purple-primary/95 backdrop-blur-sm transition-opacity duration-200">
          <Loader />
        </div>
      )}

      <div className="footer-shake w-full h-full">
        <footer className="footer-inner relative bg-purple-primary text-white mx-auto w-[95%] max-w-5xl h-20 rounded-xl flex items-center tracking-wide">
          <div className="text-md px-2 grid grid-cols-[1fr_2fr_1fr] text-center w-full items-center justify-center">
            {/* Experience button */}
            <Link href="/experience">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/experience");
                }}
                className="bg-purple-primary text-blue-light border border-blue-light rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary mx-auto"
              >
                {t("button_experience")}
              </Button>
            </Link>

            {/* Home link */}
            <p>
              © {new Date().getFullYear()} {t("rights_reserved")}{" "}
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/");
                }}
                className="text-amber-100 font-bold transition-colors hover:text-yellow-primary tracking-wider cursor-pointer"
              >
                matintaherzadeh.ir
              </Link>{" "}
              {t("righs_reserved_rest")}
            </p>

            {/* Version */}
            <span className="text-sm font-mono opacity-70">
              v{SITE_VERSION}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
