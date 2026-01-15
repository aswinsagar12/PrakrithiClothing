import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const PrakrithiClothing = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Kanjeevaram Silk Saree",
      category: "saree",
      price: "₹2,999",
      description: "Pure silk with traditional temple border",
      image: "/images/saree1.jpg",
      colors: ["Maroon", "Gold", "Green"]
    },
    {
      id: 2,
      name: "Cotton Churidar Set",
      category: "churidar",
      price: "₹1,499",
      description: "Comfortable daily wear with elegant embroidery",
      image: "/images/churidar1.jpg",
      colors: ["Blue", "Pink", "White"]
    },
    {
      id: 3,
      name: "Wedding Silk Saree",
      category: "saree",
      price: "₹1,999",
      description: "Exquisite bridal collection with zari work",
      image: "/images/saree2.jpg",
      colors: ["Red", "Gold", "Purple"]
    },
    {
      id: 4,
      name: "Anarkali Churidar",
      category: "churidar",
      price: "₹1,399",
      description: "Festive wear with mirror work detailing",
      image: "/images/churidar2.jpg",
      colors: ["Green", "Yellow", "Orange"]
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight">
                Prakrithi
              </h1>
              <p className="text-xs tracking-widest text-gray-600">CLOTHING TRADITION</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#explore" className="text-sm tracking-wide hover:text-gray-600 transition">Explore</a>
              <a href="#sarees" className="text-sm tracking-wide hover:text-gray-600 transition">Sarees</a>
              <a href="#churidar" className="text-sm tracking-wide hover:text-gray-600 transition">Churidar</a>
              <a href="#about" className="text-sm tracking-wide hover:text-gray-600 transition">About us</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block text-sm tracking-wide hover:text-gray-600">Search</button>
              <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600" />
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <nav className="flex flex-col space-y-3">
              <a href="#explore" className="text-sm tracking-wide">Explore</a>
              <a href="#sarees" className="text-sm tracking-wide">Sarees</a>
              <a href="#churidar" className="text-sm tracking-wide">Churidar</a>
              <a href="#about" className="text-sm tracking-wide">About us</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#D4A574] to-[#B8865F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Tradition meets<br />elegance.
            </h2>
            <p className="text-lg sm:text-xl font-light mb-8 text-white/90">
              Discover our curated collection of authentic<br />
              South Indian clothing that celebrates heritage.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 text-sm tracking-wide hover:bg-gray-100 transition">
              Explore the collection
            </button>
          </div>
        </div>
        {/* Placeholder for hero image */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('/images/hero-model.jpg')] bg-cover bg-center"></div>
      </section>

      {/* Featured Category - Sarees */}
      <section id="sarees" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl sm:text-5xl font-light leading-tight mb-6">
                The timeless<br />saree collection.
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Each saree in our collection tells a story of craftsmanship,
                tradition, and timeless beauty. From wedding silk to everyday elegance,
                find the perfect drape for every occasion.
              </p>
              <a href="#explore" className="inline-block border border-gray-900 px-6 py-2 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition">
                Shop sarees
              </a>
            </div>
            <div className="relative h-96 sm:h-[500px] bg-gray-200">
              {/* Placeholder for saree image */}
              <div className="relative h-96 sm:h-[500px] overflow-hidden">
                <img
                  src="/images/saree-collection.jpg"
                  alt="Saree collection"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="explore" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl sm:text-5xl font-light mb-4">Our collection</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked traditional wear that brings together quality, comfort, and style
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 text-sm tracking-wide transition ${selectedCategory === 'all'
                ? 'bg-gray-900 text-white'
                : 'border border-gray-300 hover:border-gray-900'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('saree')}
              className={`px-6 py-2 text-sm tracking-wide transition ${selectedCategory === 'saree'
                ? 'bg-gray-900 text-white'
                : 'border border-gray-300 hover:border-gray-900'
                }`}
            >
              Sarees
            </button>
            <button
              onClick={() => setSelectedCategory('churidar')}
              className={`px-6 py-2 text-sm tracking-wide transition ${selectedCategory === 'churidar'
                ? 'bg-gray-900 text-white'
                : 'border border-gray-300 hover:border-gray-900'
                }`}
            >
              Churidar
            </button>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative h-80 sm:h-96 bg-gray-100 mb-4 overflow-hidden">
                  {/* Placeholder for product image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                </div>
                <h4 className="text-lg font-light mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-light">{product.price}</span>
                  <div className="flex space-x-1">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Churidar Section */}
      <section id="churidar" className="py-16 sm:py-24 bg-[#F5F1ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 sm:h-[500px] bg-gray-200 order-2 lg:order-1">
              {/* Placeholder for churidar image */}
              <div className="relative h-96 sm:h-[500px] overflow-hidden order-2 lg:order-1">
                <img
                  src="/images/churidar-collection.jpg"
                  alt="Churidar collection"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl sm:text-5xl font-light leading-tight mb-6">
                Elegance in<br />every stitch.
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our churidar collection combines traditional designs with modern comfort.
                Perfect for daily wear or special occasions, each piece is crafted with
                attention to detail and quality fabrics.
              </p>
              <a href="#explore" className="inline-block border border-gray-900 px-6 py-2 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition">
                Shop churidar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl sm:text-5xl font-light mb-8">
            Celebrating tradition,<br />one garment at a time.
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            At Prakrithi Clothing Tradition, we believe in preserving the rich heritage
            of South Indian textiles while making them accessible to modern women.
            Each piece in our collection is carefully selected to ensure authenticity,
            quality, and timeless appeal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div>
              <h4 className="text-2xl font-light mb-2">10+</h4>
              <p className="text-sm text-gray-600 tracking-wide">Unique designs</p>
            </div>
            <div>
              <h4 className="text-2xl font-light mb-2">50+</h4>
              <p className="text-sm text-gray-600 tracking-wide">Happy customers</p>
            </div>
            <div>
              <h4 className="text-2xl font-light mb-2">2+</h4>
              <p className="text-sm text-gray-600 tracking-wide">Years of tradition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#8B7355] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl sm:text-4xl font-light mb-6">Get in touch</h3>
              <p className="mb-8 text-white/90">
                Visit our store or reach out to us for personalized styling assistance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light">Panamaram</p>
                    <p className="text-white/80">Wayanad, Kerala 670721</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <p>+91 95262 99860</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <p>hello@prakrithiclothing.com</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Instagram className="w-6 h-6 cursor-pointer hover:opacity-70 transition" href='https://www.instagram.com/_pra_kri_thi__?igsh=MnhkOG1tdGs2YXVm'/>
                <Facebook className="w-6 h-6 cursor-pointer hover:opacity-70 transition" />
              </div>
            </div>
            <div className="relative h-64 lg:h-auto bg-white/10">
              {/* Placeholder for map or store image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="/images/store-location.jpg"
                  alt="Store location"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-light mb-4">prakrithi</h4>
              <p className="text-sm text-gray-400">Clothing Tradition</p>
            </div>
            <div>
              <h5 className="text-sm tracking-wide mb-4">Shop</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#sarees" className="hover:text-white transition">Sarees</a></li>
                <li><a href="#churidar" className="hover:text-white transition">Churidar</a></li>
                <li><a href="#explore" className="hover:text-white transition">All Products</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm tracking-wide mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Store Location</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm tracking-wide mb-4">Follow Us</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Prakrithi Clothing Tradition. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrakrithiClothing;