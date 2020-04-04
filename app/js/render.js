"use strict";

function createProfile(message) {
	let node = document.createElement('p');
	node.appendChild(document.createTextNode(message));
	return node;
}

export {createProfile}