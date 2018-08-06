webpackHotUpdate(0,{

/***/ 7:
/*!**************************************!*\
  !*** ./src/screens/section/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(log) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 11);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import { Provider } from 'react-redux';\n// import { createStore } from 'redux';\n//\n// import App from './App.jsx';\n//\n// import configurateReducers from './configurate-reducers/index';\n// import homeAppRequest from './request/homeAppRequest';\n//\n// import TextCreator from '../../libs/text-creator/TextCreator.js';\n// import LocalStorageWorker from '../../libs/local-storage-worker/LocalStorageWorker.js';\n\nvar TestComponent = function (_React$Component) {\n    _inherits(TestComponent, _React$Component);\n\n    function TestComponent(props) {\n        _classCallCheck(this, TestComponent);\n\n        var _this = _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).call(this, props));\n\n        _this.state = {\n            value: 'Section'\n        };\n\n        _this.changeValue = _this.changeValue.bind(_this);\n\n        window.changeCurrentApp('section', [{\n            name: 'onSearch',\n            action: _this.changeValue\n        }]);\n        return _this;\n    }\n\n    _createClass(TestComponent, [{\n        key: 'changeValue',\n        value: function changeValue(value) {\n            log.warn('SECTION SEARCH', value);\n            this.setState({ value: value });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.state.value\n            );\n        }\n    }]);\n\n    return TestComponent;\n}(_react2.default.Component);\n\nvar loadSectionApp = function loadSectionApp() {\n\n    // const homeAppPromise = homeAppRequest();\n\n    // homeAppPromise.then(\n    //     (homeAppParams) => {\n\n    // new LocalStorageWorker();\n    // new TextCreator(homeAppParams.language);\n    //\n    // homeAppParams.text = {\n    //     homeAppText: TextCreator.createHomeAppText(),\n    //     headerText: TextCreator.createHeaderText(),\n    //     footerText: TextCreator.createFooterText(),\n    //     sideBarText: {}\n    // };\n    //\n    // const reducer = configurateReducers(homeAppParams);\n    // const store = createStore(reducer);\n    //\n    // window.homeAppIsLoaded = true;\n\n    //<Provider store={store}>\n    //<App/>\n    //</Provider>,\n\n    log.warn('SECTION IS LOADED', 'what');\n\n    window.setNewLoadedApp('section');\n\n    _reactDom2.default.render(_react2.default.createElement(TestComponent, null), document.getElementById('section-app-container'));\n    // }\n    // );\n};\n\nloadSectionApp();\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./plugins/logger.js */ 8)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9zZWN0aW9uL2luZGV4LmpzP2E4YzAiXSwibmFtZXMiOlsiVGVzdENvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImNoYW5nZVZhbHVlIiwiYmluZCIsIndpbmRvdyIsImNoYW5nZUN1cnJlbnRBcHAiLCJuYW1lIiwiYWN0aW9uIiwibG9nIiwid2FybiIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJsb2FkU2VjdGlvbkFwcCIsInNldE5ld0xvYWRlZEFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxhOzs7QUFFRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTztBQURFLFNBQWI7O0FBSUEsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjs7QUFFQUMsZUFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsQ0FDL0I7QUFDSUMsa0JBQU0sVUFEVjtBQUVJQyxvQkFBUSxNQUFLTDtBQUZqQixTQUQrQixDQUFuQztBQVJlO0FBY2xCOzs7O29DQUVXRCxLLEVBQU87QUFDZk8sZ0JBQUlDLElBQUosQ0FBUyxnQkFBVCxFQUEyQlIsS0FBM0I7QUFDQSxpQkFBS1MsUUFBTCxDQUFjLEVBQUVULFlBQUYsRUFBZDtBQUNIOzs7aUNBRVE7O0FBRUwsbUJBQU87QUFBQTtBQUFBO0FBQU0scUJBQUtELEtBQUwsQ0FBV0M7QUFBakIsYUFBUDtBQUNIOzs7O0VBMUJ1QlUsZ0JBQU1DLFM7O0FBNkJsQyxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07O0FBRXpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFMLFFBQUlDLElBQUosQ0FBUyxtQkFBVCxFQUE4QixNQUE5Qjs7QUFFQUwsV0FBT1UsZUFBUCxDQUF1QixTQUF2Qjs7QUFFQUMsdUJBQVNDLE1BQVQsQ0FDSSw4QkFBQyxhQUFELE9BREosRUFFSUMsU0FBU0MsY0FBVCxDQUF3Qix1QkFBeEIsQ0FGSjtBQUlBO0FBQ0E7QUFDSCxDQXBDRDs7QUFzQ0FMLGlCIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuLy9cclxuLy8gaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnO1xyXG4vL1xyXG4vLyBpbXBvcnQgY29uZmlndXJhdGVSZWR1Y2VycyBmcm9tICcuL2NvbmZpZ3VyYXRlLXJlZHVjZXJzL2luZGV4JztcclxuLy8gaW1wb3J0IGhvbWVBcHBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC9ob21lQXBwUmVxdWVzdCc7XHJcbi8vXHJcbi8vIGltcG9ydCBUZXh0Q3JlYXRvciBmcm9tICcuLi8uLi9saWJzL3RleHQtY3JlYXRvci9UZXh0Q3JlYXRvci5qcyc7XHJcbi8vIGltcG9ydCBMb2NhbFN0b3JhZ2VXb3JrZXIgZnJvbSAnLi4vLi4vbGlicy9sb2NhbC1zdG9yYWdlLXdvcmtlci9Mb2NhbFN0b3JhZ2VXb3JrZXIuanMnO1xyXG5cclxuY2xhc3MgVGVzdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICdTZWN0aW9uJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUgPSB0aGlzLmNoYW5nZVZhbHVlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5jaGFuZ2VDdXJyZW50QXBwKCdzZWN0aW9uJywgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25TZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmNoYW5nZVZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGxvZy53YXJuKCdTRUNUSU9OIFNFQVJDSCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj57dGhpcy5zdGF0ZS52YWx1ZX08L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRTZWN0aW9uQXBwID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGhvbWVBcHBQcm9taXNlID0gaG9tZUFwcFJlcXVlc3QoKTtcclxuXHJcbiAgICAvLyBob21lQXBwUHJvbWlzZS50aGVuKFxyXG4gICAgLy8gICAgIChob21lQXBwUGFyYW1zKSA9PiB7XHJcblxyXG4gICAgLy8gbmV3IExvY2FsU3RvcmFnZVdvcmtlcigpO1xyXG4gICAgLy8gbmV3IFRleHRDcmVhdG9yKGhvbWVBcHBQYXJhbXMubGFuZ3VhZ2UpO1xyXG4gICAgLy9cclxuICAgIC8vIGhvbWVBcHBQYXJhbXMudGV4dCA9IHtcclxuICAgIC8vICAgICBob21lQXBwVGV4dDogVGV4dENyZWF0b3IuY3JlYXRlSG9tZUFwcFRleHQoKSxcclxuICAgIC8vICAgICBoZWFkZXJUZXh0OiBUZXh0Q3JlYXRvci5jcmVhdGVIZWFkZXJUZXh0KCksXHJcbiAgICAvLyAgICAgZm9vdGVyVGV4dDogVGV4dENyZWF0b3IuY3JlYXRlRm9vdGVyVGV4dCgpLFxyXG4gICAgLy8gICAgIHNpZGVCYXJUZXh0OiB7fVxyXG4gICAgLy8gfTtcclxuICAgIC8vXHJcbiAgICAvLyBjb25zdCByZWR1Y2VyID0gY29uZmlndXJhdGVSZWR1Y2Vycyhob21lQXBwUGFyYW1zKTtcclxuICAgIC8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcbiAgICAvL1xyXG4gICAgLy8gd2luZG93LmhvbWVBcHBJc0xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgLy88UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIC8vPEFwcC8+XHJcbiAgICAvLzwvUHJvdmlkZXI+LFxyXG5cclxuICAgIGxvZy53YXJuKCdTRUNUSU9OIElTIExPQURFRCcsICd3aGF0Jyk7XHJcblxyXG4gICAgd2luZG93LnNldE5ld0xvYWRlZEFwcCgnc2VjdGlvbicpO1xyXG5cclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8VGVzdENvbXBvbmVudC8+LFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLWFwcC1jb250YWluZXInKVxyXG4gICAgKTtcclxuICAgIC8vIH1cclxuICAgIC8vICk7XHJcbn07XHJcblxyXG5sb2FkU2VjdGlvbkFwcCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyZWVucy9zZWN0aW9uL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })

})