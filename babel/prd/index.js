"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.get('/', function (req, res) {
  res.send("Server is working ");
});
app.listen(PORT, function () {
  console.log("server is working at http://localhost:".concat(PORT));
});