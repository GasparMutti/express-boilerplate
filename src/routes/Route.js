export default class Route {
  constructor({method, path, controllers}) {
    this.setMethod(method);
    this.setPath(path);
    this.setControllers(controllers);
  }

  getMethod() {
    return this.method;
  }

  setMethod(method) {
    this.method = method;
  }

  getPath() {
    return this.path;
  }

  setPath(path) {
    this.path = path;
  }

  getControllers() {
    return this.controllers;
  }

  setControllers(controllers) {
    this.controllers = controllers;
  }
}
