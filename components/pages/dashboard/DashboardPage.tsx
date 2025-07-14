"use client";
import React from "react";
import { User } from "@prisma/client";
import PatientDashboard from "./patientDashboard/PatientDashboard";
import DoctorDashboard from "./doctorDashboard/DoctorDashboard";

interface DashboardPageProps {
	currentUser: User;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ currentUser }) => {
	return (
		<div className="flex items-start justify-start">
			{currentUser.access == "patient" ? (
				<PatientDashboard currentUser={currentUser} />
			) : (
				<DoctorDashboard currentUser={currentUser} />
			)}
		</div>
	);
};

export default DashboardPage;
