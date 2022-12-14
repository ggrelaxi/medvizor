import { useTranslation, Trans } from "next-i18next";
import { CookieNoticeContainer } from "./cookie-notice.styles";
import { Button } from "../ui-kit/button";
import { useIsCookieAccept } from "../../hooks/useIsCookieAccept";
import Link from "next/link";

export const CookieNotice = ({ close }: any) => {
	const { t } = useTranslation();
	const [, AcceptCookie] = useIsCookieAccept();
	return (
		<CookieNoticeContainer>
			<div className="form-container">
				<div className="text">
					{t("cookieForm.text")}&nbsp;
					<Link href="/files/Medvisor-Confidentiality-Agreement.docx">
						<a className="privacy-link">{t("cookieForm.privacy")}</a>
					</Link>
				</div>
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
