/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)},n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function p(){p=function(){};n.Symbol||(n.Symbol=r)}var r=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function u(){p();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&m(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return v(l(this))}});u=function(){}}function v(a){u();a={next:a};a[n.Symbol.iterator]=function(){return this};return a}function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var y;
if("function"==typeof Object.setPrototypeOf)y=Object.setPrototypeOf;else{var z;a:{var A={s:!0},B={};try{B.__proto__=A;z=B.s;break a}catch(a){}z=!1}y=z?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var C=y;function D(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.u=0;this.g=null}function E(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}D.prototype.i=function(a){this.o=a};
D.prototype.j=function(a){this.g={v:a,w:!0};this.b=this.u||this.m};D.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function F(a,b,e){a.b=e;return{value:b}}function G(a){this.A=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function H(a){this.a=new D;this.B=a}H.prototype.i=function(a){E(this.a);if(this.a.c)return I(this,this.a.c.next,a,this.a.i);this.a.i(a);return J(this)};
function K(a,b){E(a.a);var e=a.a.c;if(e)return I(a,"return"in e?e["return"]:function(a){return{value:a,done:!0}},b,a.a["return"]);a.a["return"](b);return J(a)}H.prototype.j=function(a){E(this.a);if(this.a.c)return I(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return J(this)};
function I(a,b,e,c){try{var d=b.call(a.a.c,e);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.a.h=!1,d;var f=d.value}catch(g){return a.a.c=null,a.a.j(g),J(a)}a.a.c=null;c.call(a.a,f);return J(a)}function J(a){for(;a.a.b;)try{var b=a.B(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(e){a.a.o=void 0,a.a.j(e)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.w)throw b.v;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function L(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return K(a,b)};u();this[Symbol.iterator]=function(){return this}}function M(a,b){var e=new L(new H(b));C&&C(e,a.prototype);return e}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var N=function(a,b){for(var e=0;e<a.length;e++)b(a[e])},O=function(a,b,e){return b instanceof Blob?[String(a),b,void 0!==e?e+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},Q=function(a){var b=x(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},R="object"===typeof window?window:"object"===typeof self?self:this,S=R.FormData,T=R.XMLHttpRequest&&R.XMLHttpRequest.prototype.send,U=R.Request&&R.fetch,V=R.navigator&&R.navigator.sendBeacon;p();var W=R.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in R&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){R.File=function(b,e,c){b=new Blob(b,c);c=c&&void 0!==c.lastModified?new Date(c.lastModified):new Date;Object.defineProperties(b,
{name:{value:e},lastModifiedDate:{value:c},lastModified:{value:+c},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}p();u();var X=function(a){this.f=Object.create(null);if(!a)return this;var b=this;N(a.elements,function(a){if(a.name&&!a.disabled&&"submit"!==a.type&&"button"!==a.type)if("file"===a.type){var c=a.files&&a.files.length?a.files:[new File([],"",{type:"application/octet-stream"})];N(c,function(c){b.append(a.name,c)})}else"select-multiple"===
a.type||"select-one"===a.type?N(a.options,function(c){!c.disabled&&c.selected&&b.append(a.name,c.value)}):"checkbox"===a.type||"radio"===a.type?a.checked&&b.append(a.name,a.value):(c="textarea"===a.type?a.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):a.value,b.append(a.name,c))})};k=X.prototype;k.append=function(a,b,e){P(arguments,2);var c=x(O.apply(null,arguments));a=c.next().value;b=c.next().value;e=c.next().value;c=this.f;c[a]||(c[a]=[]);c[a].push([b,e])};k["delete"]=function(a){P(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var e=this,c,d,f,g,h,q;return M(b,function(b){switch(b.b){case 1:c=e.f,f=new G(c);case 2:var t;a:{for(t=f;0<t.l.length;){var w=t.l.pop();if(w in t.A){t=w;break a}}t=null}if(null==(d=t)){b.b=0;break}g=x(c[d]);h=g.next();case 5:if(h.done){b.b=2;break}q=h.value;return F(b,[d,Q(q)],6);case 6:h=g.next(),b.b=5}})};k.forEach=function(b,e){P(arguments,1);for(var c=x(this),d=c.next();!d.done;d=c.next()){var f=x(d.value);d=f.next().value;f=f.next().value;
b.call(e,f,d,this)}};k.get=function(b){P(arguments,1);var e=this.f;b=String(b);return e[b]?Q(e[b][0]):null};k.getAll=function(b){P(arguments,1);return(this.f[String(b)]||[]).map(Q)};k.has=function(b){P(arguments,1);return String(b)in this.f};k.keys=function e(){var c=this,d,f,g,h,q;return M(e,function(e){1==e.b&&(d=x(c),f=d.next());if(3!=e.b){if(f.done){e.b=0;return}g=f.value;h=x(g);q=h.next().value;return F(e,q,3)}f=d.next();e.b=2})};k.set=function(e,c,d){P(arguments,2);var f=O.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function c(){var d=this,f,g,h,q,w;return M(c,function(c){1==c.b&&(f=x(d),g=f.next());if(3!=c.b){if(g.done){c.b=0;return}h=g.value;q=x(h);q.next();w=q.next().value;return F(c,w,3)}g=f.next();c.b=2})};X.prototype._asNative=function(){for(var c=new S,d=x(this),f=d.next();!f.done;f=d.next()){var g=x(f.value);f=g.next().value;g=g.next().value;c.append(f,g)}return c};X.prototype._blob=function(){for(var c="----formdata-polyfill-"+Math.random(),d=[],f=x(this),g=f.next();!g.done;g=
f.next()){var h=x(g.value);g=h.next().value;h=h.next().value;d.push("--"+c+"\r\n");h instanceof Blob?d.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):d.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}d.push("--"+c+"--");return new Blob(d,{type:"multipart/form-data; boundary="+c})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
W&&(X.prototype[W]="FormData");T&&(R.XMLHttpRequest.prototype.send=function(c){c instanceof X?(c=c._blob(),this.setRequestHeader("Content-Type",c.type),T.call(this,c)):T.call(this,c)});if(U){var Y=R.fetch;R.fetch=function(c,d){d&&d.body&&d.body instanceof X&&(d.body=d.body._blob());return Y.call(this,c,d)}}V&&(R.navigator.sendBeacon=function(c,d){d instanceof X&&(d=d._asNative());return V.call(this,c,d)});R.FormData=X};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function accordion() {
  var headings = document.getElementsByClassName('accordion-heading'),
      blocks = document.getElementsByClassName('accordion-block');

  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    block.style.display = 'none';
  }

  var _loop = function _loop(_i) {
    var heading = headings[_i];
    heading.classList.remove('activePanel');
    heading.addEventListener('click', function () {
      if (heading.classList.contains('activePanel')) {
        return;
      } else {
        for (var _i2 = 0; _i2 < blocks.length; _i2++) {
          var _block = blocks[_i2];
          _block.style.display = 'none';
        }

        for (var _i3 = 0; _i3 < headings.length; _i3++) {
          var _heading = headings[_i3];

          _heading.classList.remove('activePanel');
        }

        heading.classList.add('activePanel');
        heading.nextElementSibling.style.display = 'block';
      }
    });
  };

  for (var _i = 0; _i < headings.length; _i++) {
    _loop(_i);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  var selectSize = document.getElementById('size'),
      calcForm = document.querySelector('#calcForm'),
      //allInputs = calcForm.elements,
  //calcSubmitBtn = calcForm.querySelector('button'),
  calcBtn = document.getElementById('calcBtn'),
      selectMaterial = document.getElementById('material'),
      selectOptions = document.getElementById('options'),
      promocode = document.getElementsByClassName('promocode')[0],
      totalValue = document.getElementsByClassName('calc-price')[0],
      total = 0;
  selectSize.addEventListener('change', function () {
    total = Math.round(selectSize.value * selectMaterial.value * selectOptions.value * 1500);

    if (selectSize.value === '' || selectMaterial.value === '') {
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    } else {
      if (promocode.value == 'IWANTPOPART') {
        totalValue.innerHTML = total - total * 0.3;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  selectMaterial.addEventListener('change', function () {
    total = Math.round(selectSize.value * selectMaterial.value * selectOptions.value * 1500);

    if (selectSize.value === '' || selectMaterial.value === '') {
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    } else {
      if (promocode.value == 'IWANTPOPART') {
        totalValue.innerHTML = total - total * 0.3;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  selectOptions.addEventListener('change', function () {
    total = Math.round(selectSize.value * selectMaterial.value * selectOptions.value * 1500);

    if (selectSize.value === '' || selectMaterial.value === '') {
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    } else {
      if (promocode.value == 'IWANTPOPART') {
        totalValue.innerHTML = total - total * 0.3;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  promocode.addEventListener('change', function () {
    total = Math.round(selectSize.value * selectMaterial.value * selectOptions.value * 1500);

    if (selectSize.value === '' || selectMaterial.value === '') {
      totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    } else {
      if (promocode.value.trim() == 'IWANTPOPART') {
        totalValue.innerHTML = total - total * 0.3;
      } else {
        totalValue.innerHTML = total;
      }
    }
  });
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Недостаточно данных";

  function submitMessage(text) {
    statusDiv.innerHTML = text;
    setTimeout(function () {
      statusDiv.remove();
    }, 5000);
  }

  var clearInputs = function clearInputs() {// for (let i = 0; i < allInputs.length; i++) {
    // 	let input = allInputs[i];
    // 	input.value = '';
    // 	totalValue.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
    // }
    //calcForm.reset();
  };

  calcBtn.addEventListener('click', function (e) {
    var divc = document.createElement('div');
    calcForm.appendChild(divc);
    divc.style.textAlign = 'center';
    e.preventDefault();

    if (selectSize.value !== '' && selectMaterial.value !== '') {
      divc.innerHTML = 'Спасибо! Скоро мы с вами свяжемся!';
      setTimeout(function () {
        divc.remove();
      }, 5000); //	submitMessage(message.success);

      clearInputs();
    } else {
      divc.innerHTML = 'Недостаточно данных!';
      setTimeout(function () {
        divc.remove();
      }, 5000); //submitMessage(message.failure);
    }
  }); // let calculatorForm = document.getElementById('calcForm');
  // let allInputs = calculatorForm.elements;
  // calculatorForm.addEventListener("submit", function(e) {
  // 	e.preventDefault();
  // 	let statusMessage = document.createElement("div");
  // 	statusMessage.classList.add("status");
  // 	mainForm.appendChild(statusMessage);
  // 	let calcFormData = new FormData(calcForm);
  // 	let request = new XMLHttpRequest();
  // 	request.open("POST", "./server.php");
  // 	request.setRequestHeader(
  // 			"Content-Type",
  // 			"application/x-www-form-urlencoded"
  // 	);
  // 	request.send(calcFormData);
  // 	let div = document.createElement('div');
  // 	div.classList.add('status');
  // 	let statusDiv = document.getElementsByClassName('status')[0];
  // 	statusDiv.style.textAlign = 'center';
  // 	function submitMessage(text){
  // 		statusDiv.innerHTML = text;
  // 		setTimeout(function(){
  // 			statusDiv.remove();
  // 		}, 5000);
  // 	}
  // 	request.onreadystatechange = function() {
  // 			if (request.status === 200 && request.status < 300) {
  // 							submitMessage(message.success);
  // 					} else {
  // 						submitMessage(message.failure);
  // 					}
  // 	};
  // 	clearInputs();
  // });
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/parts/consultation.js":
/*!**************************************!*\
  !*** ./src/js/parts/consultation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function consultation() {
  console.log('consultation');
  var giftModal = document.querySelector('.popup-gift'),
      //form = document.querySelector('.form'),
  consForm = document.getElementById('consForm'),
      allInputs = consForm.elements,
      nameConsForm = document.getElementById('nameConsForm'),
      phoneConsForm = document.getElementById('phoneConsForm'),
      popupDesignOverlay = document.querySelector('.popup-design'),
      //overlay
  btnsPopupClose = document.querySelectorAll('.popup-close'),
      popupConsultation = document.querySelector('.popup-consultation'),
      //overlay
  popupOk = document.querySelector('.popup-ok'),
      popupError = document.querySelector('.popup-error');
  document.body.addEventListener('click', function (e) {
    if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-consultation')) {
      console.log(e.target);
      showPopupConsultation();
    }
  });

  var clearInputs = function clearInputs() {
    for (var i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];
      input.value = '';
    }
  };

  function allowRusWords() {
    console.log('typing name');
    var regexp = /[^А-ЯЁ\s][^\s]/igm;
    this.value = this.value.replace(regexp, '');
  }

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask() {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || "_";
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
  }

  popupConsultation.addEventListener('click', hidePopupModalConsultation);

  function hidePopupModalConsultation(e) {
    console.log('hide design or consultation');

    if (e.target.classList.contains('popup-consultation') || e.target.classList.contains('popup-close')) {
      popupConsultation.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  for (var i = 0; i < btnsPopupClose.length; i++) {
    var btnPopupClose = btnsPopupClose[i];
    btnPopupClose.addEventListener('click', hidePopupModalConsultation);
    clearTimeout(timerId);
  }

  function showPopupConsultation() {
    popupConsultation.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  var timerId = setTimeout(function () {
    openModal();
  }, 60000);

  function openModal() {
    var computedStyleCons = window.getComputedStyle(popupConsultation).display,
        computedStyleGift = window.getComputedStyle(giftModal).display,
        computedStyleDesign = window.getComputedStyle(popupDesignOverlay).display;

    if (computedStyleCons == 'none' && computedStyleGift == 'none' && computedStyleDesign == 'none') {
      popupConsultation.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }

  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Недостаточно данных";
  consForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var statusMessageCons = document.createElement("div");
    statusMessageCons.classList.add("status");
    var formDataCons = new FormData(consForm);
    var request = new XMLHttpRequest();
    request.open("POST", "./server.php");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(formDataCons);

    request.onreadystatechange = function () {
      if (request.status === 200 && request.status < 300) {
        popupConsultation.style.display = 'none';
        popupOk.style.display = 'block';
      } else {
        popupConsultation.style.display = 'none';
        popupError.style.display = 'block';
      }
    };

    clearInputs();
  });
  phoneConsForm.addEventListener("input", mask, false);
  nameConsForm.addEventListener('input', allowRusWords);
}

/* harmony default export */ __webpack_exports__["default"] = (consultation);

/***/ }),

/***/ "./src/js/parts/design.js":
/*!********************************!*\
  !*** ./src/js/parts/design.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function design() {
  console.log('design');
  document.body.addEventListener('click', function (e) {
    if (e.target.tagName == 'BUTTON' && e.target.classList.contains('button-design')) {
      console.log(e.target);
      showPopupDesign();
    }
  });
  var btnsPopupClose = document.querySelectorAll('.popup-close'),
      popupDesignOverlay = document.querySelector('.popup-design'); //closing popup by clicking on overlay

  popupDesignOverlay.addEventListener('click', hidePopupModal); //Функции закрытия модальных окон

  function hidePopupModal(e) {
    console.log('modal design closed');

    if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup-design')) {
      popupDesignOverlay.style.display = 'none';
      document.body.style.overflow = '';
    }
  } //closing by clicking on the button "X"


  for (var i = 0; i < btnsPopupClose.length; i++) {
    var btnPopupClose = btnsPopupClose[i];
    btnPopupClose.addEventListener('click', hidePopupModal);
  }

  function showPopupDesign() {
    var popupsDialog = document.querySelectorAll('.popup-dialog');

    for (var _i = 0; _i < popupsDialog.length; _i++) {
      var popupDialog = popupsDialog[_i];
      popupDialog.style.display = 'block';
    }

    popupDesignOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  var popupOk = document.querySelector('.popup-ok'),
      popupError = document.querySelector('.popup-error'),
      nameDF = document.querySelector('#nameDF'),
      commentDF = document.querySelector('#commentDF'),
      phoneDF = document.querySelector('.phoneDF'),
      emailDF = document.querySelector('#emailDF'),
      designForm = document.getElementById('myform'),
      formDFInput = designForm.elements;

  var clearInputs = function clearInputs() {
    for (var _i2 = 0; _i2 < formDFInput.length; _i2++) {
      var input = formDFInput[_i2];
      input.value = '';
    }
  };

  var hidePopupModalSuccess = function hidePopupModalSuccess(e) {
    console.log('modal success closed');

    if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup-ok')) {
      popupOk.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  var hidePopupModalError = function hidePopupModalError(e) {
    console.log('modal error closed');

    if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup-error')) {
      popupError.style.display = 'none';
      document.body.style.overflow = '';
    }
  }; //Скрипт к форме дизайн портрета


  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Недостаточно данных";
  designForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var statusMessageDF = document.createElement("div");
    statusMessageDF.classList.add("status");
    var formDataDF = new FormData(designForm);
    var request = new XMLHttpRequest();
    request.open("POST", "./server.php");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(formDataDF);

    request.onreadystatechange = function () {
      if (request.status === 200 && request.status < 300) {
        popupDesignOverlay.style.display = 'none';
        popupOk.style.display = 'block';
      } else {
        popupDesignOverlay.style.display = 'none';
        popupError.style.display = 'block';
      }
    };

    clearInputs();
  });

  function allowRusWords() {
    console.log('typing name');
    var regexp = /[^А-ЯЁ\s][^\s]/igm;
    this.value = this.value.replace(regexp, '');
  }

  function allowRusSentences() {
    console.log('typing comment');
    var regexp = /[^А-ЯЁ\s,\.!?][^\s]/igm;
    this.value = this.value.replace(regexp, '');
  }

  function allowEmail() {
    console.log('typing email');
    var regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

    if (this.value.match(regexp)) {
      return true;
    } else {
      alert('Неверный email');
      var mes = document.createElement('div');
      mes.innerHTML = 'Неверный email';
      popupDesignOverlay.appendChild(mes); //this.value = '';

      return false;
    }
  }

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask() {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || "_";
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
  }

  phoneDF.addEventListener("input", mask, false);
  nameDF.addEventListener('input', allowRusWords);
  commentDF.addEventListener('input', allowRusSentences);
  emailDF.addEventListener('blur', allowEmail);
  popupOk.addEventListener('click', hidePopupModalSuccess);
  popupError.addEventListener('click', hidePopupModalError);
}

/* harmony default export */ __webpack_exports__["default"] = (design);

/***/ }),

/***/ "./src/js/parts/expansion.js":
/*!***********************************!*\
  !*** ./src/js/parts/expansion.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function expansion() {
  console.log('expansion');
  var moreBtn = document.querySelector('.button-styles');
  var showHiddenBlocks = document.querySelectorAll('.styles-2');

  function showHiddenBlocksFunc() {
    for (var i = 0; i < showHiddenBlocks.length; i++) {
      var showHiddenBlock = showHiddenBlocks[i]; //showHiddenBlock.classList.toggle('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      showHiddenBlock.classList.toggle('hidden-lg');
      showHiddenBlock.classList.toggle('hidden-md');
      showHiddenBlock.classList.toggle('hidden-sm');
      showHiddenBlock.classList.toggle('hidden-xs');
      showHiddenBlock.classList.toggle('col-sm-3');
      showHiddenBlock.classList.toggle('col-sm-offset-0');
      showHiddenBlock.classList.toggle('col-xs-10');
      showHiddenBlock.classList.toggle('col-xs-offset-1');
    }

    moreBtn.style.display = 'none';
  }

  moreBtn.addEventListener('click', showHiddenBlocksFunc);
}

/* harmony default export */ __webpack_exports__["default"] = (expansion);

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function filter() {
  console.log('filter');
  var portfolioMenu = document.querySelector('.portfolio-menu');
  var portfolioBlock = document.querySelectorAll('.portfolio-block');
  var noWorks = document.querySelector('.portfolio-no');
  portfolioMenu.addEventListener('click', function (e) {
    var targetClass = e.target.getAttribute('class');

    if (e.target.classList.contains('active')) {
      return;
    } else {
      for (var i = 0; i < portfolioMenu.children.length; i++) {
        portfolioMenu.children[i].classList.remove('active');
      }

      for (var _i = 0; _i < portfolioBlock.length; _i++) {
        console.log(targetClass);
        portfolioBlock[_i].style.display = 'none';

        if (portfolioBlock[_i].classList.contains(targetClass)) {
          portfolioBlock[_i].style.display = 'block';
          noWorks.style.display = 'none';
        }
      }

      e.target.classList.add('active');

      if (e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')) {
        noWorks.style.display = 'block';
      } else {
        noWorks.style.display = 'none';
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function form() {
  console.log('form'); //let popupOk    = document.querySelector('.popup-ok'),
  //popupError = document.querySelector('.popup-error'),

  var mainForm = document.getElementById('mainForm'),
      allInputs = mainForm.elements,
      nameMainForm = document.getElementById('nameMainForm'),
      phoneMainForm = document.getElementById('phoneMainForm'),
      emailMainForm = document.getElementById('emailMainForm'),
      textMainForm = document.getElementById('textMainForm');

  var clearInputs = function clearInputs() {
    for (var i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];
      input.value = '';
    }
  };

  function allowRusWords() {
    console.log('typing name');
    var regexp = /[^А-ЯЁ\s][^\s]/igm;
    this.value = this.value.replace(regexp, '');
  }

  function allowRusSentences() {
    console.log('typing comment');
    var regexp = /[^А-ЯЁ\s,\.!?][^\s]/igm;
    this.value = this.value.replace(regexp, '');
  }

  function allowEmail() {
    console.log('typing email');
    var regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

    if (this.value.match(regexp)) {
      return true;
    } else {
      return false;
    }
  }

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask() {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || "_";
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
  }

  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Недостаточно данных";
  mainForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    mainForm.appendChild(statusMessage);
    var formDataMainForm = new FormData(mainForm);
    var request = new XMLHttpRequest();
    request.open("POST", "./server.php");
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(formDataMainForm);
    var message = new Object();
    message.loading = "Загрузка...";
    message.success = "Спасибо! Скоро мы с вами свяжемся";
    message.failure = "Недостаточно данных";
    var div = document.createElement('div');
    div.classList.add('status');
    var statusDiv = document.getElementsByClassName('status')[0];
    statusDiv.style.textAlign = 'center';

    function submitMessage(text) {
      statusDiv.innerHTML = text;
      setTimeout(function () {
        statusDiv.remove();
      }, 5000);
    }

    request.onreadystatechange = function () {
      if (request.status === 200 && request.status < 300) {
        submitMessage(message.success);
      } else {
        submitMessage(message.failure);
      }
    };

    clearInputs();
  });
  phoneMainForm.addEventListener("input", mask, false);
  nameMainForm.addEventListener('input', allowRusWords);
  textMainForm.addEventListener('input', allowRusSentences);
  emailMainForm.addEventListener('blur', allowEmail);
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/parts/gift.js":
/*!******************************!*\
  !*** ./src/js/parts/gift.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function gift() {
  console.log('gift');
  var giftModal = document.querySelector('.popup-gift'),
      closeGift = giftModal.querySelector('.popup-close'),
      popupGift = document.querySelector('.popup-gift'),
      gift = document.querySelector('.fixed-gift'),
      isClicked = false,
      allBtns = document.querySelectorAll('button');

  for (var i = 0; i < allBtns.length; i++) {
    var btn = allBtns[i];
    btn.addEventListener('click', function () {
      isClicked = true;
    });
  }

  var showGiftModal = function showGiftModal() {
    giftModal.style.display = 'block';
    gift.style.display = 'none';
    document.body.style.overflow = 'hidden';
    isClicked = true;
  };

  gift.addEventListener('click', showGiftModal);

  function hidePopupGift(e) {
    if (e.target.classList.contains('popup-gift') || e.target.classList.contains('popup-close')) {
      giftModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  closeGift.addEventListener('click', function (e) {
    hidePopupGift(e);
  });
  popupGift.addEventListener('click', hidePopupGift);

  var scroll = function scroll() {
    if (isClicked === false && window.pageYOffset + window.innerHeight >= document.body.scrollHeight - 100) {
      console.log('scrolled bottom');
      showGiftModal();
      isClicked = true;
    }
  };

  window.addEventListener('scroll', scroll);
}

/* harmony default export */ __webpack_exports__["default"] = (gift);

/***/ }),

/***/ "./src/js/parts/hover.js":
/*!*******************************!*\
  !*** ./src/js/parts/hover.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hover() {
  console.log('hover'); //let sizesBlock = document.querySelectorAll('.sizes-block');

  var sw = document.querySelector('.sizes-wrapper'); //общий контейнер
  //let imgs = sw.querySelectorAll('img');

  sw.addEventListener('mouseover', showImages);
  sw.addEventListener('mouseout', hideImages); //sw.addEventListener('tap', showImages);

  sw.addEventListener('tap', hideImagesM);

  function showImages(e) {
    console.log('showImages function');

    if (e.target.tagName == 'IMG') {
      e.target.style.position = 'relative';
      e.target.style.zIndex = '10';
      e.target.src = e.target.src.replace('.png', '-1.png');
    }
  }

  function hideImages(e) {
    console.log('hideImages function');

    if (e.target.tagName == 'IMG') {
      e.target.style.position = '';
      e.target.style.zIndex = '';
      e.target.src = e.target.src.replace('-1.png', '.png');
    }
  }

  function hideImagesM(e) {
    if (e.target.tagName != 'IMG') {
      console.log('tap not image');
      e.target.style.position = '';
      e.target.style.zIndex = '';
      e.target.src = e.target.src.replace('-1.png', '.png');
    }
  } //tap out img
  // window.addEventListener('tap', function(e){
  // 	isShown = false;
  // 	let sizesBlocks = document.querySelectorAll('.sizes');
  // 	let sizesImages = sizesBlocks.querySelectorAll('img');
  // 	for(let i = 0; i < sizesImages.length; i++){
  // 		let img = sizesImages[i];
  // 		if(e.target.tagName == img){
  // 			showImages();
  // 			isShown = true;
  // 		}
  // 	}
  // });


  var sizesImages = sw.querySelectorAll('img'); // 	let  toggle = false;
  // function chngimg() {
  // 	for(let i = 0; i < sizesImages.length; i++){
  // 		//let img = sizesImages[i];
  // 		if (toggle === true && sizesImages[i].src == 'img/sizes-' + [i + 1] + '-1.png') {
  // 			sizesImages[i].src  = 'img/sizes-' + [i + 1] + '.png';
  // 		} else {
  // 			sizesImages[i].src = 'img/sizes-' + [i + 1] + '-1.png';
  // 		}
  // 		toggle = !toggle;
  // 	}   
  // }

  var _loop = function _loop(i) {
    var img = sizesImages[i];
    img.addEventListener('click', function (e) {
      console.log('click on image');

      if (img.src == 'img/sizes-4.png') {
        img.src = 'img/sizes-' + [i + 1] + '-1.png';
      } else if (img.src == 'img/sizes-4-1.png') {
        img.src = 'img/sizes-' + [i + 1] + '.png';
      }
    });
  };

  for (var i = 0; i < sizesImages.length; i++) {
    _loop(i);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hover);

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function menu() {
  console.log('menu');
  var mobileMenu = document.querySelector('.burger');
  var textMenu = mobileMenu.querySelector('span');
  var desktopMenu = document.querySelector('.header-menu');
  var burgerList = document.querySelector('.burger-menu');
  var width = document.body.clientWidth;
  window.addEventListener('load', toggleMenu);
  window.addEventListener('resize', toggleMenu);
  mobileMenu.addEventListener('click', toggleOpening);

  function toggleOpening() {
    console.log('click');

    if (burgerList.style.display == 'block') {
      burgerList.style.display = 'none';
    } else {
      burgerList.style.display = 'block';
    }
  }

  function toggleMenu() {
    console.log('resizing...');

    if (width <= 1080) {
      console.log('width equals: ' + width);
      mobileMenu.style.display = 'block';
      desktopMenu.style.display = 'none';
      textMenu.style.display = 'none';
    } else if (width > 1080) {
      desktopMenu.style.display = 'block';
      burgerList.style.display = 'none';
      mobileMenu.style.display = 'none';
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
  console.log('slider');
  var slideIndex = 1;
  var slides = document.getElementsByClassName('main-slider-item');
  setInterval(function () {
    plusSlides(1);
  }, 3000);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block'; //slides[slideIndex - 1].classList.add('animated', 'slideInDownOutDown');
  } //showSlides


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/parts/sliderBottom.js":
/*!**************************************!*\
  !*** ./src/js/parts/sliderBottom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sliderBottom() {
  console.log('sliderBottom');
  var slideIndex1 = 1;
  var slides1 = document.getElementsByClassName('feedback-slider-item');
  var prev1 = document.querySelector('.main-prev-btn');
  var next1 = document.querySelector('.main-next-btn');
  setInterval(function () {
    plusSlides1(1);
  }, 3000);
  showSlides1(slideIndex1);

  function showSlides1(n) {
    if (n > slides1.length) {
      slideIndex1 = 1;
    }

    if (n < 1) {
      slideIndex1 = slides1.length;
    }

    for (var i = 0; i < slides1.length; i++) {
      slides1[i].style.display = 'none';
    }

    slides1[slideIndex1 - 1].style.display = 'block';
  }

  function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  }

  function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
  }

  prev1.addEventListener('click', function () {
    plusSlides1(-1);
  });
  next1.addEventListener('click', function () {
    plusSlides1(1);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sliderBottom);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/design */ "./src/js/parts/design.js");
/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js");
/* harmony import */ var _parts_consultation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/consultation */ "./src/js/parts/consultation.js");
/* harmony import */ var _parts_gift__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/gift */ "./src/js/parts/gift.js");
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js");
/* harmony import */ var _parts_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/filter */ "./src/js/parts/filter.js");
/* harmony import */ var _parts_sliderBottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/sliderBottom */ "./src/js/parts/sliderBottom.js");
/* harmony import */ var _parts_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/expansion */ "./src/js/parts/expansion.js");
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
/* harmony import */ var _parts_hover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/hover */ "./src/js/parts/hover.js");
/* harmony import */ var _parts_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parts/accordion */ "./src/js/parts/accordion.js");
/* harmony import */ var _parts_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/menu */ "./src/js/parts/menu.js");
__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");














window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Object(_parts_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_design__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_consultation__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_gift__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_parts_filter__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_parts_sliderBottom__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_parts_expansion__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_parts_form__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_parts_hover__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_parts_accordion__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_parts_menu__WEBPACK_IMPORTED_MODULE_12__["default"])();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map