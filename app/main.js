"use strict";

import {createProfile} from "./js/render.js"
import {searchByName, searchByOffice, searchByContact} from "./js/search.js"

function writeNinjas(ninjas, target) {

	// clear and overwrite the contents of target
	target.innerHTML = '';
    for(let ninja of ninjas) {
		target.appendChild(createProfile(ninja));
	}

}

function getData(event, callback) {
	if (event.readyState == 4 && event.status == 200) {
	    let ninjas = JSON.parse(event.responseText);
	    callback(ninjas);
	}
};

window.addEventListener('load', function(event){ 

	let request = new XMLHttpRequest();
	let ninjaUrl = "https://api.tretton37.com/ninjas"

	request.addEventListener('load', function() {
		
		getData(this, function(ninjas) {
			let target = document.getElementById('ninjas');
	    	writeNinjas(ninjas, target);
			
			// Name Search
			document.getElementById('searchByName').addEventListener('click', function(event) {
				writeNinjas(searchByName(ninjas, this.value), target );
			});

			// Office Search
			document.getElementById('searchByOffice').addEventListener('click', function(event) {
				writeNinjas(searchByOffice(ninjas, this.value), target );
			});

			// Contacts/Socials Search
			let contacts = {gitHub: true, twitter: true, stackOverflow: true, linkedIn: true}
			document.getElementById('gitHub').addEventListener('click', function(event) {
				contacts.gitHub = this.checked;
				writeNinjas(searchByContact(ninjas, contacts), target);
			});

			document.getElementById('linkedIn').addEventListener('click', function(event) {
				contacts.linkedIn = this.checked;
				writeNinjas(searchByContact(ninjas, contacts), target);
			});

			document.getElementById('twitter').addEventListener('click', function(event) {
				contacts.twitter = this.checked;
				writeNinjas(searchByContact(ninjas, contacts), target);
			});

			document.getElementById('stackOverflow').addEventListener('click', function(event) {
				contacts.stackOverflow = this.checked;
				writeNinjas(searchByContact(ninjas, contacts), target);
			});

		});

	});

	request.open("GET", ninjaUrl, true);
	request.send();

});