"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wider text-white"
          >
            RONAK<span className="text-purple-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/Ronak_Taneja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-purple-400/40 px-4 py-2 text-sm text-purple-300 transition hover:bg-purple-400/10"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-purple-400/40 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="text-xl">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/Ronak_Taneja_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-purple-400/30 px-4 py-3 text-center text-purple-300 transition hover:bg-purple-400/10"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}