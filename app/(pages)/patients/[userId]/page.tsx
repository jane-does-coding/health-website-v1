import React from "react";
import getUserById from "@/app/actions/getUserById";
import PatientPage from "@/components/pages/doctorPatientView/PatientPage";
import type { Metadata, ResolvingMetadata } from "next";
import type { SafeUser as GlobalSafeUser } from "@/app/types/SafeUser"; // <-- this is the one PatientPage expects

type Props = {
	params: Promise<{ userId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// LOCAL type — keep this
type SafeUser = Omit<
	GlobalSafeUser,
	"connectedUsers" | "prescribedMedications"
> & {
	connectedUsers: GlobalSafeUser["connectedUsers"];
	prescribedMedications?: {
		id: string;
		title: string;
		dosage: string;
		instructions?: string;
		startDate: string;
		endDate: string;
		createdAt: string;
	}[];
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { userId } = await params;
	const user = await getUserById({ userId });
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: user ? `${user.name}'s Profile` : "Patient Not Found",
		openGraph: {
			images: ["/default-og.jpg", ...previousImages],
		},
	};
}

export default async function Page({ params }: Props) {
	const { userId } = await params;
	const user = await getUserById({ userId });

	if (!user) return <div>User not found</div>;

	const connectedUsers = [
		...(user.connectionsFrom || []).map((c) => c.to),
		...(user.connectionsTo || []).map((c) => c.from),
	];

	const { ...userWithoutPassword } = user;

	const safeUser: SafeUser = {
		...userWithoutPassword,
		connectedUsers,
		prescribedMedications: user.prescribedMedications?.map((m) => ({
			id: m.id,
			title: m.title,
			dosage: m.dosage,
			instructions: m.instructions ?? undefined,
			startDate: m.startDate.toISOString(),
			endDate: m.endDate.toISOString(),
			createdAt: m.createdAt.toISOString(),
		})),
		symptoms: user.symptoms,
	};

	return (
		<div>
			<PatientPage user={safeUser as GlobalSafeUser} />
		</div>
	);
}
