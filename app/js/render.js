"use strict";

function createProfile(profile) {
	let node = document.createElement('p');
	node.appendChild(document.createTextNode(message));
	return node;
}

export {createProfile}