// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { html, render } from 'https://unpkg.com/lit-html?module';
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html `
    <section class="home-wrapper">
                <section class="img-container">
                    <section class="top-text" data-text="РЪЧНО РИСУВАНИ">РЪЧНО РИСУВАНИ</section>
                    <section class="main-text">КАРИКАТУРИ</section>
                    <section class="bottom-text" data-text="ПО ПОРЪЧКА">ПО ПОРЪЧКА</section>
                    <button class="more-btn">НАУЧИ ПОВЕЧЕ</button>
                </section>

                <hr>

                <section class="top-sections-text-container">
                    <section class="text-title">
                        ИЗРАБОТКА НА ДИГИТАЛНИ КАРИКАТУРИ И ПОРТРЕТИ!
                    </section>
                    <section class="text-description">
                        Предлагаме изработката на дигитални карикатури и портрети с помощта на професионални WACOM  графични таблети и специализиран софтуер.
                    </section>
                </section>

                <section class="home-sections-wrapper">
                    <section class="home-section-container">
                        <section class="home-section-img">
                            <img src="./images/home/h_1.jpg">
                        </section>
                        <section class="home-section-text">
                            Работим в три фази - скеч, линиране и оцветяване.<br>
                            Първата фаза започва след като ни споделите Вашата идея и ни изпратите нужните снимки.
                        </section>
                        <a href="product"><button class="more-btn">НАШАТА РАБОТА</button></a>
                    </section>
                    <section class="home-section-container">
                        <section class="home-section-img">
                            <img src="./images/home/h_2.jpg">
                        </section>
                        <section class="home-section-text">
                            След като сте доволни с крайния резултат, печатаме картините с помощта на принтери с висока резолюция, слагаме ги в рамки и ги изпращаме чрез куриер.
                        </section>
                        <a href="gallery"><button class="more-btn">ПОРТФОЛИО</button></a>
                    </section>
                    <section class="home-section-container">
                        <section class="home-section-img">
                            <img src="./images/home/h_4.jpg">
                        </section>
                        <section class="home-section-text">
                            Обикновено използваме <strong><a href="mailto:pocomaxs2@gmail.com" rel="noopener">email кореспонденция</a></strong>, за да общуваме с нашите клиенти, но можете да се свържете с нас и чрез нашата <strong><a href="contacts">контактна страница</a></strong>.
                        </section>
                        <a href="contacts"><button class="more-btn">КОНТАКТИ</button></a>
                    </section>
                </section>
            </section>
`

export function loadHomeView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);
}