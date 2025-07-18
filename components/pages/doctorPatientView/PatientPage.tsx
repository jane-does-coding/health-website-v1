"use client";
import { SafeUser } from "@/app/types/SafeUser";
import React from "react";
import DoctorNavbar from "../dashboard/doctorDashboard/DoctorNavbar";
import Heading from "../dashboard/Heading";
import SymptomsView from "./SymptomsView";

const PatientPage = ({ user }: { user: SafeUser }) => {
	return (
		<div className="flex">
			<DoctorNavbar />
			<div className="w-[93.5vw] flex flex-col py-[5vh] px-[4vw]">
				<div className="w-16/20">
					<Heading />
					<h2 className="text-[3.5vh] mt-[2.5vh] font-medium">{user.name}</h2>

					{/* Symptoms */}
					<SymptomsView user={user} />
				</div>
				<div className="w-4/20"></div>
			</div>
		</div>
	);
};

export default PatientPage;
