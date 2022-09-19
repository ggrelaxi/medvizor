import { DoctorContainer } from "./doctor.styled";
import { SingleDoctorSearchCard } from "../../singleDoctorSearchCard";
import { BackToResult } from "../../BackToResult";
import { useTranslation } from "next-i18next";
import { SingleReview } from "../../singleReview";

export const Doctor = (props: any) => {
	const {
		logo_url,
		name,
		about,
		deseases,
		practice,
		price,
		id,
		association,
		education,
		certificate,
		license,
		clinicName,
		clinicAddress,
		insurance,
		reviews,
	} = props.doctor;
	const { t } = useTranslation();

	return (
		<DoctorContainer>
			<div className="go-back">
				<BackToResult />
			</div>
			<SingleDoctorSearchCard
				deseases={deseases}
				logoUrl={logo_url}
				name={name}
				practice={practice}
				price={price}
				doctorId={id}
				isSinglePage
				clinicName={clinicName}
				clinicAddress={clinicAddress}
			/>
			<div className="first-line">
				<div className="about">
					<h3>
						{t("doctorSinglePage.about")} {name}
					</h3>
					<p>{about}</p>
				</div>
				<div className="treatment">
					<h3>{t("doctorSinglePage.treatmentHeader")}</h3>
					<ul>
						{deseases.map((desease: string) => (
							<li key={desease}>{desease}</li>
						))}
					</ul>
				</div>
				<div className="associations">
					<img src="/images/associations.svg" alt="associations" />
					<div className="associations-list">
						{association.map((item: string) => (
							<p key={item}>{item}</p>
						))}
					</div>
				</div>
			</div>

			<div className="second-line">
				<div className="left">
					<div className="education">
						<h3>{t("doctorSinglePage.education")}</h3>
						<div>{education}</div>
					</div>
					<div className="license">
						<h3>{t("doctorSinglePage.license")}</h3>
						<div>
							{certificate.map((item: string) => (
								<p className="header" key={item}>
									{item}
								</p>
							))}
						</div>
						<div>
							<p className="header">{license[0]}</p>
							<p className="description">{license[1]}</p>
						</div>
					</div>
				</div>
				<div className="right">
					<h3>{t("doctorSinglePage.insurance")}</h3>
					<p className="description">
						{t("doctorSinglePage.insuranceDescription")}
					</p>
					<ul className="unsurance-list">
						{insurance.map((item: string) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<div className="reviews-line">
				<h3>{t("doctorSinglePage.reviewsHeader")}</h3>
				<p className="reviews-description">
					{t("doctorSinglePage.reviewsDescription")}
				</p>
				<div className="reviews-list">
					{reviews.map((review: any, index: number) => (
						<SingleReview
							name={review.patient_name}
							tone={review.tone}
							review={review.review}
							key={`${name}-${index}`}
						/>
					))}
				</div>
			</div>
		</DoctorContainer>
	);
};

export default Doctor;
