let collapseBtn = document.querySelector(".toggle-btn");
collapseBtn.addEventListener("click", dropTheMenu);

let toggleContainerRef = document.querySelector(".toggle-container");
let toggleNtnsRef = document.querySelector(".toggle-buttons");

let collapsed = true;

function dropTheMenu(e) {
    if (!collapsed) {
        // toggleContainerRef.style.display = "none"
        toggleContainerRef.classList.remove("show");
    } else {
        toggleContainerRef.style.display = "block"
        toggleContainerRef.classList.add("show");
    }   
    collapsed = !collapsed; 
}