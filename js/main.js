(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('uuid')) :
	typeof define === 'function' && define.amd ? define(['uuid'], factory) :
	(factory(global.uuid));
}(this, function (uuid) { 'use strict';

	var chatId = uuid.v4();

	console.log(window.location.href);
	console.log(chatId);

}));