"use strict";

import {foo} from "../src.js";

describe("foo", () => {
	test("it should return foo", () => {
	    
	    expect(foo()).toEqual("foo");

	});
});
	