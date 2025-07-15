import getCurrentUser from "./getCurrentUser";

export default async function getConnections() {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return [];
	}

	const connections = currentUser.connections || [];

	return connections;
}
