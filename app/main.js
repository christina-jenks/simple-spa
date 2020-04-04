"use strict";

import {createProfile} from "./js/render.js"
import {search} from "./js/search.js"

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

			let searchInput = document.getElementById('search');
			console.log(searchInput)
			
			searchInput.addEventListener('click', function(event) {

				writeNinjas(search(ninjas, this.value), target );

			});
		});

	});

	request.open("GET", ninjaUrl, true);
	request.send();

});