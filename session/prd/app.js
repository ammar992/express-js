"use strict";

var _express = _interopRequireDefault(require("express"));

var _web = _interopRequireDefault(require("./route/web"));

var _expressSession = _interopRequireDefault(require("express-session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send("Server is working");
});
app.use((0, _expressSession["default"])({
  name: 'AmmarGreek',
  secret: '123456',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 200000
  }
}));
app.use('/', _web["default"]);
app.listen(PORT, function () {
  console.log("Server is working at http://localhost:".concat(PORT));
});