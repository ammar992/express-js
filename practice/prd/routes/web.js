"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _studentController = _interopRequireDefault(require("../controller/studentController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require('express');
// const studentController = require('../controller/studentController')
var router = _express["default"].Router();

router.get('/', _studentController["default"]);
var _default = router;
exports["default"] = _default;