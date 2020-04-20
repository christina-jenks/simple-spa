"use strict";

import {gitHubLink, linkedInLink, twitterLink, stackOverflowLink} from '../utils/social';

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

test("StackOverflow user id generates profile link", () => {
	
	const input = "12345";
	expect(stackOverflowLink(input)).toEqual("https://stackoverflow.com/users/12345");

});
	