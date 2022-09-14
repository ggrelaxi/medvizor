import axios from "axios";

export const apiClient = axios.create({
	baseURL: "http://localhost:4200/api",
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		Accept: "application/json",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Credentials": "true",
	},
});
