import { User, Connection } from "@prisma/client";

export type SafeUser = User & {
	connections: (Connection & {
		from: User;
		to: User;
	})[];
};
