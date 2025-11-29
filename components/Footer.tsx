import React from 'react'
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-[5vh] px-[10vw]">
          <div className="grid md:grid-cols-4 gap-12 border-b pb-12 mb-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">ABOUT US</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, natus?</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">OUR COMPANY</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#" className="hover:text-primary transition">Search</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Our Services</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Information</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="#" className="hover:text-primary transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Shipping And Returns</Link></li>
                <li><Link href="#" className="hover:text-primary transition">Product Care</Link></li>
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
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-primary" />
            </div>
            <div className="text-2xl font-bold text-black">GLOWING</div>
            <div className="text-sm text-gray-600">© 2024 All rights reserved</div>
          </div>
      </footer>

  )
}

export default Footer
