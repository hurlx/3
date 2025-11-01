import Link from "next/link";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="relative mb-20 text-white flex flex-col md:flex-row items-center justify-center text-center px-6 py-24 overflow-hidden">
      <div className="z-10">
        <h1 className="text-5xl md:text-6xl mb-4">
          حقيبتك... لمسة من الفخامة
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          حيث يلتقي التصميم بالأناقة، والتفاصيل تصنع الفرق.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/Bag"
            className="px-6 py-3 bg-white text-black rounded-md hover:text-white hover:bg-black transition-all duration-300"
          >
            اختاري حقيبتك
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center mt-16">
        <Image
          src="/images/8/3.webp"
          alt=""
          width={1000}
          height={600}
          className="object-contain translate-y-24 md:translate-y-40"
        />
      </div>
    </section>
  );
}

