"use client";
import { use, useState, useEffect } from "react";
import { products } from "@/app/Lib/data";

export default function BagDetailPage(props) {
  const { slug } = use(props.params);
  const bag = products.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState(bag?.images?.[0]);
  const [selectedColor, setSelectedColor] = useState(bag?.colors?.[0]);
  const [activeTab, setActiveTab] = useState("details");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  if (!bag)
    return <main className="p-10 text-center text-lg">المنتج غير موجود</main>;

  const phone = "963997206837";
  const generateOrderMessage = () => {
    const colorName = selectedColor?.name || bag.colors[0]?.name || "غير معروف";
    const price = bag.salePrice ?? bag.price;
    return `مرحباً، أود طلب حقيبة "${bag.name}" باللون ${colorName}. السعر: $${price}. هل هي متوفرة؟`;
  };

  const encodedMessage = encodeURIComponent(generateOrderMessage());
  const whatsappURL = isMobile
    ? `whatsapp://send?phone=${phone}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-black flex justify-center py-10 px-4 md:px-10"
    >
      <section className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* ---------- LEFT: Images ---------- */}
        <div>
          <div className="bg-[#f6f6f6] rounded-2xl overflow-hidden mb-5">
            <img
              src={selectedImage}
              alt={bag.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-gray-300">
            {bag.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`صورة ${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 flex-shrink-0 ${
                  selectedImage === img
                    ? "border-black scale-105"
                    : "border-gray-200 opacity-80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- RIGHT: Product Info ---------- */}
        <div className="flex flex-col justify-between min-h-full">
          {/* Product Info */}
          <div>
            <h1 className="text-[1.8rem] font-extrabold tracking-tight mb-2 md:text-4xl">
              {bag.name}
            </h1>
            <p className="text-gray-500 text-sm mb-4 md:text-base leading-relaxed">
              {bag.shortDescription}
            </p>

            {/* Price */}
            <div className="mb-6 flex items-baseline gap-3">
              {bag.salePrice ? (
                <>
                  <span className="line-through text-gray-400 text-base">
                    ${bag.price}
                  </span>
                  <span className="text-3xl font-extrabold">${bag.salePrice}</span>
                </>
              ) : (
                <span className="text-3xl font-extrabold">${bag.price}</span>
              )}
            </div>

            {/* Colors */}
            <div className="mb-10">
              <h3 className="font-semibold mb-3 text-lg">الألوان المتاحة</h3>
              <div className="flex gap-4 overflow-x-auto py-3 px-3 scrollbar-thin scrollbar-thumb-gray-300">
                {bag.colors.map((color, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0"
                    onClick={() => setSelectedColor(color)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-150 ${
                        selectedColor?.hex === color.hex
                          ? "border-black scale-110"
                          : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span
                      className={`text-sm ${
                        selectedColor?.hex === color.hex
                          ? "text-black font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-b border-gray-200">
              <div className="flex justify-around text-center text-sm font-semibold text-gray-500">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`py-4 w-1/3 ${
                    activeTab === "details"
                      ? "text-black border-b-2 border-black"
                      : ""
                  }`}
                >
                  التفاصيل
                </button>
                <button
                  onClick={() => setActiveTab("info")}
                  className={`py-4 w-1/3 ${
                    activeTab === "info"
                      ? "text-black border-b-2 border-black"
                      : ""
                  }`}
                >
                  المعلومات
                </button>
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`py-4 w-1/3 ${
                    activeTab === "delivery"
                      ? "text-black border-b-2 border-black"
                      : ""
                  }`}
                >
                  التوصيل
                </button>
              </div>

              {/* Tab Content */}
              <div className="px-2 py-5 text-sm text-gray-600 leading-relaxed md:text-base">
                {activeTab === "details" && (
                  <div>
                    <p> تصميم عصري يناسب جميع الإطلالات</p>
                    <p> خامات عالية الجودة ومتينة</p>
                    <p> مساحة تخزين مثالية لحاجياتك اليومية</p>
                  </div>
                )}
                {activeTab === "info" && (
                  <div>
  <ul>
    {bag.info?.material && <li>الخامة: {bag.info.material}</li>}
    {bag.info?.size && <li>الحجم: {bag.info.size}</li>}
    {bag.info?.strap && <li>الحزام: {bag.info.strap}</li>}
    {bag.info?.interior && <li>الداخل: {bag.info.interior}</li>}
  </ul>
</div>
                )}
                {activeTab === "delivery" && (
                  <div>
                    <p> التوصيل متاح لجميع المناطق</p>
                    <p> المدة المتوقعة: 2 - 5 أيام عمل</p>
                    <p> الدفع عند الاستلام</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 md:mt-16">
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full py-4 bg-black text-white rounded-full text-lg font-bold tracking-wide hover:bg-[#222] active:scale-95 transition-all shadow-lg md:py-5 md:text-xl">
                الطلب عبر واتساب
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
