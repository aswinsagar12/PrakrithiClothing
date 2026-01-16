import React, { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";

const PrakrithiClothing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const img = (path) => `${import.meta.env.BASE_URL}images/${path}`;

  const products = [
    {
      id: 1,
      name: "Kanjeevaram Silk Saree",
      category: "saree",
      price: "₹2,999",
      description: "Pure silk with traditional temple border",
      image: img("saree1.jpg"),
      colors: ["Maroon", "Gold", "Green"],
    },
    {
      id: 2,
      name: "Cotton Churidar Set",
      category: "churidar",
      price: "₹1,499",
      description: "Comfortable daily wear with elegant embroidery",
      image: img("churidar1.jpg"),
      colors: ["Blue", "Pink", "White"],
    },
    {
      id: 3,
      name: "Wedding Silk Saree",
      category: "saree",
      price: "₹1,999",
      description: "Exquisite bridal collection with zari work",
      image: img("saree2.jpg"),
      colors: ["Red", "Gold", "Purple"],
    },
    {
      id: 4,
      name: "Anarkali Churidar",
      category: "churidar",
      price: "₹1,399",
      description: "Festive wear with mirror work detailing",
      image: img("churidar2.jpg"),
      colors: ["Green", "Yellow", "Orange"],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-light">Prakrithi</h1>
            <p className="text-xs tracking-widest text-gray-600">
              CLOTHING TRADITION
            </p>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#explore">Explore</a>
            <a href="#sarees">Sarees</a>
            <a href="#churidar">Churidar</a>
            <a href="#about">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ShoppingBag />
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <a href="#explore" className="block py-2">Explore</a>
            <a href="#sarees" className="block py-2">Sarees</a>
            <a href="#churidar" className="block py-2">Churidar</a>
            <a href="#about" className="block py-2">About</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#D4A574] to-[#B8865F] text-white py-28">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-6xl font-light mb-6">
            Tradition meets
            <br />
            elegance.
          </h2>
          <p className="text-xl mb-8">
            Authentic South Indian clothing celebrating heritage.
          </p>
          <button className="bg-white text-black px-8 py-3">
            Explore collection
          </button>
        </div>

        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img("hero-model.jpg")})`,
          }}
        />
      </section>

      {/* Saree Feature */}
      <section id="sarees" className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-5xl font-light mb-6">
              The timeless
              <br />
              saree collection.
            </h3>
            <p className="mb-8 text-gray-700">
              A story of craftsmanship, tradition and elegance.
            </p>
          </div>

          <div className="relative h-[500px] overflow-hidden">
            <img
              src={img("saree-collection.jpg")}
              alt="Saree collection"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="explore" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12">
            {["all", "saree", "churidar"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "border"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <div key={p.id}>
                <div className="relative h-96 overflow-hidden mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg">{p.name}</h4>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="text-lg">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Churidar */}
      <section id="churidar" className="py-24 bg-[#F5F1ED]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={img("churidar-collection.jpg")}
              alt="Churidar collection"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-5xl font-light mb-6">
              Elegance in
              <br />
              every stitch.
            </h3>
            <p className="text-gray-700">
              Traditional design with modern comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#8B7355] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl mb-6">Get in touch</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <MapPin /> Wayanad, Kerala
              </p>
              <p className="flex items-center gap-2">
                <Phone /> +91 95262 99860
              </p>
              <p className="flex items-center gap-2">
                <Mail /> hello@prakrithiclothing.com
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Instagram />
              <Facebook />
            </div>
          </div>

          <div className="relative h-64 lg:h-auto overflow-hidden">
            <img
              src={img("store-location.jpg")}
              alt="Store"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        © 2026 Prakrithi Clothing Tradition
      </footer>
    </div>
  );
};

export default PrakrithiClothing;
