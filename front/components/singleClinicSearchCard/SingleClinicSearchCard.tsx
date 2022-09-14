import { useState } from "react";
import { ClinicCardListContainer } from "./single-clinic-search-card.styles";
import { Button } from "../ui-kit/button";
import { useTranslation } from "next-i18next";
import { AskForm } from "../askForm/AskForm";
import Router, { useRouter } from "next/router";

interface Language {
	[key: string]: string;
}

const lng: Language = {
	en: "English",
};

const getLanguage = (languages: string[]) => {
	return languages.map((lang) => lng[lang]);
};

const getTime = (timeData: any) => {
	const { allDay, monday, friday, saturday, sunday } = timeData;

	if (allDay) {
		return (
			<>
				<p>
					<span>Monday to Friday</span> 00:00 am - 23:59 pm
				</p>
				<p>
					<span>Saturday</span> 00:00 am - 23:59 pm
				</p>
				<p>
					<span>Sunday</span> 00:00 am - 23:59 pm
				</p>
			</>
		);
	}
	return (
		<>
			<p>
				<span>Monday to {friday ? "Thursday" : "Friday"}</span>{" "}
				{monday[0]} am - {monday[1]} pm
			</p>
			{friday && (
				<p>
					<span>Friday</span> {friday[0]} am - {friday[1]} pm
				</p>
			)}
			<p>
				<span>Saturday</span>{" "}
				{saturday
					? saturday.work
						? `${saturday.time[0]} am - ${saturday.time[1]} pm}`
						: "Closed"
					: ""}
			</p>
			<p>
				<span>Sunday</span>{" "}
				{sunday
					? sunday.work
						? `${sunday.time[0]} am - ${sunday.time[1]} pm}`
						: "Closed"
					: ""}
			</p>
		</>
	);
};

export const ClinicListCard = (props: any) => {
	const { t } = useTranslation();
	const { pathname } = useRouter();
	const {
		logoUrl,
		name,
		deseases,
		address,
		languages,
		payments,
		workHours,
		clinicId,
		isSingleClinic = false,
	} = props;
	const [askFormIsActive, setAskFormIsActive] = useState(false);

	const goToClickHandler = (id: number) => {
		Router.push({
			pathname: `/clinic/${id}`,
		});
	};

	return (
		<ClinicCardListContainer>
			<div className="content-block">
				<div
					onClick={() => {
						if (pathname.includes("search")) {
							goToClickHandler(clinicId);
						}
					}}
					className={`head-data ${
						pathname.includes("search") && "pointer"
					}`}
				>
					<div className="clinic-logo">
						<img src={`/images/clinics/${logoUrl}`} alt="clinic" />
					</div>
					<div className="clinic-main-data">
						<h2>{name}</h2>
						<p>
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
					</div>
				</div>
				<div className="addition-data">
					<div className="left">
						<div className="address">{address}</div>
						<div className="work-time">{getTime(workHours)}</div>
					</div>
					<div className="right">
						<div className="language">
							{getLanguage(languages).join(", ")}
						</div>
						<div className="payment">{payments.join(", ")}</div>
					</div>
				</div>
			</div>
			<div className="buttons-block">
				{!isSingleClinic && (
					<Button
						text={t("clinicSearchPage.chooseDoctor")}
						size="s"
						type="black"
						onClick={() => {}}
						width="276"
					/>
				)}
				<Button
					text={t("clinicSearchPage.askClinic")}
					size="s"
					type="phone"
					onClick={() => {
						setAskFormIsActive(true);
					}}
					width="276"
					icon="chat"
				/>
				{isSingleClinic && (
					<div className="button-additional-text">
						{t("singleClinicPage.buttonAdditionalText")}
					</div>
				)}
			</div>
			{askFormIsActive && (
				<AskForm close={() => setAskFormIsActive(false)} />
			)}
		</ClinicCardListContainer>
	);
};
