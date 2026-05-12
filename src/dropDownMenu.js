let collapseBtn = document.querySelector(".toggle-btn");
collapseBtn.addEventListener("click", dropTheMenu);

let toggleContainerRef = document.querySelector(".toggle-container");
let toggleNtnsRef = document.querySelector(".toggle-buttons");

let collapsed = true;

export function setCollapsed(value) {
    collapsed = value;
    dropTheMenu();
}

function dropTheMenu() {
    if (!collapsed) {
        toggleContainerRef.classList.remove("show");
    } else {
        toggleContainerRef.style.display = "block";
        toggleContainerRef.classList.add("show");
    }

    collapsed = !collapsed;
}