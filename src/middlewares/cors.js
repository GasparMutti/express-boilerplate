import {RequestHandler} from "../App.js";
import {config} from "../config/index.js";

function handler(req, res, next) {
  const origin = req.headers.origin;
  if (config.allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
}

const loggerMiddleware = new RequestHandler(handler);

export default loggerMiddleware.run.bind(loggerMiddleware);
