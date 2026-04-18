"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "../../data/portfolio";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "WORKS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-background"
      } border-b border-border`}>
      <nav className='max-w-[1440px] mx-auto px-[120px] h-[68px] flex items-center justify-between max-[1024px]:px-10 max-[640px]:px-6'>
        {/* Logo */}
        <Link
          href='#home'
          className='font-archivo text-[16px] tracking-[-0.4px] uppercase text-foreground hover:opacity-70 transition-opacity'>
          {siteConfig.initials}
        </Link>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted hover:text-foreground transition-colors duration-200'>
              {link.label}
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <button
          onClick={handleHireMe}
          className='hidden md:block bg-foreground text-white font-dm-sans font-medium text-[13px] uppercase tracking-wide px-5 py-2 rounded-full hover:bg-foreground/80 transition-colors duration-200'>
          HIRE ME
        </button>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden flex flex-col gap-1.5 p-2'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'>
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
        <div className='md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className='font-space-mono text-[11px] tracking-[0.88px] uppercase text-muted hover:text-foreground transition-colors'>
              {link.label}
            </a>
          ))}
          <button
            onClick={handleHireMe}
            className='mt-2 self-start bg-foreground text-white font-dm-sans font-medium text-[13px] uppercase tracking-wide px-5 py-2 rounded-full'>
            HIRE ME
          </button>
        </div>
      )}
    </header>
  );
}
