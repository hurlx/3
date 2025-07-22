"use client";
import GlassMorphCard from "./End";

const products = [
  {
    name: "حقيبة ريزيه",
    shortDescription: "حقيبة يد أنيقة بنقشة الفهد ولمسات جلدية بنية، مزودة بسلسلة ذهبية تضيف لمسة فاخرة.",
    image: "/images/1/Kaki.jpg",
    hoverImage: "/images/1/Coffee.jpg",
    price: 20,
    tag: "",
    id: "1",
    slug: 'Rize'
  },
  {
    name: "حقيبة الامواج",
    shortDescription: "حقيبة يد جلدية أنيقة ، بتصميم مموّج يدوي ومقبض علوي مجعد، مزودة بسلسلة ذهبية ووسم فاخر.",
    image: "/images/2/Phosphorescent.jpg",
    hoverImage: "/images/2/White.jpg",
    price: 17,
    tag: "",
    id: "2",
    slug: 'Wavea'
  },
  {
    name: "حقيبة القش",
    shortDescription: "حقيبة كروس أنيقة مصنوعة من القش الطبيعي مع غطاء جلدي ، بتفاصيل مضفّرة ولمسة عصرية من الشرّابات والحبل القطني.",
    image: "/images/4/Yellow.jpg",
    hoverImage: "/images/4/White.jpg",
    price: 22,
    tag: "",
    id: "3",
    slug: 'straw'
  },
  {
    name: "حقيبة الصدفة",
    shortDescription: "حقيبة جلدية عريقة , مصنوعة بالكامل من الجلد مع بعض اللمسات الذهبية التي تعطي طابع فخم",
    image: "/images/5/Brawn.jpg",
    hoverImage: "/images/5/Black.jpg",
    price: 23,
    tag: "",
    id: "4",
    slug: 'Shell'
  },
  {
    name: "حقيبة الالماس",
    shortDescription: "حقيبة الألماس المميزة , ذات طابع الماسي يحتوي الوان الطيف السبع , وتحتوي على سلسلة تعطي طابع كلاسيكي",
    image: "/images/6/Rainbow.jpg",
      hoverImage: "/images/6/White.jpg",
    price: 20,
    tag: "",
    id: "5",
    slug: 'Diamond'
  },
  {
    name: "حقيبة القطة الذهبية",
    shortDescription: "حقيبة القطة الذهبية بتصميم عصري بسيط , تحتوي على حزام مزخرف , وتفاصيل ذهبية تعطي طابع فخم",
      image: "/images/7/Pink.jpg",
      hoverImage: "/images/7/Green.jpg",
    price: 18,
    tag: "",
    id: "6",
    slug: 'Cat'
  },
  {
    name: "حقيبة دلو القماش",
    shortDescription: "حقيبة القماش المقلم , قماش مخطط ذات ملمس خشن , بتصميم راقي , مع لمسات ذهبية تعطي طابع الفخامة",
      image: "/images/9/Red.jpg",
      hoverImage: "/images/9/Braown.jpg",
    price: 18,
    tag: "",
    id: "7",
    slug: 'Canvas'
  },
  {
    name: "الحقيبة الملكية",
    shortDescription: "حقيبة جلدية , تحتوي نقشة ملكية مع لمسات ذهبية تعطي طابع فخم و راقي",
      image: "/images/10/Blue.jpg",
      hoverImage: "/images/10/Pink.jpg",
    price: 17,
    tag: "",
    id: "8",
    slug: 'Royal'
  },
  {
    name: "حقيبة اللؤلؤ",
    shortDescription: "حقيبة اللؤلؤ المميزة , تحتوي على مقبض من اللؤلؤ وسلسلة فضية تعطي طابع كلاسيكي",
      image: "/images/11/Pink.jpg",
      hoverImage: "/images/11/Silver.jpg",
    price: 17,
    tag: "",
    id: "9",
    slug: 'Pearl'
  },
  {
    name: "حقيبة القمر",
    shortDescription: "حقيبة القمر الجلدية , تاتي بحزام جلدي فخم وحزام قماشي عريض مع بعض التفاصيل الذهبية",
      image: "/images/12/white.jpg",
      hoverImage: "/images/12/wheat.jpg",
    price: 17,
    tag: "",
    id: "10",
    slug: 'Moon'
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {products.map((product, index) => (
        <GlassMorphCard key={index} product={product} />
      ))}
    </div>
  );
}
