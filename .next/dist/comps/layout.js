'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _logo = require('./logo');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'NWMaker Ltd.' : _ref$title;
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('header', null, _react2.default.createElement('nav', {
    className: 'jsx-1146158592'
  }, _react2.default.createElement(_style2.default, {
    styleId: '1146158592',
    css: ['nav.jsx-1146158592{background-color:#eee;overflow:hidden;height:20px;}', '.active.jsx-1146158592:after{color:#f00102;}', '.active.jsx-1146158592{color:#f01122;text-decoration:none;}', '.nav-link.jsx-1146158592{text-decoration:none;padding:10px;color:#888;}', 'a.jsx-1146158592{color:black;}']
  }), _react2.default.createElement(_Link2.default, { className: 'nav-link', activeClassName: 'active', href: '/' }, _react2.default.createElement('a', {
    className: 'jsx-1146158592' + ' ' + 'home-link'
  }, 'Home')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/products' }, _react2.default.createElement('a', {
    className: 'jsx-1146158592'
  }, 'Products')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/blog' }, _react2.default.createElement('a', {
    className: 'jsx-1146158592'
  }, 'Blog')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/club' }, _react2.default.createElement('a', {
    className: 'jsx-1146158592'
  }, 'Club')))), children, _react2.default.createElement('footer', null, _react2.default.createElement('div', {
    className: 'jsx-2681378311' + ' ' + 'footer'
  }, _react2.default.createElement('div', {
    className: 'jsx-2681378311' + ' ' + 'footer-container'
  }, _react2.default.createElement('div', {
    className: 'jsx-2681378311' + ' ' + 'copyright'
  }, 'Copyright NWMaker Ltd. 2018'), _react2.default.createElement('a', { href: 'http://nwmaker.com', className: 'jsx-2681378311'
  }, _react2.default.createElement(_logo2.default, null))), _react2.default.createElement(_style2.default, {
    styleId: '2681378311',
    css: ['.footer.jsx-2681378311{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:30px;padding:25px;font-size:20px;text-align:center;}', '.footer-container.jsx-2681378311{-webkit-align-self:auto;-ms-flex-item-align:auto;align-self:auto;}']
  }))));
};