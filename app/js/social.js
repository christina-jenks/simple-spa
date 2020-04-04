"use strict";

function gitHubLink(username) {
	return "https://github.com/" + username;
}

function linkedInLink(profileSlug) {
	return "https://linkedin.com" + profileSlug;
}

function twitterLink(username) {
	return "https://twitter.com/" + username;
}

export {gitHubLink, linkedInLink, twitterLink}