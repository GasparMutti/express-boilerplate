export default class App {
  constructor({
    app,
    router,
    middlewares,
    routes,
    notFoundHandler,
    errorHandler,
  }) {
    this.setApp(app);
    this.setRouter(router);
    this.setMiddlewares(middlewares);
    this.setRoutes(routes);
    this.setNotFoundHandler(notFoundHandler);
    this.setErrorHandler(errorHandler);
  }

  getApp() {
    return this.app;
  }

  setApp(app) {
    this.app = app;
  }

  getRouter() {
    return this.router;
  }

  setRouter(router) {
    this.router = router;
  }

  getMiddlewares() {
    return this.middlewares;
  }

  setMiddlewares(middlewares) {
    this.middlewares = middlewares;
    for (const middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  getRoutes() {
    return this.routes;
  }

  setRoutes(routes) {
    this.routes = routes;
    for (const route of this.routes) {
      const method = route.getMethod();
      const path = route.getPath();
      const controllers = route.getControllers();
      this.router[method](path, ...controllers);
    }
    this.app.use(this.router);
  }

  getNotFoundHandler() {
    return this.notFoundHandler;
  }

  setNotFoundHandler(notFoundHandler) {
    this.notFoundHandler = notFoundHandler;
    this.app.use(notFoundHandler);
  }

  getErrorHandler() {
    return this.errorHandler;
  }

  setErrorHandler(errorHandler) {
    this.errorHandler = errorHandler;
    this.app.use(errorHandler);
  }
}

export class RequestHandler {
  constructor(handler) {
    this.handler = handler;
  }

  async run(req, res, next) {
    await this.handler(req, res, next);
  }
}

export class ErrorHandler extends RequestHandler {
  constructor(handler) {
    super(handler);
  }

  async run(err, req, res, next) {
    await this.handler(err, req, res, next);
  }
}
