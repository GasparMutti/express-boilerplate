import {RequestHandler} from "../../App.js";
import Route from "../Route.js";

function getIndexController(req, res, next) {
  return res.send("<h1>Index</h1>");
}

const testMiddleware = new RequestHandler((req, res, next) => {
  console.log("Middleware test");
  next();
});

const testController = new RequestHandler((req, res, next) =>
  res.send("<h1>Server on</h1>")
);

const getIndex = new Route({
  method: "get",
  path: "/",
  controllers: [getIndexController],
});
const getTest = new Route({
  method: "get",
  path: "/test",
  controllers: [
    testMiddleware.run.bind(testMiddleware),
    testController.run.bind(testController),
  ],
});

const healtRoutes = [getIndex, getTest];

export default healtRoutes;
