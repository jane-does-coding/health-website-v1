import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
	return (
		<div className="">
			<div className="h-[105vh] flex flex-col gap-[3vh] items-center justify-center">
				<div className="w-[85vw] border-2 border-black rounded-[10vh] flex min-h-[40vh] px-[3vw] py-[3vh]">
					<div className="w-3/5 flex flex-col pl-[3vw] items-start justify-center pr-[3vw]">
						<div className="flex items-center justify-start gap-[2vw]">
							<span className="maestro text-[4vh]">Mediblob</span>
							<img
								src="/stars/star5.png"
								className="h-[7vh] aspect-[1]"
								alt=""
							/>
						</div>
						<p className="text-[3vh] font-extralight pt-[1vh] pb-[2.5vh]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
						</p>
						<div className="flex items-center justify-center w-full gap-[1vw]">
							<Link
								href={"/"}
								className="flex items-center justify-center rounded-[2.75vh] w-full py-[1.5vh] font-bold border-2 border-black bg-neutral-800 text-white text-[2.25vh]"
							>
								Patient Login
							</Link>
							<Link
								href={"/"}
								className="flex items-center justify-center rounded-[2.75vh] w-full font-bold border-2 border-black relative py-[1.5vh] overflow-hidden"
							>
								<span className="pr-[3vw] text-[2.25vh]">Doctor Login</span>
								<span className="h-full bg-neutral-100 px-[1.5vw] flex items-center justify-center border-l-2 absolute right-0 top-0 text-[2.25vh]">
									<FaArrowRight />
								</span>
							</Link>
						</div>
					</div>
					<div className="w-2/5 ">
						<img
							src="/banner.jpg"
							className="w-full h-full object-cover rounded-[10vh] border-2 border-black"
							alt=""
						/>
					</div>
				</div>
				<div className="w-[85vw] border-2 border-black rounded-[10vh] flex items-center justify-between min-h-[15vh] px-[3vw] py-[2vh]">
					<div className="text-[3vh] pl-[1vw]">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</div>
					<div className="flex gap-[1vw]">
						<img
							src="/banner.jpg"
							className="w-[15vw] h-[13vh] object-cover rounded-[6vh] border-2 border-black"
							alt=""
						/>
						<img
							src="/banner.jpg"
							className="w-[15vw] h-[13vh] object-cover rounded-[6vh] border-2 border-black"
							alt=""
						/>
					</div>
				</div>
				<div className="w-[85vw] border-2 border-black rounded-[10vh] flex items-center justify-between min-h-[15vh] px-[3vw] py-[2vh]">
					<div className="text-[3vh] pl-[1vw]">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</div>
					<div className="flex gap-[1vw]">
						<img
							src="/banner.jpg"
							className="w-[15vw] h-[13vh] object-cover rounded-[6vh] border-2 border-black"
							alt=""
						/>
						<img
							src="/banner.jpg"
							className="w-[15vw] h-[13vh] object-cover rounded-[6vh] border-2 border-black"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
