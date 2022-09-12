"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _studentController = _interopRequireDefault(require("../controller/studentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/setcookie', _studentController["default"].set_cookie);
router.get('/getcookie', _studentController["default"].get_cookie);
router.get('/deletecookie', _studentController["default"].delete_cookie);
var _default = router;
exports["default"] = _default;