import { RegistrationContainer } from "./registration.styles";
import { useTranslation, Trans } from "next-i18next";
import { useState } from "react";
import InputMask from "react-input-mask";
import { Button } from "../../../components/ui-kit/button";
import Router from "next/router";

export const Registration = () => {
	const {
		t,
		i18n: { language },
	} = useTranslation();
	const data = useTranslation();
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [passwordType, setPasswordType] = useState<"text" | "password">(
		"password"
	);
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [passwordConfirmationType, setPasswordConfirmationType] = useState<
		"text" | "password"
	>("password");
	const [isPasswordError, setIsPasswordError] = useState(false);
	const [isPhoneError, setIsPhoneError] = useState(false);

	const changePhoneHandler = (event: any) => {
		setPhone(event.target.value);
	};

	const changePasswordType = () => {
		if (passwordType === "text") setPasswordType("password");
		else setPasswordType("text");
	};

	const changePasswordConfirmationType = () => {
		if (passwordConfirmationType === "text")
			setPasswordConfirmationType("password");
		else setPasswordConfirmationType("text");
	};

	const signUpHandler = () => {
		if (
			password &&
			passwordConfirmation &&
			password !== passwordConfirmation
		) {
			setIsPasswordError(true);
		} else {
			setIsPasswordError(false);
		}
		if (!phone) {
			setIsPhoneError(true);
		} else {
			setIsPhoneError(false);
		}
		if (phone && !isPasswordError) {
			window.localStorage.setItem(
				"user",
				JSON.stringify({ name: phone, password })
			);
			Router.back();
		}
	};

	return (
		<RegistrationContainer>
			<h1>{t("registrationPage.header")}</h1>
			<div className="form-container">
				<div className="tel-container">
					<div className="phone-icon">
						+1
						<img
							src="/images/icons/usa-icon.svg"
							alt="usa number"
						/>
					</div>
					<div className="phone-data">
						<InputMask
							mask="99 99 9999"
							value={phone}
							onChange={changePhoneHandler}
							placeholder={t("registrationPage.phonePlaceholder")}
						/>
					</div>
				</div>
				<div
					className={`error-container-phone ${
						isPhoneError ? "display" : ""
					}`}
				>
					{t("registrationPage.phoneError")}
				</div>
				<div className="password-container">
					<div className="password-data">
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type={passwordType}
							placeholder={t(
								"registrationPage.passwordPlaceholder"
							)}
						/>
						{passwordType === "text" ? (
							<img
								onClick={changePasswordType}
								src="/images/icons/crossed-eye-icon.svg"
								alt="show password"
							/>
						) : (
							<img
								onClick={changePasswordType}
								src="/images/icons/eye-icon.svg"
								alt="show password"
							/>
						)}
					</div>
				</div>

				<div className="password-confirm-container">
					<div className="password-data">
						<input
							value={passwordConfirmation}
							onChange={(e) =>
								setPasswordConfirmation(e.target.value)
							}
							type={passwordConfirmationType}
							placeholder={t(
								"registrationPage.confirmationPlaceholder"
							)}
						/>
						{passwordConfirmationType === "text" ? (
							<img
								onClick={changePasswordConfirmationType}
								src="/images/icons/crossed-eye-icon.svg"
								alt="show password"
							/>
						) : (
							<img
								onClick={changePasswordConfirmationType}
								src="/images/icons/eye-icon.svg"
								alt="show password"
							/>
						)}
					</div>
				</div>
				<div
					className={`error-container-password ${
						isPasswordError ? "display" : ""
					}`}
				>
					{t("registrationPage.passwordError")}
				</div>
				<Button
					text={t("registrationPage.buttonText")}
					size="s"
					onClick={signUpHandler}
					type="gray"
					width="500"
				/>
				<div className="description-container">
					<Trans
						i18nKey={`registrationPage.description`}
						components={{ span: <span /> }}
					/>
				</div>
			</div>
		</RegistrationContainer>
	);
};
