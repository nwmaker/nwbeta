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

var _nwmaker = require('./nwmaker');

var _nwmaker2 = _interopRequireDefault(_nwmaker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hailinjiang/pd/nw/nwbeta/comps/layout.js';

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
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '1665771711',
    css: '.active.jsx-1665771711:after{color:#f00102;}.active.jsx-1665771711{color:#f01122;text-decoration:none;}.nav-link.jsx-1665771711{text-decoration:none;padding:10px;color:#888;}a.jsx-1665771711{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0IsQUFHMkIsQUFHQSxBQUlPLEFBS1QsWUFDZCxFQVpBLEFBR3VCLE9BSVIsYUFDRixDQUpiLFVBS0EiLCJmaWxlIjoiY29tcHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTlcgZnJvbSAnLi9ud21ha2VyJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnTldNYWtlciBMdGQuJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFjdGl2ZTphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2YwMDEwMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2YwMTEyMjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPScvJz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2hvbWUtbGluayc+SG9tZTwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9wcm9kdWN0cyc+XG4gICAgICAgICAgPGE+UHJvZHVjdHM8L2E+PC9MaW5rPiB7JyB8ICd9XG4gICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPScvYmxvZyc+XG4gICAgICAgICAgPGE+QmxvZzwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9jbHViJz5cbiAgICAgICAgICA8YT5DbHViPC9hPjwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICAgeyBjaGlsZHJlbiB9XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgeydDb3B5cmlnaHQgTldNYWtlciBMdGQuIDIwMTgnfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9zdGF0aWMvbncucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=comps/layout.js */'
  }), _react2.default.createElement(_Link2.default, { className: 'nav-link', activeClassName: 'active', href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711' + ' ' + 'home-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Home')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/products', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Products')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Blog')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/club', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'Club')))), children, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-219789319' + ' ' + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Copyright NWMaker Ltd. 2018', _react2.default.createElement(_style2.default, {
    styleId: '219789319',
    css: '.footer.jsx-219789319{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:30px;padding:25px;font-size:20px;text-align:center;background:url(\'../static/nw.png\') center no-repeat;background-color:transparent;background-size:12%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2tCLEFBR3dCLDBFQUNLLHFHQUNLLG1HQUNOLGlCQUNKLGFBQ0UsZUFDRyxrQkFDa0Msb0RBQ3ZCLDZCQUNULG9CQUN0QiIsImZpbGUiOiJjb21wcy9sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhaWxpbmppYW5nL3BkL253L253YmV0YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOVyBmcm9tICcuL253bWFrZXInXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdOV01ha2VyIEx0ZC4nIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAwMTAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAxMTIyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZS1saW5rJz5Ib21lPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL3Byb2R1Y3RzJz5cbiAgICAgICAgICA8YT5Qcm9kdWN0czwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgICA8YT5CbG9nPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL2NsdWInPlxuICAgICAgICAgIDxhPkNsdWI8L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICB7J0NvcHlyaWdodCBOV01ha2VyIEx0ZC4gMjAxOCd9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbTogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3N0YXRpYy9udy5wbmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTIlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=comps/layout.js */'
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsIk5XIiwiY2hpbGRyZW4iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU8sQUFBUSxBQUVmOzs7Ozs7OztrQkFBZSxnQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt3QkFBSCxBQUFhO01BQWIsQUFBYSxtQ0FBYixBQUFxQixpQkFBckI7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFTO0FBQVQ7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBTSxTQUFOLEFBQWM7Z0JBQWQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUpKLEFBQ0UsQUFHRSxBQUVGO0FBRkU7dUJBRUYsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7YUFBQTtTQUFBLEFBa0JFO0FBbEJGLHNCQWtCRSxBQUFDLGdDQUFLLFdBQU4sQUFBZ0IsWUFBVyxpQkFBM0IsQUFBMkMsVUFBUyxNQUFwRCxBQUF5RDtnQkFBekQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7d0NBQUEsQUFBYTs7Z0JBQWI7a0JBQUE7QUFBQTtBQUFBLEtBbkJKLEFBa0JFLEFBQ0UsVUFBMEMsS0FuQjlDLEFBb0JFLHVCQUFBLEFBQUMsZ0NBQUssaUJBQU4sQUFBc0IsVUFBUyxNQUEvQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBckJKLEFBb0JFLEFBQ0UsY0FBd0IsS0FyQjVCLEFBc0JFLHVCQUFBLEFBQUMsZ0NBQUssaUJBQU4sQUFBc0IsVUFBUyxNQUEvQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBdkJKLEFBc0JFLEFBQ0UsVUFBb0IsS0F2QnhCLEFBd0JFLHVCQUFBLEFBQUMsZ0NBQUssaUJBQU4sQUFBc0IsVUFBUyxNQUEvQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBaENSLEFBTUUsQUFDRSxBQXdCRSxBQUNFLEFBSUosWUFwQ0osQUFzQ0UsMEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt1Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBO2FBQUE7U0F4Q1MsQUFDYixBQXNDRSxBQUNFO0FBQUE7QUF4Q04iLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEifQ==