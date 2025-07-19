import { SafeUser } from "@/app/types/SafeUser";
import React from "react";

const SymptomsView = ({ user }: { user: any }) => {
	if (!user || !user.symptoms || user.symptoms.length === 0) {
		return (
			<div className="mt-[3vh]">
				<h2 className="text-[3.5vh] font-light mb-[2vh]">
					No Symptoms Reported
				</h2>
			</div>
		);
	}

	return (
		<div className="mt-[3vh]">
			<h2 className="text-[3.5vh] font-light mb-[2vh]">Symptoms Reported</h2>
			<div className="flex gap-[2vw]">
				<div className="flex gap-[1vw] items-center justify-center">
					<div className="w-[2vw] h-[2vw] rounded-full bg-neutral-200 border-1 border-neutral-900"></div>
					<span className="text-[2.5vh] font-light">Severe</span>
				</div>
				<div className="flex gap-[1vw] items-center justify-center">
					<div className="w-[2vw] h-[2vw] rounded-full bg-neutral-200/0 border-2 border-dashed border-neutral-900"></div>
					<span className="text-[2.5vh] font-light">Mild</span>
				</div>
			</div>
			<div className="flex gap-x-[2vw] gap-y-[2vh] flex-wrap mt-[3vh]">
				{user.symptoms.map((symptom: any, i: number) => (
					<div
						key={i}
						className={`rounded-full border-1 border-black px-[3vw] py-[1vh] text-[2.5vh] ${
							symptom.level === "severe"
								? "bg-neutral-200"
								: "bg-neutral-200/0  border-dashed"
						}`}
					>
						{symptom.symptom}
					</div>
				))}
			</div>
		</div>
	);
};

export default SymptomsView;
