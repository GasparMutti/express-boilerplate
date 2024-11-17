import logMiddleware from "./logMiddleware.js";
import {json} from "express";

const middlewares = [json(), logMiddleware];

export default middlewares;
