import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ClinicSearch } from "../components/pages/clinicSearch";

const ClinicSearchPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Clinic search page</title>
			</Head>
			<ClinicSearch />
		</>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default ClinicSearchPage;
