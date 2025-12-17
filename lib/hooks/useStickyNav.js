import { useEffect, useState } from "react";

export default function useStickyNav(navRef) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const currentNav = navRef.current;

    const handleScroll = () => {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.offsetHeight || 0;
      const scrollY = window.scrollY || window.pageYOffset;

      if (!currentNav) return;
      const nextEl = currentNav.nextElementSibling;

      if (scrollY > headerHeight) {
        setIsFixed(true);
        if (nextEl) nextEl.style.paddingTop = `${currentNav.offsetHeight}px`;
      } else {
        setIsFixed(false);
        if (nextEl) nextEl.style.paddingTop = "";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (currentNav?.nextElementSibling) {
        currentNav.nextElementSibling.style.paddingTop = "";
      }
    };
  }, [navRef]);

  return isFixed;
}
