
"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>God Grace International</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/story" className="text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900 flex items-center space-x-2">
                <span>Our Story</span>
              </Link>
              <Link href="/design" className="text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900 flex items-center space-x-2">
                <span>Design & Quality</span>
              </Link>
              <Link href="/catalogue" className="text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900 flex items-center space-x-2">
                <span>Catalogue</span>
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900 flex items-center space-x-2">
                <span>Products</span>
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900 flex items-center space-x-2">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <Button variant="outline" className="hidden md:block">
            Get a Free Catalogue
          </Button>
          {/* Hamburger Menu Toggle */}
          {!isMenuOpen &&
            <button onClick={toggleMenu} className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          }
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/story" className="text-gray-600 hover:text-gray-900">
              Our Story
            </Link>
            <Link href="/design" className="text-gray-600 hover:text-gray-900">
              Design & Quality
            </Link>
            <Link href="/catalogue" className="text-gray-600 hover:text-gray-900">
              Catalogue
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      )}
      {/* Close Menu Icon */}
      {isMenuOpen && (
        <button onClick={toggleMenu} className="absolute top-4 right-4 md:hidden cursor-pointer">
          <X className="w-6 h-6 text-gray-600" />
        </button>
      )}
    </nav>
  );
}
