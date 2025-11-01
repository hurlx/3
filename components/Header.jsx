"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    router.push("/Bag");
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/8/1.webp"
        alt="Bag background"
        className="absolute inset-0 w-full h-full object-cover brightness-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text & Button */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Title Animation */}
        <h1 className="text-[9vw] md:text-[6vw] font-bold leading-[1.6] tracking-tight">
          <div className="overflow-hidden">
            <span className="block animate-slide-up">
              تألّقي بلا حدود
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="block animate-slide-up [animation-delay:0.3s]">
              واختاري <span className="text-pink-400">حقيبتك بثقة</span>
            </span>
          </div>
        </h1>

        {/* Arabic Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-pink-200 animate-fade">
          الأناقة تبدأ من حقيبتك
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          disabled={loading}
          className={`mt-8 relative px-10 py-4 rounded-xl bg-pink-400/40 backdrop-blur-md border border-white/30 text-white font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/50 ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          <span className="absolute top-0 left-[-50%] w-[50%] h-full bg-gradient-to-r from-white/40 to-transparent blur-md opacity-0 pointer-events-none transition-opacity duration-500 hover:opacity-80 animate-shine"></span>
          <span className="relative z-10">
            {loading ? "جارٍ التحميل..." : "شاهدي التفاصيل"}
          </span>
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade {
          animation: fade 1.2s ease-in forwards;
        }
        .animate-shine {
          animation-play-state: paused;
          animation: shine 2s linear infinite;
        }
        button:hover .animate-shine {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
};

export default Header;
