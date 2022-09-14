import { useState } from "react";
import { LanguagePickerContainer } from "./language-picker.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ArrowDown } from "./language-picker.styles";

export const LanguagePicker = () => {
	const router = useRouter();
	const [currentLocale, setCurrentLocale] = useState(router.locale);
	const [isLocaleListOpen, setIsLocaleListOpen] = useState(false);
	const { t } = useTranslation();

	const changeLocaleHandler = () => {
		setIsLocaleListOpen((prevState) => !prevState);
	};
	return (
		<LanguagePickerContainer>
			<div className="locale-view" onClick={changeLocaleHandler}>
				{currentLocale?.toUpperCase()}
				<ArrowDown
					src={`/images/icons/arrow-${
						isLocaleListOpen ? "up" : "down"
					}.svg`}
					alt="locale picker"
				/>
				{isLocaleListOpen && (
					<div className="locales-list">
						<Link href="/" locale={"en"}>
							<button onClick={() => setCurrentLocale("en")}>
								{t("header.en", {
									changeTo: "en",
								})}
							</button>
						</Link>
						<Link href="/" locale={"ar"}>
							<button onClick={() => setCurrentLocale("ar")}>
								{t("header.ar", { changeTo: "ar" })}
							</button>
						</Link>
					</div>
				)}
			</div>
		</LanguagePickerContainer>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
