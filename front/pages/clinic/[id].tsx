import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Clinic } from "../../components/pages/clinic";
import { clinicServises } from "../../api/clinics-servises";
import { LocaleTypes } from "../../types/locale-types";

const ClinicPage: NextPage = (props: any) => {
	return (
		<>
			<Head>
				<title>Home Page</title>
			</Head>
			<Clinic clinic={props.clinic} />
		</>
	);
};

export const getServerSideProps = async ({
	query,
	locale,
}: {
	locale: LocaleTypes;
	query: { [key: string]: string };
}) => {
	const clinic = await clinicServises.getSingleClinic(locale, query.id);

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			clinic: clinic.data,
		},
	};
};

export default ClinicPage;
