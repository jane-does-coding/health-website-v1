"use client";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import SelectInput from "../Inputs/SelectInput";
import useEventModal from "@/app/hooks/useEventModal";
import { useRouter } from "next/navigation";

const CreateEventModal = () => {
	const eventModal = useEventModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	console.log(eventModal);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			type: "online",
			zoomLink: "",
			dateTime: "",
			notes: "",
			doctorId: "",
			patientId: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);
		data.doctorId = eventModal.userId;

		try {
			const res = await fetch("/api/events", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Failed to create event");

			toast.success("Event created!");
			router.refresh();
			eventModal.onClose();
		} catch (err) {
			console.error(err);
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			<Heading title="Create Event" subtitle="Schedule an appointment" />

			<SelectInput
				id="type"
				label="Event Type"
				options={["online", "inPerson"]}
				required
				disabled={isLoading}
				errors={errors}
				register={register}
			/>

			<Input
				id="zoomLink"
				label="Zoom Link (optional)"
				disabled={isLoading}
				errors={errors}
				register={register}
			/>

			<Input
				id="dateTime"
				label="Date & Time"
				type="datetime-local"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>

			<Input
				id="notes"
				label="Notes"
				disabled={isLoading}
				errors={errors}
				register={register}
			/>
			{/* 
			<Input
				id="doctorId"
				label="Doctor ID"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
 */}
			<Input
				id="patientId"
				label="Patient ID"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
		</div>
	);

	return (
		<Modal
			isOpen={eventModal.isOpen}
			onClose={eventModal.onClose}
			title="Schedule Event"
			actionLabel="Create"
			disabled={isLoading}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			wide
		/>
	);
};

export default CreateEventModal;
