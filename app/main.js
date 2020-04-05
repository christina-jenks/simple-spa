"use strict";

import {createProfile} from "./js/render.js"
import {searchByName, searchByOffice, searchByContact, searchByGitHub, searchByTwitter, searchByLinkedIn, searchByStackOverflow} from "./js/search.js"

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

	    	let selectedNinjas = ninjas;
			
			// // Name Search
			// document.getElementById('searchByName').addEventListener('keyup', function(event) {
			// 	//writeNinjas(searchByName(ninjas, this.value), target );
			// 	selectedNinjas = searchByName(selectedNinjas, this.value);
			// });

			// // Office Search
			// document.getElementById('searchByOffice').addEventListener('keyup', function(event) {
			// 	//writeNinjas(searchByOffice(ninjas, this.value), target );
			// 	selectedNinjas = searchByOffice(selectedNinjas, this.value);
			// });

			// // Contacts/Socials Search
			// let contacts = {gitHub: true, twitter: true, stackOverflow: true, linkedIn: true}
			// document.getElementById('gitHub').addEventListener('click', function(event) {
			// 	//writeNinjas(searchByGitHub(ninjas, contacts), target);
			// 	selectedNinjas = searchByGitHub(selectedNinjas, this.checked);
			// });

			// document.getElementById('linkedIn').addEventListener('click', function(event) {
			// 	contacts.linkedIn = this.checked;
			// 	//writeNinjas(searchByLinkedIn(ninjas, contacts), target);
			// 	selectedNinjas = searchByLinkedIn(selectedNinjas, this.checked);
			// });

			// document.getElementById('twitter').addEventListener('click', function(event) {
			// 	contacts.twitter = this.checked;
			// 	//writeNinjas(searchByTwitter(ninjas, contacts), target);
			// 	selectedNinjas = searchByTwitter(selectedNinjas, this.checked);
			// });

			// document.getElementById('stackOverflow').addEventListener('click', function(event) {
			// 	contacts.stackOverflow = this.checked;
			// 	//writeNinjas(searchByStackOverflow(ninjas, contacts), target);
			// 	selectedNinjas = searchByStackOverflow(selectedNinjas, this.checked);
			// });

			document.getElementById('searchForm').addEventListener('submit', function(event) {

				event.preventDefault();
				
				selectedNinjas = searchByName(selectedNinjas, document.getElementById('searchByName').value);
				selectedNinjas = searchByOffice(selectedNinjas, document.getElementById('searchByOffice').value);

				let contacts = {
					gitHub: document.getElementById('gitHub').checked,
					linkedIn: document.getElementById('linkedIn').checked,
					twitter: document.getElementById('twitter').checked,
					stackOverflow: document.getElementById('stackOverflow').checked
				}
				selectedNinjas = searchByContact(selectedNinjas, contacts);
				
				writeNinjas(selectedNinjas, target);
				selectedNinjas = ninjas;
			});

		});

	});

	request.open("GET", ninjaUrl, true);
	request.send();

});