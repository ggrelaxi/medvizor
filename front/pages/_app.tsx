import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Header, Main, Footer } from "../layouts/index";
import { Layout } from "../layouts/index-styles";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Header />
			<Main>
				<Component {...pageProps} />
			</Main>
			<Footer />
		</Layout>
	);
}

export default appWithTranslation(MyApp);
