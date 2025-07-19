import { User } from "@prisma/client";

export type SafeUser = Omit<User, "hashedPassword"> & {
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
