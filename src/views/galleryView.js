import { html, render } from 'https://unpkg.com/lit-html?module';
// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html `
<section class="gallery-wrapper">
    <section class="gallery-top-text">
        <h2>ГАЛЕРИЯ</h2>
        <p>Тук можете да разгледате част от нашата работа:</p>
    </section>
    <div class="carousel-container">


        <!-- REQUIRED -->
        <div class="carousel" id="carousel"></div>

        <button class="nav-btn prev" onclick="prevSlide()">❮</button>
        <button class="nav-btn next" onclick="nextSlide()">❯</button>

        <!-- REQUIRED -->
        <div class="dots" id="dots"></div>

    </div>
</section>
`

export function loadGalleryView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);

    // Initialize AFTER inserting HTML
    initGallery();
}