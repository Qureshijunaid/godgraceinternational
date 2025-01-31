"use client";

export default function StoryPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Story</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2070"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              IndiCraft began with a vision to preserve and promote India's rich heritage of 
              handcrafted artistry while bringing it into the modern world. Our journey started 
              in the vibrant city of Jodhpur, where we collaborated with local artisans who have 
              been practicing their craft for generations.
            </p>
            <p className="text-lg text-gray-600">
              Today, we work with over 100 artisan families across Rajasthan, helping them bring 
              their exceptional craftsmanship to homes around the world. Each piece in our collection 
              tells a story of tradition, skill, and artistic vision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}