import React from "react";
import PatientNavbar from "./PatientNavbar";
import Heading from "../Heading";
import MediblobChat from "./MediblobChat";
import { SafeUser } from "@/app/types/SafeUser";
import SymptomsView from "../../doctorPatientView/SymptomsView";
import SymptomForm from "./SymptomForm";
import DoctorProfilePriview from "./DoctorProfilePriview";
import MedicationTable from "./MedicationTable";

const PatientDashboard = ({ currentUser }: { currentUserany }) => {
	console.log(currentUser);
	return (
		<div className="flex">
			<PatientNavbar />

			<div className="w-[93.5vw] flex py-[5vh] px-[4vw]">
				<div className="w-7/10 pr-[3vw]">
					<Heading />
					<h1 className="mt-[2vh]">
						{currentUser.name}, {currentUser.access}
					</h1>
					<SymptomsView user={currentUser} />
					<SymptomForm user={currentUser} />
					<MedicationTable
						medications={currentUser.prescribedMedications || []}
					/>
					<DoctorProfilePriview user={currentUser} />
				</div>
				<div className="w-3/10">
					<MediblobChat />
				</div>
			</div>
		</div>
	);
};

export default PatientDashboard;
