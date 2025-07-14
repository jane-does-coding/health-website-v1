import React from "react";
import { User } from "@prisma/client";

const DoctorDashboard = ({ currentUser }: { currentUser: User }) => {
	console.log(currentUser);

	return <div></div>;
};

export default DoctorDashboard;
