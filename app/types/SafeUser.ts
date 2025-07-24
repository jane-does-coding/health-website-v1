import { Medication, User } from "@prisma/client";

export type SafeUser = Omit<User, "hashedPassword"> & {
	connectedUsers: User[];
	symptoms?: {
		id: string;
		symptom: string;
		level: "mild" | "severe";
		createdAt: Date;
	}[];
	prescribedMedications?: Medication[];
	assignedMedications?: Medication[];
};
