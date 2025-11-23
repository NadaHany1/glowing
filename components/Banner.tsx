import React from 'react'

const Banner = () => {
  return (
    <section id="banner" className="py-[10vh] px-[5vw]">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Card 1 */}
              <div className="flex-1 md:flex-2 relative h-[60vh] p-8 flex flex-col justify-center group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/banner-1.jpg')" }} />
                <div className="flex flex-col justify-start relative z-10 w-1/2 h-full text-foreground">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2">New Collection</p>
                  <h2 className="text-4xl font-bold mb-4">Discover Our Autumn Skincare</h2>
                  <a href="#" className="bg-white font-semibold p-4 rounded-sm w-fit mt-auto hover:bg-black hover:text-white transition">
                    Explore More
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 relative h-[60vh] p-8 flex flex-col justify-center group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('/images/banner-2.jpg')" }} />
                <div className="flex flex-col justify-start relative z-10 w-1/2 h-full text-foreground">
                  <h2 className="text-4xl font-bold mb-3">25% off Everything</h2>
                  <p className="mb-6 max-w-sm">Makeup with extended range in colors for every human.</p>
                  <a href="#" className="bg-white font-semibold p-4 rounded-sm w-fit mt-auto hover:bg-black hover:text-white transition">
                    Shop Sale
                  </a>
                </div>
              </div>
            </div>
        </section>
  )
}

export default Banner
