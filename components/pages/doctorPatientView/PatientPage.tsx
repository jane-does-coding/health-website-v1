"use client";
import { SafeUser } from "@/app/types/SafeUser";
import React from "react";
import DoctorNavbar from "../dashboard/doctorDashboard/DoctorNavbar";
import Heading from "../dashboard/Heading";
import SymptomsView from "./SymptomsView";
import MedicationTable from "../dashboard/patientDashboard/MedicationTable";
import useMedicationsModal from "@/app/hooks/useMedicationsModal";

const PatientPage = ({ user }: { user: any }) => {
	const medicationModal = useMedicationsModal();

	return (
		<div className="flex">
			<DoctorNavbar />
			<div className="w-[93.5vw] flex flex-col py-[5vh] px-[4vw]">
				<div className="w-16/20">
					<Heading />
					<h2 className="text-[3.5vh] mt-[2.5vh] font-medium">{user.name}</h2>

					<button
						className="bg-neutral-900 text-white px-4 py-2 rounded-[1.5vh] mt-4 cursor-pointer transition"
						onClick={() => medicationModal.onOpen(user.id)}
					>
						Assign Medication
					</button>

					{/* Symptoms */}
					<SymptomsView user={user} />

					{/* Medications */}
					<MedicationTable medications={user.prescribedMedications || []} />
				</div>
				<div className="w-4/20"></div>
			</div>
		</div>
	);
};

export default PatientPage;
