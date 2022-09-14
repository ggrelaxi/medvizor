import { useState } from "react";
import { DoctorsFiltersContainer } from "./doctor-search-filters.styles";
import { useTranslation } from "next-i18next";
import { Button } from "../../components/ui-kit/button";
import { StylesConfig } from "react-select/dist/declarations/src/styles";
import Select, { components } from "react-select";
import {
	SpecialityFilterOption,
	DeseasesFilterOption,
} from "../../types/search-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import add from "date-fns/add";
import { LocaleTypes } from "../../types/locale-types";
import { parse } from "date-fns";

const DropdownIndicator = (props: any) => {
	return (
		<components.DropdownIndicator {...props}>
			{props.selectProps.menuIsOpen ? (
				<img src="/images/icons/arrow-up.svg" alt="#" />
			) : (
				<img src="/images/icons/arrow-down.svg" alt="#" />
			)}
		</components.DropdownIndicator>
	);
};

const selectStyles: StylesConfig<any, false> = {
	// container: (provided) => ({
	// 	...provided,
	// 	maxWidth: "406px",
	// 	width: "100%",
	// }),
	control: (provided) => ({
		...provided,
		height: "100%",
		padding: "4px 14px",
		borderRadius: "12px",
		cursor: "pointer",
		border: "1px solid #1F2124",
		color: "#8F9092",
		fontSize: "18px",
		lineHeight: "24px",
		outline: "none",
		boxShadow: "none",
		"&:hover": {
			borderColor: "#1F2124",
		},
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		display: "none",
	}),
	menu: (provided) => ({
		...provided,
		borderRadius: "24px",
		overflow: "hidden",
		boxShadow: "0px 14px 24px -2px rgba(31, 33, 36, 0.1)",
		zIndex: "20",
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
	option: (provided, state) => {
		return {
			...provided,
			position: "relative",
			cursor: "pointer",
			padding: "12px 56px 12px 32px",
			color: "#1F2124",
			fontSize: "18px",
			lineHeight: "24px",
			backgroundColor: "white",
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
	groupHeading: (provided) => ({
		...provided,
		padding: "0 32px 12px 32px",
		borderBottom: "1px solid rgba(31, 33, 36, 0.2)",
		fontFamily: "PT",
		fontSize: "16px",
		lineHeight: "20px",
		textTransform: "lowercase",
		":first-letter": {
			textTransform: "uppercase",
		},
	}),
	placeholder: (provided) => ({
		...provided,
		color: "#8F9092",
		fontSize: "18px",
		lineHeight: "24px",
	}),
};

const smallSelectStyles: StylesConfig<any, false> = {
	container: (provided) => ({
		...provided,
		maxWidth: "147px",
		width: "100%",
	}),
	control: (provided) => ({
		...provided,
		maxWidth: "147px",
		height: "100%",
		borderRadius: "10px",
		cursor: "pointer",
		border: "1px solid #1F2124",
		color: "#8F9092",
		fontSize: "18px",
		lineHeight: "24px",
		outline: "none",
		boxShadow: "none",
		maxHeight: "34px",
		minHeight: "34px",
		"&:hover": {
			borderColor: "#1F2124",
		},
	}),
	valueContainer: (provided) => ({
		...provided,
		padding: "0px 0 0 14px",
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		display: "none",
	}),
	indicatorsContainer: (provided) => ({
		...provided,
		padding: "0",
		maxHeight: "34px",
		"& div[class*=indicatorContainer]": {
			maxHeight: "32px",
		},
		"& img": {
			maxWidth: "16px",
		},
	}),
	menu: (provided) => ({
		...provided,
		borderRadius: "24px",
		overflow: "hidden",
		boxShadow: "0px 14px 24px -2px rgba(31, 33, 36, 0.1)",
		zIndex: "20",
	}),
	menuList: (provided) => ({
		...provided,
		maxHeight: "240px",
		overflowY: "scroll",
		overflowX: "hidden",
		"&::-webkit-scrollbar": {
			width: "4px",
		},
		"&::-webkit-scrollbar-thumb": {
			background: "#1F2124",
		},
		scrollbarWidth: "thin",
		scrollbarColor: "#1F2124 #fff",
	}),
	option: (provided, state) => {
		return {
			...provided,
			position: "relative",
			cursor: "pointer",
			padding: "15px 30px 15px 20px",
			color: "#1F2124",
			fontSize: "18px",
			lineHeight: "24px",
			backgroundColor: "white",
			"&:hover": {
				backgroundColor: "#eef4f5",
			},
			"&:before": {
				position: "absolute",
				width: "20px",
				height: "20px",
				right: "20px",
				content: `url(
					${state.isSelected === true ? "/images/icons/check-icon.svg" : ""}
				)`,
			},
		};
	},
	groupHeading: (provided) => ({
		...provided,
		padding: "0 32px 12px 32px",
		borderBottom: "1px solid rgba(31, 33, 36, 0.2)",
		fontFamily: "PT",
		fontSize: "16px",
		lineHeight: "20px",
		textTransform: "lowercase",
		":first-letter": {
			textTransform: "uppercase",
		},
	}),
	placeholder: (provided) => ({
		...provided,
		color: "#8F9092",
		fontSize: "16px",
		lineHeight: "20px",
	}),
	singleValue: (provided) => ({
		...provided,
		fontSize: "16px",
		lineHeight: "20px",
	}),
};

export const DoctorSearchFilters = (props: any) => {
	const {
		specialityOptions,
		deseasesOptions,
		filtersValue,
		setFiltersValue,
		searchDoctors,
	} = props;
	const {
		t,
		i18n: { language },
	} = useTranslation();
	const [visitDate, setVisitDate] = useState<null | Date>(
		filtersValue.visitDate
			? parse(filtersValue.visitDate, "d/MM/yyyy", new Date())
			: null
	);

	const [moreFiltersIsOpen, setMoreFiltersIsOpen] = useState(false);

	const inputChangeHandler = (event: any) => {
		if (event.target.value) {
			const currentValue = event.target.value.replace(/[^0-9]/g, "");
			if (event.target.id === "price-min")
				setFiltersValue((prev: any) => {
					const { price } = prev;
					price[0] = currentValue;
					return {
						...prev,
						price: price,
					};
				});
			if (event.target.id === "price-max")
				setFiltersValue((prev: any) => {
					const { price } = prev;
					price[1] = currentValue;
					return {
						...prev,
						price: price,
					};
				});
		}
	};

	const visitDateHandler = (date: any) => {
		setVisitDate(date);
		setFiltersValue((prevState: any) => ({
			...prevState,
			visitDate: date,
		}));
	};

	const visitTypeHandler = (option: { value: string; label: string }) => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			visitType: option.value,
		}));
	};

	const languageChangeHandler = (option: {
		value: string;
		label: string;
	}) => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			language: option.value,
		}));
	};

	const bookingTypeChangeHandler = () => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			onlineBooking: !prevState.onlineBooking,
		}));
	};

	const deseasesChangeHandler = (option: {
		value: string;
		label: string;
	}) => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			deseases: option.value,
		}));
	};

	const genderChangeHandler = (option: { value: string; label: string }) => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			gender: option.value,
		}));
	};

	const visitTypeOptions = [
		{ value: "Online", label: `${t("doctorSearchPage.onlineVisit")}` },
		{ value: "Offline", label: `${t("doctorSearchPage.offlineVisit")}` },
	];

	const languageOptions = {
		en: [
			{
				value: "English",
				label: `${t("doctorSearchPage.english")}`,
			},
			{
				value: "Spanish",
				label: `${t("doctorSearchPage.spanish")}`,
			},
		],
		de: [
			{
				value: "English",
				label: `${t("doctorSearchPage.english")}`,
			},
			{
				value: "German",
				label: `${t("doctorSearchPage.german")}`,
			},
		],
		ar: [
			{
				value: "English",
				label: `${t("doctorSearchPage.english")}`,
			},
			{
				value: "Arabic",
				label: `${t("doctorSearchPage.arabic")}`,
			},
		],
	};

	const genderOptions = [
		{
			value: "Female",
			label: "Female",
		},
		{ value: "Male", label: "Male" },
	];
	return (
		<DoctorsFiltersContainer>
			<div className="first-line">
				<div className="place-block">Florida</div>
				<div className="speciality-block">
					<Select
						value={specialityOptions.filter(
							(item: SpecialityFilterOption) =>
								item.value === filtersValue?.speciality
						)}
						options={specialityOptions}
						styles={selectStyles}
						components={{ DropdownIndicator }}
						placeholder={t(
							"doctorSearchPage.specialityPlaceholder"
						)}
					/>
				</div>
				<Button
					text={t("doctorSearchPage.searchButtonText")}
					type="black"
					size="s"
					onClick={searchDoctors}
				/>
			</div>
			<div className="second-line">
				<div className="price-range">
					<input
						maxLength={5}
						type="text"
						onChange={inputChangeHandler}
						id="price-min"
						value={filtersValue.price[0]}
						placeholder={t("doctorSearchPage.priceMinPlaceholder")}
					/>
					<div></div>
					<input
						maxLength={5}
						type="text"
						onChange={inputChangeHandler}
						id="price-max"
						value={filtersValue.price[1]}
						placeholder={t("doctorSearchPage.priceMaxPlaceholder")}
					/>
				</div>
				<div className="visit-date">
					<DatePicker
						selected={visitDate}
						placeholderText={t(
							"doctorSearchPage.visitDatePlaceholder"
						)}
						onSelect={() => {}} //when day is clicked
						onChange={visitDateHandler} //only when value has changed
						showPopperArrow={false}
						dateFormat={"d/MM/yyyy"}
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
				<div className="type-of-visit">
					<Select
						styles={smallSelectStyles}
						isSearchable={false}
						components={{ DropdownIndicator }}
						options={visitTypeOptions}
						value={visitTypeOptions.find(
							(item) => item.value === filtersValue.visitType
						)}
						onChange={visitTypeHandler}
						placeholder={t("doctorSearchPage.visitTypePlaceholder")}
					/>
				</div>
				<div className="language">
					<Select
						styles={smallSelectStyles}
						isSearchable={false}
						components={{ DropdownIndicator }}
						options={languageOptions[language as LocaleTypes]}
						value={languageOptions[language as LocaleTypes].find(
							(item) => item.value === filtersValue.language
						)}
						onChange={languageChangeHandler}
						placeholder={t("doctorSearchPage.languagePlaceholder")}
					/>
				</div>
				<div
					className={`booking-type ${
						filtersValue.onlineBooking && "is-active"
					}`}
					onClick={bookingTypeChangeHandler}
				>
					{t("doctorSearchPage.onlineBooking")}
				</div>
				<div
					className="more-filters"
					onClick={() => {
						setMoreFiltersIsOpen((prevState) => !prevState);
					}}
				>
					{t("doctorSearchPage.moreFilters")}
					{moreFiltersIsOpen && (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M19 7H5L12 17L19 7Z" fill="#1F2124" />
						</svg>
					)}
					{!moreFiltersIsOpen && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
						>
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
								fill="#1F2124"
								d="m19,7l-14,0l7,10l7,-10z"
							/>
						</svg>
					)}
				</div>
			</div>
			{moreFiltersIsOpen && (
				<div className="additional-filter-container">
					<div className="third-line">
						<div className="additional-description">
							{t("doctorSearchPage.medicalCondition")}
						</div>
						<div className="addition-filter-container">
							<Select
								options={deseasesOptions}
								styles={smallSelectStyles}
								placeholder={t(
									"doctorSearchPage.medicalConditionPlaceholder"
								)}
								onChange={deseasesChangeHandler}
								value={deseasesOptions.filter(
									(item: DeseasesFilterOption) =>
										item.value === filtersValue.deseases
								)}
								components={{ DropdownIndicator }}
							/>
						</div>
					</div>
					<div className="fouth-line">
						<div className="additional-description">
							{t("doctorSearchPage.gender")}
						</div>
						<div className="addition-filter-container">
							<Select
								styles={smallSelectStyles}
								placeholder={t(
									"doctorSearchPage.genderPlaceholder"
								)}
								components={{ DropdownIndicator }}
								options={genderOptions}
								isSearchable={false}
								value={genderOptions.filter(
									(option) =>
										option.value === filtersValue.gender
								)}
								onChange={genderChangeHandler}
							/>
						</div>
					</div>
					<div className="fifth-line">
						<div className="additional-description">
							{t("doctorSearchPage.memberOfAssociation")}
						</div>
						<div className="addition-filter-container buttons-filter">
							<div
								className={`yes-button ${
									filtersValue.association === "true" &&
									"is-active"
								}`}
								onClick={() =>
									setFiltersValue((prevState: any) => ({
										...prevState,
										association: "true",
									}))
								}
							>
								{t("doctorSearchPage.associationYes")}
							</div>
							<div
								className={`yes-button ${
									filtersValue.association === "false" &&
									"is-active"
								}`}
								onClick={() =>
									setFiltersValue((prevState: any) => ({
										...prevState,
										association: "false",
									}))
								}
							>
								{t("doctorSearchPage.associationNo")}
							</div>
						</div>
					</div>
				</div>
			)}
		</DoctorsFiltersContainer>
	);
};
