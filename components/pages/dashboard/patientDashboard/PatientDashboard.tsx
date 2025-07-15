import React from "react";
import PatientNavbar from "./PatientNavbar";
import { User } from "@prisma/client";
import Heading from "../Heading";
import MediblobChat from "./MediblobChat";

const PatientDashboard = ({ currentUser }: { currentUser: User }) => {
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
				</div>
				<div className="w-3/10">
					<MediblobChat />
				</div>
			</div>
		</div>
	);
};

export default PatientDashboard;
