import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  User,
  Menu,
} from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

interface NavProps {
  toggleLogin: () => void,
  toggleMobileMenu: () => void
}

const Navbar = ({toggleLogin, toggleMobileMenu} : NavProps) => {
    const [headerActive, setHeaderActive] = useState<boolean>(false);

    const {toggleCart} = useCart()

      useEffect(() => {
          const handleScroll = () => {
            setHeaderActive(window.scrollY > 150);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

  return (
      <header className={`sticky bg-background w-full h-[10vh] text:lg flex items-center justify-evenly top-0 z-40 transition-shadow ${headerActive ? 'shadow-md' : ''}`}>
            <button onClick={toggleMobileMenu} className="lg:hidden" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>


            <div className="text-2xl lg:text-4xl font-bold">GLOWING</div>

            <nav className="hidden lg:flex justify-center gap-12">
                {['Home', 'Collection', 'Shop', 'Offer', 'Blog'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground text-sm uppercase tracking-wider hover:text-primary transition duration-200">
                    {item}
                </a>
                ))}
            </nav>

            <div className="flex items-center gap-6">
              <button onClick={toggleLogin} className="hover:text-primary" aria-label="User account">
                <User className="w-7 h-7" />
              </button>
              <button onClick={toggleCart} className="hover:text-primary" aria-label="Cart items">
                <ShoppingBag className="w-7 h-7" />
              </button>
            </div>          
      </header>
  )
}

export default Navbar