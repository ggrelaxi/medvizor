import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Registration } from "../components/pages/registration";

const RegistrationPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Registration at Medvisor</title>
			</Head>
			<Registration />
		</>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default RegistrationPage;
