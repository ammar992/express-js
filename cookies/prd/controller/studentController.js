"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StudentController = /*#__PURE__*/_createClass(function StudentController() {
  _classCallCheck(this, StudentController);
});

_defineProperty(StudentController, "set_cookie", function (req, res) {
  res.cookie('username', 'Ammar', {
    maxAge: 10000
  });
  res.send("Cookie set...");
});

_defineProperty(StudentController, "get_cookie", function (req, res) {
  res.send("Cookie get...");
  console.log(req.cookies);
});

_defineProperty(StudentController, "delete_cookie", function (req, res) {
  res.clearCookie('username');
  res.send("Cookie deleted...");
});

var _default = StudentController;
exports["default"] = _default;