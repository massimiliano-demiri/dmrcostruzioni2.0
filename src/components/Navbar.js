"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logodmr.png";
import { navLinks, company } from "@/lib/site-data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex justify-between items-center py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={logo}
            alt="DMR Costruzioni"
            width={48}
            height={48}
            className="rounded-full w-12 h-12"
            priority
          />
          <span className="hidden sm:block font-extrabold text-ink-600 text-lg leading-tight">
            DMR Costruzioni
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink-600">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-brand-600 ${
                  isActive(link.href) ? "text-brand-600" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-ink-600 hover:text-brand-600 transition-colors"
          >
            {company.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-brand-500 text-ink-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-600 transition-colors"
          >
            Preventivo gratuito
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-full hover:bg-gray-100"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Apri/chiudi il menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-ink-600 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink-600 transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink-600 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-1 text-ink-600 font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 border-b border-gray-100 ${
                    isActive(link.href) ? "text-brand-600" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6 flex flex-col gap-3">
            <a href={company.phoneHref} className="text-ink-600 font-semibold">
              {company.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="bg-brand-500 text-ink-700 px-5 py-3 rounded-full text-center font-semibold"
            >
              Preventivo gratuito
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
