import React from "react";
import getUserById from "@/app/actions/getUserById";
import PatientPage from "@/components/pages/doctorPatientView/PatientPage";
import { SafeUser } from "@/app/types/SafeUser";

type Props = {
	params: { userId: string };
};

const Page = async ({ params }: Props) => {
	const paramsPassed = await params;
	const userId = paramsPassed.userId;

	const user = await getUserById({ userId });

	if (!user) return;

	const connectedUsers = [
		...(user.connectionsFrom || []).map((c) => c.to),
		...(user.connectionsTo || []).map((c) => c.from),
	];

	const safeUser: SafeUser = {
		...user,
		connectedUsers,
	};

	return (
		<div>
			<PatientPage user={safeUser} />
		</div>
	);
};

export default Page;
