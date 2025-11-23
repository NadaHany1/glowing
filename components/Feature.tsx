import React from 'react'
import data from "@/data/data.json"
// import { features } from 'process'
import Image from 'next/image'

const features = data.features

const Feature = () => {
  return (
    <section id="feature" className="py-16">
        <h2 className='text-5xl text-center font-medium mb-[5vh]'>Why Shop with Glowing?</h2>
        <div className="flex justify-evenly items-center flex-wrap gap-8">
            {features.map((feature, index) =>(
                <div key={index} className="bg-background w-4/5 md:w-1/4 p-6 text-center rounded-lg">
                    <div className="relative mx-auto h-30 aspect-square aspe flex justify-center items-center mb-4">
                        <Image src={feature.icon} alt='feature icon' fill={true} className='relative'/>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.text}</p>
                </div>
            )
            )}
        </div>
    </section>
  )
}

export default Feature
