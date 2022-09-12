"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _web = _interopRequireDefault(require("./routes/web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send("Server working seccussfully");
});
app.use('/', _web["default"]);
app.listen(PORT, function () {
  console.log("server is working at http://localhost:".concat(PORT));
});