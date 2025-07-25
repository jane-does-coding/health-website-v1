import { SafeUser } from "@/app/types/SafeUser";
import React from "react";

const EventsList = ({ currentUser }: { currentUser: SafeUser }) => {
	const events = currentUser?.userEvents || [];

	if (events.length === 0) {
		return (
			<p className="text-center text-sm text-gray-400">No events found.</p>
		);
	}

	return (
		<div className="overflow-x-auto border rounded-xl">
			<table className="min-w-full text-sm">
				<thead className="bg-neutral-800 text-white">
					<tr>
						<th className="px-4 py-2 text-left">Date</th>
						<th className="px-4 py-2 text-left">Time</th>
						<th className="px-4 py-2 text-left">Type</th>
						<th className="px-4 py-2 text-left">Doctor</th>
						<th className="px-4 py-2 text-left">Patient</th>
						<th className="px-4 py-2 text-left">Zoom Link</th>
						<th className="px-4 py-2 text-left">Notes</th>
					</tr>
				</thead>
				<tbody>
					{events.map((event) => {
						const dateObj = new Date(event.dateTime);
						const date = dateObj.toLocaleDateString();
						const time = dateObj.toLocaleTimeString([], {
							hour: "2-digit",
							minute: "2-digit",
						});

						return (
							<tr key={event.id} className="border-t">
								<td className="px-4 py-2">{date}</td>
								<td className="px-4 py-2">{time}</td>
								<td className="px-4 py-2 capitalize">{event.type}</td>
								<td className="px-4 py-2">{event.doctor?.name || "—"}</td>
								<td className="px-4 py-2">{event.patient?.name || "—"}</td>
								<td className="px-4 py-2">
									{event.type === "online" && event.zoomLink ? (
										<a
											href={event.zoomLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-400 hover:underline"
										>
											Zoom
										</a>
									) : (
										<span className="text-gray-500">—</span>
									)}
								</td>
								<td className="px-4 py-2">{event.notes || "—"}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default EventsList;
