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

	    	let selectedNinjas = ninjas;

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