import React, {useState} from 'react'
import {
  ShoppingBag,
  Star,
  ChevronRight,
} from 'lucide-react';

import Image from 'next/image';



interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  reviews?: number;
  badge?: string;
}

interface ProductsProps {
  header: string;
  products:Product[];
}


const Products = ({header, products}: ProductsProps) => {
    // const [cart, setCart] = useState<Product[]>([]);
    

    const addToCart = (product: Product) => {
        // const existing = cart.find((item) => item.id === product.id);
        // if (existing) {
        // alert('You have already added this item to your cart');
        // return;
        // }
        // setCart([{ ...product, quantity: 1 }, ...cart]);
        // setIsCartOpen(true);
        alert("added to cart")
    };
  return (
    <section id="shop" className="py-[10vh] px-[5vw]  bg-background">
          <div className="mx-auto px-4">
            <div className="flex justify-between items-center flex-wrap mb-10">
              <h2 className="text-4xl font-semibold text-foreground">{header}</h2>
              <a href="#" className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition">
                Shop All Products <ChevronRight className='w-4 h-4' />
              </a>
            </div>

            <div className="flex overflow-x-auto gap-8 pb-4">
              {products.map((product) => (
                <div key={product.id} className="min-w-[80vw] md:min-w-[35vw] lg:min-w-[20vw] bg-backgrounf rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
                  {/* Image container */}
                  <div className="relative w-full h-80">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition duration-500" sizes="(max-width: 1024px) 100vw, 33vw" />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm font-bold rounded z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Action buttons */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-x-10 group-hover:translate-x-0 z-10">
                      <button onClick={() => addToCart(product)} className="bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300" aria-label="Add to cart">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                      <button className="bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300" aria-label="Add to wishlist">
                        <Star className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-lg font-bold text-foreground mb-1">${product.price.toFixed(2)}</p>
                    <h3 className="text-gray-700 hover:text-primary transition font-medium">
                      <a href="#">{product.name}</a>
                    </h3>
                    <div className="flex justify-center items-center mt-2">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                      </div>
                      <p className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  )
}

export default Products
