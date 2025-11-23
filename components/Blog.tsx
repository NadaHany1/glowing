
'use client';
import React from 'react';
import {ChevronRight} from 'lucide-react';
import data from "@/data/data.json"

const articles = data.articles;

import Image from 'next/image';
const Blog = () => {
  return (
    <section id="blog" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-foreground text-center mb-10">More To Discover</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden group">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      <a href="#" className="hover:text-primary transition">{article.title}</a>
                    </h3>

                    <button className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition">
                      {article.linkText} <ChevronRight className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

  )
}

export default Blog
