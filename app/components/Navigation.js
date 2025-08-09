// app/components/Navigation.jsx
"use client";

import { useEffect, useRef, useState } from "react";

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

  /* -------------------------
     Fixed-on-scroll logic
     ------------------------- */
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

    // passive listeners for performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      // cleanup padding
      if (navRef.current) {
        const nextEl = navRef.current.nextElementSibling;
        if (nextEl) nextEl.style.paddingTop = "";
      }
    };
  }, []);

  /* -------------------------
     Active section (IntersectionObserver)
     ------------------------- */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // trigger when roughly middle of section is visible
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      id="header-nav"
      ref={navRef}
      className={`p-6 bg-gradient-yellow h-17.5 transition-all duration-200 ${
        isFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"
      }`}
      aria-label="Primary navigation"
    >
      {/* open button - visible on mobile only */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="openMenu text-3xl md:hidden"
        aria-label="Open menu"
      >
        <i className="fa fa-bars" />
      </button>

      {/* Main menu - desktop: md:flex, mobile: full-screen overlay when open */}
      <ul
        className={`mainMenu list-none gap-4 ${
          isMenuOpen
            ? "fixed inset-0 z-40 flex flex-col justify-center items-center bg-purple-primary text-white"
            : "hidden md:flex md:flex-row md:items-center"
        }`}
      >
        {/* close button (mobile overlay) */}
        {isMenuOpen && (
          <button
            type="button"
            onClick={closeMenu}
            className="closeMenu absolute top-5 right-5 text-2xl md:hidden"
            aria-label="Close menu"
          >
            <i className="fa fa-times" />
          </button>
        )}

        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <li key={link.id} className="transition-all duration-300">
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`nav-item flex justify-between px-5 py-4 text-[2rem] font-bold transition-opacity duration-200 ${
                  isActive ? "opacity-100 underline" : "opacity-80"
                }`}
                style={{
                  color: isMenuOpen ? "#fff" : "var(--dark-primary-color)",
                }}
              >
                {link.label}
              </a>
            </li>
          );
        })}

        {/* Social icons (kept visible on desktop; shown in overlay on mobile) */}
        <li className="icons flex gap-4">
          <a
            href="https://www.instagram.com/matin_taherzadeh_sa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-2xl"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/MatinT_SA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-2xl"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/MatinT-SA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/matin-taherzadeh-sa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
