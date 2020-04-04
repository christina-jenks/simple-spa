"use strict";

import {createProfile} from "./js/render.js"

// Get the data
let ninjas;
let request = new XMLHttpRequest();
let ninjaUrl = "https://api.tretton37.com/ninjas"

function writeNinjas(target) {

    for(let ninja of ninjas) {
		target.appendChild(createProfile(ninja));
	}
}

function getData(event, callback) {
	if (event.readyState == 4 && event.status == 200) {
	    ninjas = JSON.parse(event.responseText);
	    let target = document.getElementById('ninjas');
	    writeNinjas(target);
	    callback(ninjas);
	}
};

function someListener() {
	console.log('hello');
}

function reportNinjas(ninjas) {
	console.log(ninjas);
}

request.addEventListener('load', function() {
	getData(this, reportNinjas);
});

request.open("GET", ninjaUrl, true);
request.send();

window.addEventListener('load', function(event){ 

	
	console.log('event: ' + event);
	let searchInput = document.getElementById('search');
	console.log(searchInput)
	searchInput.addEventListener('click', someListener);

});