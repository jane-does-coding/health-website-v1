"use client";
import { signOut } from "next-auth/react";
import React from "react";

const DashboardPage = () => {
	return (
		<div>
			<button onClick={() => signOut()}>signout</button>
		</div>
	);
};

export default DashboardPage;
