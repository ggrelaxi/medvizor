import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ClinicSearchFilters } from "../../clinicSearchFilters";
import { ClinicSearchContainer } from "./clinic-search.styles";
import { Loader } from "../../loader";
import { filterServises } from "../../../api/filters-servises";
import { useTranslation } from "next-i18next";
import { LocaleTypes } from "../../../types/locale-types";
import { clinicServises } from "../../../api/clinics-servises";
import { ClinicListCard } from "../../singleClinicSearchCard";
import { ClinicFilters } from "../../../types/clinic-types";
import { RecommendedBlock } from "../../recommendedBlock";
import { useIsLogin } from "../../../hooks/useIsLogin";

export const ClinicSearch = () => {
	const router = useRouter();
	const {
		query: { speciality: querySpeciality, insurance: queryInsurance },
	} = router;
	const {
		t,
		i18n: { language },
	} = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [specialityOptions, setSpecialityOptions] = useState([]);
	const [insuranceOptions, setInsuranceOptions] = useState([]);
	const [clinicFilters, setClinicFilters] = useState<ClinicFilters>({
		speciality: querySpeciality ? (querySpeciality as string) : "",
		insurance: queryInsurance ? (queryInsurance as string) : "",
	});
	const [clinics, setClinics] = useState([]);
	const [listCountClinic, setListCountClinic] = useState(clinics.length);
	const [listClinicName, setListClinicName] = useState(
		querySpeciality ? (querySpeciality as string) : ""
	);
	const [isLogin] = useIsLogin();

	const searchClinicHandler = () => {
		setIsLoading(true);
		const activeFilters = Object.keys(clinicFilters).reduce(
			(acc, current) => {
				if (clinicFilters[current] !== "") {
					acc[current] = clinicFilters[current];
				}
				return acc;
			},
			{}
		);
		router.push({
			query: {
				...activeFilters,
			},
		});
		clinicServises
			.getClinicsList(language as LocaleTypes, clinicFilters)
			.then(({ data }) => {
				setClinics(data);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		setIsLoading(true);

		const getSpecialitiFilters = filterServises
			.getSpecialityFilters(language as LocaleTypes)
			.then(({ data }) => {
				const specialityOptionsList = data.map((item: any) => ({
					value: item,
					label: item,
				}));
				setSpecialityOptions(specialityOptionsList);
			});

		const getInsuranceFilters = filterServises
			.getInsuranceFilters(language as LocaleTypes)
			.then(({ data }) => {
				const insuranceOptionsList = data.map((item: any) => ({
					value: item,
					label: item,
				}));
				setInsuranceOptions(insuranceOptionsList);
			});

		Promise.all([getSpecialitiFilters, getInsuranceFilters])
			.then(() => {
				setClinicFilters((prevState) => ({
					...prevState,
					speciality: querySpeciality as string,
				}));
			})
			.then(() => {
				clinicServises
					.getClinicsList(language as LocaleTypes, clinicFilters)
					.then(({ data }) => {
						setClinics(data);
					});
			})
			.finally(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		setListClinicName(clinicFilters.speciality);
		setListCountClinic(clinics.length);
	}, [clinics]);

	return (
		<ClinicSearchContainer>
			<div className="clinic-filters">
				<ClinicSearchFilters
					specialityOptions={specialityOptions}
					insuranceOptions={insuranceOptions}
					filtersValue={clinicFilters}
					setFiltersValue={setClinicFilters}
					searchClinic={searchClinicHandler}
				/>
			</div>
			<div className="list-description">
				Top {listCountClinic} <span>{listClinicName}</span> Clinics
				worldwide
			</div>
			<div className="clinic-list">
				{clinics.length > 0 &&
					clinics.map((clinic, index) => {
						const {
							logo_url,
							name,
							deseases,
							address,
							language: languages,
							payment_method,
							work_hours,
							id,
						} = clinic;
						return (
							<div key={`${name}-${id}`}>
								<ClinicListCard
									logoUrl={logo_url}
									name={name}
									deseases={deseases}
									address={address}
									languages={languages}
									payments={payment_method}
									workHours={work_hours}
									clinicId={id}
								/>
								{(index + 1) % 2 === 0 && !isLogin && (
									<RecommendedBlock
										text={t(
											"clinicSearchPage.registerNoticeHeader"
										)}
										key={`${payment_method}-${id}`}
									/>
								)}
							</div>
						);
					})}
			</div>
			{isLoading && <Loader />}
		</ClinicSearchContainer>
	);
};
