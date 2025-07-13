"use client";
import Link from "next/link";
import React from "react";
import AboutSection from "./AboutSection";
import Pharagraph from "./Word";
import CardsSection from "./CardsSection";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { easeOut } from "framer-motion";

const LandingPage = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const fadeInUp = (delay = 0) => ({
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, delay, ease: easeOut },
		},
	});

	return (
		<div className="">
			<div className="h-screen flex flex-col items-center justify-center">
				<motion.h1
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={fadeInUp(0)}
					className="text-[7vh] maestro pb-[1.5vh] mx-auto w-fit tracking-[1vh]"
				>
					Mediblob
				</motion.h1>
				<nav className="flex items-center justify-between w-full md:w-[50vw] mx-auto">
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={fadeInUp(0.1)}
						className=""
					>
						<Link href={"/"} className="font-extralight text-[3vh]">
							Lorem Ipsum
						</Link>
					</motion.div>
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={fadeInUp(0.2)}
						className=""
					>
						<Link href={"/"} className="font-extralight text-[3vh]">
							Lorem Ipsum
						</Link>
					</motion.div>
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={fadeInUp(0.3)}
						className=""
					>
						<Link href={"/"} className="font-extralight text-[3vh]">
							Lorem Ipsum
						</Link>
					</motion.div>
				</nav>
				<motion.img
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={fadeInUp(0.4)}
					src="/banner.jpg"
					className="rounded-[10vh] w-[90vw] mx-auto h-[55vh] object-cover mt-[3vh]"
					alt="banner image"
				/>
				<motion.p
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={fadeInUp(0.5)}
					className="text-[4vh] w-[85vw] mx-auto text-center font-extralight mt-[2vh]"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
				</motion.p>
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
