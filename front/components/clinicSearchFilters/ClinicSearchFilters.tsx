import { ClinicSearchFiltersContainer } from "./clinic-search-filters.styles";
import { Button } from "../ui-kit/button";
import Select, { components } from "react-select";
import { useTranslation } from "next-i18next";
import { StylesConfig } from "react-select/dist/declarations/src/styles";
import { SpecialityFilterOption } from "../../types/search-types";

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

export const ClinicSearchFilters = (props: any) => {
	const {
		specialityOptions,
		insuranceOptions,
		filtersValue,
		setFiltersValue,
		searchClinic,
	} = props;

	const { t } = useTranslation();

	const specialityFilterChangeHandler = ({
		value,
		label,
	}: SpecialityFilterOption) => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			speciality: value,
		}));
		return { value, label };
	};

	const insuranceFilterChangeHandler = ({
		value,
		label,
	}: SpecialityFilterOption) => {
		setFiltersValue((prevState: any) => ({
			...prevState,
			insurance: value,
		}));
		return { value, label };
	};

	return (
		<ClinicSearchFiltersContainer>
			<div className="filters">
				<div className="place-picker">Florida</div>
				<Select
					value={specialityOptions.filter(
						(item: SpecialityFilterOption) =>
							item.value === filtersValue?.speciality
					)}
					options={specialityOptions}
					components={{ DropdownIndicator }}
					styles={selectStyles}
					placeholder={t("clinicSearchPage.speciality-placeholder")}
					onChange={specialityFilterChangeHandler}
				/>
				<Select
					value={insuranceOptions.filter(
						(item: SpecialityFilterOption) =>
							item.value === filtersValue?.insurance
					)}
					options={insuranceOptions}
					components={{ DropdownIndicator }}
					styles={selectStyles}
					placeholder={t("clinicSearchPage.insurance-placeholder")}
					onChange={insuranceFilterChangeHandler}
				/>
			</div>
			<Button
				text={t("clinicSearchPage.searchButtonText")}
				type="black"
				onClick={searchClinic}
				size="s"
			/>
		</ClinicSearchFiltersContainer>
	);
};
