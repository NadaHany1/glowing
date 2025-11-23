'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const heroSlides: string[] = [
  '/images/hero-banner-1.jpg',
  '/images/hero-banner-2.jpg',
  '/images/hero-banner-3.jpg',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

    
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(interval);
      }, []);


  return (
    <div>
      <section id="home" className="relative w-full h-[90vh] overflow-hidden">
          <div className="w-full h-full relative">
            {heroSlides.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image src={src} alt={`Hero Banner ${index + 1}`} fill className="object-cover object-center" priority={index === 0} sizes="100vw" />
                <div className="absolute px-[10vw] inset-0 flex flex-col justify-center text-left text-foreground p-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Reveal The <br /> Beauty of Skin
                  </h1>
                  <p className="max-w-md mb-6">
                    Made using clean, non-toxic ingredients, our products are designed for everyone.
                  </p>
                  <p className="text-xl font-semibold mb-8">Starting at $7.99</p>
                  <button className="bg-black text-white font-semibold py-3 px-8 w-fit rounded-md hover:bg-primary transition">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-foreground text-2xl font-bold bg-black/20 p-3 rounded-full transition z-10" aria-label="Previous slide">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-foreground text-2xl font-bold bg-black/20 p-3 rounded-full transition z-10" aria-label="Next slide">
            <ChevronRight />
          </button>
        </section>
    </div>
  )
}

export default Hero
