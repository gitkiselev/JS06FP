require('formdata-polyfill');
	import 'nodelist-foreach-polyfill';
	import design from './parts/design';
	import slider from './parts/slider';
	import consultation from './parts/consultation';
	import gift from './parts/gift';
	import calc from './parts/calc';
	import filter from './parts/filter';
	import sliderBottom from './parts/sliderBottom';
	import expansion from './parts/expansion';
	import form from './parts/form';
	import hover from './parts/hover';
 import accordion from './parts/accordion';
 import menu from './parts/menu';
	window.addEventListener('DOMContentLoaded', function(){
		'use strict';
		
		
		
		slider();
		design();
		consultation();
		gift();
		calc();
		filter();
		sliderBottom();
		expansion();
		form();
		hover();
		accordion();
		menu();
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
// (function() {
// 	var arr = [window.Element, window.CharacterData, window.DocumentType];
// 	var args = [];

// 	arr.forEach(function (item) {
// 			if (item) {
// 					args.push(item.prototype);
// 			}
// 	});

// 	// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
// 	(function (arr) {
// 			arr.forEach(function (item) {
// 					if (item.hasOwnProperty('remove')) {
// 							return;
// 					}
// 					Object.defineProperty(item, 'remove', {
// 							configurable: true,
// 							enumerable: true,
// 							writable: true,
// 							value: function remove() {
// 									this.parentNode.removeChild(this);
// 							}
// 					});
// 			});
// 	})(args);
// })();
if (!('remove' in Element.prototype)) {
	Element.prototype.remove = function() {
					if (this.parentNode) {
									this.parentNode.removeChild(this);
					}
	};
}
// Call remove() according to your need
child.remove();

