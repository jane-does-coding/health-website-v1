import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
	return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
	try {
		const session = await getSession();

		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email as string,
			},
			include: {
				connections: {
					include: {
						from: true,
						to: true,
					},
				},
			},
		});

		if (!currentUser) {
			return null;
		}

		return currentUser;
	} catch (err: unknown) {
		console.log(err);
		return null;
	}
}
