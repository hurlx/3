import React from 'react';
import Link from 'next/link';

const ShoeShowcase = () => {
  const showcaseItems = [
    {
      title: "حقيبة القش",
      subtitle: "حقيبة كروس فاخرة من القش الطبيعي بغطاء جلدي وتفاصيل مضفّرة وشرّابات أنيقة.",
      buttonText: "تسوقي الآن",
      image: "/images/4/1.webp",
      href: "/Bag/straw"
    },
    {
      title: "حقيبة القطة الذهبية",
      subtitle: "حقيبة القطة الذهبية بتصميم عصري وبسيط، مزينة بحزام وتفاصيل ذهبية فاخرة.",
      buttonText: "تسوقي الآن",
      image: "/images/7/3.webp",
      href: "/Bag/Cat"
    },
    {
      title: "حقيبة خطوط القماش",
      subtitle: "حقيبة قماش مخطط فاخرة بملمس خشن ولمسات ذهبية راقية.",
      buttonText: "تسوقي الآن",
      image: "/images/13/2.webp",
      href: "/Bag/Fabric"
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 [direction:rtl]">
        {showcaseItems.map((item, index) => (
          <div key={index} className="relative h-[500px] overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h2 className="text-black/80 text-4xl font-bold mb-2">{item.title}</h2>
              <p className="text-black/80 text-lg mb-4">{item.subtitle}</p>
              <Link href={item.href}>
                <span className="inline-block px-6 py-3 bg-black text-white rounded-md hover:text-black hover:bg-white transition-all duration-300">
                  {item.buttonText}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShoeShowcase;