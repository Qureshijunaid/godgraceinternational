"use client";

export default function DesignPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Design & Quality</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=2070"
              alt="Design Process"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <h3 className="text-xl font-semibold">Design Process</h3>
            <p className="text-gray-600">
              Our design process combines traditional techniques with contemporary aesthetics, 
              creating pieces that are both timeless and modern.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=2070"
              alt="Materials"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <h3 className="text-xl font-semibold">Materials</h3>
            <p className="text-gray-600">
              We source only the finest materials, ensuring each piece meets our high standards 
              of quality and sustainability.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1617791160959-bb0e5cdb899e?q=80&w=2070"
              alt="Craftsmanship"
              className="rounded-lg shadow-lg h-64 w-full object-cover"
            />
            <h3 className="text-xl font-semibold">Craftsmanship</h3>
            <p className="text-gray-600">
              Every piece is handcrafted by skilled artisans, bringing generations of expertise 
              to create unique works of art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}