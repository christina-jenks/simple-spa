"use strict";

import {createProfile} from "./js/render.js"

let target = document.getElementById('ninjas');

let ninjas = [
    {
        name: "Kristoffer Lind",
        email: "xevfgbssre.yvaq@gerggba37.pbz",
        phoneNumber: "+46738133739",
        office: "Lund",
        tagLine: "I'm a curious developer with a love of the great outdoors",
        mainText: "<p>I’ve been curious about technology since childhood and I’ve always enjoyed solving problems and building stuff. Software development is a seemingly endless stream of problems to solve and building stuff out of nothing. Upon discovering this I was hooked. Development ended up being a hobby for a few years as I served as a systems technician in the military and proceeded to work with crafting things in stone, until I finally decided to take up school again and started doing development professionally.</p>\n\n<p>So far I’ve learned a few languages and database options, and moving forward I’d like to expand my knowledge of c#, js and document databases. I also think learning new technologies and languages gives new ideas that can be applied elsewhere. Broader exploration will therefore both satisfy my curiosity and expand my knowledge.</p>\n\n<p>I spend my spare time with my family and we try to go snowboarding, mountainbiking or inline skating together as often as possible.​</p>",
        gitHub: "kristofferlind",
        twitter: null,
        stackOverflow: null,
        linkedIn: null,
        imagePortraitUrl: "https://tretton37img.blob.core.windows.net/ninja-portrait/kristoffer-lind-cv",
        imageBodyUrl: "https://tretton37img.blob.core.windows.net/ninja-body/kristoffer-lind"
    },
    {
        name: "Mark Fenzel",
        email: "znex.sramry@gerggba37.pbz",
        phoneNumber: "+46702339057",
        office: "Lund",
        tagLine: null,
        mainText: "<p>It makes me especially proud to add the 37th nationality to tretton37, the Swiss nationality. I was born and grew up in Switzerland in Solothurn a small not far from Berne the Swiss capital. I went to Berne University and received my Master in Business Administration. But I was always in touch with technology. I was fascinated by the combination of strategy, business and tech. Especially how technology can support companies and their customers. I am always keen on learning new things that is also why I have continued studying and received last year my Master in Digital Business Development. </p><p>Successful meetings with customers gives lots of positive energy and satisfaction. I really like to understand the customers’ challenges and brainstorm around potential solutions and the way forward. Discussions and negotiations can be difficult and might not be easily resolved but I am always positive and optimistic that even the most complicated situations can be turned around. </p><p> I enjoy spending quality time with my family. With my wife Linda and my three kids, Alva, Tiida and Felix we like to travel and share some common sports like skiing and tennis. We visit my home country regularly also because I have all my family and friends there.. A favourite of mine is the “Swiss Fasnacht” which happens every year during February/March which is a kind of karneval and of course there is skiing in the Swiss alps. </p>",
        gitHub: null,
        twitter: null,
        stackOverflow: null,
        linkedIn: "/in/mark-fenzel-176b461b/",
        imagePortraitUrl: "https://tretton37img.blob.core.windows.net/ninja-portrait/mark-fenzel-cv",
        imageBodyUrl: "https://tretton37img.blob.core.windows.net/ninja-body/mark-fenzel-body"
    },
    {
        name: "Stefan Nilsson",
        email: "fgrsna.avyffba@gerggba37.pbz",
        phoneNumber: "+46727133737",
        office: "Lund",
        tagLine: "Writing clean code that I can be proud of makes me feel good",
        mainText: "<p>In my youth I enjoyed building games and applications, so the path to becoming a developer was pretty clear, and getting paid for having fun is like a dream come true. In the beginning I was very technical, but after a few years I noticed that development is very much about people; to analyse how people behave and making it easier for them is my drive. My ambition is to always be open and curious whilst still maintaining focus on the task in hand.</p>\n\n<p>I have developed many web, desktop and mobile applications in different languages. In the past year I have been very much focused on cross platform development, both js and xamarin applications. That is my passion at the moment, and in my spare time I am developing a time management app which will work across platforms.  I have been a gamer for as long as I can remember, and gaming is my way to relax. I try to bring my gaming experience to business applications, in order to make them fun and easy to use.</p>\n  \n<p>It's fantastic to work in an area that still challenges and excites me even after 13 years of working with it.</p>\n \n<p>Outside of work, my time is spent largely with my wife, our two daughters, our dog and our two cats. I also like to keep active, and maybe someday I’ll pick up where I left off with my fencing training!</p>\n",
        gitHub: "stfnilsson",
        twitter: "stfnilsson",
        stackOverflow: null,
        linkedIn: "/pub/stefan-nilsson/33/44/746",
        imagePortraitUrl: "https://tretton37img.blob.core.windows.net/ninja-portrait/stefan-nilsson",
        imageBodyUrl: "https://tretton37img.blob.core.windows.net/ninja-body/stefan-nilsson"
    }
];

for(let ninja of ninjas) {
	target.appendChild(createProfile(ninja));
}