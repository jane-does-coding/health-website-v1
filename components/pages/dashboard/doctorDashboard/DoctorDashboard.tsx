"use client";
import React from "react";
import Heading from "../Heading";
import { SafeUser } from "@/app/types/SafeUser";
import DoctorNavbar from "./DoctorNavbar";
import PatientsList from "./PatientsList";
import NoPatients from "../../doctorPatients/NoPatients";
import useEventModal from "@/app/hooks/useEventModal";
import EventsList from "../EventsList";

const DoctorDashboard = ({ currentUser }: { currentUser: SafeUser }) => {
	console.log(currentUser);

	const createEventModal = useEventModal();
	return (
		<div className="flex">
			<DoctorNavbar />

			<div className="w-[93.5vw] flex py-[5vh] px-[4vw]">
				<div className="w-15/20">
					<Heading />
					{/* <h1 className="mt-[2vh]">
						{currentUser.name}, {currentUser.access}
					</h1>
				*/}
					{currentUser.connectedUsers.length > 0 ? (
						<PatientsList currentUser={currentUser} />
					) : (
						<>
							<h2 className="text-[5vh] mt-[2vh] pb-[1vh] border-b-2 border-neutral-300">
								Patients
							</h2>
							<NoPatients />
						</>
					)}
					<h2 className="text-[5vh] mt-[5vh] pb-[1vh] border-b-2 border-neutral-300">
						Events
					</h2>
					<button onClick={() => createEventModal.onOpen(currentUser.id)}>
						Create an Event
					</button>
					<EventsList currentUser={currentUser} />
				</div>
				<div className="w-5/20"></div>
			</div>
		</div>
	);
};

export default DoctorDashboard;
