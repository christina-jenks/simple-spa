"use strict";

function search(ninjas, searchString) {
	let first = Math.floor(Math.random() * 10);
	let last = first + Math.floor(Math.random() * 10)
	return ninjas.slice(first, last);
}


export {search}