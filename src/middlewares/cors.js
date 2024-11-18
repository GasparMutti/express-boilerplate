import {RequestHandler} from "../App.js";
import {config} from "../config/index.js";

function handler(req, res, next) {
  res.header("Access-Control-Allow-Origin", config.allowedOrigins);
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}

const loggerMiddleware = new RequestHandler(handler);

export default loggerMiddleware.run.bind(loggerMiddleware);
