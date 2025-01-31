// ./app/(routes)/products/[id]/page.tsx
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Handcrafted Vase",
    image_url: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070",
    price: "2,999",
    category: "Decor",
    description: "A beautiful handcrafted vase made by skilled artisans using traditional techniques."
  },
  {
    id: 2,
    name: "Ceramic Bowl Set",
    image_url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070",
    price: "1,499",
    category: "Kitchen",
    description: "Set of 4 handmade ceramic bowls, perfect for serving soups and salads."
  },
  {
    id: 3,
    name: "Wooden Decor",
    image_url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2069",
    price: "3,999",
    category: "Decor",
    description: "Elegant wooden wall decor piece, hand-carved by master craftsmen."
  },
  {
    id: 4,
    name: "Table Lamp",
    image_url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2070",
    price: "2,499",
    category: "Lighting",
    description: "Contemporary table lamp with traditional Indian design elements."
  },
  {
    id: 5,
    name: "Wall Art",
    image_url: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2070",
    price: "4,999",
    category: "Art",
    description: "Stunning wall art piece that combines modern aesthetics with traditional craftsmanship."
  },
];

export async function generateStaticParams() {
  const productIds = products.map(p => p.id.toString());
  return productIds.map(id => ({
    id,
  }));
}

export default function ProductPageDetails({ params }) {
  const { id } = params; // Accessing the `id` parameter from props

  const productId = id ? parseInt(id as string, 10) : NaN;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image_url}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-2xl font-medium">₹{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <div className="space-y-4">
              <Button size="lg" className="w-full">Add to Cart</Button>
              <Button size="lg" variant="outline" className="w-full">Add to Wishlist</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}