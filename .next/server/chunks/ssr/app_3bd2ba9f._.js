module.exports = {

"[project]/app/Lib/data.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "products": (()=>products)
});
const products = [
    {
        name: "حقيبة خاصة ب Rize",
        shortDescription: "حقيبة يد أنيقة بنقشة الفهد ولمسات جلدية بنية، مزودة بسلسلة ذهبية تضيف لمسة فاخرة.",
        image: "/images/1/Kaki.jpg",
        hoverImage: "/images/1/Coffee.jpg",
        price: 20,
        id: "1",
        slug: "gg",
        images: [
            "/images/1/Coffee.jpg",
            "/images/1/Brown.jpg",
            "/images/1/Kaki.jpg"
        ],
        colors: [
            {
                name: "Coffee",
                hex: "#6F4E37"
            },
            {
                name: "Brown",
                hex: "#964B00"
            },
            {
                name: "Kaki",
                hex: "#F0E68C"
            }
        ]
    },
    {
        name: "Wavea",
        shortDescription: "حقيبة يد جلدية أنيقة ، بتصميم مموّج يدوي ومقبض علوي مجعد، مزودة بسلسلة ذهبية ووسم فاخر.",
        image: "/images/2/Kaki.jpg",
        hoverImage: "/images/2/White.jpg",
        price: 17,
        id: "2",
        slug: "aa",
        images: [
            "/images/2/Black.jpg",
            "/images/2/Kaki.jpg",
            "/images/2/White.jpg",
            "/images/2/Phosphorescent.jpg"
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff"
            },
            {
                name: "Black",
                hex: "#000000"
            },
            {
                name: "Wheat",
                hex: "#f5deb3"
            },
            {
                name: "Phosphorescent",
                hex: "#90EE90"
            }
        ]
    },
    {
        name: "حقيبة القش",
        shortDescription: "حقيبة كروس أنيقة مصنوعة من القش الطبيعي مع غطاء جلدي ، بتفاصيل مضفّرة ولمسة عصرية من الشرّابات والحبل القطني.",
        image: "/images/4/Black.jpg",
        hoverImage: "/images/4/White.jpg",
        price: 22,
        id: "3",
        slug: "ab",
        images: [
            "/images/4/Black.jpg",
            "/images/4/Brown.jpg",
            "/images/4/White.jpg",
            "/images/4/Yellow.jpg"
        ],
        colors: [
            {
                name: "White",
                hex: "#ffffff"
            },
            {
                name: "Black",
                hex: "#000000"
            },
            {
                name: "Brown",
                hex: "#964B00"
            },
            {
                name: "Yellow",
                hex: "#FFFF00"
            }
        ]
    }
];
}}),
"[project]/app/Bag/[slug]/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BagDetailPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Lib$2f$data$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Lib/data.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function BagDetailPage(props) {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(props.params);
    const bag = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Lib$2f$data$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].find((item)=>item.slug === slug);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(bag?.images?.[0]);
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(bag?.colors?.[0]);
    if (!bag) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "p-10 text-xl",
            children: "المنتج غير موجود"
        }, void 0, false, {
            fileName: "[project]/app/Bag/[slug]/page.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
    }
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }, []);
    const phone = "963997206837";
    const generateOrderMessage = ()=>{
        const colorName = selectedColor?.name || bag.colors[0]?.name || "غير معروف";
        return `مرحباً، أود طلب حقيبة "${bag.name}" باللون ${colorName}. السعر: $${bag.price}. هل هي متوفرة؟`;
    };
    const encodedMessage = encodeURIComponent(generateOrderMessage());
    const whatsappURL = isMobile ? `whatsapp://send?phone=${phone}&text=${encodedMessage}` : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        dir: "rtl",
        className: "min-h-screen mt-3 p-10 text-right",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: bag.name
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 37,
                    columnNumber: 5
                }, this),
                selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: selectedImage,
                    alt: "صورة الحقيبة",
                    className: "w-[500px] rounded-xl mb-6 shadow-md transition duration-300"
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 40,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700 mb-2",
                    children: bag.shortDescription
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 47,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-semibold",
                    children: [
                        "$",
                        bag.price
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: [
                        "التصنيف: ",
                        bag.tag
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 49,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "اختر اللون المناسب لك"
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/page.jsx",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: bag.colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-2 cursor-pointer ${selectedColor?.hex === color.hex ? "opacity-100" : "opacity-60"}`,
                                    onClick: ()=>setSelectedColor(color),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-6 h-6 rounded-full border-2 ${selectedColor?.hex === color.hex ? "border-black" : "border-gray-300"}`,
                                            style: {
                                                backgroundColor: color.hex
                                            },
                                            title: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Bag/[slug]/page.jsx",
                                            lineNumber: 64,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Bag/[slug]/page.jsx",
                                            lineNumber: 73,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                                    lineNumber: 55,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/page.jsx",
                            lineNumber: 53,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 51,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mt-6 overflow-x-auto flex-nowrap w-full justify-center pb-2 scrollbar-hide",
                    children: [
                        " ",
                        bag.images?.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: `صورة مصغرة-${i}`,
                                onClick: ()=>setSelectedImage(img),
                                className: `flex-shrink-0 w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${selectedImage === img ? "border-black" : "border-transparent"}`
                            }, i, false, {
                                fileName: "[project]/app/Bag/[slug]/page.jsx",
                                lineNumber: 82,
                                columnNumber: 7
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 80,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: whatsappURL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "relative mt-10 inline-block group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-lg transition-all duration-300 ease-in-out group-hover:bg-[#1ebe57] group-hover:shadow-2xl group-hover:scale-105 active:scale-95 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/icons/whatsapp.svg",
                                    alt: "WhatsApp",
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                                    lineNumber: 101,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: "الطلب عبر واتساب"
                                }, void 0, false, {
                                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                                    lineNumber: 102,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-80 blur-md animate-shine pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                                    lineNumber: 105,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Bag/[slug]/page.jsx",
                            lineNumber: 100,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }
    .animate-shine {
      animation: shine 1.8s linear infinite;
    }
  `
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/page.jsx",
                            lineNumber: 109,
                            columnNumber: 6
                        }, this),
                        "    "
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/page.jsx",
                    lineNumber: 94,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Bag/[slug]/page.jsx",
            lineNumber: 36,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Bag/[slug]/page.jsx",
        lineNumber: 35,
        columnNumber: 3
    }, this);
}
}}),

};

//# sourceMappingURL=app_3bd2ba9f._.js.map