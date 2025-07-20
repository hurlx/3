(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Lib/data.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "products": (()=>products)
});
const products = [
    {
        name: "Aeris Edge Bag",
        shortDescription: "Sculptural form meets soft structure",
        image: "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
        hoverImage: "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
        price: 420,
        tag: "Limited",
        id: "1",
        slug: "tote",
        images: [
            "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
            "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
            "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg"
        ],
        colors: [
            {
                name: "Black",
                hex: "#000000"
            },
            {
                name: "Beige",
                hex: "#f5f5dc"
            },
            {
                name: "Wine",
                hex: "#722f37"
            }
        ],
        extraDescription: `Crafted from premium vegan leather with hand-stitched detailing.
Spacious interior fits a 13" laptop, water bottle, and daily essentials.
Includes an interior zip pocket and magnetic snap closure.`
    },
    {
        name: "Nova Mini Cross",
        shortDescription: "Sleek, lightweight daily essential",
        image: "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
        hoverImage: "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
        price: 280,
        tag: "Bestseller",
        id: "2",
        slug: "canvas-tote",
        images: [
            "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
            "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
            "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg"
        ],
        colors: [
            {
                name: "Black",
                hex: "#000000"
            },
            {
                name: "Beige",
                hex: "#f5f5dc"
            },
            {
                name: "Wine",
                hex: "#722f37"
            }
        ],
        extraDescription: `Crafted from premium vegan leather with hand-stitched detailing.
Spacious interior fits a 13" laptop, water bottle, and daily essentials.
Includes an interior zip pocket and magnetic snap closure.`
    },
    {
        name: "Orbit Tote",
        shortDescription: "Minimal tote with smart compartments",
        image: "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
        hoverImage: "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
        price: 360,
        tag: "New",
        id: "3",
        slug: "canvas",
        images: [
            "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
            "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
            "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg"
        ],
        colors: [
            {
                name: "Black",
                hex: "#000000"
            },
            {
                name: "Beige",
                hex: "#f5f5dc"
            },
            {
                name: "Wine",
                hex: "#722f37"
            }
        ],
        extraDescription: `Crafted from premium vegan leather with hand-stitched detailing.
Spacious interior fits a 13" laptop, water bottle, and daily essentials.
Includes an interior zip pocket and magnetic snap closure.`
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Bag/[slug]/BagDetailClient.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BagDetailClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Lib$2f$data$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Lib/data.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BagDetailClient({ slug }) {
    _s();
    const bag = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Lib$2f$data$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((item)=>item.slug === slug);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(bag?.images?.[0]);
    if (!bag) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "p-10 text-xl",
            children: "Bag not found"
        }, void 0, false, {
            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    }
    const baseUrl = "https://www.rizebags.com";
    const productUrl = `${baseUrl}/Bag/${bag.slug}`;
    const whatsappMessage = `مرحبا! أنا مهتم بمنتج "${bag.name}" الموجود على هذا الرابط: ${productUrl}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-10 bg-[#faebf2] z-10 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: bag.name
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: selectedImage,
                    alt: "Main bag",
                    className: "w-[500px] rounded-xl mb-6 shadow-md transition duration-300"
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700 mb-2",
                    children: bag.shortDescription
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-semibold",
                    children: [
                        "$",
                        bag.price
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: [
                        "Tag: ",
                        bag.tag
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "Available Colors:"
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: bag.colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-full border border-gray-300",
                                            style: {
                                                backgroundColor: color.hex
                                            },
                                            title: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mt-6",
                    children: bag.images?.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: `thumb-${i}`,
                            onClick: ()=>setSelectedImage(img),
                            className: `w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${selectedImage === img ? "border-black" : "border-transparent"}`
                        }, i, false, {
                            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `https://wa.me/963997206837?text=${encodeURIComponent(whatsappMessage)}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mt-6 inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition",
                    children: "مشاركة المنتج عبر واتساب"
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Bag/[slug]/BagDetailClient.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(BagDetailClient, "MxV/BCDlHoZnTcFrto/K86VFPXY=");
_c = BagDetailClient;
var _c;
__turbopack_context__.k.register(_c, "BagDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_0d5cfaf7._.js.map