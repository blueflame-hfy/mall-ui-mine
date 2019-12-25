'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid yellow;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n'], ['\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid yellow;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject);

exports.default = Button;