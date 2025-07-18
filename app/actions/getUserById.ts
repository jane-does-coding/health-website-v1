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
			},
		});

		if (!user) return null;

		return user;
	} catch (error: any) {
		throw new Error(error);
	}
}
