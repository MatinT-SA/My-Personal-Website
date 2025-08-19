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
      const scrollPos = window.scrollY + window.innerHeight / 2;

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        );
      });

      if (current) {
        setActiveSection(current.id);
      }
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
      style={{
        scrollBehavior: "smooth",
      }}
    >
      {/* Mobile menu open button */}
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
        className={`mainMenu list-none ${
          isMenuOpen
            ? "fixed w-full inset-0 z-40 flex flex-col justify-center items-center bg-purple-primary text-white"
            : "hidden md:flex md:flex-row md:items-center md:justify-between md:mr-10 md:w-full"
        }`}
        style={{
          gap: isMenuOpen ? "1.5rem" : "0",
        }}
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

        {/* Social icons */}
        <li className="icons flex gap-4">
          {[
            /* social links here */
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
