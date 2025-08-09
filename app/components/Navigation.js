"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

  // Throttle function to improve scroll performance
  function throttle(fn, wait) {
    let time = Date.now();
    return function () {
      if (Date.now() - time >= wait) {
        fn();
        time = Date.now();
      }
    };
  }

  /* -------------------------
     Fixed-on-scroll logic
  ------------------------- */
  useEffect(() => {
    const handleScroll = throttle(() => {
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
    }, 100);

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
     Active section tracking (IntersectionObserver)
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
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <nav
      id="header-nav"
      ref={navRef}
      className={`p-6 bg-gradient-yellow h-17.5 transition-all duration-200 ${
        isFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"
      }`}
      aria-label="Primary navigation"
      style={{ scrollBehavior: "smooth" }} // smooth scrolling for anchors
    >
      {/* Open menu button (mobile only) */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="openMenu text-3xl md:hidden"
        aria-label="Open menu"
      >
        <i className="fa fa-bars" />
      </button>

      {/* Main menu */}
      <ul
        className={`mainMenu list-none gap-4 ${
          isMenuOpen
            ? "fixed inset-0 z-40 flex flex-col justify-center items-center bg-purple-primary text-white"
            : "hidden md:flex md:flex-row md:items-center"
        }`}
      >
        {/* Close menu button (mobile only) */}
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

        {links.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <li key={id} className="transition-all duration-300">
              <a
                href={`#${id}`}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`nav-item flex justify-between px-5 py-4 text-[2rem] font-bold transition-opacity duration-200 ${
                  isActive ? "opacity-100 underline" : "opacity-80"
                }`}
                style={{
                  color: isMenuOpen ? "#fff" : "var(--dark-primary-color)",
                }}
              >
                {label}
              </a>
            </li>
          );
        })}

        {/* Social icons */}
        <li className="icons flex gap-4">
          {[
            {
              href: "https://www.instagram.com/matin_taherzadeh_sa/",
              label: "Instagram",
              icon: "fab fa-instagram",
            },
            {
              href: "https://twitter.com/MatinT_SA",
              label: "Twitter",
              icon: "fab fa-twitter",
            },
            {
              href: "https://github.com/MatinT-SA",
              label: "GitHub",
              icon: "fab fa-github",
            },
            {
              href: "https://www.linkedin.com/in/matin-taherzadeh-sa",
              label: "LinkedIn",
              icon: "fab fa-linkedin",
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-2xl"
            >
              <i className={icon} />
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
}
