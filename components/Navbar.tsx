// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          TrueShine
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="text-2xl hover:text-primary">
            About
          </Link>
          <Link href="#services" className="text-2xl hover:text-primary">
            Services
          </Link>
          <Link href="#testimonials" className="text-2xl hover:text-primary">
            Testimonials
          </Link>
          <Link href="/book-now" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden "
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="#services" className="block py-2">
            Services
          </Link>
          <Link href="#about" className="block py-2">
            About
          </Link>
          <Link href="#testimonials" className="block py-2">
            Testimonials
          </Link>
          <Link href="/book-now" className="block py-2 text-white bg-primary rounded text-center mt-2">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
