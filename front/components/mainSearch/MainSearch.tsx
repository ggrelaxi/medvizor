import React, { useEffect, useState } from "react";
import { useTranslation, Translation, i18n } from "next-i18next";
import { MainSearchContainer } from "./main-search.styles";
import Select, { components } from "react-select";
import { StylesConfig } from "react-select/dist/declarations/src/styles";
import { Button } from "../../components/ui-kit/button";
import { filterServises } from "../../api/filters-servises";
import { Loader } from "../loader";
import { searchType } from "../../types/search-types";
import { LocaleTypes } from "../../types/locale-types";
import Router from "next/router";

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
		padding: "22px 24px",
		borderRadius: "24px",
		cursor: "pointer",
		border: "none",
		color: "#8F9092",
		fontSize: "24px",
		lineHeight: "32px",
		outline: "none",
		boxShadow: "none",
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
			padding: "12px 32px",
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
};

export const MainSearch = () => {
	const [searchType, setSearchType] = useState<searchType>("doctor");
	const [isLoading, setIsLoading] = useState(false);
	const [deseasesFilters, setDeseasesFilters] = useState<any>([]);
	const [specialityFilters, setSpecialityFilters] = useState<any>([]);
	const [deseases, setDeseases] = useState("");
	const [speciality, setSpeciality] = useState("");

	const {
		t,
		i18n: { language },
	} = useTranslation();

	useEffect(() => {
		setIsLoading(true);
		const p1 = filterServises
			.getDeseasesFilters(language as LocaleTypes)
			.then(({ data }) => {
				const filtersData = data.map((value: string) => ({
					value: value,
					label: value,
				}));
				setDeseasesFilters([
					{
						label: "Specialities and conditions",
						options: filtersData,
					},
				]);
			});
		const p2 = filterServises
			.getSpecialityFilters(language as LocaleTypes)
			.then(({ data }) => {
				const filtersData = data.map((value: string) => ({
					value: value,
					label: value,
				}));

				setSpecialityFilters([
					{ label: "Speciality", options: filtersData },
				]);
			});
		Promise.all([p1, p2]).finally(() => setIsLoading(false));
	}, []);

	const searchClickHandler = () => {
		if (searchType === "doctor") {
			Router.push({
				pathname: "/doctor-search",
				query: { speciality: deseases },
			});
		} else {
			Router.push({
				pathname: "/clinic-search",
				query: { speciality },
			});
		}
	};

	return (
		<MainSearchContainer>
			<div className="header-container">
				{t("mainPage.searchForm.header")}
			</div>
			<div className="search-picker">
				<div
					className={`doctor-search ${
						searchType === "doctor" && "active"
					}`}
					onClick={() => setSearchType("doctor")}
				>
					{t("mainPage.searchForm.doctor")}
				</div>
				<div
					className={`clinic-search ${
						searchType === "clinic" && "active"
					}`}
					onClick={() => setSearchType("clinic")}
				>
					{t("mainPage.searchForm.clinic")}
				</div>
			</div>
			<div className="place-picker">Florida</div>
			<div className="search-input">
				{searchType === "doctor" && (
					<Select
						options={deseasesFilters}
						components={{ DropdownIndicator }}
						styles={selectStyles}
						placeholder={t(
							"mainPage.searchForm.search-doctor-placeholder"
						)}
						onChange={({ value, label }) => setDeseases(value)}
					/>
				)}
				{searchType === "clinic" && (
					<Select
						options={specialityFilters}
						components={{ DropdownIndicator }}
						styles={selectStyles}
						placeholder={t(
							"mainPage.searchForm.search-clinic-placeholder"
						)}
						onChange={({ value, label }) => setSpeciality(value)}
					/>
				)}
			</div>
			<div className="button-container">
				<Button
					size="l"
					type="black"
					text={t("mainPage.searchForm.search-button")}
					onClick={searchClickHandler}
					disabled={searchType === "doctor" ? !deseases : !speciality}
				/>
			</div>
			{isLoading && <Loader />}
		</MainSearchContainer>
	);
};
