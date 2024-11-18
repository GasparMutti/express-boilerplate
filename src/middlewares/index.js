import logger from "./logger.js";
import {json} from "express";

const middlewares = [json(), logger];

export default middlewares;
