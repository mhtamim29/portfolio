"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../../data/portfolio";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "WORKS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "ZENTURA", href: "#studio" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
      const current = [...navLinks].reverse().find((link) => {
        const section = document.getElementById(link.href.slice(1));
        return section && section.getBoundingClientRect().top <= 144;
      });
      setActiveHref(current?.href ?? "#home");
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const dismissOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setMenuOpen(false);
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          event.preventDefault();
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-background"
      } border-b border-border`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-[1440px] mx-auto px-[120px] h-[68px] flex items-center justify-between max-[1024px]:px-10 max-[640px]:px-6"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="font-archivo text-[16px] tracking-[-0.4px] uppercase text-foreground hover:opacity-70 transition-opacity"
        >
          {siteConfig.initials}
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={activeHref === link.href ? "location" : undefined}
              className={`font-space-mono text-[11px] tracking-[0.88px] uppercase hover:text-foreground transition-colors duration-200 ${activeHref === link.href ? "text-foreground" : "text-muted"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Project inquiry */}
        <a
          href="#contact"
          className="hidden md:block bg-foreground text-white font-dm-sans font-medium text-[13px] uppercase tracking-wide px-5 py-2 rounded-full hover:bg-foreground/80 transition-colors duration-200 cursor-pointer"
        >
          DISCUSS A PROJECT
        </a>

        {/* Mobile Hamburger */}
        <button
          ref={menuButtonRef}
          className="md:hidden flex h-11 w-11 flex-col items-center justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={activeHref === link.href ? "location" : undefined}
              className="font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 self-start bg-foreground text-white font-dm-sans font-medium text-[13px] uppercase tracking-wide px-5 py-2 rounded-full"
          >
            DISCUSS A PROJECT
          </a>
        </div>
      )}
    </header>
  );
}
