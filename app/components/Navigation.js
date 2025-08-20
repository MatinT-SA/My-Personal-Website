"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialLinks from "./profile/profie/profile-card/SocialLinks";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  const links = [
    { id: "home", label: "خانه" },
    { id: "about-me", label: "درباره من" },
    { id: "skills", label: "مهارت ها" },
    { id: "resume", label: "نمونه کارها" },
    { id: "contact", label: "راه های ارتباطی" },
    { id: "comment", label: "ارسال پیام" },
  ];

  // Sticky nav logic
  useEffect(() => {
    const handleScroll = () => {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
      const scrollY = window.scrollY || window.pageYOffset;

      if (!navRef.current) return;
      const navEl = navRef.current;
      const nextEl = navEl.nextElementSibling;

      if (scrollY > headerHeight) {
        setIsFixed(true);
        if (nextEl) nextEl.style.paddingTop = `${navEl.offsetHeight}px`;
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
      if (navRef.current) {
        const nextEl = navRef.current.nextElementSibling;
        if (nextEl) nextEl.style.paddingTop = "";
      }
    };
  }, []);

  // Highlight active nav link on scroll
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const onScroll = () => {
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        );
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav
      id="header-nav"
      ref={navRef}
      className={`bg-gradient-yellow h-17.5 transition-all duration-200 ${
        isFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"
      }`}
      aria-label="Primary navigation"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Hamburger button */}
      {!isMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="block mx-auto p-5 text-center w-12 h-12 text-dark-primary hamburger:hidden"
          aria-label="Open menu"
        >
          <FaBars className="w-8 h-8" />
        </button>
      )}

      {/* Close button (only visible when mobile menu is open) */}
      {isMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-6 right-6 z-50 text-white"
          aria-label="Close menu"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      )}

      {/* Main menu */}
      <ul
        className={`mainMenu list-none ${
          isMenuOpen
            ? "fixed w-full inset-0 z-40 flex flex-col gap-2 justify-center items-center bg-purple-primary text-white"
            : "hidden hamburger:flex hamburger:flex-row gap-0 hamburger:items-center hamburger:justify-between hamburger:mr-10 hamburger:w-full"
        }`}
      >
        {links.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <li key={id} className="mx-auto">
              <a
                href={`#${id}`}
                onClick={() => handleClick(id)}
                aria-current={isActive ? "page" : undefined}
                className={`nav-item inline-block items-center py-5 px-8 text-xl transition-opacity duration-200 ${
                  isActive ? "opacity-100 active-link" : "opacity-50"
                } hover:opacity-100`}
                style={{
                  color: isMenuOpen ? "#fff" : "var(--color-dark-primary)",
                  fontWeight: 700,
                }}
              >
                {label}
              </a>
            </li>
          );
        })}

        {/* Add social links at the bottom for mobile menu */}
        {isMenuOpen && (
          <li>
            <SocialLinks isMenuOpen={isMenuOpen} />
          </li>
        )}
      </ul>
    </nav>
  );
}
