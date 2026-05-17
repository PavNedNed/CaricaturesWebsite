import { html, render } from 'https://unpkg.com/lit-html?module';
// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html `
<section class="templates-wrapper">
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/1.jpg">
                    <div class="title">Шаблон на футболист</div>
                    <div class="description">Само лицето и екипировката могат да бъдат променени.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/2.jpg">
                    <div class="title">Шаблон на ловец</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/3.jpg">
                    <div class="title">Шаблон на архитект</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/4.jpg">
                    <div class="title">Шаблон на адвокат</div>
                    <div class="description">Само лицето и текстът могат да бъдат променени.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/5.jpg">
                    <div class="title">Шаблон на барон</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/6.jpg">
                    <div class="title">Шаблон на планинар</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/7.jpg">
                    <div class="title">Шаблон на супермен</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/8.jpg">
                    <div class="title">Шаблон на абитуриент</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/9.jpg">
                    <div class="title">Шаблон на майстор</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/10.jpg">
                    <div class="title">Шаблон на DJ</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/11.jpg">
                    <div class="title">Шаблон на доктор</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/12.jpg">
                    <div class="title">Шаблон на бизнесмен</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/13.jpg">
                    <div class="title">Шаблон на пилот</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/14.jpg">
                    <div class="title">Шаблон на барета</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/15.jpg">
                    <div class="title">Шаблон на сервитьор</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/16.jpg">
                    <div class="title">Шаблон на спортист</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/17.jpg">
                    <div class="title">Шаблон на полицай</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/18.jpg">
                    <div class="title">Шаблон на баскетболист</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/19.jpg">
                    <div class="title">Шаблон на мениджър</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/20.jpg">
                    <div class="title">Шаблон на механик</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/21.jpg">
                    <div class="title">Шаблон на супермен</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/22.jpg">
                    <div class="title">Шаблон на батман</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/23.jpg">
                    <div class="title">Шаблон на учителка</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/24.jpg">
                    <div class="title">Шаблон за дипломиране</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/25.jpg">
                    <div class="title">Шаблон на принцеса</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/26.jpg">
                    <div class="title">Шаблон на стюардеса</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/27.jpg">
                    <div class="title">Шаблон на спортистка</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/28.jpg">
                    <div class="title">Шаблон на туристка</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/29.jpg">
                    <div class="title">Шаблон на жената-чудо</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/30.jpg">
                    <div class="title">Шаблон на доктор</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/31.jpg">
                    <div class="title">Шаблон с народна носия</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/32.jpg">
                    <div class="title">Шаблон на фризьорка</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/33.jpg">
                    <div class="title">Шаблон на барманка</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/34.jpg">
                    <div class="title">Шаблон на красавица</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/35.jpg">
                    <div class="title">Шаблон на медицинска сестра</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/36.jpg">
                    <div class="title">Шаблон на абитуриентка</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>
            <section class="wrap-container">
                <section class="left-image">
                    <img src="./images/templates/37.jpg">
                    <div class="title">Шаблон на пънкар</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
                <section class="right-image">
                    <img src="./images/templates/38.jpg">
                    <div class="title">Шаблон на турист</div>
                    <div class="description">Само лицето може да бъде променено.</div>
                </section>
            </section>

        </section>
`

export function loadTemplatesView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);
}