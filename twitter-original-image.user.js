// ==UserScript==
// @name        Twitter Original Image
// @description Add ":orig" to twitter images.
// @namespace   eight04.blogspot.com
// @include     https://twitter.com/*
// @version     0.1.0
// @license		MIT
// @supportURL	https://github.com/eight04/twitter-original-image/issues
// @compatible	Firefox
// @grant       none
// ==/UserScript==

var id;
function replace() {
	var el = document.querySelector("#permalink-overlay [data-item-id]");
	if (!el) {
		id = null;
		return;
	}
	var newId = el.dataset.itemId;
	if (newId == id) {
		return;
	}
	id = newId;
	
	var imgs = document.querySelectorAll("#permalink-overlay .AdaptiveMedia img"),
		img;
	
	for (img of imgs) {
		img.src += ":orig";
	}
}

replace();

new MutationObserver(replace).observe(document.querySelector("#permalink-overlay"), {
	childList: true,
	subtree:true
});
