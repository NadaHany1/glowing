'use client'
import React, {useEffect, useState} from 'react';
import BackToTopButton from '@/components/BackToTopButton';
import Collection from '@/components/Collection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar'
import Products from '@/components/Products';
import data from "@/data/data.json"
import Banner from '@/components/Banner';
import Feature from '@/components/Feature';
import Offer from '@/components/Offer';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Login from '@/components/Login';

const Page = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTogglelLogin = ():void => {
    setIsLoginOpen(prev => !prev);
  };


  return (
    <main className="w-full ">
      <Navbar toggleLogin={handleTogglelLogin}/>
      <Login isOpen={isLoginOpen} toggleLogin={handleTogglelLogin} />
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
