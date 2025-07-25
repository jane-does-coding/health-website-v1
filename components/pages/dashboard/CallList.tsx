import { SafeUser } from "@/app/types/SafeUser";
import React from "react";

const CallList = ({ currentUser }: { currentUser: SafeUser }) => {
	const events = [...(currentUser?.userEvents || [])]
		.filter((event) => event.type === "online")
		.sort(
			(a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
		);

	if (events.length === 0) {
		return (
			<p className="text-center text-sm text-gray-400">No events found.</p>
		);
	}

	return (
		<div className="space-y-[0vh] max-h-[40vh] overflow-scroll">
			{events.map((event) => {
				const dateObj = new Date(event.dateTime);
				const date = dateObj.toLocaleDateString();
				const time = dateObj.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				});

				return (
					<div
						key={event.id}
						className="flex items-start justify-between py-[1.25vh] px-[1vw] border-y-[0.5px] border-neutral-300"
					>
						<p className="mt-[1vh] text-[1.75vh]">
							with{" "}
							<span className="text-[2.5vh] ml-[0.25vw]">
								{event.patient?.name || "—"}
							</span>
						</p>
						<div className="flex items-center justify-between mt-[1.5vh] w-fit gap-[2vw]">
							<p>{date}</p>
							<p>{time}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CallList;
