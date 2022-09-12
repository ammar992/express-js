"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var studentController = /*#__PURE__*/_createClass(function studentController() {
  _classCallCheck(this, studentController);
});

_defineProperty(studentController, "get_session_info", function (req, res) {
  res.send("Session info....");
  console.log(req.session);
  console.log(req.session.id);
  console.log(req.session.cookie);
  console.log(req.session.cookie.maxAge);
  console.log(req.session.cookie.originalMaxAge);
});

_defineProperty(studentController, "delete_session", function (req, res) {
  req.session.destroy(function (req, res) {
    console.log("session deleted... Cannot Access Session ".concat(req.session.id));
  });
  res.send("Session deleted");
});

_defineProperty(studentController, "regn_session", function (req, res) {
  req.session.regenerate(function () {
    console.log("session regenerated....... new session id ".concat(req.session.id));
  });
  res.send("Session generated");
});

_defineProperty(studentController, "session_example", function (req, res) {
  req.session.device = "Mobile";

  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send("Count ".concat(req.session.count));
});

_defineProperty(studentController, "get_session_data", function (req, res) {
  if (req.session.device) {
    res.send("Device");
  } else {
    res.send("device not found");
  }
});

var _default = studentController;
exports["default"] = _default;