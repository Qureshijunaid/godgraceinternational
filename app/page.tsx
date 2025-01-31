import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';

const products = [
  {
    id: 1,
    name: "Coatser wooden",
    image_url: "images/footer/footer1.jpg",
    price: "2,999"
  },
  {
    id: 2,
    name: "Coffee Stirrer",
    image_url: "images/footer/footer2.jpg",
    price: "1,499"
  },
  {
    id: 3,
    name: "Wooden stool",
    image_url: "images/footer/footer3.jpg",
    price: "3,999"
  },
  {
    id: 4,
    name: "Wooden box",
    image_url: "images/footer/footer4.jpg",
    price: "2,499"
  },
  {
    id: 5,
    name: "Wall Art",
    image_url: "images/footer/footer5.jpg",
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