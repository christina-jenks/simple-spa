"use strict";

function search(ninjas, searchString) {
	console.log(searchString);
	let first = Math.floor(Math.random() * 10);
	let last = first + Math.floor(Math.random() * 10)
	return ninjas.slice(first, last);
}

export function searchByName(ninjas, name) {

}

export function searchByOffice(ninjas, office) {

}

export function searchByContact(ninjas, socials) {
	
}


export {search}