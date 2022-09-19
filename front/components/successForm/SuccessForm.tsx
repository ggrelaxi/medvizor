import { useTranslation } from "next-i18next";
import { SuccessFormContainer } from "./success-form.styles";
import { Button } from "../ui-kit/button";
export const SuccessForm = (props: any) => {
	const { close } = props;
	const { t } = useTranslation();
	return (
		<SuccessFormContainer>
			<div className="form-container">
				<h3>{t("successForm.header")}</h3>
				<div className="success-text">{t("successForm.text")}</div>
				<Button
					type="orange"
					size="s"
					text={t("successForm.button")}
					onClick={() => close()}
				/>
			</div>
		</SuccessFormContainer>
	);
};
