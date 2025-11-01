"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../Lib/data";

export default function BagPage() {
  return (
    <section className="min-h-screen bg-[#f8f4f5] px-6 md:px-16 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          اكتشفي التميز
        </h2>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          تصاميم تجمع بين الأناقة والجرأة — مصممة لتُكمل أسلوبك كل يوم.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-500"
          >
            {/* Product Image */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col justify-between text-right">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-tight">
                  {product.shortDescription}
                </p>
              </div>

              <div className="flex items-center justify-between mt-5">
                <p className="text-pink-600 font-bold text-lg">
                  $ {product.price}
                </p>
                <Link
                  href={`/Bag/${product.slug}`}
                  className="text-sm font-semibold bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  تسوق الآن
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
