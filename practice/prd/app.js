"use strict";

var _express = _interopRequireDefault(require("express"));

var _web = _interopRequireDefault(require("./routes/web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('path'),
    join = _require.join;

var app = (0, _express["default"])();
var PORT = 5000;
app.use('/', _web["default"]);
app.set('views', "./views");
app.set('view engine', 'ejs');
app.listen(PORT, function () {
  console.log("server is working at http://localhost:".concat(PORT));
});