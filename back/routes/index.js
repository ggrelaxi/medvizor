import { Router } from "express";
import { getSingleDoctor } from "../controllers/doctors/index.js";
import { getInsurance } from "../controllers/filters/index.js";
import {
	getSpeciality,
	getDeseases,
	getFullDeseases,
	getClinics,
	getSingleClinic,
	getDoctors,
} from "../controllers/index.js";

const router = Router();

// filters

router.post("/api/filters/speciality", getSpeciality);

router.post("/api/filters/deseases", getDeseases);

router.post("/api/filters/full-deseases", getFullDeseases);

router.post("/api/filters/insurance", getInsurance);

// clinic

router.post("/api/clinics/list", getClinics);

router.post("/api/clinics/get-single-clinic", getSingleClinic);

// doctors

router.post("/api/doctors/list", getDoctors);

router.post("/api/doctors/get-single-doctor", getSingleDoctor);

export default router;
