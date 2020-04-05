
# About
This is a profile page which lists and provides filtering on Tretton37's ninjas.

# Feature Rationale

## Design/Accessibility
Overall structure of the page must be accessible to visually-impaired audiences. Therefore, using features such as semantic html, keyboard navigation, and screen reader functionality must take higher precedence over fancy animations. These requirements most meet the minimum: 

 - Keyboard only function (1 pt)
 - Screen reader function (1 pt)

I will also attempt to do this without frameworks, so that CSS is framework-agnostic. In particular, I'm looking forward to learning a little bit about flex-box. 

 - No UI framework used (such as Bootstrap, Ant) (1 pt)

## Functionality
The purpose of the page is to describe the Ninjas at Tretton37, so providing filtering/sorting features should take highest priority. Most likely an user will either (1) want to find people closest to them geographically, and (2) find examples of their work and who they are. Therefore, providing filters for geography and contact info would make the most sense. These requirements most meet the minimum: 

 - Filter by name and office (1 pt)
 - Filter by contact links (1 pt)

I will also attempt to do this without frameworks, so that the code is framework-agnostic.

 - No framework used (such as React, Angular, Vue) (2 pt)

## Testing/QA
I typically take a test-driven approach, so having unit tests would make the most sense. These requirements most meet the minimum: 

 - Unit tests for existing functionality (reasonable coverage) (2 pt)

Also generally will aim for Chrome compatibility; I'd expect Chrome/Firefox/Edge compatibility to have greater user/market share than IE11 for a software company site, but I could be wrong. I could also make this IE11 compatible with polyfills, however in interest of time I'll hold off on that for now.

 - Works in Chrome, Firefox, Edge (1 pt)

# Install

```
npm install
```

# Test

```
npm test
```

If you want to view the browser locally in your browser, you will need to serve the pages statically with a web server as ES6 modules don't work properly with `file://` files. You can then access the webpage at http://localhost:3000
```
node index.js
```
