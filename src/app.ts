import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import routes from "@routes";
import { requestHandler } from "@middlewares";

const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(requestHandler);

export default app;
