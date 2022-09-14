import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Main } from "../components/pages/main";

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home Page</title>
			</Head>
			<Main />
		</>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default HomePage;
