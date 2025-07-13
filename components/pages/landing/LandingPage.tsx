import Link from "next/link";
import React from "react";
import AboutSection from "./AboutSection";
import Pharagraph from "./Word";
import CardsSection from "./CardsSection";

const LandingPage = () => {
	return (
		<div className="">
			<div className="h-screen flex flex-col items-center justify-center">
				<div className="text-[7vh] maestro pb-[1.5vh] mx-auto w-fit tracking-[1vh]">
					Mediblob
				</div>
				<nav className="flex items-center justify-between w-full md:w-[50vw] mx-auto">
					<Link href={"/"} className="font-extralight text-[3vh]">
						Lorem Ipsum
					</Link>
					<Link href={"/"} className="font-extralight text-[3vh]">
						Lorem Ipsum
					</Link>
					<Link href={"/"} className="font-extralight text-[3vh]">
						Lorem Ipsum
					</Link>
				</nav>
				<img
					src="/banner.jpg"
					className="rounded-[10vh] w-[90vw] mx-auto h-[55vh] object-cover mt-[3vh]"
					alt="banner image"
				/>
				<p className="text-[4vh] w-[85vw] mx-auto text-center font-extralight mt-[2vh]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
				</p>
			</div>
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
			<AboutSection />
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
			<div className="min-h-[105vh] flex flex-col items-center justify-center relative">
				<Pharagraph value="Lorem ipsum dolor sit amet, consectetur adipiscin _image_ elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem _image2_ ipsum dolor sit amet, consectetur adipiscing elit, sed do _image3_ eiusmod tempor incididunt ut labore et dolore magna aliqua." />
			</div>
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
			<CardsSection />
			<img src="/border.png" className="w-[100vw] object-cover" alt="" />
		</div>
	);
};

export default LandingPage;
