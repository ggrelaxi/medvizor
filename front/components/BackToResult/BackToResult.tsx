import { t } from "i18next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { BackToResultContainer } from "./back-to-result.styles";

export const BackToResult = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<BackToResultContainer onClick={() => router.back()}>
			{router.pathname.includes("appointment")
				? t("doctorAppointmentPage.backToResult")
				: t("common.backToResult")}
		</BackToResultContainer>
	);
};
