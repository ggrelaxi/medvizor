import { useState } from "react";
import { useTranslation } from "next-i18next";
import { AskFormContainer } from "./ask-form.styles";
import { Button } from "../ui-kit/button";

interface IAskForm {
	close: () => void;
}

export const AskForm = ({ close }: IAskForm) => {
	const { t } = useTranslation();
	const [nameValue, setNameValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [questionValue, setQuestionValue] = useState("");

	return (
		<AskFormContainer>
			<div className="form-container">
				<h3>{t("askForm.header")}</h3>
				<div className="fio-container">
					<label htmlFor="name">{t("askForm.nameLabel")}</label>
					<input
						value={nameValue}
						placeholder={t("askForm.namePlaceholder")}
						type="text"
						id="name"
						onChange={(e) => setNameValue(e.target.value)}
					/>
				</div>
				<div className="phone-container">
					<label htmlFor="phone">{t("askForm.phoneLabel")}</label>
					<input
						type="phone"
						value={phoneValue}
						id="phone"
						placeholder={t("askForm.phonePlaceholder")}
						onChange={(e) => setPhoneValue(e.target.value)}
					/>
				</div>
				<div className="question-container">
					<label>{t("askForm.questionLabel")}</label>
					<textarea
						value={questionValue}
						placeholder={t("askForm.questionPlaceholder")}
						onChange={(e) => setQuestionValue(e.target.value)}
						rows={4}
					/>
				</div>
				<Button
					type="orange"
					size="m"
					text={t("askForm.submitText")}
					onClick={() => {}}
					width="400"
				/>
				<div className="close" onClick={close} />
			</div>
		</AskFormContainer>
	);
};
