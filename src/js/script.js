require('formdata-polyfill');
	import 'nodelist-foreach-polyfill';
	import design from './parts/design';
	
	import slider from './parts/slider';
	import consultation from './parts/consultation';
	import gift from './parts/gift';
	window.addEventListener('DOMContentLoaded', function(){
		'use strict';
		
		
		
		slider();
		design();
		consultation();
		gift();
		
		
		
		
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

