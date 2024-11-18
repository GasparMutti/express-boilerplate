import cors from "./cors.js";
import logger from "./logger.js";
import {json} from "express";

const middlewares = [json(), logger, cors];

export default middlewares;
