"use client";

import { Button } from "@/components/ui/button";

export default function CataloguePage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Catalogue</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of handcrafted pieces. Download our catalogue 
            to discover the perfect additions to your space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032"
              alt="Home Decor Catalogue"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Home Decor Collection</h3>
              <p className="text-gray-600 mb-4">
                Discover our latest home decor pieces, from vases to wall art.
              </p>
              <Button className="w-full">Download Catalogue</Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-161648602993-1ea4a0a9674b?q=80&w=2032"
              alt="Furniture Catalogue"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Furniture Collection</h3>
              <p className="text-gray-600 mb-4">
                Explore our handcrafted furniture pieces for every room.
              </p>
              <Button className="w-full">Download Catalogue</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}