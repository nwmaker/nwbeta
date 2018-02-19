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
//import NW from './nwmaker'

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'NWMaker Ltd.' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('nav', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: '1665771711',
    css: '.active.jsx-1665771711:after{color:#f00102;}.active.jsx-1665771711{color:#f01122;text-decoration:none;}.nav-link.jsx-1665771711{text-decoration:none;padding:10px;color:#888;}a.jsx-1665771711{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFHMkIsQUFHQSxBQUlPLEFBS1QsWUFDZCxFQVpBLEFBR3VCLE9BSVIsYUFDRixDQUpiLFVBS0EiLCJmaWxlIjoiY29tcHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vL2ltcG9ydCBOVyBmcm9tICcuL253bWFrZXInXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdOV01ha2VyIEx0ZC4nIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAwMTAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAxMTIyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZS1saW5rJz5Ib21lPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL3Byb2R1Y3RzJz5cbiAgICAgICAgICA8YT5Qcm9kdWN0czwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgICA8YT5CbG9nPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL2NsdWInPlxuICAgICAgICAgIDxhPkNsdWI8L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICA8TG9nbyAvPlxuICAgICAgIHsnQ29weXJpZ2h0IE5XTWFrZXIgTHRkLiAyMDE4J31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=comps/layout.js */'
  }), _react2.default.createElement(_Link2.default, { className: 'nav-link', activeClassName: 'active', href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711' + ' ' + 'home-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Home')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/products', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Products')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Blog')), ' ', ' | ', _react2.default.createElement(_Link2.default, { activeClassName: 'active', href: '/club', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', {
    className: 'jsx-1665771711',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'Club')))), children, _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('div', {
    className: 'jsx-3057857540' + ' ' + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), 'Copyright NWMaker Ltd. 2018', _react2.default.createElement(_style2.default, {
    styleId: '3057857540',
    css: '.footer.jsx-3057857540{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:30px;padding:25px;font-size:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGtCLEFBR3dCLDBFQUNLLHFHQUNLLG1HQUNOLGlCQUNKLGFBQ0UsZUFDRyxrQkFDcEIiLCJmaWxlIjoiY29tcHMvbGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYWlsaW5qaWFuZy9wZC9udy9ud2JldGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vL2ltcG9ydCBOVyBmcm9tICcuL253bWFrZXInXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdOV01ha2VyIEx0ZC4nIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAwMTAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjAxMTIyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naG9tZS1saW5rJz5Ib21lPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL3Byb2R1Y3RzJz5cbiAgICAgICAgICA8YT5Qcm9kdWN0czwvYT48L0xpbms+IHsnIHwgJ31cbiAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgICA8YT5CbG9nPC9hPjwvTGluaz4geycgfCAnfVxuICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj0nL2NsdWInPlxuICAgICAgICAgIDxhPkNsdWI8L2E+PC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICA8TG9nbyAvPlxuICAgICAgIHsnQ29weXJpZ2h0IE5XTWFrZXIgTHRkLiAyMDE4J31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=comps/layout.js */'
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZCIsIkxvZ28iLCJjaGlsZHJlbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBRVAsQUFBTyxBQUFVLEFBRWpCOzs7Ozs7O0FBSEE7O2tCQUdlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3dCQUFILEFBQWE7TUFBYixBQUFhLG1DQUFiLEFBQXFCLGlCQUFyQjt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQVM7QUFBVDtBQUFBLEtBREYsQUFDRSxBQUNBLGdEQUFNLFNBQU4sQUFBYztnQkFBZDtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBSkosQUFDRSxBQUdFLEFBRUY7QUFGRTt1QkFFRixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQTthQUFBO1NBQUEsQUFrQkU7QUFsQkYsc0JBa0JFLEFBQUMsZ0NBQUssV0FBTixBQUFnQixZQUFXLGlCQUEzQixBQUEyQyxVQUFTLE1BQXBELEFBQXlEO2dCQUF6RDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTt3Q0FBQSxBQUFhOztnQkFBYjtrQkFBQTtBQUFBO0FBQUEsS0FuQkosQUFrQkUsQUFDRSxVQUEwQyxLQW5COUMsQUFvQkUsdUJBQUEsQUFBQyxnQ0FBSyxpQkFBTixBQUFzQixVQUFTLE1BQS9CLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FyQkosQUFvQkUsQUFDRSxjQUF3QixLQXJCNUIsQUFzQkUsdUJBQUEsQUFBQyxnQ0FBSyxpQkFBTixBQUFzQixVQUFTLE1BQS9CLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0F2QkosQUFzQkUsQUFDRSxVQUFvQixLQXZCeEIsQUF3QkUsdUJBQUEsQUFBQyxnQ0FBSyxpQkFBTixBQUFzQixVQUFTLE1BQS9CLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FoQ1IsQUFNRSxBQUNFLEFBd0JFLEFBQ0UsQUFJSixZQXBDSixBQXNDRSwwQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0M7QUFERDtBQUFBLHFCQUNDLEFBQUM7O2dCQUFEO2tCQURELEFBQ0MsQUFDQztBQUREO0FBQUEsTUFERDthQUFBO1NBeENTLEFBQ2IsQUFzQ0UsQUFDRTtBQUFBO0FBeENOIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFpbGluamlhbmcvcGQvbncvbndiZXRhIn0=