import React from "react";

const CardsSection = () => {
	return (
		<div className="">
			<div className="h-[105vh] flex flex-col gap-[3vh] items-center justify-center w-[85vw] mx-auto relative">
				<img
					src="/stars/image 1.png"
					className="absolute top-[6vh] right-[-5vw] w-[20vw]"
					alt=""
				/>
				<img
					src="/stars/image 3.png"
					className="absolute bottom-[4vh] z-[-1] left-[-5vw] w-[10vw]"
					alt=""
				/>
				<div className="flex gap-[2vw] w-full">
					<div className="flex flex-col w-1/3 gap-[3vh]">
						<div className="w-full h-[55vh] rounded-[12.5vh] overflow-hidden box-border border-2 border-black relative">
							<div className="absolute top-[1vh] left-[50%] translate-x-[-50%] border-[1.5px] border-black py-[0.5vh] px-[2vw] bg-white rounded-full">
								<p className="font-light text-[2vh]">Lorem Ipsum</p>
							</div>
							<img
								src="/banner.jpg"
								className="w-full h-full object-cover"
								alt=""
							/>
						</div>
						<div className="bg-neutral-100 rounded-[6.5vh] min-h-[15vh] w-full box-border border-2 border-black flex flex-col items-start justify-center px-[3vw]">
							<h2 className="text-[3vh] font-medium mb-[0.25vh]">
								Lorem Ipsum
							</h2>
							<p className="text-[2.25vh] font-extralight">
								Lorem ipsum dolor sit.
							</p>
						</div>
					</div>
					<div className="flex flex-col w-1/3 gap-[2vh]">
						<div className="w-full h-[55vh] rounded-[12.5vh] overflow-hidden box-border border-2 border-black relative">
							<div className="absolute top-[1vh] left-[50%] translate-x-[-50%] border-[1.5px] border-black py-[0.5vh] px-[2vw] bg-white rounded-full">
								<p className="font-light text-[2vh]">Lorem Ipsum</p>
							</div>
							<img
								src="/banner.jpg"
								className="w-full h-full object-cover"
								alt=""
							/>
						</div>
						<div className="bg-neutral-100 rounded-[6.5vh] min-h-[15vh] w-full box-border border-2 border-black flex flex-col items-start justify-center px-[3vw]">
							<h2 className="text-[3vh] font-medium mb-[0.25vh]">
								Lorem Ipsum
							</h2>
							<p className="text-[2.25vh] font-extralight">
								Lorem ipsum dolor sit.
							</p>
						</div>
					</div>
					<div className="flex flex-col w-1/3 gap-[2vh]">
						<div className="w-full h-[55vh] rounded-[12.5vh] overflow-hidden box-border border-2 border-black relative">
							<div className="absolute top-[1vh] left-[50%] translate-x-[-50%] border-[1.5px] border-black py-[0.5vh] px-[2vw] bg-white rounded-full">
								<p className="font-light text-[2vh]">Lorem Ipsum</p>
							</div>
							<img
								src="/banner.jpg"
								className="w-full h-full object-cover"
								alt=""
							/>
						</div>
						<div className="bg-neutral-100 rounded-[6.5vh] min-h-[15vh] w-full box-border border-2 border-black flex flex-col items-start justify-center px-[3vw]">
							<h2 className="text-[3vh] font-medium mb-[0.25vh]">
								Lorem Ipsum
							</h2>
							<p className="text-[2.25vh] font-extralight">
								Lorem ipsum dolor sit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardsSection;
