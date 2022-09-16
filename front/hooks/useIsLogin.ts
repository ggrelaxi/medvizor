import Router from "next/router";
import { useState } from "react";

export const useIsLogin = () => {
	let user;
	if (typeof window !== "undefined") {
		user = window.localStorage.getItem("user");
	}
	const [isLogin, setIsLogin] = useState(user ? true : false);

	const logOut = () => {
		setIsLogin(false);
		window.localStorage.setItem("user", "");
		Router.push({ pathname: "/" });
	};

	return [isLogin, logOut];
};
