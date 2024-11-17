import {RequestHandler} from "../App.js";

function handler(req, res, next) {
  return res.status(404).send("<h1>Page not found</h1>");
}

const notFoundHandler = new RequestHandler(handler);

export default notFoundHandler.run.bind(notFoundHandler);
