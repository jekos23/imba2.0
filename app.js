const http = require("http");
const defaultRouteController = require("./AppModules/controllers/main");
const gameRouteController = require("./AppModules/controllers/game");
const voteRouteController = require("./AppModules/controllers/vote");
const staticFile = require("../imba/AppModules/http-utils/static-file");
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.statusCode = 200;
      staticFile(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.lsten(3005);
