import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Image from "next/image";

const Item = () => {
	// Array of images for the first slider
	const images1 = [
		"/images/6/Rainbow.jpg",
		"/images/7/Black.jpg",
		"/images/5/Brawn.jpg",
		"/images/4/Yellow.jpg",
		"/images/2/White.jpg",
		"/images/1/Kaki.jpg",
		"/images/9/Black.jpg",
		"/images/11/Silver.jpg",
		"/images/10/Pink.jpg",
	];

	// Array of images for the second slider
	const images2 = [
		"/images/6/Rainbow.jpg",
		"/images/7/Black.jpg",
		"/images/5/Brawn.jpg",
		"/images/4/Yellow.jpg",
		"/images/2/White.jpg",
		"/images/1/Kaki.jpg",
		"/images/9/Black.jpg",
		"/images/11/Silver.jpg",
		"/images/10/Pink.jpg",
	];

	return (
		<section className="pt-16">
			<div className="transition-colors duration-500">
				<h1 dir="rtl" className="mb-20 font-bold">
					<AnimatedTitle
						title={`اختيارات أنيقة تُناسب\nكل لحظة وكل أسلوب`}
						isArabic
					/>
				</h1>

				{/* First Slider */}
				<div
					className="slider my-14"
					reverse="true"
					style={{
						"--width": "350px",
						"--height": "350px",
						"--quantity": images1.length,
					}}
				>
					<div className="list">
						{images1.map((src, i) => (
							<div
								key={i}
								className="item"
								style={{ "--position": `${i + 1}` }}
							>
								<Image src={src} alt={`slider1-img-${i}`} draggable="false" />
							</div>
						))}
					</div>
				</div>

				{/* Second Slider */}
				<div
					className="slider rounded-xl"
					style={{
						"--width": "350px",
						"--height": "350px",
						"--quantity": images2.length,
					}}
				>
					<div className="list rounded-xl">
						{images2.map((src, i) => (
							<div
								key={i}
								className="item rounded-xl"
								style={{ "--position": `${i + 1}` }}
							>
								<Image src={src} alt={`slider2-img-${i}`} draggable="false" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Item;
