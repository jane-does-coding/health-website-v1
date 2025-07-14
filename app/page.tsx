import LandingPage from "@/components/pages/landing/LandingPage";
import getCurrentUser from "./actions/getCurrentUser";
import DashboardPage from "@/components/pages/dashboard/DashboardPage";

export default async function Home() {
	const currentUser = await getCurrentUser();
	console.log(currentUser);
	return (
		<div className="">
			{currentUser == null ? <LandingPage /> : <DashboardPage />}
		</div>
	);
}
