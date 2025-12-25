"use client";

import SocialLinks from "@app/components/contact/SocialLinks";
import NavLinks from "@app/components/navigation/NavLinks";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation({ dir }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);
  const t = useTranslations("home");
  const isLTR = dir === "ltr";

  const links = [
    { id: "home", label: t("navHome") },
    { id: "about-me", label: t("navAboutMe") },
    { id: "skills", label: t("navSkills") },
    { id: "projects", label: t("navProjects") },
    { id: "contact", label: t("navContact") },
    { id: "comment", label: t("navComment") },
  ];

  // Sticky nav
  useEffect(() => {
    const currentNav = navRef.current;

    const handleScroll = () => {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
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
  }, []);

  // Active section tracking
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

  const openMenu = () => {
    setIsMenuVisible(true);
    setTimeout(() => setIsMenuOpen(true), 10);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuVisible(false), 300);
  };

  const handleClick = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <nav
      id="header-nav"
      ref={navRef}
      className={`bg-gradient-yellow h-17.5 transition-all duration-200 ${
        isFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"
      }`}
      aria-label="Primary navigation"
    >
      {/* Hamburger (mobile) */}
      {!isMenuVisible && (
        <button
          type="button"
          onClick={openMenu}
          className={`flex justify-center items-center mx-auto w-17.5 h-17.5 text-dark-primary hamburger:hidden`}
          aria-label="Open menu"
        >
          <FaBars className="w-8 h-8" />
        </button>
      )}

      {/* Close (mobile) */}
      {isMenuVisible && (
        <button
          type="button"
          onClick={closeMenu}
          className={`fixed top-6 z-50 text-white ${
            isLTR ? "left-6" : "right-6"
          }`}
          aria-label="Close menu"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      )}

      {/* Mobile menu */}
      {isMenuVisible && (
        <ul
          className={`list-none fixed inset-0 z-40 flex flex-col justify-center items-center bg-purple-primary text-white
            transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen
                ? "translate-x-0"
                : isLTR
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
        >
          <NavLinks
            links={links}
            activeSection={activeSection}
            onClick={handleClick}
            variant="mobile"
          />
          <li className="mt-5">
            <SocialLinks isMenuOpen={isMenuOpen} />
          </li>
        </ul>
      )}

      {/* Desktop menu */}
      <ul
        className={`hidden hamburger:flex hamburger:flex-row gap-0 hamburger:items-center hamburger:justify-between w-full
          ${isLTR ? "mr-10" : "ml-10"}`}
      >
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
