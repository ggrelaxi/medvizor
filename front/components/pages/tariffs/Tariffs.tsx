import { useTranslation } from "next-i18next";
import { TariffsContainer } from "./tariffs.styles";
import { useEffect, useState } from "react";
import { Button } from "../../ui-kit/button";
import Select, { components, NonceProvider } from "react-select";
import { StylesConfig } from "react-select/dist/declarations/src/styles";
import { LocaleTypes } from "../../../types/locale-types";
import { filterServises } from "../../../api/filters-servises";
import { Loader } from "../../loader";
import { RequestForm } from "../../requestForm/RequestForm";

type Plans = "annually" | "monthly";

const DropdownIndicator = (props: any) => {
	return (
		<components.DropdownIndicator {...props}>
			{props.selectProps.menuIsOpen && (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<rect
						fill="none"
						id="canvas_background"
						height="602"
						width="802"
						y="-1"
						x="-1"
					/>
					<path
						transform="rotate(-180 12,12) "
						id="svg_1"
						fill="#E84A22"
						d="m19,7l-14,0l7,10l7,-10z"
					/>
				</svg>
			)}
		</components.DropdownIndicator>
	);
};

const requestSelectStyle: StylesConfig<any, false> = {
	container: (provided) => ({
		...provided,
		display: "inline-block",
		margin: "0 5px",
		outline: "none",
		boxShadow: "none",
	}),
	control: (provided) => ({
		...provided,
		backgroundColor: "none",
		border: "none",
		boxShadow: "none",
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		display: "none",
	}),
	indicatorsContainer: (provided, state) => {
		return {
			...provided,
			display: `${state.selectProps.menuIsOpen ? "inherit" : "none"}`,
			"& .indicator-container": {
				backgroundColor: "red",
			},
		};
	},
	menu: (provided) => ({
		...provided,
		borderRadius: "24px",
		overflow: "hidden",
		width: "300px",
		boxShadow: "0px 14px 24px -2px rgba(31, 33, 36, 0.1)",
	}),
	menuList: (provided) => ({
		...provided,
		maxHeight: "240px",
		overflowY: "scroll",
		"&::-webkit-scrollbar": {
			width: "4px",
		},
		"&::-webkit-scrollbar-thumb": {
			background: "#1F2124",
		},
		scrollbarWidth: "thin",
		scrollbarColor: "#1F2124 #fff",
	}),
	placeholder: (provided) => ({
		...provided,
		color: "#E84A22",
	}),
	singleValue: (provided) => ({
		...provided,
		color: "#E84A22",
	}),
	multiValue: (provided) => ({
		...provided,
		backgroundColor: "unset",
		color: "#E84A22",
		fontSize: "32px",
		lineHeight: "60px",

		"& button:hover": {
			color: "#E84A22",
			backgroundColor: "unset",
		},
		"& div": {
			fontSize: "100% !important",
			color: "#E84A22",
		},
		"& div[class*=indicatorContainer]": {
			"svg path": {
				fill: "red",
			},
		},
	}),
	option: (provided, state) => {
		return {
			...provided,
			position: "relative",
			cursor: "pointer",
			padding: "12px 32px",
			color: "#1F2124",
			fontSize: "18px",
			lineHeight: "24px",
			backgroundColor: "white",
			textAlign: "left",
			"&:hover": {
				backgroundColor: "#eef4f5",
			},
			"&:before": {
				position: "absolute",
				width: "20px",
				height: "20px",
				right: "26px",
				content: `url(
					${state.isSelected === true ? "/images/icons/check-icon.svg" : ""}
				)`,
			},
		};
	},
	valueContainer: (provided) => ({
		...provided,
		paddingRight: "0",
	}),
};

export const Tariffs = () => {
	const {
		t,
		i18n: { language },
	} = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [activePlan, setActivePlan] = useState<Plans>("annually");
	const [forWhomOption, setForWhomOption] = useState([]);
	const [agesOption, setAgesOption] = useState([]);
	const [deseasesOptions, setDeseasesOption] = useState([]);
	const [desease, setDesease] = useState([]);
	const [phone, setPhone] = useState("");
	const [requestFormIsOpen, setRequestFormIsOpen] = useState(false);
	const [pickOptions, setPickOptions] = useState("");

	const closeRequestFormHandler = () => {
		setRequestFormIsOpen(false);
	};
	const openRequestFormHandler = () => {
		setRequestFormIsOpen(true);
		setPickOptions(
			`Patient - ${forWhomOption.value || "not specified"}\nAge - ${
				agesOption.value || "not specified"
			}\nDesease(s) - ${desease.map((item) => item.value).join(", ")}`
		);
	};

	const phoneChangeHandler = (event: any) => {
		const currentValue = event.target.value.replace(/[^0-9]/g, "");
		setPhone(currentValue);
	};

	const whomOptions = {
		en: [
			{ label: "Myself", value: "Myself" },
			{ label: "My children", value: "My children" },
			{ label: "My parents", value: "My parents" },
			{ label: "My family members", value: "My family members" },
			{ label: "Other", value: "Other" },
		],
		de: [],
		ar: [],
	};

	const agesOptions = {
		en: [
			{ value: "Zero-Three", label: "Zero-Three" },
			{ value: "Three-Five", label: "Three-Five" },
			{ value: "Five-Ten", label: "Five-Ten" },
			{ value: "Ten-Fifteen", label: "Ten-Fifteen" },
			{ value: "Fifteen-Twenty", label: "Fifteen-Twenty" },
			{ value: "Early-Twenties", label: "Early-Twenties" },
			{ value: "Mid-Twenties", label: "Mid-Twenties" },
			{ value: "Late-Twenties", label: "Late-Twenties" },
			{ value: "Early-Thirties", label: "Early-Thirties" },
			{ value: "Mid-Thirties", label: "Mid-Thirties" },
			{ value: "Late-Thirties", label: "Late-Thirties" },
			{ value: "Early-Forties", label: "Early-Forties" },
			{ value: "Mid-Forties", label: "Mid-Forties" },
			{ value: "Late-Forties", label: "Late-Forties" },
			{ value: "Early-Fifties", label: "Early-Fifties" },
			{ value: "Mid-Fifties", label: "Mid-Fifties" },
			{ value: "Late-Fifties", label: "Late-Fifties" },
			{ value: "Sixties", label: "Sixties" },
			{ value: "Seventies", label: "Seventies" },
			{ value: "Eighties", label: "Eighties" },
			{ value: "Different", label: "Different" },
		],
		de: [],
		ar: [],
	};

	useEffect(() => {
		setIsLoading(true);
		filterServises
			.getDeseasesFilters(language as LocaleTypes)
			.then(({ data }) => {
				const filtersData = data.map((value: string) => ({
					value: value,
					label: value,
				}));
				setDeseasesOption(filtersData);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<TariffsContainer>
			<div className="top-block">
				<h1>{t("tariffsPage.choosePlan")}</h1>
				<div className="plan-picker">
					<div
						className={`annually ${
							activePlan === "annually" && "active"
						}`}
						onClick={() => setActivePlan("annually")}
					>
						{t("tariffsPage.annually")}
						<span>{t("tariffsPage.save")}</span>
					</div>
					<div
						className={`monthly ${
							activePlan === "monthly" && "active"
						}`}
						onClick={() => setActivePlan("monthly")}
					>
						{t("tariffsPage.monthly")}
					</div>
				</div>
			</div>
			<div className="tariffs">
				<div className="tariff-card">
					<h3>{t("tariffsPage.basic.header")}</h3>
					<ul>
						<li>{t("tariffsPage.basic.line1")}</li>
						<li>{t("tariffsPage.basic.line2")}</li>
						<li>{t("tariffsPage.basic.line3")}</li>
						<li>{t("tariffsPage.basic.line4")}</li>
						<li>{t("tariffsPage.basic.line5")}</li>
					</ul>
					<div className="price">
						<div className="main">
							<span>${t("tariffsPage.basic.mainPrice")}/</span>
							{t("tariffsPage.mounth")}
						</div>
						<div className="second">
							+ ${t("tariffsPage.basic.secondPrice")}
						</div>
					</div>
					<Button
						text={t("tariffsPage.requestButton")}
						size="s"
						type="orange"
						onClick={openRequestFormHandler}
					/>
				</div>
				<div className="tariff-card">
					<span className="marker">{t("tariffsPage.marker")}</span>
					<h3>{t("tariffsPage.advanced.header")}</h3>
					<ul>
						<li>{t("tariffsPage.advanced.line1")}</li>
						<li>{t("tariffsPage.advanced.line2")}</li>
						<li>{t("tariffsPage.advanced.line3")}</li>
						<li>{t("tariffsPage.advanced.line4")}</li>
						<li>{t("tariffsPage.advanced.line5")}</li>
					</ul>
					<div className="price">
						<div className="main">
							<span>${t("tariffsPage.advanced.mainPrice")}/</span>
							{t("tariffsPage.mounth")}
						</div>
						<div className="second">
							+ ${t("tariffsPage.advanced.secondPrice")}
						</div>
					</div>
					<Button
						text={t("tariffsPage.requestButton")}
						size="s"
						type="orange"
						onClick={openRequestFormHandler}
					/>
				</div>
				<div className="tariff-card">
					<h3>{t("tariffsPage.pro.header")}</h3>
					<ul>
						<li>{t("tariffsPage.pro.line1")}</li>
						<li>{t("tariffsPage.pro.line2")}</li>
						<li>{t("tariffsPage.pro.line3")}</li>
						<li>{t("tariffsPage.pro.line4")}</li>
					</ul>
					<div className="price">
						<div className="main">
							<span>${t("tariffsPage.pro.mainPrice")}/</span>
							{t("tariffsPage.mounth")}
						</div>
						<div className="second">
							+ ${t("tariffsPage.pro.secondPrice")}
						</div>
					</div>
					<Button
						text={t("tariffsPage.requestButton")}
						size="s"
						type="orange"
						onClick={openRequestFormHandler}
					/>
				</div>
			</div>
			<div className="separator">{t("tariffsPage.separator")}</div>
			<div className="request">
				<h2>{t("tariffsPage.pickRequestHeader")}</h2>
				<div className="request-picker-container">
					<div className="request-data">
						<span>{t("tariffsPage.requestText.lookingFor")}</span>
						<img
							className="request-icon"
							src="/images/icons/doctor-icon.svg"
							alt="for family"
						/>
						<span>{t("tariffsPage.requestText.for")}</span>
						<Select
							value={forWhomOption}
							onChange={(option) => setForWhomOption(option)}
							components={{ DropdownIndicator }}
							isSearchable={false}
							styles={requestSelectStyle}
							placeholder={t(
								"tariffsPage.requestText.forWhomPlaceholder"
							)}
							options={whomOptions[language as LocaleTypes]}
						/>
						<span>,&nbsp;</span>
						<span>{t("tariffsPage.requestText.iAm")}</span>
						<Select
							value={agesOption}
							onChange={(option) => setAgesOption(option)}
							components={{ DropdownIndicator }}
							isSearchable={false}
							styles={requestSelectStyle}
							placeholder={t(
								"tariffsPage.requestText.agesPlaceholder"
							)}
							options={agesOptions[language as LocaleTypes]}
						/>
						<span>,&nbsp;</span>
						<span>{t("tariffsPage.requestText.deseases")}</span>
						<span>
							<Select
								value={desease}
								onChange={(option) => setDesease(option)}
								components={{ DropdownIndicator }}
								isSearchable={false}
								styles={requestSelectStyle}
								isMulti
								placeholder={t(
									"tariffsPage.requestText.deseasesPlaceholder"
								)}
								options={deseasesOptions}
							/>
						</span>
						<span>.&nbsp;</span>
						<span>{t("tariffsPage.requestText.callText")}</span>
						<img
							className="request-icon"
							src="/images/icons/tel-icon.svg"
							alt="phone"
						/>
						<span>{t("tariffsPage.requestText.at")}</span>
						<input
							type="phone"
							placeholder="phone number"
							className="phone-input"
							value={phone}
							onChange={phoneChangeHandler}
						/>
						<span>{t("tariffsPage.requestText.withOptions")}</span>
					</div>
				</div>
				<Button
					text={t("tariffsPage.requestButton")}
					size="s"
					type="orange"
					width="335"
					onClick={openRequestFormHandler}
				/>
			</div>
			{isLoading && <Loader />}
			{requestFormIsOpen && (
				<RequestForm
					close={closeRequestFormHandler}
					areaData={pickOptions}
					phone={phone}
				/>
			)}
		</TariffsContainer>
	);
};
