import page from "./node_modules/page/page.mjs"

import { loadHomeView } from "./src/views/homeView.js"
import { loadFAQView } from "./src/views/faqView.js";
import { } from "./src/dropDownMenu.js"

page.base('/CaricaturesWebsite');

page("/", loadHomeView)
// page("/#/faq", loadFAQView);
page("#/faq", loadFAQView);
page();

// // drop-down menu
// let collapseBtn = document.querySelector(".toggle-btn");
// collapseBtn.addEventListener("click", dropTheMenu);

// let toggleContainerRef = document.querySelector(".toggle-container");
// let toggleNtnsRef = document.querySelector(".toggle-buttons");

// let collapsed = true;

// export function setCollapsed(value) {
//     collapsed = value;
// }

// function dropTheMenu() {
//     if (!collapsed) {
//         toggleContainerRef.classList.remove("show");
//     } else {
//         toggleContainerRef.style.display = "block";
//         toggleContainerRef.classList.add("show");
//     }

//     collapsed = !collapsed;

//     console.log("mina");
// }