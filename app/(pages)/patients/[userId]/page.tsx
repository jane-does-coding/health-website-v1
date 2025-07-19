import React from "react";
import getUserById from "@/app/actions/getUserById";
import PatientPage from "@/components/pages/doctorPatientView/PatientPage";
import type { Metadata, ResolvingMetadata } from "next";
import type { User } from "@prisma/client";

type Props = {
	params: Promise<{ userId: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type SafeUser = Omit<User, "hashedPassword"> & {
	connectedUsers: User[];
	symptoms?: {
		id: string;
		symptom: string;
		level: "mild" | "severe";
		createdAt: Date;
	}[];
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

	const previousImages = (await parent).openGraph?.images ?? [];

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

	const connectedUsers: User[] = [
		...(user.connectionsFrom ?? []).map((c) => c.to),
		...(user.connectionsTo ?? []).map((c) => c.from),
	];

	const { hashedPassword, ...userWithoutPassword } = user;

	const safeUser: SafeUser = {
		...userWithoutPassword,
		connectedUsers,
		symptoms: user.symptoms,
		prescribedMedications: user.prescribedMedications?.map((med) => ({
			id: med.id,
			title: med.title,
			dosage: med.dosage,
			instructions: med.instructions ?? undefined,
			startDate: med.startDate.toISOString(),
			endDate: med.endDate.toISOString(),
			createdAt: med.createdAt.toISOString(),
		})),
	};

	return (
		<div>
			<PatientPage user={safeUser} />
		</div>
	);
}
