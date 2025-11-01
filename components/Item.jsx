import Image from "next/image";

export default function Item() {

  const imageData = [
    {
      src: "/images/2.webp",
      title: "حقيبة ريزيه",
      desc: "لمسة أنثوية بجرأة التفاصيل",
      big: true,
    },
    {
      src: "/images/8/3.webp",
      title: "ألوان تعكس إشراقتك",
      desc: "",
      big: false,
    },
    {
      src: "/images/8/6.webp",
      title: "لكل يوم قصة مختلفة",
      desc: "",
      big: false,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <h2 className="text-2xl mb-12 text-center text-black/80 tracking-wider uppercase">
        Trending Now
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Featured */}
        <div
          
          className="relative h-[400px] lg:col-span-2 overflow-hidden rounded-sm [direction:rtl]"
        >
          <div className="overlay absolute inset-0 bg-black origin-left scale-x-100"></div>
          <Image
            src={imageData[0].src}
            alt={imageData[0].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/70 to-transparent text">
            <h3 className="text-4xl font-bold mb-5">{imageData[0].title}</h3>
            <p className="text-sm mb-4">{imageData[0].desc}</p>
          </div>
        </div>
        {/* Bottom Two */}
        {imageData.slice(1).map((item, i) => (
          <div
            key={i}
            className="relative h-[300px] overflow-hidden rounded-sm [direction:rtl]"
          >
            <div className="overlay absolute inset-0 bg-black origin-left scale-x-100"></div>
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 right-6 text-white text">
              <p className="font-medium text-lg [direction:rtl]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
