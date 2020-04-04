"use strict";


function profilePicture(profileUrl, name) {
	
	let img = document.createElement('img');
	img.setAttribute('src', profileUrl);
	img.setAttribute('alt', "portrait of " + name);

	let figure = document.createElement('figure');
	figure.appendChild(img);

	return figure;
}

function name(name) {
	let elem = document.createElement('p');
	elem.appendChild(document.createTextNode(name));
	return elem;
}

function office(office) {
	let elem = document.createElement('p');
	elem.appendChild(document.createTextNode("Office: " + office));
	return elem;
}

function createProfile(profile) {

	let root = document.createElement('section');

	root.appendChild(profilePicture(profile['imagePortraitUrl'], profile['name']));
	root.appendChild(name(profile['name']));
	root.appendChild(office(profile['office']));

	return root;
}


export {createProfile}