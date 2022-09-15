import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button } from "../ui-kit/button";
import { RequestFormContainer } from "./request-form.styles";

interface IRequestForm {
	close: () => void;
	areaData?: string;
	phone?: string;
}

export const RequestForm = ({ close, areaData, phone }: IRequestForm) => {
	const { t } = useTranslation();
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState(phone || "");
	const [questionValue, setQuestionValue] = useState(areaData || "");

	return (
		<RequestFormContainer>
			<div className="form-container">
				<h3>{t("requestForm.header")}</h3>
				<div className="fio-container">
					<label htmlFor="name">{t("requestForm.nameLabel")}</label>
					<input
						value={nameValue}
						placeholder={t("requestForm.namePlaceholder")}
						type="text"
						id="name"
						onChange={(e) => setNameValue(e.target.value)}
					/>
				</div>
				<div className="phone-container">
					<label htmlFor="phone">{t("requestForm.phoneLabel")}</label>
					<input
						type="phone"
						value={phoneValue}
						id="phone"
						placeholder={t("requestForm.phonePlaceholder")}
						onChange={(e) => setPhoneValue(e.target.value)}
					/>
				</div>
				<div className="question-container">
					<label>{t("requestForm.optionsLabel")}</label>
					<textarea
						value={questionValue}
						placeholder={t("requestForm.optionsPlaceholder")}
						onChange={(e) => setQuestionValue(e.target.value)}
						rows={4}
					/>
				</div>
				<Button
					type="orange"
					size="m"
					text={t("requestForm.submitText")}
					onClick={() => {}}
					width="400"
				/>
				<div className="close" onClick={close} />
			</div>
		</RequestFormContainer>
	);
};
