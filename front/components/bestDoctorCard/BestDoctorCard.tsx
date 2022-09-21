import { BestDoctorCardContainer } from "./best-doctor-card.styles";
import { Button } from "../ui-kit/button";
import { useTranslation } from "next-i18next";
import Router from "next/router";

export const BestDoctorCard = (props: any) => {
	const { id, name, deseases, language, practice, price, logoUrl } = props;
	const { t } = useTranslation();

	const goToAppointmentPage = (id: number) => {
		Router.push({
			pathname: `/doctor/appointment/${id}`,
		});
	};

	const goToClickHandler = (id: number) => {
		Router.push({
			pathname: `/doctor/${id}`,
		});
	};

	return (
		<BestDoctorCardContainer>
			<div className="content-block">
				<div className="doctor-logo">
					<img
						src={`/images/doctors/${
							logoUrl ? logoUrl : "unknown-doctor.png"
						}`}
						alt={name}
					/>
				</div>
				<div className="main-data">
					<h2
						onClick={() => {
							if (Router.pathname.includes("clinic")) {
								goToClickHandler(id);
							}
						}}
					>
						{name}
					</h2>
					<p className="doctor-description">
						{deseases
							.slice(0, 3)
							.map(
								(item: any) =>
									`${item[0].toUpperCase()}${item.slice(1)}`
							)
							.join(", ")}
					</p>
					<div className="doctor-language">
						{t("doctorSearchPage.doctorLanguages")}
					</div>
					<div className="doctor-practice">{practice}</div>
					<div className="doctor-price">from ${price}</div>
				</div>
			</div>
			<div className="buttons-block">
				<Button
					text={t("doctorSearchPage.bookAppointment")}
					size="s"
					type="black"
					onClick={() => goToAppointmentPage(id)}
					width="276"
				/>
			</div>
		</BestDoctorCardContainer>
	);
};
