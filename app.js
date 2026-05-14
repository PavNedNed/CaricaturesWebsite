//import page from "./node_modules/page/page.mjs"
import page from "https://unpkg.com/page/page.mjs";

import { loadHomeView } from "./src/views/homeView.js"
import { loadFAQView } from "./src/views/faqView.js";
import { } from "./src/dropDownMenu.js"


// CHECK LOCALHOST
// const isLocalhost = window.location.hostname === 'localhost' || 
//                     window.location.hostname === '127.0.0.1';

// if (isLocalhost) {
//     console.log("Running on Localhost");
//     // You usually don't need a base path on localhost
//     page.base(''); 
// } else {
//     console.log("Running on GitHub Pages");
//     // This is for your /CaricaturesWebsite/ path
//     page.base('/CaricaturesWebsite');
// }

// // This handles the "empty" path after CaricaturesWebsite/
// // page('/', () => page.redirect('/home')); 

// page("/home", loadHomeView);
// page("/faq", loadFAQView);
// page();

// 1. Automatic Base Path Detection
const isGitHub = window.location.hostname.includes('github.io');
const base = isGitHub ? '/CaricaturesWebsite' : '';
page.base(base);

console.log(`Router Base set to: "${base}"`);

// 2. Define Routes
page('/', () => page.redirect('/home'));
page('/home', loadHomeView);
page('/faq', loadFAQView);

// 3. Start the Router
// We use a small delay to ensure the index.html "Clean Up" script finished
setTimeout(() => {
    page.start();
    console.log("page.js started at path:", window.location.pathname);
}, 50);