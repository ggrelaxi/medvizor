import { useTranslation } from "next-i18next";
import { CookieNoticeContainer } from "./cookie-notice.styles";
import { Button } from "../ui-kit/button";
import { useIsCookieAccept } from "../../hooks/useIsCookieAccept";

export const CookieNotice = ({ close }) => {
	const { t } = useTranslation();
	const [, AcceptCookie] = useIsCookieAccept();
	return (
		<CookieNoticeContainer>
			<div className="form-container">
				<div className="text">{t("cookieForm.text")}</div>
				<Button
					type="orange"
					size="m"
					text={t("cookieForm.button")}
					onClick={() => {
						AcceptCookie();
						close(false);
					}}
					width="400"
				/>
			</div>
		</CookieNoticeContainer>
	);
};
