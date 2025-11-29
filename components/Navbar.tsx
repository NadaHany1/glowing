import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  User,
  Menu,
} from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

interface NavProps {
  toggleLogin: () => void
}

const Navbar = ({toggleLogin} : NavProps) => {
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
            <button onClick={() => alert("menu is open")} className="lg:hidden" aria-label="Open menu">
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








// 'use client'
// import React, { useState, useEffect } from 'react'
// import { Menu } from 'lucide-react'
// // import MobileMenu from './MobileMenu'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   // Track scroll to change navbar background and text color
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const links = [
//     { name: 'Home', href: 'home' },
//     { name: 'Services', href: 'services' },
//     { name: 'Testimonials', href: 'testimonials' },
//     { name: 'Contact', href: 'contact' },
//   ]

//   const aboutLinks = [
//     { name: 'Team', href: 'team' },
//     { name: 'F & Q', href: 'faq' },
//   ]

//   // Smooth scroll with 15vh offset
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) {
//       const yOffset = -window.innerHeight * 0.15
//       const y = element.getBoundingClientRect().top + window.scrollY + yOffset
//       window.scrollTo({ top: y, behavior: 'smooth' })
//     }
//   }

//   const handleLinkClick = (id: string) => {
//     scrollToSection(id)
//   }


//   return (
//     <>
//       <nav
//         className={`
//           fixed top-0 w-screen h-[15vh] px-[10vw] flex items-center justify-between z-30 transition-all duration-500
//           ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
//         `}
//       >
//         {/* Logo */}
//         <div
//           onClick={() => handleLinkClick("home")}
//           className={`logo font-extrabold text-4xl transition-colors duration-500 ${
//             scrolled ? 'bg-linear-to-r from-gradient-first via-gradient-second to-gradient-third bg-clip-text text-transparent' 
//             : 'text-white'
//           }`}
//         >
//           Glint.
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex flex-row gap-6 capitalize text-xl relative">
//           {links.map((link) => (
//             <button
//               key={link.name}
//               onClick={() => handleLinkClick(link.href)}
//               className={`border-transparent border-b-2 transition-all duration-500 ${
//                 scrolled
//                   ? 'text-header-color hover:border-header-color'
//                   : 'text-white hover:border-white'
//               }`}
//             >
//               {link.name}
//             </button>
//           ))}

//           {/* About Us Dropdown */}
//           <div className="relative group">
//             <button
//               onClick={() => handleLinkClick("about")}
//               className={`cursor-pointer transition-colors duration-500 ${
//                 scrolled ? 'text-header-color' : 'text-white'
//               }`}
//             >
//               About Us
//             </button>

//             <div className="absolute left-0 top-full flex-col text-xl bg-white text-header-color shadow-lg rounded hidden group-hover:flex pt-2">
//               <div className="flex flex-col min-w-[150px]">
//                 {aboutLinks.map((item) => (
//                   <button key={item.name} onClick={() => handleLinkClick(item.href)} className="hover:bg-gray-100 px-5 py-2">
//                     {item.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className={`lg:hidden z-50 ${scrolled ? 'text-header-color' : 'text-white'}`}>
//           <Menu className="cursor-pointer" onClick={() => setIsMenuOpen(true)} />
//         </div>
//       </nav>

//       <div className='bg-amber-900 h-[200vh]'></div>

//       {/* Mobile Menu */}
//       {/* <MobileMenu
//         isOpen={isMenuOpen}
//         onClose={() => setIsMenuOpen(false)}
//         scrollToSection={scrollToSection}
//       /> */}
//     </>
//   )
// }

// export default Navbar