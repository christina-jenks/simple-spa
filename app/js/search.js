"use strict";

function search(ninjas, searchString) {
	console.log(searchString);
	let first = Math.floor(Math.random() * 10);
	let last = first + Math.floor(Math.random() * 10)
	return ninjas.slice(first, last);
}

export function searchByName(ninjas, name) {

	let searchTerm = name.toUpperCase();

	return ninjas.filter( (ninja) => {

		if(ninja.name == null) {
			return searchTerm == '' ? true : false;
		} else {
			return ninja.name.toUpperCase().search(searchTerm) > -1;
		}

	});
}

export function searchByOffice(ninjas, office) {
	let searchTerm = office.toUpperCase();

	return ninjas.filter((ninja) => {
		if(ninja.office == null) {
			return searchTerm == '' ? true : false;
		} else {
			return ninja['office'].toUpperCase().search(searchTerm) > -1;
		}
	});
}

// export function searchByContact(ninjas, contacts) {
// 	return ninjas.filter( (ninja) => {

// 		return (
// 			(ninja['gitHub'] && contacts['gitHub']) ||
// 			(ninja['twitter'] && contacts['twitter']) || 
// 			(ninja['stackOverflow'] && contacts['stackOverflow']) ||
// 			(ninja['linkedIn'] && contacts['linkedIn'])
// 		);
		
// 	})
// }

export function searchByGitHub(ninjas, val) {

}

export function searchByTwitter(ninjas, val) {
	
}

export function searchByStackOverflow(ninjas, val) {
	
}

export function searchByLinkedIn(ninjas, val) {
	
}


export {search}