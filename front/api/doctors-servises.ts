import { apiClient } from "./client";
import { LocaleTypes } from "../types/locale-types";
import { DoctorFilters } from "../types/doctor-types";

class DoctorServises {
	async getDoctorsList(locale: LocaleTypes, filters: DoctorFilters) {
		return apiClient.post("/doctors/list", {
			locale,
			filters,
		});
	}

	async getSingleDoctor(locale: LocaleTypes, id: string) {
		return apiClient.post("/doctors/get-single-doctor", {
			locale,
			id,
		});
	}
}

const doctorServises = new DoctorServises();

export { doctorServises };
