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
	
	NodeList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
					callback.call(thisArg, this[i], i, this);
			}
	};
}

if (!('remove' in Element.prototype)) {
	Element.prototype.remove = function() {
					if (this.parentNode) {
									this.parentNode.removeChild(this);
					}
	};
}


