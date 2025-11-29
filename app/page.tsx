'use client'
import React, {useEffect, useState} from 'react';
import BackToTopButton from '@/components/BackToTopButton';
import Collection from '@/components/Collection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar'
import Products from '@/components/Products';
import Banner from '@/components/Banner';
import Feature from '@/components/Feature';
import Offer from '@/components/Offer';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Login from '@/components/Login';
import Cart from '@/components/Cart';
import data from '@/data/data.json'
import MobileMenu from '@/components/MobileMenu';

const Page = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLogin = ():void => {
    setIsLoginOpen(prev => !prev);
  };

  const handleToggleMenu = ():void => {
    setIsMenuOpen(prev => !prev);
  };


  return (
    <main className="w-full ">
      <Navbar toggleLogin={handleToggleLogin} toggleMobileMenu={handleToggleMenu}/>
      <Login isOpen={isLoginOpen} toggleLogin={handleToggleLogin} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={handleToggleMenu}/>
      <Cart />
      <Hero/>
      <Collection/>
      <Products header={"Our Bestsellers"} products={data.products}/>
      <Products header={"Under 75$"} products={data.underProducts}/>
      <Banner/>
      <Feature/>
      <Offer/>
      <Blog/>
      <Footer/>
      <BackToTopButton active={showBackToTop}/>
    </main>
  )
}

export default Page
