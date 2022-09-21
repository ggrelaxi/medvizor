import { LocaleTypes } from "../../../types/locale-types";
import { useEffect, useState } from "react";
import { ClinicContainer } from "./clinic.styles";
import { clinicServises } from "../../../api/clinics-servises";
import { BackToResult } from "../../BackToResult/";
import { ClinicListCard } from "../../singleClinicSearchCard";
import { useTranslation } from "next-i18next";
import { Loader } from "../../loader";
import { doctorServises } from "../../../api/doctors-servises";
import { stringify } from "querystring";
import { BestDoctorCard } from "../../bestDoctorCard";

export const Clinic = ({ clinic }: { clinic: any }) => {
	const {
		logo_url,
		name,
		deseases,
		address,
		language: currentLanguage,
		payment_method,
		work_hours,
		id,
		insurance,
		doctors,
	} = clinic;
	console.log(clinic);
	const {
		t,
		i18n: { language },
	} = useTranslation();

	const [bestDoctors, setBestDoctors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		doctorServises
			.getDoctorsList(language as LocaleTypes, {
				speciality: "",
				price: [],
				visitDate: "",
				visitType: "",
				language: "",
				onlineBooking: "",
				deseases: "",
				gender: "",
				association: "",
				clinicId: "",
				doctorsId: doctors.map(String).join(","),
			})
			.then(({ data }) => {
				setBestDoctors(data);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<ClinicContainer>
			<div className="go-back">
				<BackToResult />
			</div>
			<div className="clinic-main-info">
				<ClinicListCard
					logoUrl={logo_url}
					name={name}
					deseases={deseases}
					address={address}
					languages={currentLanguage}
					payments={payment_method}
					workHours={work_hours}
					clinicId={id}
					isSingleClinic={true}
				/>
			</div>
			<div className="clinic-additional-info">
				<div className="treatment">
					<h3>{t("singleClinicPage.treatment")}</h3>
					<ul>
						{deseases.map((item: string) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className="insurance">
					<h3>{t("singleClinicPage.insurance")}</h3>
					<p className="insurance-description">
						{t("singleClinicPage.insuranceDescription")}
					</p>

					<div className="insurance-list">
						<ul>
							{insurance.map((item: string) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="doctors-header">
				<h3>{t("singleClinicPage.doctorListHeader")}</h3>
				{bestDoctors.map((doctor: any) => {
					const {
						id,
						name,
						deseases,
						language,
						practice,
						price,
						logo_url,
					} = doctor;

					return (
						<BestDoctorCard
							id={id}
							name={name}
							deseases={deseases}
							language={language}
							practice={practice}
							price={price}
							logoUrl={logo_url}
						/>
					);
				})}
			</div>
			{isLoading && <Loader />}
		</ClinicContainer>
	);
};

export default Clinic;
