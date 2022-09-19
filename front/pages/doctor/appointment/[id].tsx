import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DoctorAppointment } from "../../../components/pages/doctorAppointment";
import { doctorServises } from "../../../api/doctors-servises";
import { LocaleTypes } from "../../../types/locale-types";

const DoctorAppointmentPage: NextPage = (props: any) => {
	return (
		<>
			<Head>
				<title>Doctor Appointment</title>
			</Head>
			<DoctorAppointment doctor={props.doctor} />
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

export default DoctorAppointmentPage;
