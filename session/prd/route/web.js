"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _studentController = _interopRequireDefault(require("../studentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/getsessioninfo', _studentController["default"].get_session_info);
router.get('/deletesession', _studentController["default"].delete_session);
router.get('/regeneratesession', _studentController["default"].regn_session);
router.get('/sessionexample', _studentController["default"].session_example);
router.get('/getsessiondata', _studentController["default"].get_session_data);
var _default = router;
exports["default"] = _default;