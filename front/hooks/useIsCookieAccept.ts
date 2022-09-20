import { useState } from "react";

type ReturnType = [boolean, () => void];

export const useIsCookieAccept = (): ReturnType => {
	const [isCookieAccept, setIsCookieAccept] = useState(
		typeof window !== "undefined" &&
			window.localStorage.getItem("cookieAccept")
			? true
			: false
	);

	const acceptCookie = () => {
		setIsCookieAccept(true);
		if (typeof window !== "undefined") {
			window.localStorage.setItem("cookieAccept", "true");
			window.localStorage.setItem("ally-supports-cache", "");
		}
	};

	return [isCookieAccept, acceptCookie];
};
