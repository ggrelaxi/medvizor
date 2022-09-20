import path from "path";
import fs from "fs";

export const getClinics = (request, response) => {
	const { locale, filters } = request.body;
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
		response.send("Cannot get clinics");
		response.end();
	}

	const filteredClinics = Object.entries(filters).reduce((acc, filter) => {
		const [filterName, filterValue] = filter;

		if (filterName === "insurance" && filterValue) {
			return acc.filter((item) => {
				return item.insurance.includes(filterValue);
			});
		}

		if (filterName === "speciality" && filterValue) {
			return acc.filter((item) => {
				return (
					item.specialization.includes(filterValue) ||
					item.specialization === "Multifunctional Center"
				);
			});
		}
		return acc;
	}, clinics);

	response.send(JSON.stringify(filteredClinics));
};

export const getSingleClinic = (request, response) => {
	let { locale, id } = request.body;
	id = Number(id);
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

	const singleClinic = clinics.find((item) => item.id === id);
	console.log(singleClinic);
	response.send(JSON.stringify(singleClinic));
};
