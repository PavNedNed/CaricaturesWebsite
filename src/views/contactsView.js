import { html, render } from 'https://unpkg.com/lit-html?module';
// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html `
 <section class="contacts-wrapper">
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/contact-image.jpg">
                </section>
                <section class="right-content">
                    <div><img src="./images/phone-image.jpg"></div>
                    <div>Ако искате да се свържете с нас молим Ви, да ни изпратите email на следния адрес:</div>
                    <a href="mailto:pocomaxs2@gmail.com" rel="noopener"><div class="highlighted">pocomaxs2@gmail.com</div></a>
                    <div>На същия email, може да изпратите идеята си и нужните снимки в оказания формат. </div>
                    <div>Също така можете да се свържете с нас и на следния телефонен номер:</div>
                    <div class="highlighted">+359 895 94 94 00</div>
                    <div class="centered">Нямаме търпение да работим с Вас!</div>
                </section>
            </section>
        </section>
`

export function loadContactsView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);
}