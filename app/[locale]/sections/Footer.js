"use client";

import Loader from "@/app/components/ui/Loader";
import LoadingButton from "@/app/components/ui/LoadingButton";
import { SITE_VERSION } from "@/app/config";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import useNavigateWithLoading from "@/lib/hooks/useNavigationWithLoading";
import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

const customStyles = {
  "--color-purple-primary": "var(--color-purple-primary)",
};

export default function Footer() {
  const t = useTranslations("footer");

  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const { isPending, navigate } = useNavigateWithLoading();

  const handleExperienceNavigation = () => {
    if (isPending) return;

    startTransition(() => {
      router.push("/experience");
    });
  };

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
      router.push(href);
    }

    const elapsed = Date.now() - start;
    const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);

    setTimeout(() => {
      setLoading(false);
    }, remaining);
  };

  return (
    <div className="relative overflow-hidden h-30">
      {loading && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-purple-primary/95 backdrop-blur-sm transition-opacity duration-200">
          <Loader />
        </div>
      )}

      <div className="w-full h-full group">
        <div className="footer-shake-xl">
          <footer
            style={{ backgroundColor: customStyles["--color-purple-primary"] }}
            className={`
              relative text-white mx-auto w-[95%] max-w-7xl h-28 md:h-20 rounded-xl flex items-center tracking-wider text-center p-x-2 z-10 
              transform translate-y-2
              md:translate-y-6
              xl:translate-y-24
              transition-transform duration-400 ease-in-out
              xl:group-hover:translate-y-4
            `}
          >
            <div className="text-xs sm:text-sm md:text-base px-2 grid grid-cols-1 gap-1 xs:gap-2 md:grid-cols-[1fr_2.5fr_0.5fr] lg:grid-cols-[1fr_2fr_1fr] text-center w-full items-center justify-center">
              {/* Experience button */}
              <LoadingButton
                isLoading={isPending}
                onClick={() => navigate("/experience")}
                loadingText={t("button_experience_loading")}
                spinnerSize="h-4 w-4"
                className="bg-purple-primary text-blue-light border border-blue-light px-5 py-2 rounded-sm hover:bg-blue-light hover:text-purple-primary hover:border-purple-primary mx-auto"
              >
                {t("button_experience")}
              </LoadingButton>

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
    </div>
  );
}
