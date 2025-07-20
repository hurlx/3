(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/Bag/[slug]/BagClientComponent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BagClientComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BagClientComponent({ bag }) {
    _s();
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(bag?.images?.[0]);
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(bag?.colors?.[0]);
    // Fallback-safe message generation
    const generateOrderMessage = ()=>{
        const colorName = selectedColor?.name || bag.colors[0]?.name || "unknown";
        return `Hello! I want to order the "${bag.name}" bag in ${colorName} color. Price: $${bag.price}. Is it still available?`;
    };
    const phone = "963997206837"; // WhatsApp number (international format, no +)
    const rawMessage = generateOrderMessage();
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    // Debug output
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BagClientComponent.useEffect": ()=>{
            console.log("Raw message:", rawMessage);
            console.log("Encoded WhatsApp URL:", whatsappURL);
        }
    }["BagClientComponent.useEffect"], [
        rawMessage,
        whatsappURL
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-10 bg-[#faebf2] relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: bag.name
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: selectedImage,
                    alt: "Main bag",
                    className: "w-[500px] rounded-xl mb-6 shadow-md transition duration-300"
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700 mb-2",
                    children: bag.shortDescription
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-semibold",
                    children: [
                        "$",
                        bag.price
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: [
                        "Tag: ",
                        bag.tag
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: "Available Colors:"
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: bag.colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    onClick: ()=>setSelectedColor(color),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-6 h-6 rounded-full border-2 ${selectedColor?.hex === color.hex ? "border-black" : "border-gray-300"}`,
                                            style: {
                                                backgroundColor: color.hex
                                            },
                                            title: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: color.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 43,
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
                            fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: whatsappURL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mt-8 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-2 px-5 rounded-full shadow-md transition",
                        children: "📲 Order via WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Bag/[slug]/BagClientComponent.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(BagClientComponent, "GBiGr/Kz0kdUt/CvWgSQ4/6GWXY=");
_c = BagClientComponent;
var _c;
__turbopack_context__.k.register(_c, "BagClientComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Bag_%5Bslug%5D_BagClientComponent_jsx_f2c821d1._.js.map