import { apiClient } from "./client";
import { LocaleTypes } from "../types/locale-types";
import { DoctorFilters } from "../types/doctor-types";

class DoctorServises {
	async getDoctorsList(locale: LocaleTypes, filters: DoctorFilters) {
		console.log(filters);
		return apiClient.post("/doctors/list", {
			locale,
			filters,
		});
	}

	async getSingleDoctor(locale: LocaleTypes, id: string) {
		console.log(id, 123);
		return apiClient.post("/doctors/get-single-doctor", {
			locale,
			id,
		});
	}
}

const doctorServises = new DoctorServises();

export { doctorServises };
