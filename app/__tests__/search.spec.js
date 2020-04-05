"use strict";

import {searchByName, searchByOffice, searchByGitHub, searchByTwitter, searchByStackOverflow, searchByLinkedIn} from "../js/search.js";

describe("Search / Filter Feature", () => {
	test("search by name empty", () => {
		const pool = [
			{name: "foo"},
			{name: "bar"},
			{name: "BAZ"},
			{name: null}
		]

		expect(searchByName(pool, "")).toEqual([
			{name: "foo"},
			{name: "bar"},
			{name: "BAZ"},
			{name: null}
		]);

	});

	test("search by name", () => {
		const pool = [
			{name: "foo"},
			{name: "bar"},
			{name: "BAZ"},
			{name: null}
		]

		expect(searchByName(pool, "ba")).toEqual([
			{name: "bar"},
			{name: "BAZ"}
		]);

	});

	test("search by office, empty", () => {
		const pool = [
			{office: "foo"},
			{office: "bar"},
			{office: "BAZ"},
			{office: null}
		]

		expect(searchByOffice(pool, "")).toEqual([
			{office: "foo"},
			{office: "bar"},
			{office: "BAZ"},
			{office: null} // seems we have some remote workers not belonging to an office?
		]);


	});

	test("search by office", () => {
		const pool = [
			{office: "foo"},
			{office: "bar"},
			{office: "BAZ"},
			{office: null}
		]

		expect(searchByOffice(pool, "ba")).toEqual([
			{office: "bar"},
			{office: "BAZ"}
		]);
	});

	// test("search by contact link", () => {
	// 	// This feature is a bit vague to me, so I'll assume
	// 	// folks want to search by those with X profile more than
	// 	// they want to search by a specific username across contact links
	// 	// Will operate on an object of booleans, OR'ing them together for now...

	// 	const pool = [
	// 		{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
	// 	]

	// 	expect(searchByContact(pool, {gitHub: true, twitter: true, stackOverflow: true, linkedIn: true})).toEqual([
	// 		{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
	// 	]);

	// 	expect(searchByContact(pool, {gitHub: false, twitter: false, stackOverflow: false, linkedIn: false})).toEqual([]);

	// 	expect(searchByContact(pool, {gitHub: true, twitter: false, stackOverflow: false, linkedIn: false})).toEqual([
	// 		{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
	// 		{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
	// 	]);
		
	// });

	test("search by gitHub", () => {
		const pool = [
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]

		expect(searchByGitHub(pool, true)).toEqual([
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]);
	});

	test("search by twitter", () => {
		const pool = [
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]

		expect(searchByTwitter(pool, true)).toEqual([
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]);
	});

	test("search by stackOverflow", () => {
		const pool = [
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]

		expect(searchByStackOverflow(pool, true)).toEqual([
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]);
	});

	test("search by linkedIn", () => {
		const pool = [
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: "4042508", linkedIn: null}
		]

		expect(searchByLinkedIn(pool, true)).toEqual([
			{gitHub: null, twitter: "@somebody", stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: null, stackOverflow: "4042508", linkedIn: "/in/somebody/"},
			{gitHub: "abc", twitter: "@somebody", stackOverflow: null, linkedIn: "/in/somebody/"}
		]);
	});
});