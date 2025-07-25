import { SafeUser } from "@/app/types/SafeUser";
import React from "react";

const EventsList = ({ currentUser }: { currentUser: SafeUser }) => {
	const events = [...(currentUser?.userEvents || [])].sort(
		(a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
	);

	if (events.length === 0) {
		return (
			<p className="text-center text-sm text-gray-400">No events found.</p>
		);
	}

	return (
		<div className="space-y-[1.5vh]">
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
						className="flex flex-col items-start justify-center py-[2.25vh] px-[3vw] rounded-[7vh] border-[1px] border-black"
					>
						<h2 className="text-[2.75vh] capitalize font-medium">
							{event.type} Appointment
						</h2>
						<p className="mt-[2.25vh] text-[2vh]">
							With{" "}
							<span className="py-[0.5vh] px-[1.75vw] rounded-full border-[1px] ml-[0.5vw]">
								{event.patient?.name || "—"}
							</span>
						</p>
						<div className="flex items-center w-full justify-between mt-[1.5vh] text-[2vh]">
							<p>{date}</p>
							<p>{time}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default EventsList;
