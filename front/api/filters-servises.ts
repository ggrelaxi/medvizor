import { apiClient } from "./client";
import { LocaleTypes } from "../types/locale-types";

class FilterServises {
	async getDeseasesFilters(locale: LocaleTypes) {
		return apiClient.post("/filters/deseases", {
			locale,
		});
	}

	async getFullDesesesFilters(locale: LocaleTypes) {
		return apiClient.post("/filters/full-deseases", {
			locale,
		});
	}
	async getSpecialityFilters(locale: LocaleTypes) {
		return apiClient.post("/filters/speciality", {
			locale,
		});
	}

	async getInsuranceFilters(locale: LocaleTypes) {
		return apiClient.post("/filters/insurance", {
			locale,
		});
	}
}

const filterServises = new FilterServises();

export { filterServises };
