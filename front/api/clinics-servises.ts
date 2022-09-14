import { apiClient } from "./client";
import { LocaleTypes } from "../types/locale-types";
import { ClinicFilters } from "../types/clinic-types";

class ClinicServises {
	async getClinicsList(locale: LocaleTypes, filters: ClinicFilters) {
		return apiClient.post("/clinics/list", {
			locale,
			filters,
		});
	}

	async getSingleClinic(locale: LocaleTypes, id: string) {
		return apiClient.post("/clinics/get-single-clinic", {
			locale,
			id,
		});
	}

	async getInsuranceFromClinicByDoctor(locale: LocaleTypes, id: string) {
		return apiClient.post("/clinics/additional-data-by-doctor", {
			locale,
			id,
		});
	}
}

const clinicServises = new ClinicServises();

export { clinicServises };
