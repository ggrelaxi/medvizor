import { LocaleTypes } from "../../../types/locale-types";
import { ClinicContainer } from "./clinic.styles";
import { clinicServises } from "../../../api/clinics-servises";
import { BackToResult } from "../../BackToResult/";
import { ClinicListCard } from "../../singleClinicSearchCard";
import { useTranslation } from "next-i18next";

export const Clinic = ({ clinic }: { clinic: any }) => {
	const {
		logo_url,
		name,
		deseases,
		address,
		language,
		payment_method,
		work_hours,
		id,
		insurance,
	} = clinic;

	const { t } = useTranslation();
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
					languages={language}
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
			</div>
		</ClinicContainer>
	);
};

export default Clinic;
