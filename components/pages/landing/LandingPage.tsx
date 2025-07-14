"use client";
import Link from "next/link";
import React from "react";
import AboutSection from "./AboutSection";
import Pharagraph from "./Word";
import CardsSection from "./CardsSection";
import BannerSection from "./BannerSection";

const LandingPage = () => {
	return (
		<div className="">
			<BannerSection />
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
			<AboutSection />
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
			<div className="min-relative h-[105vh] flex flex-col items-center justify-center relative">
				<Pharagraph value="Lorem ipsum dolor sit amet, consectetur adipiscin _image_ elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem _image2_ ipsum dolor sit amet, consectetur adipiscing elit, sed do _image3_ eiusmod tempor incididunt ut labore et dolore magna aliqua." />
			</div>
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
			<CardsSection />
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
		</div>
	);
};

export default LandingPage;
