import {
	SingleDoctorContainer,
	AdditionData,
} from "./single-doctor-search-card.styles";
import { Button } from "../ui-kit/button";
import { useTranslation } from "next-i18next";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { AskForm } from "../askForm";
import { getRandomNumber } from "../../utils/random-range";
import { useIsLogin } from "../../hooks/useIsLogin";

export const SingleDoctorSearchCard = (props: any) => {
	const { t } = useTranslation();
	const { pathname } = useRouter();
	const {
		logoUrl,
		name,
		deseases,
		practice,
		price,
		doctorId,
		isSinglePage,
		clinicAddress,
		clinicName,
	} = props;
	const [askFormIsActive, setAskFormIsActive] = useState(false);
	const [isLogin] = useIsLogin();
	console.log(doctorId);
	const goToClickHandler = (id: number) => {
		Router.push({
			pathname: `/doctor/${id}`,
		});
	};

	const goToAppointmentPage = (id: number) => {
		Router.push({
			pathname: `/doctor/appointment/${id}`,
		});
	};

	const isCardWithNotice = (Number(doctorId) + 1) % 2 === 0;
	return (
		<SingleDoctorContainer>
			<div className="content-block">
				<div
					className={`head-data ${isSinglePage && "single-data"} ${
						pathname.includes("search") && "pointer"
					}`}
					onClick={() => {
						if (pathname.includes("search")) {
							goToClickHandler(doctorId);
						}
					}}
				>
					<div
						className={`doctor-logo ${
							isSinglePage && "single-logo"
						}`}
					>
						<img
							src={`/images/doctors/${
								logoUrl || "unknown-doctor.png"
							}`}
							alt={``}
						/>
					</div>
					<div
						className={`doctor-main-data ${
							isSinglePage && "single-main-data"
						}`}
					>
						<h2>{name}</h2>
						<p className="doctor-description">
							{deseases
								.slice(0, 3)
								.map(
									(item: any) =>
										`${item[0].toUpperCase()}${item.slice(
											1
										)}`
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
				<AdditionData
					isNoticeCard={
						isCardWithNotice && pathname.includes("search")
					}
					className={`${isSinglePage && "single-additional-data"}`}
				>
					<div className="clinic-address">{clinicAddress}</div>
					<div className="clinic-name">{clinicName}</div>
				</AdditionData>

				{isCardWithNotice && isLogin && pathname.includes("search") && (
					<div className="auth-notice-block">
						<span>{getRandomNumber(3, 5)}&nbsp;</span>
						{t("doctorSearchPage.registerNoticeCard")}
					</div>
				)}
			</div>
			<div className="buttons-block">
				<Button
					text={t("doctorSearchPage.bookAppointment")}
					size="s"
					type="black"
					onClick={() => goToAppointmentPage(doctorId)}
					width="276"
				/>
				<Button
					text={t("doctorSearchPage.askDoctor")}
					size="s"
					type="phone"
					onClick={() => {
						setAskFormIsActive(true);
					}}
					width="276"
					icon="chat"
				/>
			</div>
			{askFormIsActive && (
				<AskForm
					close={() => setAskFormIsActive(false)}
					type={"doctor"}
				/>
			)}
		</SingleDoctorContainer>
	);
};
