import React from 'react'

import {ArrowUp} from 'lucide-react';

interface BackToTopButtonProps {
  active: boolean;
}

const BackToTopButton = ({active}: BackToTopButtonProps) => {
  return (
    <div>
      {active && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-white text-primary p-4 rounded-full shadow-lg z-50 hover:bg-primary hover:text-white transition"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default BackToTopButton
