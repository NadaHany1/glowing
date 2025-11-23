import React from 'react'
import { ChevronRight } from 'lucide-react'

const data=[
    {
        header:"Summer Collection",
        text:"Starting at $17.99",
        img:"/images/collection-1.jpg"
    },
    {
        header:"What's New?",
        text:"Get the glow",
        img:"/images/collection-2.jpg"
    },
    {
        header:"Buy 1 Get 1",
        text:"Starting at $7.99",
        img:"/images/collection-3.jpg"
    },
]

const Collection = () => {
  return (
    <section id="collection" className="w-full h-[80vh] min-h-max bg-background">
        <div className="px-[10vw] py-[10vh] mx-autogrid lg:grid-cols-3 gap-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {data.map((item, index)=>(
                    <div key={index} className="relative min-h-[60vh] p-10 flex flex-col justify-end group overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${item.img})`}} />
                        <div className="relative h-full w-full flex flex-col justify-between  z-10 text-foreground">
                            <div>
                                <h2 className="text-3xl font-semibold mb-3">{item.header}</h2>
                                <p className="mb-6">{item.text}</p>
                            </div>
                            <a href="#" className="flex items-center gap-2 font-semibold hover:text-primary transition">Shop Now <ChevronRight className='w-4 h-4' /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

  )
}

export default Collection
