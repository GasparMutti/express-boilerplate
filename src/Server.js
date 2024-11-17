const green = "\x1b[32m";
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const reset = "\x1b[0m";
const methodsColorMap = {
  get: green,
  post: yellow,
  put: yellow,
  delete: red,
};

export default class Server {
  constructor({app, port}) {
    this.app = app;
    this.port = port;
  }

  start() {
    this.httpServer = this.app
      .getApp()
      .listen(this.port, this.logServerStarted());
  }

  stop() {
    if (!this.httpServer) return console.log(`The server is ${red}off${reset}`);
    this.httpServer.close(this.logServerStopped);
  }

  logServerStarted() {
    const routes = this.app.getRoutes();
    console.log(
      `Server started on ${green}http://localhost:${this.port}/${reset}`
    );
    for (const {method, path} of routes) {
      console.log(
        `Server listen ${methodsColorMap[method] + method + reset} methods on ${
          yellow + path + reset
        }`
      );
    }
  }

  logServerStopped() {
    console.log(
      `The server on ${green}http://localhost:${this.port}${reset} was ${red}stopped${reset} successfully.`
    );
  }
}
