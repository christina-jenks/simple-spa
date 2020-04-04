"use strict";

import {gitHubLink, linkedInLink, twitterLink} from "../js/social.js";

describe("Social Link Generation", () => {

	test("Github username should generate profile link", () => {
	    
		const input = "thecodejunkie";
	    expect(gitHubLink(input)).toEqual("https://github.com/thecodejunkie");

	});

	test("LinkedIn profile slug segment should generate profile link", () => {
	    
	    const input = "/in/nahuelrodrigoianni/sv";
	    expect(linkedInLink(input)).toEqual("https://linkedin.com/in/nahuelrodrigoianni/sv");

	});

	test("Twitter handle should generate profile link", () => {
	    
	    const input = "allrameest";
	    expect(twitterLink(input)).toEqual("https://twitter.com/allrameest");

	});
});
	