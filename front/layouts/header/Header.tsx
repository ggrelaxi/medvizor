import { HeaderContainer } from "./header.styles";
import { LanguagePicker } from "../../components/languagePicker";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { Button } from "../../components/ui-kit/button";

export const Header = () => {
	const { t } = useTranslation();

	return (
		<HeaderContainer>
			<div>
				<picture>
					<Link href="/">
						<img src="/images/logo.svg" alt="logo" />
					</Link>
				</picture>
			</div>
			<div className="header-button">
				<Button
					text={t("header.button")}
					type="opacity"
					size="m"
					padding="12px 25px"
					onClick={() => {}}
				></Button>
			</div>
			<div>
				<LanguagePicker />
			</div>
			<div>
				<Link href="/contacts">
					<a href="#">{t("header.signUp")}</a>
				</Link>
			</div>
		</HeaderContainer>
	);
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default Header;
