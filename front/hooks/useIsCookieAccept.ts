import Router from "next/router";
import { useState } from "react";

type ReturnType = [boolean, () => void];

export const useIsCookieAccept = (): ReturnType => {
	let cookieAccept;
	if (typeof window !== "undefined") {
		cookieAccept = window.localStorage.getItem("cookieAccept");
	}
	const [isCookieAccept, setIsCookieAccept] = useState(
		cookieAccept ? true : false
	);

	const acceptCookie = () => {
		setIsCookieAccept(true);
		window.localStorage.setItem("cookieAccept", "true");
		window.localStorage.setItem("ally-supports-cache", "");
		// Router.reload();
	};

	return [isCookieAccept, acceptCookie];
};
