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
    css: '.active.jsx-1665771711:after{color:#f00102;}.active.jsx-1665771711{color:#f01122;text-decoration:none;}.nav-link.jsx-1665771711{text-decoration:none;padding:10px;color:#888;}a.jsx-1665771711{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0IsQUFHMkIsQUFHQSxBQUlPLEFBS1QsWUFDZCxFQVpBLEFBR3VCLE9BSVIsYUFDRixDQUpiLFVBS0EiLCJmaWxlIjoiY29tcHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdOV01ha2VyIEx0ZC4nIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAwMTAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAxMTIyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZS1saW5rJz5Ib21lPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL3Byb2R1Y3RzJz5cbiAgICAgICAgICA8YT5Qcm9kdWN0czwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgICA8YT5CbG9nPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL2NsdWInPlxuICAgICAgICAgIDxhPkNsdWI8L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlci1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3B5cmlnaHQnPlxuICAgICAgICAgICAgeydDb3B5cmlnaHQgTldNYWtlciBMdGQuIDIwMTgnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly9ud21ha2VyLmNvbSc+PExvZ28gLz48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1jb250YWluZXIge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=comps/layout.js */'
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
    className: 'jsx-2681378311' + ' ' + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-2681378311' + ' ' + 'footer-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-2681378311' + ' ' + 'copyright',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'Copyright NWMaker Ltd. 2018'), _react2.default.createElement('a', { href: 'http://nwmaker.com', className: 'jsx-2681378311',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: '2681378311',
    css: '.footer.jsx-2681378311{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:30px;padding:25px;font-size:20px;text-align:center;}.footer-container.jsx-2681378311{-webkit-align-self:auto;-ms-flex-item-align:auto;align-self:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR3dCLEFBU0csaUVBQ2xCLFNBVG9CLHFHQUNLLG1HQUNOLGlCQUNKLGFBQ0UsZUFDRyxrQkFDcEIiLCJmaWxlIjoiY29tcHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdOV01ha2VyIEx0ZC4nIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAwMTAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAxMTIyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZS1saW5rJz5Ib21lPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL3Byb2R1Y3RzJz5cbiAgICAgICAgICA8YT5Qcm9kdWN0czwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgICA8YT5CbG9nPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL2NsdWInPlxuICAgICAgICAgIDxhPkNsdWI8L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlci1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3B5cmlnaHQnPlxuICAgICAgICAgICAgeydDb3B5cmlnaHQgTldNYWtlciBMdGQuIDIwMTgnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly9ud21ha2VyLmNvbSc+PExvZ28gLz48L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1jb250YWluZXIge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=comps/layout.js */'
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsIkxvZ28iLCJjaGlsZHJlbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVLEFBRWpCOzs7Ozs7OztrQkFBZSxnQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt3QkFBSCxBQUFhO01BQWIsQUFBYSxtQ0FBYixBQUFxQixpQkFBckI7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFTO0FBQVQ7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBTSxTQUFOLEFBQWM7Z0JBQWQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUpKLEFBQ0UsQUFHRSxBQUVGO0FBRkU7dUJBRUYsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUE7YUFBQTtTQUFBLEFBa0JFO0FBbEJGLHNCQWtCRSxBQUFDLGdDQUFLLFdBQU4sQUFBZ0IsWUFBVyxpQkFBM0IsQUFBMkMsVUFBUyxNQUFwRCxBQUF5RDtnQkFBekQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7d0NBQUEsQUFBYTs7Z0JBQWI7a0JBQUE7QUFBQTtBQUFBLEtBbkJKLEFBa0JFLEFBQ0UsVUFBMEMsS0FuQjlDLEFBb0JFLHVCQUFBLEFBQUMsZ0NBQUssaUJBQU4sQUFBc0IsVUFBUyxNQUEvQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBckJKLEFBb0JFLEFBQ0UsY0FBd0IsS0FyQjVCLEFBc0JFLHVCQUFBLEFBQUMsZ0NBQUssaUJBQU4sQUFBc0IsVUFBUyxNQUEvQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBdkJKLEFBc0JFLEFBQ0UsVUFBb0IsS0F2QnhCLEFBd0JFLHVCQUFBLEFBQUMsZ0NBQUssaUJBQU4sQUFBc0IsVUFBUyxNQUEvQixBQUFvQztnQkFBcEM7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBaENSLEFBTUUsQUFDRSxBQXdCRSxBQUNFLEFBSUosWUFwQ0osQUFzQ0UsMEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRztBQURIO0FBQUEsS0FERixBQUNFLEFBR0EsZ0RBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUSxpQ0FBUjs7Z0JBQUE7a0JBQUEsQUFBNkI7QUFBN0I7cUJBQTZCLEFBQUM7O2dCQUFEO2tCQUxqQyxBQUNFLEFBSUUsQUFBNkI7QUFBQTtBQUFBO2FBTGpDO1NBeENTLEFBQ2IsQUFzQ0UsQUFDRTtBQUFBO0FBeENOIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFpbGluamlhbmcvcGQvbncvbndiZXRhIn0=