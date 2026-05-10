'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'Leisure', href: '/leisure' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight"
        >
          Travel Services Limited
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-title-lg text-title-lg transition-colors ${
                pathname === link.href
                  ? 'text-secondary border-b-2 border-secondary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-tertiary-fixed text-on-tertiary-fixed px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:opacity-90 shadow-md"
          >
            Book Now
          </Link>
          <button
            className="md:hidden flex items-center p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-primary">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-outline-variant/30 px-margin-mobile py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 px-2 rounded-lg text-lg font-semibold transition-colors ${
                pathname === link.href
                  ? 'text-secondary bg-secondary/5'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-outline-variant/30">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-tertiary-fixed text-on-tertiary-fixed py-3 rounded-lg font-bold mt-2"
            >
              Book Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
