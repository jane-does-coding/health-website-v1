import React from "react";
import PatientNavbar from "./PatientNavbar";
import { User } from "@prisma/client";
import Heading from "../Heading";
import MediblobChat from "./MediblobChat";
import ConnectBox from "./ConnectBox";
import { SafeUser } from "@/app/types/SafeUser";

const PatientDashboard = ({ currentUser }: { currentUser: SafeUser }) => {
	console.log(currentUser);
	return (
		<div className="flex">
			<PatientNavbar />

			<div className="w-[93.5vw] flex py-[5vh] px-[4vw]">
				<div className="w-7/10">
					<Heading />
					<h1 className="mt-[2vh]">
						{currentUser.name}, {currentUser.access}
					</h1>
					<ConnectBox />
					<h3 className="mt-[2vh]">Connections:</h3>
					<ul className="list-disc ml-5">
						{currentUser.connections.map((connection, i) => {
							const otherUser =
								connection.from.email === currentUser.email
									? connection.to
									: connection.from;

							return (
								<li key={i} className="mb-1">
									{otherUser.name} ({otherUser.email})
								</li>
							);
						})}
					</ul>
				</div>
				<div className="w-3/10">
					<MediblobChat />
				</div>
			</div>
		</div>
	);
};

export default PatientDashboard;
