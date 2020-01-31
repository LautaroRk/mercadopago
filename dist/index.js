"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _http = _interopRequireDefault(require("http"));

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cluster = _interopRequireDefault(require("cluster"));

var _cors = _interopRequireDefault(require("cors"));

var _route = require("../app/route/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // create server

exports.app = app;
app.server = _http["default"].createServer(app); // logger

app.use((0, _morgan["default"])('tiny')); // parse application/json

app.use(_bodyParser["default"].json({
  limit: '2000kb'
}));
app.disable('x-powered-by');
app.use((0, _cors["default"])({
  origin: '*',
  // Be sure to switch to your production domain
  optionsSuccessStatus: 200
})); // routes

(0, _route.setRouter)(app); // start server

app.server.listen('8000', function () {
  console.log("Started server on => http://localhost:".concat(app.server.address().port, " for Process Id ").concat(process.pid));
}); // in case of an error

app.on('error', function (appErr, appCtx) {
  console.error('app error', appErr.stack);
  console.error('on url', appCtx.req.url);
  console.error('with headers', appCtx.req.headers);
});