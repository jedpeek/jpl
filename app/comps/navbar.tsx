"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // make sure you install lucide-react

const navItems = [
  { name: "Blog", href: "/posts", target: "" },
  { name: "FAQ", href: "/faq", target: "" },
  // { name: "About", href: "/about", target: "" },
  // { name: "Contact", href: "/contact", target: "" },
  {
    name: "Veterans",
    href: "/veterans",
    target: "",
  },
  { name: "Calculator", href: "/calculator", target: "" },
  {
    name: "Apply",
    href: "https://1416824.my1003app.com/779577/register",
    target: "_blank",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-slate-600 cursor-pointer strong bold">
              JPL
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                className={`text-slate-900 hover:text-slate-500 transition font-medium ${
                  pathname === item.href ? "border-b-2 border-slate-600" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile side drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-64 bg-white h-full shadow-lg p-6 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 hover:text-red-500"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.target}
                  onClick={() => setMobileOpen(false)}
                  className={`text-slate-700 hover:text-blue-600 font-medium ${
                    pathname === item.href ? "underline" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </nav>
  );
}
