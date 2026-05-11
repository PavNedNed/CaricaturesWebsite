import page from "./node_modules/page/page.mjs"

import { loadHomeView } from "./src/views/homeView.js"
import { loadFAQView } from "./src/views/faqView.js";
import { } from "./src/dropDownMenu.js"

page.base('/CaricaturesWebsite');

// This handles the "empty" path after CaricaturesWebsite/
page('/', () => page.redirect('/home')); 

page("/home", loadHomeView);
page("/faq", loadFAQView);
page();