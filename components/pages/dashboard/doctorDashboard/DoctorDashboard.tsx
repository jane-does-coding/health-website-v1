import React from "react";
import Heading from "../Heading";
import { SafeUser } from "@/app/types/SafeUser";
import ConnectBox from "./ConnectBox";
import DoctorNavbar from "./PatientNavbar";
import PatientsList from "./PatientsList";

const DoctorDashboard = ({ currentUser }: { currentUser: SafeUser }) => {
	console.log(currentUser);
	return (
		<div className="flex">
			<DoctorNavbar />

			<div className="w-[93.5vw] flex py-[5vh] px-[4vw]">
				<div className="w-15/20">
					<Heading />
					{/* <h1 className="mt-[2vh]">
						{currentUser.name}, {currentUser.access}
					</h1>
					<ConnectBox /> */}
					<PatientsList currentUser={currentUser} />
					{/* 
					<h3 className="mt-[2vh]">Connections:</h3>
					<ul className="list-disc ml-5">
						{currentUser.connectedUsers.map((user, i) => (
							<li key={i}>
								{user.name} ({user.email})
							</li>
						))}
					</ul> */}
				</div>
				<div className="w-5/20"></div>
			</div>
		</div>
	);
};

export default DoctorDashboard;
