import { DoctorAppointmentContainer } from "./doctor-appointment.styles";
import { BackToResult } from "../../BackToResult";
import { useTranslation } from "next-i18next";
import { parse, format, add } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../../ui-kit/button";
import { SuccessForm } from "../../successForm";

type OnlineVisitType = "person" | "online" | "home";
type TimeValue = 10 | 12 | 14 | 17 | 19 | 20;
type UrgentDate = "today" | "day" | "week";
type ActiveCard = "online" | "urgent" | "ask";

export const DoctorAppointment = (props: any) => {
	const {
		name,
		logo_url,
		deseases,
		clinicAddress,
		clinicName,
		availableFrom,
	} = props.doctor;

	const {
		t,
		i18n: { language },
	} = useTranslation();
	const [onlineName, setOnlineName] = useState("");
	const [onlinePhone, setOnlinePhone] = useState("");
	const [month, day, year] = availableFrom.split("/");
	const [onlineVisitType, setOnlineVisitType] =
		useState<OnlineVisitType>("person");
	const [onlineVisitDate, setOnlineVisitDate] = useState(
		new Date(year, month, day)
	);
	const [timeValue, setTimeValue] = useState<TimeValue>(10);
	const [urgentName, setUrgentName] = useState("");
	const [urgentPhone, setUrgentPhone] = useState("");
	const [urgentDate, setUrgentDate] = useState<UrgentDate>("today");
	const [urgentQuestion, setUrgentQuestion] = useState("");
	const [askName, setAskName] = useState("");
	const [askPhone, setAskPhone] = useState("");
	const [askQuestion, setAskQuestion] = useState("");
	const [activeCard, setActiveCard] = useState("online");
	const [successFormIsActive, setSuccessFormIsActive] = useState(false);

	const onlinePhoneChangeHandler = (event: any) => {
		const currentValue = event.target.value.replace(/[^0-9+]/g, "");
		setOnlinePhone(currentValue);
	};

	const urgentPhoneChangeHandler = (event: any) => {
		const currentValue = event.target.value.replace(/[^0-9+]/g, "");
		setUrgentPhone(currentValue);
	};

	const formatAvailableDate = new Date(year, month, day);

	const onlineSubmitHandler = () => {
		setSuccessFormIsActive(true);
	};

	const urgentSubmitHandler = () => {
		setSuccessFormIsActive(true);
	};

	const askSubmitHandler = () => {
		setSuccessFormIsActive(true);
	};

	return (
		<DoctorAppointmentContainer>
			<div className="go-back">
				<BackToResult />
			</div>
			<div className="doctor-card">
				<div className="left">
					<div className="doctor-logo">
						<img
							src={`/images/doctors/${
								logo_url ? logo_url : "unknown-doctor.png"
							}`}
							alt={name}
						/>
					</div>
				</div>
				<div className="right">
					<h2>{name}</h2>
					<p className="deseases">
						{deseases
							.slice(0, 2)
							.map(
								(item: any) =>
									`${item[0].toUpperCase()}${item.slice(1)}`
							)
							.join(", ")}
					</p>
					<div className="clinic-address">{clinicAddress}</div>
					<div className="clinic-name">{clinicName}</div>
				</div>
			</div>
			<div className="appointments-container">
				<div
					className={`online-card ${
						activeCard === "online" && "active"
					}`}
					onClick={(e) => setActiveCard("online")}
				>
					<h3>{t("doctorAppointmentPage.onlineBooking")}</h3>
					<div className="available-date">
						{t("doctorAppointmentPage.availableDate")}&nbsp;
						<span>
							{format(formatAvailableDate, "dd MMMM yyyy")}
						</span>
					</div>
					<div className="fio-container">
						<label htmlFor="online-name">
							{t("doctorAppointmentPage.nameLabel")}
						</label>
						<input
							type="text"
							id="online-name"
							name="online-name"
							value={onlineName}
							placeholder={t("doctorAppointmentPage.nameLabel")}
							onChange={(e) => setOnlineName(e.target.value)}
						/>
					</div>
					<div className="phone-container">
						<label htmlFor="online-phone">
							{t("doctorAppointmentPage.phoneLabel")}
						</label>
						<input
							type="phone"
							id="online-phone"
							name="online-phone"
							value={onlinePhone}
							placeholder={t(
								"doctorAppointmentPage.phonePlaceholder"
							)}
							onChange={(e) => onlinePhoneChangeHandler(e)}
						/>
					</div>
					<div className="online-type-container">
						<label className="online-type-label">
							{t("doctorAppointmentPage.typeLabel")}
						</label>
						<div className="online-type-block">
							<div
								className={`online-type-item ${
									onlineVisitType === "person" && "active"
								}`}
								onClick={() => setOnlineVisitType("person")}
							>
								{t("doctorAppointmentPage.typePersor")}
							</div>
							<div
								className={`online-type-item ${
									onlineVisitType === "online" && "active"
								}`}
								onClick={() => setOnlineVisitType("online")}
							>
								{t("doctorAppointmentPage.typeOnline")}
							</div>
							<div
								className={`online-type-item ${
									onlineVisitType === "home" && "active"
								}`}
								onClick={() => setOnlineVisitType("home")}
							>
								{t("doctorAppointmentPage.typeInHome")}
							</div>
						</div>
					</div>
					<div className="online-date-visit-container">
						<label className="online-date-visit-label">
							{t("doctorAppointmentPage.dateVisit")}
						</label>
						<div className="online-date-calendar-container">
							<DatePicker
								selected={onlineVisitDate}
								onSelect={() => {}} //when day is clicked
								onChange={(date) =>
									setOnlineVisitDate(date as Date)
								} //only when value has changed
								showPopperArrow={false}
								dateFormat={"d MMMM yyyy"}
								excludeDateIntervals={[
									{
										start: add(new Date(), { days: -1 }),
										end: add(new Date(), { months: 3 }),
									},
								]}
								minDate={new Date()}
								locale={language}
								onChangeRaw={(e) => e.preventDefault()}
							/>
						</div>
						<div className="online-date-visit-time-container">
							<div
								className={`time-item ${
									timeValue === 10 && "active"
								}`}
								onClick={() => setTimeValue(10)}
							>
								10:00
							</div>
							<div
								className={`time-item ${
									timeValue === 12 && "active"
								}`}
								onClick={() => setTimeValue(12)}
							>
								12:00
							</div>
							<div
								className={`time-item ${
									timeValue === 14 && "active"
								}`}
								onClick={() => setTimeValue(14)}
							>
								14:00
							</div>
							<div
								className={`time-item ${
									timeValue === 17 && "active"
								}`}
								onClick={() => setTimeValue(17)}
							>
								17:00
							</div>
							<div
								className={`time-item ${
									timeValue === 19 && "active"
								}`}
								onClick={() => setTimeValue(19)}
							>
								19:00
							</div>
							<div
								className={`time-item ${
									timeValue === 20 && "active"
								}`}
								onClick={() => setTimeValue(20)}
							>
								20:00
							</div>
						</div>
					</div>
					<Button
						text={t("doctorAppointmentPage.bookButton")}
						size="s"
						onClick={onlineSubmitHandler}
						type="orange"
					/>
					<div className="online-bottom-description">
						{t("doctorAppointmentPage.bottomDescription")}
					</div>
				</div>
				<div
					className={`urgent-card ${
						activeCard === "urgent" && "active"
					}`}
					onClick={(e) => setActiveCard("urgent")}
				>
					<h3>{t("doctorAppointmentPage.urgentAppointment")}</h3>
					<div className="urgent-description">
						{t("doctorAppointmentPage.urgentDescription")}
					</div>
					<div className="fio-container">
						<label htmlFor="urgent-name">
							{t("doctorAppointmentPage.nameLabel")}
						</label>
						<input
							type="text"
							id="urgent-name"
							name="urgent-name"
							value={urgentName}
							placeholder={t("doctorAppointmentPage.nameLabel")}
							onChange={(e) => setUrgentName(e.target.value)}
						/>
					</div>
					<div className="phone-container">
						<label htmlFor="urgent-phone">
							{t("doctorAppointmentPage.phoneLabel")}
						</label>
						<input
							type="phone"
							id="urgent-phone"
							name="urgent-phone"
							value={urgentPhone}
							placeholder={t(
								"doctorAppointmentPage.phonePlaceholder"
							)}
							onChange={(e) => urgentPhoneChangeHandler(e)}
						/>
					</div>
					<div className="urgent-date-container">
						<label>{t("doctorAppointmentPage.urgentDate")}</label>
						<div className="urgent-date-block">
							<div
								className={`urgent-date-item ${
									urgentDate === "today" && "active"
								}`}
								onClick={(e) => setUrgentDate("today")}
							>
								{t("doctorAppointmentPage.urgentDateToday")}
							</div>
							<div
								className={`urgent-date-item ${
									urgentDate === "day" && "active"
								}`}
								onClick={(e) => setUrgentDate("day")}
							>
								{t("doctorAppointmentPage.urgentDateDay")}
							</div>
							<div
								className={`urgent-date-item ${
									urgentDate === "week" && "active"
								}`}
								onClick={(e) => setUrgentDate("week")}
							>
								{t("doctorAppointmentPage.urgentDateWeek")}
							</div>
						</div>
					</div>
					<div className="urgent-question-container">
						<label htmlFor="urgent-question">
							{t("doctorAppointmentPage.urgentQuestionLabel")}
						</label>
						<textarea
							rows={4}
							placeholder={t(
								"doctorAppointmentPage.urgentQuestionPlaceholder"
							)}
							value={urgentQuestion}
							onChange={(e) => setUrgentQuestion(e.target.value)}
						/>
					</div>
					<Button
						text={t("doctorAppointmentPage.urgentButton")}
						size="s"
						onClick={urgentSubmitHandler}
						type="orange"
					/>
				</div>
				<div
					className={`ask-card ${activeCard === "ask" && "active"}`}
					onClick={(e) => setActiveCard("ask")}
				>
					<h3>{t("doctorAppointmentPage.askHeader")}</h3>
					<div className="ask-fio-container">
						<label htmlFor="name">
							{t("doctorAppointmentPage.nameLabel")}
						</label>
						<input
							value={askName}
							placeholder={t(
								"doctorAppointmentPage.namePlaceholder"
							)}
							type="text"
							id="name"
							onChange={(e) => setAskName(e.target.value)}
						/>
					</div>
					<div className="ask-phone-container">
						<label htmlFor="phone">
							{t("doctorAppointmentPage.phoneLabel")}
						</label>
						<input
							type="phone"
							value={askPhone}
							id="phone"
							placeholder={t(
								"doctorAppointmentPage.phonePlaceholder"
							)}
							onChange={(e) => setAskPhone(e.target.value)}
						/>
					</div>
					<div className="ask-question-container">
						<label>
							{t("doctorAppointmentPage.askQuestionLabel")}
						</label>
						<textarea
							value={askQuestion}
							placeholder={t(
								"doctorAppointmentPage.askQuestionPlaceholder"
							)}
							onChange={(e) => setAskQuestion(e.target.value)}
							rows={4}
						/>
					</div>
					<Button
						type="orange"
						size="s"
						text={t("doctorAppointmentPage.askButton")}
						onClick={askSubmitHandler}
					/>
				</div>
			</div>
			{successFormIsActive && (
				<SuccessForm close={() => setSuccessFormIsActive(false)} />
			)}
		</DoctorAppointmentContainer>
	);
};
