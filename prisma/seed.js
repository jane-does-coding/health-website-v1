const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
	await prisma.event.deleteMany();
	await prisma.medication.deleteMany();
	await prisma.symptom.deleteMany();
	await prisma.connection.deleteMany();
	await prisma.user.deleteMany();

	const doctorPassword = await bcrypt.hash("password123", 10);
	const patientPasswords = {
		liam: await bcrypt.hash("liampass", 10),
		ava: await bcrypt.hash("avapass", 10),
		noah: await bcrypt.hash("noahpass", 10),
		sophia: await bcrypt.hash("sophiapass", 10),
	};

	const doctor = await prisma.user.create({
		data: {
			name: "Dr. Emily Carter",
			username: "emilyMD",
			access: "doctor",
			bio: "Experienced in neurology and patient-centered care.",
			tagline: "Healing one neuron at a time.",
			yearsInField: 12,
			Degree: "MD",
			code: "DR123456",
			email: "emily@example.com",
			hashedPassword: doctorPassword,
		},
	});

	const patients = await Promise.all([
		prisma.user.create({
			data: {
				name: "Liam Chen",
				username: "liamc",
				access: "patient",
				code: "PT10001",
				email: "liam@example.com",
				hashedPassword: patientPasswords.liam,
			},
		}),
		prisma.user.create({
			data: {
				name: "Ava Patel",
				username: "ava_p",
				access: "patient",
				code: "PT10002",
				email: "ava@example.com",
				hashedPassword: patientPasswords.ava,
			},
		}),
		prisma.user.create({
			data: {
				name: "Noah Smith",
				username: "noah_s",
				access: "patient",
				code: "PT10003",
				email: "noah@example.com",
				hashedPassword: patientPasswords.noah,
			},
		}),
		prisma.user.create({
			data: {
				name: "Sophia Kim",
				username: "soph_kim",
				access: "patient",
				code: "PT10004",
				email: "sophia@example.com",
				hashedPassword: patientPasswords.sophia,
			},
		}),
	]);

	await Promise.all(
		patients.map((patient) =>
			prisma.connection.create({
				data: {
					fromId: doctor.id,
					toId: patient.id,
				},
			})
		)
	);

	const now = new Date();

	for (const patient of patients) {
		await prisma.medication.createMany({
			data: [
				{
					title: "Ibuprofen",
					dosage: "200mg",
					instructions: "Take after meals",
					startDate: new Date("2025-07-01"),
					endDate: new Date("2025-07-31"),
					doctorId: doctor.id,
					patientId: patient.id,
				},
				{
					title: "Vitamin D",
					dosage: "1000 IU",
					instructions: "Once daily",
					startDate: new Date("2025-06-01"),
					endDate: new Date("2025-12-31"),
					doctorId: doctor.id,
					patientId: patient.id,
				},
			],
		});

		await prisma.symptom.createMany({
			data: [
				{
					symptom: "Headache",
					level: "mild",
					userId: patient.id,
				},
				{
					symptom: "Fatigue",
					level: "severe",
					userId: patient.id,
				},
			],
		});

		await prisma.event.createMany({
			data: [
				{
					type: "online",
					zoomLink: `https://zoom.us/fake-room-${patient.id}`,
					dateTime: new Date(now.getTime() + 1000 * 60 * 60 * 24),
					notes: "Routine check-up",
					doctorId: doctor.id,
					patientId: patient.id,
				},
				{
					type: "inperson",
					dateTime: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3),
					notes: "Post-surgery consultation",
					doctorId: doctor.id,
					patientId: patient.id,
				},
			],
		});
	}
}

main()
	.then(() => {
		("✅ Seed complete with hashed passwords!");
		return prisma.$disconnect();
	})
	.catch((err) => {
		console.error("❌ Seed failed: ", err);
		return prisma.$disconnect();
	});
