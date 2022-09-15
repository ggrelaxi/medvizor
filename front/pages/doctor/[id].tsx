import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Doctor } from "../../components/pages/doctor";
import { doctorServises } from "../../api/doctors-servises";
import { LocaleTypes } from "../../types/locale-types";
import { clinicServises } from "../../api/clinics-servises";

const DoctorPage: NextPage = (props: any) => {
	return (
		<>
			<Head>
				<title>Doctor</title>
			</Head>
			<Doctor doctor={props.doctor} />
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
	const doctor = await doctorServises.getSingleDoctor(locale, query.id);

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			doctor: doctor.data,
		},
	};
};

export default DoctorPage;
