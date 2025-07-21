"use client";
import { use, useState, useEffect } from "react";
import { products } from "@/app/Lib/data";

export default function BagDetailPage(props) {
  // 1. unwrap params promise
  const { slug } = use(props.params);

  const bag = products.find((item) => item.slug === slug);
  if (!bag) {
    return <main className="p-10 text-xl">المنتج غير موجود</main>;
  }

  // -- MAIN IMAGE SLIDER STATE & LOGIC --
  const [selectedImage, setSelectedImage] = useState(bag.images[0]);
  useEffect(() => {
    setSelectedImage(bag.images[0]);
  }, [bag.images]);

  const images = bag.images;
  const currentIndex = images.findIndex((img) => img === selectedImage);
  const prevImage = () =>
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  const nextImage = () =>
    setSelectedImage(images[(currentIndex + 1) % images.length]);

  // -- COLOR PICKER STATE --
  const [selectedColor, setSelectedColor] = useState(bag.colors[0]);

  // -- WhatsApp logic (unchanged) --
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);
  const phone = "963997206837";
  const generateOrderMessage = () => {
    const colorName =
      selectedColor?.name || bag.colors[0]?.name || "غير معروف";
    return `مرحباً، أود طلب حقيبة "${bag.name}" باللون ${colorName}. السعر: $${bag.price}. هل هي متوفرة؟`;
  };
  const encodedMessage = encodeURIComponent(generateOrderMessage());
  const whatsappURL = isMobile
    ? `whatsapp://send?phone=${phone}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  return (
    <main dir="rtl" className="min-h-screen mt-3 p-10 text-right">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* — Main Image Slider */}
        <div className="relative w-[500px] max-w-full rounded-xl mb-6 shadow-md">
          <img
            src={selectedImage}
            alt="صورة الحقيبة"
            className="w-full h-auto object-cover rounded-xl transition duration-300"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
          >
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>

        {/* — Product Info */}
        <h1 className="text-3xl font-bold mb-4">{bag.name}</h1>
        <p className="text-lg text-gray-700 mb-2">{bag.shortDescription}</p>
        <p className="text-xl font-semibold">${bag.price}</p>
        <p className="text-sm text-gray-500 mt-2">التصنيف: {bag.tag}</p>

        {/* — Color Picker */}
        <div className="mt-6 flex flex-col items-center w-full">
          <h3 className="text-lg font-semibold mb-2">اختر اللون المناسب لك</h3>
          <div className="grid grid-cols-4 max-sm:grid-cols-3 gap-4">
            {bag.colors.map((color, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 cursor-pointer ${
                  selectedColor.hex === color.hex ? "opacity-100" : "opacity-60"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor.hex === color.hex
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
                <span className="text-sm text-gray-700">{color.name}</span>
              </div>
            ))}
          </div>
        </div>


        {/* — WhatsApp Order Button */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-10 inline-block group"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-lg transition-all duration-300 ease-in-out group-hover:bg-[#1ebe57] group-hover:shadow-2xl group-hover:scale-105 active:scale-95 overflow-hidden">
            <img
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <span className="relative z-10">الطلب عبر واتساب</span>
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-80 blur-md animate-shine pointer-events-none" />
          </div>
          <style>{`
            @keyframes shine {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
            .animate-shine { animation: shine 1.8s linear infinite; }
          `}</style>
        </a>
      </div>
    </main>
  );
}
