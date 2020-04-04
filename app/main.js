"use strict";

import {createProfile} from "./js/render.js"

// Get the data
let xmlhttp = new XMLHttpRequest();
let ninjaUrl = "https://api.tretton37.com/ninjas"
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    let ninjas = JSON.parse(this.responseText);

	    let target = document.getElementById('ninjas');
	    for(let ninja of ninjas) {
			target.appendChild(createProfile(ninja));
		}
    }
};

xmlhttp.open("GET", ninjaUrl, true);
xmlhttp.send();
