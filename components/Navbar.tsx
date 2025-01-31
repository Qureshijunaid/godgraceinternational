import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Info, Layout, Tag, Phone } from "lucide-react";

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}
