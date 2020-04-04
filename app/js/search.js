"use strict";

function search(ninjas, searchString) {
	console.log(searchString);
	let first = Math.floor(Math.random() * 10);
	let last = first + Math.floor(Math.random() * 10)
	return ninjas.slice(first, last);
}

export function searchByName(ninjas, name) {

	let searchTerm = name.toUpperCase();

	return ninjas.filter(ninja => 
		ninja['name']
		.toUpperCase()
		.search(searchTerm) > -1)
}

export function searchByOffice(ninjas, office) {
	let searchTerm = office.toUpperCase();

	return ninjas.filter(ninja => 
		ninja['office']
		.toUpperCase()
		.search(searchTerm) > -1)
}

export function searchByContact(ninjas, contacts) {
	return ninjas.filter(ninja =>
		ninja['gitHub'] == contacts['gitHub'] ||
		ninja['twitter'] == contacts['twitter'] || 
		ninja['stackOverflow'] == contacts['stackOverflow'] ||
		ninja['linkedIn'] == contacts['linkedIn']
		)
}


export {search}