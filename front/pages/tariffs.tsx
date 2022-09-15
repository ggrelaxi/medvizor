import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Tariffs } from "../components/pages/tariffs";

const TariffsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Medvizor tariffs list</title>
			</Head>
			<Tariffs />
		</>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default TariffsPage;
