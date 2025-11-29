import React from 'react'
import { X } from 'lucide-react'

interface MenuProps {
    isOpen: boolean,
    toggleMenu: () => void
}

const MobileMenu = ({isOpen, toggleMenu}: MenuProps) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all ${isOpen ? 'visible' : 'invisible'}`}>
        <div
          onClick={toggleMenu}
          className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className={`fixed top-0 w-full bg-background p-6 transition-all duration-1000 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <div className="text-3xl font-bold">GLOWING</div>
            <button onClick={toggleMenu} className="text-2xl text-black">
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav>
            {['Home', 'Collection', 'Shop', 'Offer', 'Blog', 'Cart'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="block text-black font-semibold text-sm uppercase tracking-wider py-3 hover:text-green-700 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
  )
}

export default MobileMenu
