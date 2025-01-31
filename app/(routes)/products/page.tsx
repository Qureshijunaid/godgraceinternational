"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Handcrafted Vase",
    image_url: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070",
    price: "2,999",
    category: "Decor"
  },
  {
    id: 2,
    name: "Ceramic Bowl Set",
    image_url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070",
    price: "1,499",
    category: "Kitchen"
  },
  {
    id: 3,
    name: "Wooden Decor",
    image_url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2069",
    price: "3,999",
    category: "Decor"
  },
  {
    id: 4,
    name: "Table Lamp",
    image_url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2070",
    price: "2,499",
    category: "Lighting"
  },
  {
    id: 5,
    name: "Wall Art",
    image_url: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2070",
    price: "4,999",
    category: "Art"
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}