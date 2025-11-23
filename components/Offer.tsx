import React, {useState, useEffect} from 'react'
import Image from 'next/image'

const Offer = () => {

  const [offerCountdown, setOfferCountdown] = useState({ minutes: '00', seconds: '00' });

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
    

  return (
    <section id="offer" className="my-[5vh] h-[80vh] min-h-max bg-amber-600">
                <div className="flex flex-col-reverse md:flex-row bg-gray-50 py-[5vh] px-[5vw] h-full min-h-fit">
                  <div className="flex-1 p-8 md:p-12">
                    <p className="text-lg font-bold text-black uppercase mb-4 flex items-center gap-3">
                      Special Offer
                      <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded">-20%</span>
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                      Add Two Products Get <span className="text-primary">One Free!</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Made using clean, non-toxic ingredients, our products are designed for everyone.
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
    
                    <a href="#" className="bg-black text-white font-semibold py-3 px-8 rounded hover:bg-primary transition">
                      Get Deal Now
                    </a>
                  </div>
    
                  <div className="relative flex-1 min-h-[60vh] h-full grid grid-cols-12 grid-rows-12 gap-2">
                    <div className="relative col-start-2 col-end-8 row-start-2 row-end-11 z-20 overflow-hidden group">
                        <Image src={"/images/product-07.jpg"} alt={"facial cleanser image"} fill={true} className='relative object-cover group-hover:scale-110 transition-all duration-500'></Image>
                    </div>

                    <div className="relative col-start-7 col-end-12 row-start-1 row-end-7 overflow-hidden group">
                        <Image src={"/images/product-17.jpg"} alt={"facial cleanser image"} fill={true} className='relative object-cover group-hover:scale-110 transition-all duration-500'></Image>
                    </div>
                    <div className="relative col-start-7 col-end-12 row-start-7 row-end-13 overflow-hidden group">
                        <Image src={"/images/product-15.jpg"} alt={"facial cleanser image"} fill={true} className='relative object-cover group-hover:scale-110 transition-all duration-500'></Image>
                    </div>
                  </div>
                </div>
            </section>
    
  )
}

export default Offer
