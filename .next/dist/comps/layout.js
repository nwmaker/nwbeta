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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hailinjiang/pd/nw/nwbeta/comps/layout.js';
//import Link from 'next/link'

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'NWMaker Ltd.' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('nav', {
    className: 'jsx-1310140802',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '1310140802',
    css: '.active.jsx-1310140802:after{color:#f00102;}.active.jsx-1310140802{color:#f01122;text-decoration:none;}.nav-link.jsx-1310140802{text-decoration:none;padding:10px;color:#888;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0IsQUFHMkIsQUFHQSxBQUlPLGNBTnZCLEFBR3VCLE9BSVIsYUFDRixDQUpiLFVBS0EiLCJmaWxlIjoiY29tcHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHRpdGxlID0gJ05XTWFrZXIgTHRkLicgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnsgdGl0bGUgfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hY3RpdmU6YWZ0ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmMDAxMDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICNmMDExMjI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPScvJz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2hvbWUtbGluayc+SG9tZTwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9wcm9kdWN0cyc+XG4gICAgICAgICAgPGE+UHJvZHVjdHM8L2E+PC9MaW5rPiB7JyB8ICd9XG4gICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPScvYmxvZyc+XG4gICAgICAgICAgPGE+QmxvZzwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9jbHViJz5cbiAgICAgICAgICA8YT5DbHViPC9hPjwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgeyBjaGlsZHJlbiB9XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICB7J05XTWFrZXIgTHRkLiAyMDE4J31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=comps/layout.js */'
  }), _react2.default.createElement(_Link2.default, { className: 'nav-link', activeClassName: 'active', href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1310140802' + ' ' + 'home-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Home')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/products', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1310140802',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Products')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1310140802',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Blog')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/club', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1310140802',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Club')))), children, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-2833021001' + ' ' + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'NWMaker Ltd. 2018', _react2.default.createElement(_style2.default, {
    styleId: '2833021001',
    css: '.footer.jsx-2833021001{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:16px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR3dCLDBFQUNLLHFHQUNLLG1HQUNOLGlCQUNDLGtCQUNwQiIsImZpbGUiOiJjb21wcy9sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhaWxpbmppYW5nL3BkL253L253YmV0YSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnTldNYWtlciBMdGQuJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFjdGl2ZTphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2YwMDEwMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2YwMTEyMjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZS1saW5rJz5Ib21lPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL3Byb2R1Y3RzJz5cbiAgICAgICAgICA8YT5Qcm9kdWN0czwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgICA8YT5CbG9nPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL2NsdWInPlxuICAgICAgICAgIDxhPkNsdWI8L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgIHsnTldNYWtlciBMdGQuIDIwMTgnfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=comps/layout.js */'
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsImNoaWxkcmVuIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFFUDs7Ozs7OztBQUpBOztrQkFJZSxnQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt3QkFBSCxBQUFhO01BQWIsQUFBYSxtQ0FBYixBQUFxQixpQkFBckI7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFTO0FBQVQ7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBTSxTQUFOLEFBQWM7Z0JBQWQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUpKLEFBQ0UsQUFHRSxBQUVGO0FBRkU7dUJBRUYsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7YUFBQTtTQUFBLEFBZUU7QUFmRixzQkFlRSxBQUFDLGdDQUFLLFdBQU4sQUFBZ0IsWUFBVyxpQkFBM0IsQUFBMkMsVUFBUyxNQUFwRCxBQUF5RDtnQkFBekQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7d0NBQUEsQUFBYTs7Z0JBQWI7a0JBQUE7QUFBQTtBQUFBLEtBaEJKLEFBZUUsQUFDRSxVQUEwQyxLQWhCOUMsQUFpQkUsdUJBQUEsQUFBQyxnQ0FBSyxpQkFBTixBQUFzQixVQUFTLE1BQS9CLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FsQkosQUFpQkUsQUFDRSxjQUF3QixLQWxCNUIsQUFtQkUsdUJBQUEsQUFBQyxnQ0FBSyxpQkFBTixBQUFzQixVQUFTLE1BQS9CLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FwQkosQUFtQkUsQUFDRSxVQUFvQixLQXBCeEIsQUFxQkUsdUJBQUEsQUFBQyxnQ0FBSyxpQkFBTixBQUFzQixVQUFTLE1BQS9CLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0E3QlIsQUFNRSxBQUNFLEFBcUJFLEFBQ0UsQUFJSixZQWpDSixBQW1DRSwwQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0M7QUFERDtBQUFBLEtBQUE7YUFBQTtTQXJDUyxBQUNiLEFBbUNFLEFBQ0U7QUFBQTtBQXJDTiIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhaWxpbmppYW5nL3BkL253L253YmV0YSJ9