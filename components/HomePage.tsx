"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";

const carouselImages = [
  "images/carousal/mag.jpg",
  "images/carousal/glassStand.jpg",
  "images/carousal/candles.jpg",
  "images/carousal/cup.jpg",
];

export default function HomePage({ products }: { products: any[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <>
      {/* Hero Carousel */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"          
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
           
              <img
                src={'images/img1.jpg'}
                alt="Welcome"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-bold">Welcome to God Grace International</h2>
              <p className="text-gray-600 text-lg">
              At God Grace International, we take pride in offering a wide range of beautifully crafted items that reflect the rich cultural heritage and creativity of artisans from around the world.
              Every piece tells a story of skill, passion, and tradition, carefully crafted to bring beauty and uniqueness to your home or business. Whether you're searching for a special gift or something to add a personal touch to your space, we have something for every occasion.
              </p>
      
              <a href="/products">
              <Button size="lg">Explore Our Collection</Button>
              </a>
            
            </div>
          </div>
        </div>
      </section>

      {/* Latest Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Latest Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
                {products.slice(0, 3).map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id} className="block">
                    <div className="w-72 group">
                      <div className="relative h-80 overflow-hidden rounded-lg">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        {/* <p className="text-gray-600">₹{product.price}</p> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
                {products.slice(2).map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id} className="block">
                    <div className="w-72 group">
                      <div className="relative h-80 overflow-hidden rounded-lg">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        {/* <p className="text-gray-600">₹{product.price}</p> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">God Grace International</h3>
              <div className="space-y-4">
                <p>+91-75058 86751</p>
                <p>godgraceitnernational66@gmail.com</p>
                <p>Hajra Villa, Sambhal</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Information</h3>
              <ul className="space-y-4">
                <li><Link href="/story" className="hover:text-gray-300">Our Story</Link></li>
                <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
                <li><Link href="/catalogue" className="hover:text-gray-300">Catalogue</Link></li>
                <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p className="mb-4">Sign up to get our daily latest news & updates</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-800 border-gray-700"
                />
                <Button variant="secondary">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}