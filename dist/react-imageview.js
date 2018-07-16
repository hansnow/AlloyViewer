module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SingleImgView = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _alloyfinger = __webpack_require__(9);

	var _alloyfinger2 = _interopRequireDefault(_alloyfinger);

	var _transform = __webpack_require__(10);

	var _transform2 = _interopRequireDefault(_transform);

	var _components = __webpack_require__(11);

	var _reactSingleton = __webpack_require__(12);

	var _reactSingleton2 = _interopRequireDefault(_reactSingleton);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**********************************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  This component is designed for Tribe Project in QQ mobile as a Imageviewer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  You can use it as a independent component in your App
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ examples  you can find examples in folder examples or README.md
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(array)       imagelist: The list of images to view
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(bool)        disablePinch: Disable pinch function
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(bool)        disableRotate: Disable rotate function
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(bool)        disableDoubleTap: Disable double tap function
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(function)    longTap: Events called after the long tap
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(function)    close: the function to close the viewer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Copyright by nemoliao( liaozksysu@gmail.com), nemo is a member of AlloyTeam in Tencent.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                **********************************************************************************************/


	var MARGIN = 30;

	var ImageView = function (_Component) {
	    _inherits(ImageView, _Component);

	    function ImageView(props) {
	        _classCallCheck(this, ImageView);

	        var _this = _possibleConstructorReturn(this, (ImageView.__proto__ || Object.getPrototypeOf(ImageView)).call(this));

	        _this.initScale = 1;
	        _this.screenWidth = window.innerWidth || window.screen.availWidth;
	        _this.screenHeight = window.innerHeight || window.screen.availHeight;
	        _this.list = null;
	        _this.ob = null;
	        _this.focused = null;

	        _this.arrLength = props.imagelist.length;
	        _this.state = {
	            current: props.current
	        };
	        _this.onOrientationChange = _this.onOrientationChange.bind(_this);
	        return _this;
	    }

	    _createClass(ImageView, [{
	        key: 'onOrientationChange',
	        value: function onOrientationChange() {
	            var _this2 = this;

	            // 方向改变后新的innerHeight生效需要delay
	            setTimeout(function () {
	                _this2.screenWidth = window.innerWidth || window.screen.availWidth;
	                _this2.screenHeight = window.innerHeight || window.screen.availHeight;
	                _this2.changeIndex(_this2.state.current);
	            }, 100);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props = this.props,
	                desc = _props.desc,
	                disablePageNum = _props.disablePageNum,
	                children = _props.children,
	                gap = _props.gap;


	            return _react2.default.createElement(
	                'div',
	                { className: 'imageview' },
	                _react2.default.createElement(
	                    _alloyfinger2.default,
	                    {
	                        onSingleTap: this.onSingleTap.bind(this),
	                        onPressMove: this.onPressMove.bind(this),
	                        onSwipe: this.onSwipe.bind(this) },
	                    _react2.default.createElement(
	                        'ul',
	                        { ref: function ref(imagelist) {
	                                _this3.list = imagelist;
	                            }, className: 'imagelist' },
	                        this.props.imagelist.map(function (item, i) {
	                            return _react2.default.createElement(
	                                'li',
	                                { className: 'imagelist-item', style: { marginRight: gap + 'px' }, key: "img" + i },
	                                _react2.default.createElement(
	                                    _alloyfinger2.default,
	                                    {
	                                        onPressMove: _this3.onPicPressMove.bind(_this3),
	                                        onMultipointStart: _this3.onMultipointStart.bind(_this3),
	                                        onLongTap: _this3.onLongTap.bind(_this3),
	                                        onPinch: _this3.onPinch.bind(_this3),
	                                        onRotate: _this3.onRotate.bind(_this3),
	                                        onMultipointEnd: _this3.onMultipointEnd.bind(_this3),
	                                        onDoubleTap: _this3.onDoubleTap.bind(_this3) },
	                                    _react2.default.createElement(_components.CenterImage, { id: 'view' + i, className: 'imagelist-item-img', lazysrc: item, index: i, current: _this3.state.current })
	                                )
	                            );
	                        })
	                    )
	                ),
	                disablePageNum ? null : _react2.default.createElement(
	                    'div',
	                    { className: 'page', ref: 'page' },
	                    this.state.current + 1,
	                    ' / ',
	                    this.arrLength
	                ),
	                desc ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: desc } }) : null,
	                children
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var current = this.state.current,
	                _props2 = this.props,
	                imagelist = _props2.imagelist,
	                initCallback = _props2.initCallback;


	            this.arrLength = imagelist.length;

	            (0, _transform2.default)(this.list);

	            current && this.changeIndex(current, false);

	            this.bindStyle(current);

	            initCallback && initCallback();
	            window.addEventListener('orientationchange', this.onOrientationChange);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('orientationchange', this.onOrientationChange);
	        }
	    }, {
	        key: 'onSingleTap',
	        value: function onSingleTap() {
	            this.props.close && this.props.close();
	        }
	    }, {
	        key: 'onPressMove',
	        value: function onPressMove(evt) {
	            var current = this.state.current;


	            this.endAnimation();

	            if (!this.focused) {
	                if (current === 0 && evt.deltaX > 0 || current === this.arrLength - 1 && evt.deltaX < 0) {
	                    this.list.translateX += evt.deltaX / 3;
	                } else {
	                    this.list.translateX += evt.deltaX;
	                }
	            }

	            evt.preventDefault();
	        }
	    }, {
	        key: 'onSwipe',
	        value: function onSwipe(evt) {
	            var direction = evt.direction;
	            var current = this.state.current;

	            if (this.focused) {
	                return false;
	            }
	            switch (direction) {
	                case 'Left':
	                    current < this.arrLength - 1 && ++current && this.bindStyle(current);
	                    break;
	                case 'Right':
	                    current > 0 && current-- && this.bindStyle(current);
	                    break;
	            }
	            this.changeIndex(current);
	        }
	    }, {
	        key: 'onPicPressMove',
	        value: function onPicPressMove(evt) {
	            var deltaX = evt.deltaX,
	                deltaY = evt.deltaY,
	                isLongPic = this.ob.getAttribute('long'),
	                _ob = this.ob,
	                scaleX = _ob.scaleX,
	                width = _ob.width;


	            if (this.ob.scaleX <= 1 || evt.touches.length > 1) {
	                return;
	            }

	            if (this.ob && this.checkBoundary(deltaX, deltaY)) {
	                !isLongPic && (this.ob.translateX += deltaX);
	                this.ob.translateY += deltaY;

	                if (isLongPic && scaleX * width === this.screenWidth) {
	                    this.focused = false;
	                } else {
	                    this.focused = true;
	                }
	            } else {
	                this.focused = false;
	            }
	            // console.log('translate ',this.ob.translateX, this.ob.translateY);
	        }
	    }, {
	        key: 'onMultipointStart',
	        value: function onMultipointStart() {
	            this.initScale = this.ob.scaleX;
	        }
	    }, {
	        key: 'onPinch',
	        value: function onPinch(evt) {
	            if (this.props.disablePinch || this.ob.getAttribute('long')) {
	                return false;
	            }
	            this.ob.style.webkitTransition = 'cubic-bezier(.25,.01,.25,1)';

	            var _ob2 = this.ob,
	                originX = _ob2.originX,
	                originY = _ob2.originY,
	                originX2 = evt.center.x - this.screenWidth / 2 - document.body.scrollLeft,
	                originY2 = evt.center.y - this.screenHeight / 2 - document.body.scrollTop;


	            this.ob.originX = originX2;
	            this.ob.originY = originY2;
	            this.ob.translateX = this.ob.translateX + (originX2 - originX) * this.ob.scaleX;
	            this.ob.translateY = this.ob.translateY + (originY2 - originY) * this.ob.scaleY;

	            this.ob.scaleX = this.ob.scaleY = this.initScale * evt.scale;
	        }
	    }, {
	        key: 'onRotate',
	        value: function onRotate(evt) {
	            if (!this.props.enableRotate || this.ob.getAttribute('rate') >= 3.5) {
	                return false;
	            }

	            this.ob.style.webkitTransition = 'cubic-bezier(.25,.01,.25,1)';

	            this.ob.rotateZ += evt.angle;
	        }
	    }, {
	        key: 'onLongTap',
	        value: function onLongTap() {
	            this.props.longTap && this.props.longTap();
	        }
	    }, {
	        key: 'onMultipointEnd',
	        value: function onMultipointEnd(evt) {
	            // translate to normal
	            this.changeIndex(this.state.current);

	            if (!this.ob) {
	                return;
	            }

	            this.ob.style.webkitTransition = '300ms ease';

	            var maxScale = this.props.maxScale,
	                isLongPic = this.ob.getAttribute('long');
	            // scale to normal
	            if (this.ob.scaleX < 1) {
	                this.restore(false);
	            }
	            if (this.ob.scaleX > maxScale && !isLongPic) {
	                this.setScale(maxScale);
	            }

	            // rotate to normal
	            var rotation = this.ob.rotateZ % 360,
	                rate = this.ob.getAttribute('rate');

	            if (rotation < 0) {
	                rotation = 360 + rotation;
	            }
	            this.ob.rotateZ = rotation;

	            if (rotation > 0 && rotation < 45) {
	                this.ob.rotateZ = 0;
	            } else if (rotation >= 315) {
	                this.ob.rotateZ = 360;
	            } else if (rotation >= 45 && rotation < 135) {
	                this.ob.rotateZ = 90;
	                this.setScale(rate);
	            } else if (rotation >= 135 && rotation < 225) {
	                this.ob.rotateZ = 180;
	            } else if (rotation >= 225 && rotation < 315) {
	                this.ob.rotateZ = 270;
	                this.setScale(rate);
	            }
	        }
	    }, {
	        key: 'onDoubleTap',
	        value: function onDoubleTap(evt) {
	            if (this.props.disableDoubleTap) {
	                return false;
	            }

	            var origin = evt.origin,
	                originX = origin[0] - this.screenWidth / 2 - document.body.scrollLeft,
	                originY = origin[1] - this.screenHeight / 2 - document.body.scrollTop,
	                isLongPic = this.ob.getAttribute('long');


	            if (this.ob.scaleX === 1) {
	                !isLongPic && (this.ob.translateX = this.ob.originX = originX);
	                !isLongPic && (this.ob.translateY = this.ob.originY = originY);
	                this.setScale(isLongPic ? this.screenWidth / this.ob.width : this.props.maxScale);
	            } else {
	                this.ob.translateX = this.ob.originX;
	                this.ob.translateY = this.ob.originY;
	                this.setScale(1);
	            }

	            // console.log('origin',this.ob.originX, this.ob.originY);
	        }
	    }, {
	        key: 'bindStyle',
	        value: function bindStyle(current) {
	            var _this4 = this;

	            this.setState({ current: current }, function () {
	                _this4.ob && _this4.restore();
	                _this4.ob = document.getElementById('view' + current);
	                if (_this4.ob && !_this4.ob.scaleX) {
	                    (0, _transform2.default)(_this4.ob);
	                }
	                // ease hide page number
	                var page = _this4.refs.page;
	                if (page) {
	                    page.classList.remove('hide');
	                    setTimeout(function () {
	                        page.classList.add('hide');
	                    }, 2000);
	                }
	            });
	        }
	    }, {
	        key: 'changeIndex',
	        value: function changeIndex(current) {
	            var ease = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	            ease && (this.list.style.webkitTransition = '300ms ease');
	            this.list.translateX = -current * (this.screenWidth + this.props.gap);

	            this.props.changeIndex && this.props.changeIndex(current);
	        }
	    }, {
	        key: 'setScale',
	        value: function setScale(size) {
	            this.ob.style.webkitTransition = '300ms ease-in-out';
	            this.ob.scaleX = this.ob.scaleY = size;
	        }
	    }, {
	        key: 'restore',
	        value: function restore() {
	            var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	            this.ob.translateX = this.ob.translateY = 0;
	            !!rotate && (this.ob.rotateZ = 0);
	            this.ob.scaleX = this.ob.scaleY = 1;
	            this.ob.originX = this.ob.originY = 0;
	        }
	    }, {
	        key: 'endAnimation',
	        value: function endAnimation() {
	            this.list.style.webkitTransition = '0';
	            this.ob && this.ob.style && (this.ob.style.webkitTransition = '0');
	        }
	    }, {
	        key: 'checkBoundary',
	        value: function checkBoundary() {
	            var deltaX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var deltaY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	            // console.log(this.ob.width, this.ob.height);
	            var _ob3 = this.ob,
	                scaleX = _ob3.scaleX,
	                translateX = _ob3.translateX,
	                translateY = _ob3.translateY,
	                originX = _ob3.originX,
	                originY = _ob3.originY,
	                width = _ob3.width,
	                height = _ob3.height,
	                rate = this.ob.getAttribute('rate');


	            if (scaleX !== 1 || scaleX !== rate) {
	                // include long picture
	                var rangeLeft = (scaleX - 1) * (width / 2 + originX) + originX,
	                    rangeRight = -(scaleX - 1) * (width / 2 - originX) + originX,
	                    rangeUp = (scaleX - 1) * (height / 2 + originY) + originY,
	                    rangeDown = -(scaleX - 1) * (height / 2 - originY) + originY;

	                // console.log(rangeLeft, rangeRight, rangeUp, rangeDown);

	                if (translateX + deltaX <= rangeLeft && translateX + deltaX >= rangeRight && translateY + deltaY <= rangeUp && translateY + deltaY >= rangeDown) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }]);

	    return ImageView;
	}(_react.Component);

	ImageView.defaultProps = {
	    gap: MARGIN,
	    current: 0,
	    disablePageNum: false,
	    desc: '',
	    maxScale: 2
	};
	ImageView.propTypes = {
	    gap: _propTypes2.default.number,
	    maxScale: _propTypes2.default.number,
	    current: _propTypes2.default.number,
	    imagelist: _propTypes2.default.array.isRequired,
	    disablePageNum: _propTypes2.default.bool,
	    disablePinch: _propTypes2.default.bool,
	    enableRotate: _propTypes2.default.bool,
	    disableDoubleTap: _propTypes2.default.bool,
	    longTap: _propTypes2.default.func,
	    close: _propTypes2.default.func.isRequired,
	    changeIndex: _propTypes2.default.func,
	    initCallback: _propTypes2.default.func
	};
	var SingleImgView = exports.SingleImgView = new _reactSingleton2.default(ImageView);

	exports.default = ImageView;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(4)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(8)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var assign = __webpack_require__(5);

	var ReactPropTypesSecret = __webpack_require__(6);
	var checkPropTypes = __webpack_require__(7);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(6);
	  var loggedTypeFailures = {};

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          )

	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(6);

	function emptyFunction() {}

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* AlloyFinger v0.1.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * By dntzhang
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Reedited by nemoliao
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Github: https://github.com/AlloyTeam/AlloyFinger
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var AlloyFinger = function (_Component) {
	    _inherits(AlloyFinger, _Component);

	    function AlloyFinger(props) {
	        _classCallCheck(this, AlloyFinger);

	        var _this = _possibleConstructorReturn(this, (AlloyFinger.__proto__ || Object.getPrototypeOf(AlloyFinger)).call(this, props));

	        _this.preV = { x: null, y: null };
	        _this.pinchStartLen = null;
	        _this.scale = 1;
	        _this.isDoubleTap = false;
	        _this.delta = null;
	        _this.last = null;
	        _this.now = null;
	        _this.end = null;
	        _this.multiTouch = false;
	        _this.tapTimeout = null;
	        _this.longTapTimeout = null;
	        _this.singleTapTimeout = null;
	        _this.swipeTimeout = null;
	        _this.x1 = _this.x2 = _this.y1 = _this.y2 = null;
	        _this.preTapPosition = { x: null, y: null };
	        return _this;
	    }

	    _createClass(AlloyFinger, [{
	        key: 'getLen',
	        value: function getLen(v) {
	            return Math.sqrt(v.x * v.x + v.y * v.y);
	        }
	    }, {
	        key: 'dot',
	        value: function dot(v1, v2) {
	            return v1.x * v2.x + v1.y * v2.y;
	        }
	    }, {
	        key: 'getAngle',
	        value: function getAngle(v1, v2) {
	            var mr = this.getLen(v1) * this.getLen(v2);
	            if (mr === 0) return 0;
	            var r = this.dot(v1, v2) / mr;
	            if (r > 1) r = 1;
	            return Math.acos(r);
	        }
	    }, {
	        key: 'cross',
	        value: function cross(v1, v2) {
	            return v1.x * v2.y - v2.x * v1.y;
	        }
	    }, {
	        key: 'getRotateAngle',
	        value: function getRotateAngle(v1, v2) {
	            var angle = this.getAngle(v1, v2);
	            if (this.cross(v1, v2) > 0) {
	                angle *= -1;
	            }

	            return angle * 180 / Math.PI;
	        }
	    }, {
	        key: '_resetState',
	        value: function _resetState() {
	            this.setState({
	                x: null,
	                y: null,
	                swiping: false,
	                start: 0
	            });
	        }
	    }, {
	        key: '_emitEvent',
	        value: function _emitEvent(name) {
	            if (this.props[name]) {
	                var _props;

	                for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    arg[_key - 1] = arguments[_key];
	                }

	                (_props = this.props)[name].apply(_props, arg);
	            }
	        }
	    }, {
	        key: '_handleTouchStart',
	        value: function _handleTouchStart(evt) {
	            var _this2 = this;

	            if (!evt.touches) return;
	            this.now = Date.now();
	            this.x1 = evt.touches[0].pageX;
	            this.y1 = evt.touches[0].pageY;
	            this.delta = this.now - (this.last || this.now);
	            if (this.preTapPosition.x !== null) {
	                this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
	            }
	            this.preTapPosition.x = this.x1;
	            this.preTapPosition.y = this.y1;
	            this.last = this.now;
	            var preV = this.preV,
	                len = evt.touches.length;

	            if (len > 1) {
	                this._cancelLongTap();
	                this._cancelSingleTap();
	                var v = { x: evt.touches[1].pageX - this.x1, y: evt.touches[1].pageY - this.y1 };
	                preV.x = v.x;
	                preV.y = v.y;
	                this.pinchStartLen = this.getLen(preV);
	                this._emitEvent('onMultipointStart', evt);
	            }
	            this.longTapTimeout = setTimeout(function () {
	                _this2._emitEvent('onLongTap', evt);
	            }, 750);
	        }
	    }, {
	        key: '_handleTouchMove',
	        value: function _handleTouchMove(evt) {
	            var preV = this.preV,
	                len = evt.touches.length,
	                currentX = evt.touches[0].pageX,
	                currentY = evt.touches[0].pageY;
	            this.isDoubleTap = false;
	            if (len > 1) {
	                var v = { x: evt.touches[1].pageX - currentX, y: evt.touches[1].pageY - currentY };
	                if (preV.x !== null) {
	                    if (this.pinchStartLen > 0) {
	                        evt.center = {
	                            x: (evt.touches[1].pageX + currentX) / 2,
	                            y: (evt.touches[1].pageY + currentY) / 2
	                        };
	                        evt.scale = this.getLen(v) / this.pinchStartLen;
	                        this._emitEvent('onPinch', evt);
	                    }
	                    evt.angle = this.getRotateAngle(v, preV);
	                    this._emitEvent('onRotate', evt);
	                }
	                preV.x = v.x;
	                preV.y = v.y;
	                this.multiTouch = true;
	            } else {
	                if (this.x2 !== null) {
	                    evt.deltaX = currentX - this.x2;
	                    evt.deltaY = currentY - this.y2;
	                } else {
	                    evt.deltaX = 0;
	                    evt.deltaY = 0;
	                }
	                this._emitEvent('onPressMove', evt);
	            }
	            this._cancelLongTap();
	            this.x2 = currentX;
	            this.y2 = currentY;

	            if (len > 1) {
	                evt.preventDefault();
	            }
	        }
	    }, {
	        key: '_handleTouchCancel',
	        value: function _handleTouchCancel() {
	            clearInterval(this.singleTapTimeout);
	            clearInterval(this.tapTimeout);
	            clearInterval(this.longTapTimeout);
	            clearInterval(this.swipeTimeout);
	        }
	    }, {
	        key: '_handleTouchEnd',
	        value: function _handleTouchEnd(evt) {
	            var _this3 = this;

	            this.end = Date.now();
	            this._cancelLongTap();

	            if (evt.touches.length < 2) {
	                this._emitEvent('onMultipointEnd', evt);
	            }

	            evt.origin = [this.x1, this.y1];
	            if (this.multiTouch === false) {
	                if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.preV.y - this.y2) > 30) {
	                    evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
	                    evt.distance = Math.abs(this.x1 - this.x2);
	                    this.swipeTimeout = setTimeout(function () {
	                        _this3._emitEvent('onSwipe', evt);
	                    }, 0);
	                } else {
	                    this.tapTimeout = setTimeout(function () {
	                        _this3._emitEvent('onTap', evt);
	                        if (_this3.isDoubleTap) {
	                            _this3._emitEvent('onDoubleTap', evt);
	                            clearTimeout(_this3.singleTapTimeout);
	                            _this3.isDoubleTap = false;
	                        } else {
	                            _this3.singleTapTimeout = setTimeout(function () {
	                                _this3._emitEvent('onSingleTap', evt);
	                            }, 250);
	                        }
	                    }, 0);
	                }
	            }

	            this.preV.x = 0;
	            this.preV.y = 0;
	            this.scale = 1;
	            this.pinchStartLen = null;
	            this.x1 = this.x2 = this.y1 = this.y2 = null;
	            this.multiTouch = false;
	        }
	    }, {
	        key: '_cancelLongTap',
	        value: function _cancelLongTap() {
	            clearTimeout(this.longTapTimeout);
	        }
	    }, {
	        key: '_cancelSingleTap',
	        value: function _cancelSingleTap() {
	            clearTimeout(this.singleTapTimeout);
	        }
	    }, {
	        key: '_swipeDirection',
	        value: function _swipeDirection(x1, x2, y1, y2) {
	            if (Math.abs(x1 - x2) > 80 || this.end - this.now < 250) {
	                return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	            } else {
	                return 'Nochange';
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	                onTouchStart: this._handleTouchStart.bind(this),
	                onTouchMove: this._handleTouchMove.bind(this),
	                onTouchCancel: this._handleTouchCancel.bind(this),
	                onTouchEnd: this._handleTouchEnd.bind(this)
	            });
	        }
	    }]);

	    return AlloyFinger;
	}(_react.Component);

	exports.default = AlloyFinger;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	/* transformjs
	 * By dntzhang
	 */

	var Matrix3D = function Matrix3D(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	    this.elements = window.Float32Array ? new Float32Array(16) : [];
	    var te = this.elements;
	    te[0] = n11 !== undefined ? n11 : 1;te[4] = n12 || 0;te[8] = n13 || 0;te[12] = n14 || 0;
	    te[1] = n21 || 0;te[5] = n22 !== undefined ? n22 : 1;te[9] = n23 || 0;te[13] = n24 || 0;
	    te[2] = n31 || 0;te[6] = n32 || 0;te[10] = n33 !== undefined ? n33 : 1;te[14] = n34 || 0;
	    te[3] = n41 || 0;te[7] = n42 || 0;te[11] = n43 || 0;te[15] = n44 !== undefined ? n44 : 1;
	};

	Matrix3D.DEG_TO_RAD = Math.PI / 180;

	Matrix3D.prototype = {
	    set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	        var te = this.elements;
	        te[0] = n11;te[4] = n12;te[8] = n13;te[12] = n14;
	        te[1] = n21;te[5] = n22;te[9] = n23;te[13] = n24;
	        te[2] = n31;te[6] = n32;te[10] = n33;te[14] = n34;
	        te[3] = n41;te[7] = n42;te[11] = n43;te[15] = n44;
	        return this;
	    },
	    identity: function identity() {
	        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	        return this;
	    },
	    multiplyMatrices: function multiplyMatrices(a, be) {

	        var ae = a.elements;
	        var te = this.elements;
	        var a11 = ae[0],
	            a12 = ae[4],
	            a13 = ae[8],
	            a14 = ae[12];
	        var a21 = ae[1],
	            a22 = ae[5],
	            a23 = ae[9],
	            a24 = ae[13];
	        var a31 = ae[2],
	            a32 = ae[6],
	            a33 = ae[10],
	            a34 = ae[14];
	        var a41 = ae[3],
	            a42 = ae[7],
	            a43 = ae[11],
	            a44 = ae[15];

	        var b11 = be[0],
	            b12 = be[1],
	            b13 = be[2],
	            b14 = be[3];
	        var b21 = be[4],
	            b22 = be[5],
	            b23 = be[6],
	            b24 = be[7];
	        var b31 = be[8],
	            b32 = be[9],
	            b33 = be[10],
	            b34 = be[11];
	        var b41 = be[12],
	            b42 = be[13],
	            b43 = be[14],
	            b44 = be[15];

	        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
	        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
	        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
	        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

	        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
	        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
	        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
	        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

	        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
	        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
	        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
	        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

	        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
	        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
	        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
	        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

	        return this;
	    },
	    // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
	    _rounded: function _rounded(value, i) {
	        i = Math.pow(10, i || 15);
	        // default
	        return Math.round(value * i) / i;
	    },
	    appendTransform: function appendTransform(x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

	        var rx = rotateX * Matrix3D.DEG_TO_RAD;
	        var cosx = this._rounded(Math.cos(rx));
	        var sinx = this._rounded(Math.sin(rx));
	        var ry = rotateY * Matrix3D.DEG_TO_RAD;
	        var cosy = this._rounded(Math.cos(ry));
	        var siny = this._rounded(Math.sin(ry));
	        var rz = rotateZ * Matrix3D.DEG_TO_RAD;
	        var cosz = this._rounded(Math.cos(rz * -1));
	        var sinz = this._rounded(Math.sin(rz * -1));

	        this.multiplyMatrices(this, [1, 0, 0, x, 0, cosx, sinx, y, 0, -sinx, cosx, z, 0, 0, 0, 1]);

	        this.multiplyMatrices(this, [cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1]);

	        this.multiplyMatrices(this, [cosz * scaleX, sinz * scaleY, 0, 0, -sinz * scaleX, cosz * scaleY, 0, 0, 0, 0, 1 * scaleZ, 0, 0, 0, 0, 1]);

	        if (skewX || skewY) {
	            this.multiplyMatrices(this, [this._rounded(Math.cos(skewX * Matrix3D.DEG_TO_RAD)), this._rounded(Math.sin(skewX * Matrix3D.DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(skewY * Matrix3D.DEG_TO_RAD)), this._rounded(Math.cos(skewY * Matrix3D.DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	        }

	        if (originX || originY || originZ) {
	            this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
	            this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
	            this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
	        }
	        return this;
	    }
	};

	function observe(target, props, callback) {
	    for (var i = 0, len = props.length; i < len; i++) {
	        var prop = props[i];
	        watch(target, prop, callback);
	    }
	}

	function watch(target, prop, callback) {
	    Object.defineProperty(target, prop, {
	        get: function get() {
	            return this["__" + prop];
	        },
	        set: function set(value) {
	            if (value !== this["__" + prop]) {
	                this["__" + prop] = value;
	                callback();
	            }
	        }
	    });
	}

	var Transform = function Transform(element) {

	    observe(element, ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"], function () {
	        var mtx = element.matrix3D.identity().appendTransform(element.translateX, element.translateY, element.translateZ, element.scaleX, element.scaleY, element.scaleZ, element.rotateX, element.rotateY, element.rotateZ, element.skewX, element.skewY, element.originX, element.originY, element.originZ);
	        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
	    });

	    observe(element, ["perspective"], function () {
	        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(element.matrix3D.elements).join(",") + ")";
	    });

	    element.matrix3D = new Matrix3D();
	    element.perspective = 500;
	    element.scaleX = element.scaleY = element.scaleZ = 1;
	    //由于image自带了x\y\z，所有加上translate前缀
	    element.translateX = element.translateY = element.translateZ = element.rotateX = element.rotateY = element.rotateZ = element.skewX = element.skewY = element.originX = element.originY = element.originZ = 0;
	};

	module.exports = Transform;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CenterImage = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PRELOADNUM = 3;

	var CenterImage = exports.CenterImage = function (_Component) {
	    _inherits(CenterImage, _Component);

	    function CenterImage() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, CenterImage);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CenterImage.__proto__ || Object.getPrototypeOf(CenterImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            loading: true,
	            error: false,
	            loaded: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(CenterImage, [{
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                loading = _state.loading,
	                error = _state.error,
	                _props = this.props,
	                index = _props.index,
	                current = _props.current,
	                lazysrc = _props.lazysrc,
	                childProps = _objectWithoutProperties(_props, ['index', 'current', 'lazysrc']),
	                img = _react2.default.createElement('img', _extends({ onLoad: this.onImgLoad.bind(this), src: lazysrc }, childProps));

	            // init first image, others have been preloaded


	            if (index === current) {
	                return img;
	            }
	            if (loading) {
	                return _react2.default.createElement(Loading, null);
	            }
	            if (error) {
	                return _react2.default.createElement(Error, null);
	            }

	            return img;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.loadImg();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            !this.state.loaded && this.loadImg();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('orientationchange', this.onOrientationChange);
	        }
	    }, {
	        key: 'loadImg',
	        value: function loadImg() {
	            var _this2 = this;

	            var _props2 = this.props,
	                index = _props2.index,
	                current = _props2.current,
	                lazysrc = _props2.lazysrc;


	            if (lazysrc && index <= current + PRELOADNUM && index >= current - PRELOADNUM) {
	                var img = new Image();

	                img.src = lazysrc;
	                img.onload = function () {
	                    _this2.setState({
	                        loading: false
	                    });
	                };
	                img.onerror = function () {
	                    _this2.setState({
	                        loading: false,
	                        error: true
	                    });
	                };
	            }
	        }
	    }, {
	        key: 'onOrientationChange',
	        value: function onOrientationChange(target) {
	            var _this3 = this;

	            // 方向改变后新的innerHeight生效需要delay
	            setTimeout(function () {
	                _this3.onImgLoad({ target: target });
	            }, 100);
	        }
	    }, {
	        key: 'onImgLoad',
	        value: function onImgLoad(e) {
	            if (!this.state.loaded) {
	                this.onOrientationChange = this.onOrientationChange.bind(this, e.target);
	                window.addEventListener('orientationchange', this.onOrientationChange);
	            }

	            this.setState({ loaded: true });

	            var target = e.target,
	                h = target.naturalHeight,
	                w = target.naturalWidth,
	                r = h / w,
	                height = window.innerHeight || window.screen.availHeight,
	                width = window.innerWidth || window.screen.availWidth,
	                rate = height / width;

	            var imgStyle = {};

	            if (r >= 3.5) {
	                // imgStyle.width = width + "px";
	                // imgStyle.height = h * width / w + "px";
	                target.setAttribute('long', true);
	            }

	            if (r > rate) {
	                imgStyle.height = height + "px";
	                imgStyle.width = w * height / h + "px";
	                imgStyle.left = width / 2 - w * height / h / 2 + "px";
	            } else if (r < rate) {
	                imgStyle.width = width + "px";
	                imgStyle.height = h * width / w + "px";
	                imgStyle.top = height / 2 - h * width / w / 2 + "px";
	            } else {
	                imgStyle.width = width;
	                imgStyle.height = height;
	            }

	            target.setAttribute('style', 'width:' + imgStyle.width + '; height:' + imgStyle.height + '; left:' + imgStyle.left + '; top:' + imgStyle.top + ';');
	            target.setAttribute('rate', 1 / r);
	        }
	    }]);

	    return CenterImage;
	}(_react.Component);

	var Loading = function Loading() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'spinner' },
	        _react2.default.createElement('div', { className: 'double-bounce1' }),
	        _react2.default.createElement('div', { className: 'double-bounce2' })
	    );
	};

	var Error = function Error() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'errorpage' },
	        '\u52A0\u8F7D\u5931\u8D25'
	    );
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("react-singleton");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);