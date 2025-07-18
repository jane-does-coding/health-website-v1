import React from "react";
import { SafeUser } from "@/app/types/SafeUser";
import PatientProfile from "./PatientProfile";
import DoctorProfile from "./DoctorProfile";

interface ProfilePageProps {
	currentUser: SafeUser;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ currentUser }) => {
	return (
		<div className="flex items-start justify-start">
			{currentUser.access == "patient" ? (
				<PatientProfile currentUser={currentUser} />
			) : (
				<DoctorProfile currentUser={currentUser} />
			)}
		</div>
	);
};

export default ProfilePage;
