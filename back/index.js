import express from "express";
import serverRouters from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = process.env.PORT ?? 4200;
const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname, "static")));
app.use(serverRouters);

app.listen(PORT, () => {
	console.log(`server has been started at port ${PORT} ...`);
});
