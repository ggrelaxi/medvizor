import fs from "fs";
import path from "path";

export const getDeseases = (request, response) => {
	const { locale } = request.body;
	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"filters",
				`deseases-${locale}.json`
			)}`,
			"utf-8"
		);
		const filters = JSON.parse(data);
		response.send(JSON.stringify(filters));
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot read filters");
		response.end();
	}
};

export const getFullDeseases = (request, response) => {
	const { locale } = request.body;
	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"filters",
				`deseases-full-${locale}.json`
			)}`,
			"utf-8"
		);
		const filters = JSON.parse(data);
		response.send(JSON.stringify(filters));
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot read filters");
		response.end();
	}
};

export const getSpeciality = (request, response) => {
	const { locale } = request.body;
	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"filters",
				`speciality-${locale}.json`
			)}`,
			"utf-8"
		);
		const filters = JSON.parse(data);
		response.send(JSON.stringify(filters));
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot read filters");
		response.end();
	}
};

export const getInsurance = (request, response) => {
	const { locale } = request.body;
	try {
		const data = fs.readFileSync(
			`${path.resolve(
				`${process.env.INIT_CWD}`,
				"data",
				"filters",
				`insurance-${locale}.json`
			)}`,
			"utf-8"
		);
		const filters = JSON.parse(data);
		response.send(JSON.stringify(filters));
	} catch (error) {
		response.statusCode = 400;
		response.send("Cannot read filters");
		response.end();
	}
};
