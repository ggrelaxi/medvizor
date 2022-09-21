import path from "path";
import fs from "fs";

export const getDoctors = (request, response) => {
	const { locale, filters } = request.body;
	let doctors;
	let clinics;
	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"doctors",
				`doctors-${locale}.json`
			)}`,
			"utf-8"
		);
		doctors = JSON.parse(data);
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot get doctors");
		response.end();
	}

	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"clinics",
				`clinics-${locale}.json`
			)}`,
			"utf-8"
		);
		clinics = JSON.parse(data);
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot get clinic");
		response.end();
	}

	const filteredDoctors = Object.keys(filters).reduce((acc, current) => {
		// поиск по id клиники
		if (current === "clinicId" && filters[current] !== "") {
			return acc.filter(
				(clinic) => clinic.id === Number(filters[current])
			);
		}
		// поиск докторов по id
		if (current === "doctorsId" && filters[current] !== "") {
			const doctorsIds = filters[current].split(",").map(Number);
			return acc.filter((doctor) => doctorsIds.includes(doctor.id));
		}
		return acc;
	}, doctors);

	for (let i = 0; i < filteredDoctors.length; i++) {
		const currentDoctor = filteredDoctors[i];

		const currentClinic = clinics.filter((clinic) =>
			clinic.doctors.includes(Number(currentDoctor.id))
		);
		currentDoctor["clinicName"] = currentClinic[0]?.name || "";
		currentDoctor["clinicAddress"] = currentClinic[0]?.address || "";
		currentDoctor["insurance"] = currentClinic[0]?.insurance || "";
	}

	response.send(JSON.stringify(filteredDoctors));
};

export const getSingleDoctor = (request, response) => {
	let { locale, id } = request.body;
	id = Number(id);

	let doctors;

	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"doctors",
				`doctors-${locale}.json`
			)}`,
			"utf-8"
		);
		doctors = JSON.parse(data);
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot get doctor");
		response.end();
	}

	let clinics;

	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"clinics",
				`clinics-${locale}.json`
			)}`,
			"utf-8"
		);
		clinics = JSON.parse(data);
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot get clinic");
		response.end();
	}

	let reviews;

	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"reviews",
				`reviews-${locale}.json`
			)}`,
			"utf-8"
		);
		reviews = JSON.parse(data).filter((review) => review.doctor_id === id);
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot get clinic");
		response.end();
	}

	const singleDoctor = doctors.find((item) => item.id === id);

	const currentClinic = clinics.find(
		(item) => item.id === singleDoctor.clinic
	);
	const currentReviews = reviews.filter((item) => item.doctor_id === id);

	singleDoctor["clinic"] = currentClinic.id;
	singleDoctor["clinicAddress"] = currentClinic.address;
	singleDoctor["clinicName"] = currentClinic.name;
	singleDoctor["insurance"] = currentClinic.insurance;
	singleDoctor["reviews"] = currentReviews;
	console.log(singleDoctor);
	response.send(JSON.stringify(singleDoctor));
};
