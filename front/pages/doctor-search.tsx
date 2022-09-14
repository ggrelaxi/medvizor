import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DoctorSearch } from "../components/pages/doctorSearch";

const DoctorSearchPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Doctor search page</title>
			</Head>
			<DoctorSearch />
		</>
	);
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});

export default DoctorSearchPage;
