'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _gtag = require('../lib/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hailinjiang/pd/nw/nwbeta/pages/_document.js?entry';


var _class = function (_Document) {
  (0, _inherits3.default)(_class, _Document);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('script', {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=' + _gtag.GA_TRACKING_ID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: '\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag(\'js\', new Date());\n            gtag(\'config\', \'' + _gtag.GA_TRACKING_ID + '\');\n          ' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return _class;
}(_document2.default);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiZmx1c2giLCJHQV9UUkFDS0lOR19JRCIsIl9faHRtbCIsInJlbmRlclBhZ2UiLCJodG1sIiwiaGVhZCIsImVycm9ySHRtbCIsImNodW5rcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFPOzs7O0FBRVAsQUFBUyxBQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVNuQixBQUNSOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFFRTtBQUZGO0FBQUE7ZUFFRSxBQUVFO2FBRkYsQUFFc0Q7O29CQUZ0RDtzQkFGRixBQUVFLEFBSUE7QUFKQTtBQUNFO2lDQUl5QixBQUN2QjtrQkFBQSxBQUlnQixxTkFOcEIsQUFDMkI7O29CQUQzQjtzQkFQSixBQUNFLEFBTUUsQUFVRjtBQVZFO0FBQ0UsMkJBU0osY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFwQk4sQUFDRSxBQWlCRSxBQUVFLEFBSVA7QUFKTztBQUFBOzs7OzBDQTNCZ0M7VUFBZCxBQUFjLGtCQUFkLEFBQWM7O3dCQUFBLEFBQ0k7VUFESixBQUM5QixtQkFEOEIsQUFDOUI7VUFEOEIsQUFDeEIsbUJBRHdCLEFBQ3hCO1VBRHdCLEFBQ2xCLHdCQURrQixBQUNsQjtVQURrQixBQUNQLHFCQURPLEFBQ1AsQUFDL0I7O1VBQU0sU0FBTixBQUFlLEFBQ2Y7YUFBTyxFQUFFLE1BQUYsTUFBUSxNQUFSLE1BQWMsV0FBZCxXQUF5QixRQUF6QixRQUFpQyxRQUF4QyxBQUFPLEFBQ1I7Ozs7O0FBTDBCLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEifQ==