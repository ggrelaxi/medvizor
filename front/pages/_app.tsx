import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Header, Main, Footer } from "../layouts/index";
import { Layout } from "../layouts/index-styles";
import Router from "next/router";
import { useState, useEffect } from "react";
import { Loader } from "../components/loader";
import { useIsCookieAccept } from "../hooks/useIsCookieAccept";
import { CookieNotice } from "../components/cookieNotice";

function MyApp({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(false);
	const [isCookieAccept] = useIsCookieAccept();
	const [isCookieNoticeActive, setIsCookieNoticeActive] = useState(true);
	useEffect(() => {
		const start = () => {
			console.log("start");
			setLoading(true);
		};
		const end = () => {
			console.log("finished");
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Layout>
					<Header />
					<Main>
						<Component {...pageProps} />
					</Main>
					<Footer />
					{!isCookieAccept && isCookieNoticeActive && (
						<CookieNotice
							close={() => setIsCookieNoticeActive(false)}
						/>
					)}
				</Layout>
			)}
		</>
	);
}

export default appWithTranslation(MyApp);
