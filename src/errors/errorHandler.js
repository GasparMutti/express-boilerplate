import {ErrorHandler} from "../App.js";

function handler(error, req, res, next) {
  console.log(error);
  return res.send({error: error.message});
}

const errorHandler = new ErrorHandler(handler);

export default errorHandler.run.bind(errorHandler);
