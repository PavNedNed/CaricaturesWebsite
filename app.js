//import page from "./node_modules/page/page.mjs"
import page from "https://unpkg.com/page/page.mjs";

import { loadHomeView } from "./src/views/homeView.js"
import { loadFAQView } from "./src/views/faqView.js";

import { loadHelpView } from "./src/views/helpView.js"
import { loadContactsView } from "./src/views/contactsView.js";
import { loadGalleryView } from "./src/views/galleryView.js"
import { loadProductView } from "./src/views/productView.js";
import { loadTemplatesView } from "./src/views/templatesView.js"
import { loadLogosView } from "./src/views/logosView.js";

import { } from "./src/dropDownMenu.js"

// 1. Automatic Base Path Detection
const isGitHub = window.location.hostname.includes('github.io');
const base = isGitHub ? '/CaricaturesWebsite' : '';
page.base(base);

console.log(`Router Base set to: "${base}"`);

// 2. Define Routes
page('*', (ctx, next) => {
  window.scrollTo(0, 0);
  next();
});


page('/', () => page.redirect('/home'));
page('/index.html', () => page.redirect('/home'));
page('/home', loadHomeView);
page('/faq', loadFAQView);

page('/help', loadHelpView);
page('/contacts', loadContactsView);
page('/gallery', loadGalleryView);
page('/product', loadProductView);
page('/templates', loadTemplatesView);
page('/logos', loadLogosView);


// 3. Start the Router
// We use a small delay to ensure the index.html "Clean Up" script finished
setTimeout(() => {
    page.start();
    console.log("page.js started at path:", window.location.pathname);
}, 50);