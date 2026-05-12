import { html, render } from 'https://unpkg.com/lit-html?module';
// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html `
        <section class="logos-wrapper">
            <h2>ЛОГОТА</h2>
            <section class="logos-top-wrapper">                
                <section class="logos-left-content">
                    <section class="text">
                        <p>Притежаването на професионално лого е изключително важно за всеки бизнес.</p>
                        <p class="bottom-description">Можете да поръчате карикатурно лого от нас за Вашия уебсайт, визитни картички, презентации и т.н.</p>
                    </section>
                    <section class="logos-image">
                        <img src="./images/logos/MARY.jpg">
                    </section>
                    <section class="logos-image">
                        <img src="./images/logos/HANDYMAN.jpg">
                    </section>
                </section>
                <section class="logos-right-content">
                    <section class="right-img">
                        <img src="./images/logos/HANDYMAN_business_card.jpg">
                    </section>

                    <section class="right-text">
                        <h3>За повече информация:</h3>
                        <ul>
                            <li>Растерни са, не векторни;</li>
                            <li>Размери: 4000x4000px, 300 DPI;</li>
                            <li>Резолюцията може да е по-голяма и можем да ги векторизираме ако се налага;</li>
                            <li>Получавате source файловете.</li>
                        </ul>
                        <p>Можем да направим дизайн на Вашите бизнес картички, банери и реклами според Вашето персонално бизнес брандиране.</p>
                        <p class="last"><strong>Използвайте нашата <a href="contacts">контактна страница</a> за да се възползвате от услугите ни!</strong></p>
                    </section>

                </section>
            </section>
            
            <section class="logos-bottom-wrapper">                
                <section class="bottom-left-content">
                    <h2>АВАТАРИ</h2>
                    <section class="text">
                        <p>Социалните медии са почти неизбежни в живота на всеки модерен човек.</p>
                        <p>Разполагането с уникален аватар може да направи Вашият профил да се отличава от масата.</p>
                        <p class="last"><strong>Използвайте нашата <a href="contacts">контактна страница</a> за да се възползвате от услугите ни!</strong></p>
                    </section>
                </section>
                <section class="bottom-middle-content">
                    <img src="./images/logos/PITT.jpg">
                </section>
                <section class="bottom-right-content">
                    <img src="./images/logos/JR.jpg">
                </section>
            </section>
            <section class="logos-bottom-wrapper">                
                <section class="bottom-left-content">
                    <img src="./images/logos/JOLIE.jpg">
                </section>
                <section class="bottom-middle-content">
                    <img src="./images/logos/RIH.jpg">
                </section>
                <section class="bottom-right-content">
                    <img src="./images/logos/ROBBIE.jpg">
                </section>
            </section>
        </section>
`

export function loadLogosView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);
}