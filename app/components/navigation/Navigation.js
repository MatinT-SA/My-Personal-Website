"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialLinks from "../profile/profie/profile-card/SocialLinks";
import NavLinks from "./NavLinks";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
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
    closeMenu();
  };

  // Open menu
  const openMenu = () => {
    setIsMenuVisible(true); // keep menu mounted
    setTimeout(() => setIsMenuOpen(true), 10); // trigger slide-in
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false); // trigger slide-out
    setTimeout(() => setIsMenuVisible(false), 300); // unmount after animation
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
      {!isMenuVisible && (
        <button
          type="button"
          onClick={openMenu}
          className="block mx-auto p-5 text-center w-12 h-12 text-dark-primary hamburger:hidden"
          aria-label="Open menu"
        >
          <FaBars className="w-8 h-8" />
        </button>
      )}

      {/* Close button */}
      {isMenuVisible && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed top-6 right-6 z-50 text-white"
          aria-label="Close menu"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      )}

      {/* Main menu (mobile) */}
      {isMenuVisible && (
        <ul
          className={`mainMenu list-none fixed inset-0 z-40 flex flex-col justify-center items-center bg-purple-primary text-white
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <NavLinks
            links={links}
            activeSection={activeSection}
            onClick={handleClick}
            variant="mobile"
          />

          {/* Social links at the bottom for mobile */}
          <li className="mt-5">
            <SocialLinks isMenuOpen={isMenuOpen} />
          </li>
        </ul>
      )}

      {/* Desktop menu */}
      <ul className="hidden hamburger:flex hamburger:flex-row gap-0 hamburger:items-center hamburger:justify-between hamburger:mr-10 hamburger:w-full">
        <NavLinks
          links={links}
          activeSection={activeSection}
          onClick={handleClick}
          variant="desktop"
        />
      </ul>
    </nav>
  );
}
