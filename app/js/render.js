"use strict";

// TODO: Could refactor later to use class with Builder pattern. 

import * as soc from "./social.js";

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
	elem.setAttribute('tabindex', "0");
	return elem;
}

function office(office) {
	let elem = document.createElement('p');
	elem.appendChild(document.createTextNode("Office: " + office));
	elem.setAttribute('tabindex', "0");
	return elem;
}

function socials(profile) {
	let elem = document.createElement('div');

	let linkedIn = profile['linkedIn'];
	let gitHub = profile['gitHub'];
	let twitter = profile['twitter'];
	let stackOverflow = profile['stackOverflow'];
	
	if(linkedIn) { elem.appendChild(socialLinkedin(linkedIn));}
	if(gitHub) { elem.appendChild(socialGithub(gitHub));}
	if(twitter) { elem.appendChild(socialTwitter(twitter));}
	if(stackOverflow) { elem.appendChild(socialStackoverflow(gitHub));}

	return elem;
}

function socialGithub(gitHub) {
	let a = document.createElement('a')
	a.setAttribute('href', soc.gitHubLink(gitHub));

	let img = document.createElement('img');
	img.setAttribute('alt', 'Github');
	img.setAttribute('src', 'img/gitHub.png');
	img.setAttribute('class', 'social-icon');

	a.appendChild(img);
	return a
}

function socialTwitter(twitter) {
	let a = document.createElement('a')
	a.setAttribute('href', soc.twitterLink(twitter));

	let img = document.createElement('img');
	img.setAttribute('alt', 'Twitter');
	img.setAttribute('src', 'img/twitter.png');
	img.setAttribute('class', 'social-icon');

	a.appendChild(img);
	return a
}

function socialStackoverflow(stackOverflow) {
	let a = document.createElement('a')
	a.setAttribute('href', soc.stackOverflowLink(stackOverflow));

	let img = document.createElement('img');
	img.setAttribute('alt', 'Stack Overflow');
	img.setAttribute('class', 'social-icon');
	img.setAttribute('src', 'img/stackOverflow.png');

	a.appendChild(img);
	return a
}

function socialLinkedin(linkedIn) {
	let a = document.createElement('a')
	a.setAttribute('href', soc.gitHubLink(linkedIn));

	let img = document.createElement('img');
	img.setAttribute('alt', 'LinkedIn');
	img.setAttribute('class', 'social-icon');
	img.setAttribute('src', 'img/linkedIn.png');

	a.appendChild(img);
	return a
}

function createProfile(profile) {

	let root = document.createElement('section');

	root.appendChild(profilePicture(profile['imagePortraitUrl'], profile['name']));

	let nameOfficeDiv = document.createElement('div');
	nameOfficeDiv.appendChild(name(profile['name']));
	nameOfficeDiv.appendChild(office(profile['office']));

	let detailsDiv = document.createElement('div');
	detailsDiv.appendChild(nameOfficeDiv);
	detailsDiv.appendChild(socials(profile));
	root.appendChild(detailsDiv);

	return root;
}


export {createProfile}