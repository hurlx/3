"use client";
import { useState } from "react";
import Link from "next/link";

export default function GlassMorphCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer flex flex-col">
      
      {/* 1) IMAGE + HOVER EFFECT */}
      <Link
        href={`/Bag/${product.slug}`}
        className="block relative w-full h-[460px] max-sm:h-[430px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Default */}
        <img
          src={product.image}
          alt={product.name}
          draggable="false"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hover */}
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate view`}
          draggable="false"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </Link>
      
      <div className="bg-white p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {product.shortDescription}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-md font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}