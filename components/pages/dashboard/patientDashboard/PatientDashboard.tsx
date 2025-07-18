import React from "react";
import PatientNavbar from "./PatientNavbar";
import Heading from "../Heading";
import MediblobChat from "./MediblobChat";
import { SafeUser } from "@/app/types/SafeUser";
import SymptomsView from "../../doctorPatientView/SymptomsView";

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
					<SymptomsView user={currentUser} />
					<h3 className="mt-[2vh]">Doctor:</h3>
					<ul className="list-disc ml-5">
						{currentUser.connectedUsers.map((user, i) => (
							<li key={i}>
								{user.name} ({user.email})
							</li>
						))}
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
