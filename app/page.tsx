import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';

const products = [
  {
    id: 1,
    name: "Handcrafted Vase",
    image_url: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070",
    price: "2,999"
  },
  {
    id: 2,
    name: "Ceramic Bowl Set",
    image_url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070",
    price: "1,499"
  },
  {
    id: 3,
    name: "Wooden Decor",
    image_url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2069",
    price: "3,999"
  },
  {
    id: 4,
    name: "Table Lamp",
    image_url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2070",
    price: "2,499"
  },
  {
    id: 5,
    name: "Wall Art",
    image_url: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=2070",
    price: "4,999"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HomePage products={products} />
    </main>
  );
}