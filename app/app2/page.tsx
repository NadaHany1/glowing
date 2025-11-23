
'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  ShoppingBag,
  Star,
  User,
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
  Palette, // Used for Natural Ingredients
  Package, // Used for Cruelty-free
  ShieldCheck, // Used for Safety Guaranteed
  Leaf, // Used for Sustainable
} from 'lucide-react';

import Image from 'next/image';

// --- TYPE DEFINITIONS ---
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string;
  quantity?: number;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  text: string;
}

interface Article {
  title: string;
  image: string;
  linkText: string;
}

// --- DATA DEFINITIONS ---
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 120.0, image: '/images/product-01.jpg', badge: '-20%' },
  { id: 2, name: 'Product 2', price: 90.0, image: '/images/product-02.jpg' },
  { id: 3, name: 'Product 3', price: 105.0, image: '/images/product-03.jpg' },
  { id: 4, name: 'Product 4', price: 87.0, image: '/images/product-04.jpg' },
  { id: 5, name: 'Product 5', price: 100.0, image: '/images/product-05.jpg', badge: '-20%' },
  { id: 6, name: 'Product 6', price: 80.0, image: '/images/product-06.jpg' },
];

const underProducts: Product[] = [
  { id: 7, name: 'Product 7', price: 35.0, image: '/images/product-07.jpg', badge: '-20%' },
  { id: 8, name: 'Product 8', price: 45.0, image: '/images/product-08.jpg' },
  { id: 9, name: 'Product 9', price: 25.0, image: '/images/product-09.jpg' },
  { id: 10, name: 'Product 10', price: 60.0, image: '/images/product-10.jpg' },
  { id: 11, name: 'Product 11', price: 55.0, image: '/images/product-11.jpg', badge: '-20%' },
  { id: 12, name: 'Product 12', price: 74.0, image: '/images/product-01.jpg' },
];

const heroSlides: string[] = [
  '/images/hero-banner-1.jpg',
  '/images/hero-banner-2.jpg',
  '/images/hero-banner-3.jpg',
];

const features: Feature[] = [
  { icon: Palette, title: 'Natural Ingredients', text: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
  { icon: Package, title: 'Cruelty-free', text: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
  { icon: ShieldCheck, title: 'Safety Guaranteed', text: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
  { icon: Leaf, title: 'Sustainable', text: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
];

const articles: Article[] = [
  { title: 'Find a Store', image: '/images/blog-1.jpg', linkText: 'Our Store' },
  { title: 'Summer Essentials', image: '/images/blog-2.jpg', linkText: 'Read More' },
  { title: 'Ultimate Hair Care', image: '/images/blog-3.jpg', linkText: 'Read More' },
];

// --- MAIN COMPONENT ---
export default function EcommerceApp() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [cart, setCart] = useState<Product[]>([]);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [headerActive, setHeaderActive] = useState<boolean>(false);
  const [offerCountdown, setOfferCountdown] = useState({ minutes: '00', seconds: '00' });

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Scroll effects (Header Sticky & Back to Top)
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 150);
      setHeaderActive(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown effect for OFFER section
  useEffect(() => {
    // This is a mock countdown, resetting every 30 minutes
    const targetTime = 30 * 60; // 30 minutes in seconds
    const interval = setInterval(() => {
      const now = Math.floor(Date.now() / 1000);
      const secondsSinceStartOfHour = now % 3600; // seconds into the current hour

      // Calculate time remaining until the next 30-minute mark
      const elapsedIn30MinCycle = secondsSinceStartOfHour % targetTime;
      const remainingSeconds = targetTime - elapsedIn30MinCycle;

      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;

      setOfferCountdown({
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cart functions
  const addToCart = (product: Product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      alert('You have already added this item to your cart');
      return;
    }
    setCart([{ ...product, quantity: 1 }, ...cart]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) quantity = 1;
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const getTotal = (): string => {
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Your Order Is Placed');
    setCart([]);
    setIsCartOpen(false);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-white font-urbanist">
      {/* Alert Banner */}
      <div className="bg-yellow-100 text-black text-center py-4 text-sm font-bold tracking-wider uppercase">
        Free Shipping On All U.S. Orders $50+
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 bg-white transition-shadow ${headerActive ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-4">
            <button onClick={() => setIsNavOpen(true)} className="lg:hidden" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>

            <div className="hidden lg:flex flex-1 max-w-xs">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search product"
                  className="w-full border-2 border-gray-300 rounded px-4 py-2 pr-10 focus:border-black outline-none"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="text-2xl font-bold">GLOWING</div>

            <div className="flex items-center gap-6">
              <button onClick={() => setIsLoginOpen(true)} className="hover:text-gray-600" aria-label="User account">
                <User className="w-7 h-7" />
              </button>
              <button className="hover:text-gray-600" aria-label="Favourite items">
                <Star className="w-7 h-7" />
              </button>
              <button onClick={() => setIsCartOpen(true)} className="hover:text-gray-600" aria-label="Cart items">
                <ShoppingBag className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center gap-12 mt-6 pt-4 border-t">
            {['Home', 'Collection', 'Shop', 'Offer', 'Blog'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-black font-semibold text-sm uppercase tracking-wider hover:text-green-700 transition">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Navbar (Sidebar) */}
      <div className={`fixed inset-0 z-50 transition-all ${isNavOpen ? 'visible' : 'invisible'}`}>
        <div
          onClick={() => setIsNavOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`fixed top-0 left-0 bottom-0 w-80 max-w-[80%] bg-white p-6 transition-transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-10">
            <div className="text-xl font-bold">GLOWING</div>
            <button onClick={() => setIsNavOpen(false)} className="text-2xl text-green-700">
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav>
            {['Home', 'Collection', 'Shop', 'Offer', 'Blog', 'Cart'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  if (item === 'Cart') setIsCartOpen(true);
                  setIsNavOpen(false);
                }}
                className="block text-black font-semibold text-sm uppercase tracking-wider py-3 border-b hover:text-green-700 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-2xl">
            <div className="flex justify-end">
              <button onClick={() => setIsLoginOpen(false)} className="text-xl text-gray-500 hover:text-black">
                <X />
              </button>
            </div>
            <h2 className="text-3xl font-semibold text-center mb-6 text-black">Login</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-black outline-none" required />
              <input type="text" placeholder="Phone number" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-black outline-none" required />
              <input type="text" placeholder="Username" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-black outline-none" required />
              <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-black outline-none" required />
              <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-green-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[80%] bg-gray-100 p-6 z-50 transition-transform shadow-2xl overflow-y-auto ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsCartOpen(false)} className="absolute top-4 right-4 text-2xl hover:text-green-700">
          <X />
        </button>
        <h2 className="text-3xl font-semibold text-center mt-8 mb-6 text-black">YOUR CART</h2>
        <div className="cart-content space-y-4">
          {cart.map(item => (
            <div key={item.id} className="grid grid-cols-[32%_50%_18%] gap-4 items-center bg-white p-3 rounded shadow-sm">
              <div className="relative w-full h-24">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-1 text-black">{item.name}</h3>
                <p className="font-semibold mb-2 text-black">${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border border-gray-300 rounded p-1 text-black"
                  min="1"
                />
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-xl hover:text-red-500">
                <X />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <>
            <div className="flex justify-end items-center gap-2 mt-6 pt-4 border-t border-gray-300">
              <span className="text-xl font-semibold text-black">TOTAL:</span>
              <span className="text-2xl font-bold text-black">${getTotal()}</span>
            </div>
            <button onClick={handleCheckout} className="w-full mt-6 bg-green-700 text-white text-xl font-bold py-3 rounded hover:bg-black transition">
              Buy Now
            </button>
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        )}
      </div>


















      <main>
        {/* HERO Section */}
        <section id="home" className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div className="w-full h-full relative">
            {heroSlides.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={src} alt={`Hero Banner ${index + 1}`} fill className="object-cover" priority={index === 0} sizes="100vw" />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Reveal The <br /> Beauty of Skin
                  </h1>
                  <p className="max-w-md mb-6">
                    Made using clean, non-toxic ingredients, our products are designed for everyone.
                  </p>
                  <p className="text-xl font-semibold mb-8">Starting at $7.99</p>
                  <a href="#shop" className="bg-white text-black font-semibold py-3 px-8 rounded hover:bg-green-700 hover:text-white transition">
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition z-10" aria-label="Previous slide">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition z-10" aria-label="Next slide">
            <ChevronRight />
          </button>
        </section>

        {/* Collection Section */}
        <section id="collection" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative min-h-[400px] p-10 flex flex-col justify-end group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/collection-1.jpg')" }} />
                <div className="relative z-10 text-white">
                  <h2 className="text-3xl font-semibold mb-3">Summer Collection</h2>
                  <p className="mb-6">Starting at $17.99</p>
                  <a href="#" className="flex items-center gap-2 font-semibold hover:text-yellow-100 transition">Shop Now <ChevronRight className='w-4 h-4' /></a>
                </div>
              </div>

              <div className="relative min-h-[400px] p-10 flex flex-col justify-end group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/collection-2.jpg')" }} />
                <div className="relative z-10 text-white">
                  <h2 className="text-3xl font-semibold mb-3">Explore What is New?</h2>
                  <p className="mb-6">Get the glow</p>
                  <a href="#" className="flex items-center gap-2 font-semibold hover:text-yellow-100 transition">Discover Now <ChevronRight className='w-4 h-4' /></a>
                </div>
              </div>

              <div className="relative min-h-[400px] p-10 flex flex-col justify-end group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/collection-3.jpg')" }} />
                <div className="relative z-10 text-white">
                  <h2 className="text-3xl font-semibold mb-3">Buy 1 Get 1</h2>
                  <p className="mb-6">Starting at $7.99</p>
                  <a href="#" className="flex items-center gap-2 font-semibold hover:text-yellow-100 transition">Discover Now <ChevronRight className='w-4 h-4' /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section - Our Bestsellers */}
        <section id="shop" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-semibold text-black">Our Bestsellers</h2>
              <a href="#" className="flex items-center gap-2 font-semibold text-black hover:text-green-700 transition">
                Shop All Products <ChevronRight className='w-4 h-4' />
              </a>
            </div>

            <div className="flex overflow-x-auto space-x-6 pb-4">
              {products.map((product) => (
                <div key={product.id} className="min-w-[280px] md:min-w-[300px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
                  {/* Image container */}
                  <div className="relative w-full h-80">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition duration-500" sizes="(max-width: 1024px) 100vw, 33vw" />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold rounded z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Action buttons */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-x-10 group-hover:translate-x-0 z-10">
                      <button onClick={() => addToCart(product)} className="bg-white text-black p-3 rounded-l-lg shadow-md hover:bg-green-700 hover:text-white transition" aria-label="Add to cart">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                      <button className="bg-white text-black p-3 rounded-l-lg shadow-md hover:bg-green-700 hover:text-white transition" aria-label="Add to wishlist">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-lg font-bold text-black mb-1">${product.price.toFixed(2)}</p>
                    <h3 className="text-gray-700 hover:text-green-700 transition font-medium">
                      <a href="#">{product.name}</a>
                    </h3>
                    <div className="flex justify-center items-center mt-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
                      </div>
                      <p className="text-xs text-gray-500 ml-2">(5170 reviews)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------- */}
        {/* NEW SECTIONS START HERE           */}
        {/* ------------------------------------------- */}

        {/* BANNER Section */}
        <section id="banner" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="relative min-h-[350px] p-8 flex flex-col justify-center group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/banner-1.jpg')" }} />
                <div className="relative z-10 text-black">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">New Collection</p>
                  <h2 className="text-4xl font-bold mb-4">Discover Our Autumn Skincare</h2>
                  <a href="#" className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-black hover:text-white transition">
                    Explore More
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative min-h-[350px] p-8 flex flex-col justify-center group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/banner-2.jpg')" }} />
                <div className="relative z-10 text-white">
                  <h2 className="text-4xl font-bold mb-3">25% off Everything</h2>
                  <p className="mb-6 max-w-sm">Makeup with extended range in colors for every human.</p>
                  <a href="#" className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-black hover:text-white transition">
                    Shop Sale
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE Section */}
        <section id="feature" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-6 text-center rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="mx-auto w-16 h-16 flex justify-center items-center mb-4 text-green-700 bg-green-700/10 rounded-full">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OFFER Section */}
        <section id="offer" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="p-8 md:p-12">
                <p className="text-lg font-bold text-black uppercase mb-4 flex items-center gap-3">
                  Special Offer
                  <span className="bg-green-700 text-white text-sm font-bold px-3 py-1 rounded">-20%</span>
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                  Add Two Products Get <span className="text-green-700">One Free!</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Compromise, however, is a key concept, especially in the context of user experience design.
                </p>

                <div className="flex space-x-6 mb-10 text-black">
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-bold block bg-white py-2 px-4 rounded shadow-md">{offerCountdown.minutes}</span>
                    <span className="text-sm font-medium mt-1 block">MINUTES</span>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl md:text-4xl font-bold block bg-white py-2 px-4 rounded shadow-md">{offerCountdown.seconds}</span>
                    <span className="text-sm font-medium mt-1 block">SECONDS</span>
                  </div>
                </div>

                <a href="#" className="bg-black text-white font-semibold py-3 px-8 rounded hover:bg-green-700 transition">
                  Get Deal Now
                </a>
              </div>

              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/offer-banner-1.jpg"
                  alt="Offer banner"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BLOG Section */}
        <section id="blog" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-black text-center mb-10">Latest Articles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      <a href="#" className="hover:text-green-700 transition">{article.title}</a>
                    </h3>

                    <a href="#" className="flex items-center gap-2 font-semibold text-black hover:text-green-700 transition">
                      {article.linkText} <ChevronRight className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------- */}
        {/* NEW SECTIONS END HERE            */}
        {/* ------------------------------------------- */}

        {/* Shop Section - Products Under $50 */}
        <section id="shop-under" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-semibold text-black">Products Under $50</h2>
              <a href="#" className="flex items-center gap-2 font-semibold text-black hover:text-green-700 transition">
                Shop All Products <ChevronRight className='w-4 h-4' />
              </a>
            </div>

            <div className="flex overflow-x-auto space-x-6 pb-4">
              {underProducts.map((product) => (
                <div key={product.id} className="min-w-[280px] md:min-w-[300px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
                  {/* Image container */}
                  <div className="relative w-full h-80">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition duration-500" sizes="(max-width: 1024px) 100vw, 33vw" />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 text-sm font-bold rounded z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Action buttons */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-x-10 group-hover:translate-x-0 z-10">
                      <button onClick={() => addToCart(product)} className="bg-white text-black p-3 rounded-l-lg shadow-md hover:bg-green-700 hover:text-white transition" aria-label="Add to cart">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                      <button className="bg-white text-black p-3 rounded-l-lg shadow-md hover:bg-green-700 hover:text-white transition" aria-label="Add to wishlist">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-lg font-bold text-black mb-1">${product.price.toFixed(2)}</p>
                    <h3 className="text-gray-700 hover:text-green-700 transition font-medium">
                      <a href="#">{product.name}</a>
                    </h3>
                    <div className="flex justify-center items-center mt-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
                      </div>
                      <p className="text-xs text-gray-500 ml-2">(5170 reviews)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 border-b pb-12 mb-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">ABOUT US</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, natus?</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">OUR COMPANY</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-700 transition">Search</a></li>
                <li><a href="#" className="hover:text-green-700 transition">Our Services</a></li>
                <li><a href="#" className="hover:text-green-700 transition">Information</a></li>
                <li><a href="#" className="hover:text-green-700 transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-green-700 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-green-700 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-700 transition">Shipping And Returns</a></li>
                <li><a href="#" className="hover:text-green-700 transition">Product Care</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">NEWSLETTER</h3>
              <p className="text-gray-600">Subscribe for our latest updates and launches.</p>
              <form className="space-y-3">
                <input type="email" placeholder="Enter your email address" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-black outline-none" />
                <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-green-700 transition font-semibold">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-700" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-700" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-700" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-green-700" />
            </div>
            <div className="text-2xl font-bold text-black">GLOWING</div>
            <img src="/images/pay.png" alt="Available payment methods" width={313} height={28} className='w-full max-w-xs' />
            <div className="text-sm text-gray-600">© 2024 All rights reserved</div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-white text-green-700 p-4 rounded-full shadow-lg z-50 hover:bg-green-700 hover:text-white transition"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}