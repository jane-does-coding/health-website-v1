import prisma from "@/app/libs/prismadb";

interface IParams {
	userId?: string;
}

export default async function getUserById(params: IParams) {
	try {
		const { userId } = params;

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
			include: {
				connectionsFrom: {
					include: { to: true },
				},
				connectionsTo: {
					include: { from: true },
				},
				symptoms: true,
				prescribedMedications: true,
				assignedMedications: true,
			},
		});

		if (!user) return null;

		return user;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("Unknown error occurred while fetching user");
		}
	}
}
