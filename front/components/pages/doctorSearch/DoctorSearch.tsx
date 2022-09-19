import { useState, useEffect } from "react";
import { DoctorSearchContainer } from "./doctor-search.styles";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import format from "date-fns/format";
import { DoctorFilters } from "../../../types/doctor-types";
import { DoctorSearchFilters } from "../../doctorSearchFilters/";
import { filterServises } from "../../../api/filters-servises";
import { LocaleTypes } from "../../../types/locale-types";
import { doctorServises } from "../../../api/doctors-servises";
import { Loader } from "../../../components/loader";
import { SingleDoctorSearchCard } from "../../../components/singleDoctorSearchCard";
import { RecommendedBlock } from "../../recommendedBlock";
import { useIsLogin } from "../../../hooks/useIsLogin";

export const DoctorSearch = () => {
	const router = useRouter();
	const {
		query: {
			speciality: querySpeciality,
			deseases: queryDeseases,
			price: queryPrice,
			visitDate: queryVisitDate,
			visitType: queryVisitType,
			language: queryLanguage,
			onlineBooking: queryOnlineBooking,
			gender: queryGender,
			association: queryAssociation,
		},
	} = router;
	const {
		t,
		i18n: { language },
	} = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [specialityOptions, setSpecialityOptions] = useState([]);
	const [deseasesOptions, setDeseasesOptions] = useState([]);
	const [doctorFilters, setDoctorFilters] = useState<DoctorFilters>({
		speciality: querySpeciality ? (querySpeciality as string) : "",
		price: queryPrice
			? [
					`${
						queryPrice.split("-")[0] === "0"
							? ""
							: queryPrice.split("-")[0]
					}`,
					`${
						queryPrice.split("-")[1] === "0"
							? ""
							: queryPrice.split("-")[1]
					}`,
			  ]
			: ["", ""],
		visitDate: queryVisitDate ? (queryVisitDate as string) : "",
		visitType: queryVisitType ? (queryVisitType as string) : "",
		language: queryLanguage ? (queryLanguage as string) : "",
		onlineBooking: queryOnlineBooking ? (queryOnlineBooking as string) : "",
		deseases: queryDeseases ? (queryDeseases as string) : "",
		gender: queryGender ? (queryGender as string) : "",
		association: queryAssociation ? (queryAssociation as string) : "",
	});
	const [doctors, setDoctors] = useState([]);
	const [isLogin] = useIsLogin();

	const searchDoctorsHandler = () => {
		setIsLoading(true);
		const activeFilters = Object.keys(doctorFilters).reduce(
			(acc, current) => {
				if (doctorFilters[current]) {
					if (current === "price") {
						const [from, to] = doctorFilters[current];
						if (from || to) {
							acc[current] = `${from || "0"}-${to || "0"}`;
						}
					}

					if (current === "visitDate") {
						acc[current] = format(
							new Date(doctorFilters[current]),
							"d/MM/yyyy"
						);
					}

					if (current === "visitType") {
						acc[current] = doctorFilters[current];
					}

					if (current === "language") {
						acc[current] = doctorFilters[current];
					}

					if (current === "onlineBooking") {
						acc[current] = doctorFilters[current];
					}

					if (current === "gender") {
						acc[current] = doctorFilters[current];
					}

					if (current === "association") {
						acc[current] = doctorFilters[current];
					}

					if (current === "deseases") {
						acc[current] = doctorFilters[current];
					}

					if (current === "speciality") {
						acc[current] = doctorFilters[current];
					}
					// acc[current] = doctorFilters[current];

					return acc;
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
		doctorServises
			.getDoctorsList(language as LocaleTypes, activeFilters as any)
			.then(({ data }) => setDoctors(data))
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		setIsLoading(true);

		const getSpecialitiFilters = filterServises
			.getDeseasesFilters(language as LocaleTypes)
			.then(({ data }) => {
				const specialityOptionsList = data.map((item: any) => ({
					value: item,
					label: item,
				}));
				setSpecialityOptions(specialityOptionsList);
			});

		const getDeseasesFilters = filterServises
			.getFullDesesesFilters(language as LocaleTypes)
			.then(({ data }) => {
				const deseasesOptionsList = data.map((item: any) => ({
					value: item,
					label: item,
				}));
				setDeseasesOptions(deseasesOptionsList);
			});

		Promise.all([getSpecialitiFilters, getDeseasesFilters])
			.then(() => {
				setDoctorFilters((prevState) => ({
					...prevState,
					speciality: querySpeciality as string,
				}));
			})
			.then(() => {
				doctorServises
					.getDoctorsList(language as LocaleTypes, doctorFilters)
					.then(({ data }) => {
						setDoctors(data);
					});
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<DoctorSearchContainer>
			<div className="doctor-filters">
				<DoctorSearchFilters
					specialityOptions={specialityOptions}
					deseasesOptions={deseasesOptions}
					filtersValue={doctorFilters}
					setFiltersValue={setDoctorFilters}
					setDoctors={setDoctors}
					searchDoctors={searchDoctorsHandler}
				/>
			</div>

			<div className="doctor-list">
				<div className="list-header">
					{doctors.length === 0 && t("doctorSearchPage.noResult")}
					{doctors.length > 0 && (
						<>
							<span className="doctor-speciality">
								{doctorFilters.speciality}
							</span>
							<span className="doctor-counter">
								{doctors.length > 0 ? doctors.length : ""}
							</span>
							<span className="counter-description">
								{doctors.length > 1
									? t("doctorSearchPage.doctors")
									: t("doctorSearchPage.doctor")}
							</span>
						</>
					)}
				</div>
				{doctors.length > 0 && (
					<>
						{doctors.map((doctor, index) => {
							const {
								logo_url,
								name,
								deseases,
								practice,
								price,
								id,
								clinicAddress,
								clinicName,
							} = doctor;

							return (
								<>
									<SingleDoctorSearchCard
										logoUrl={logo_url}
										name={name}
										deseases={deseases}
										practice={practice}
										price={price}
										doctorId={id}
										clinicAddress={clinicAddress}
										clinicName={clinicName}
										key={`${name}-${id}`}
									/>
									{(index + 1) % 2 === 0 && !isLogin && (
										<RecommendedBlock
											text={t(
												"doctorSearchPage.registerNoticeHeader"
											)}
										/>
									)}
								</>
							);
						})}
					</>
				)}
			</div>
			{isLoading && <Loader />}
		</DoctorSearchContainer>
	);
};
