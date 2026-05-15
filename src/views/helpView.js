import { html, render } from 'https://unpkg.com/lit-html?module';
// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html`
<section class="help-wrapper">
                <section class="top-image">
                    <img src="./images/help-image.jpg">
                </section>
                <section class="text-boxes">
                    <h2>ПОМОЩ</h2>
                    <p class="hanging">
                    Всяка карикатура е 100% ръчно рисувана от професионални художници. Те използват дигитален таблет, за да се насладите на цветните детайли на творбата. Така получавате изцяло ръчно изработено произведение на изкуството в пъстротата на дигиталните цветове.</p>
                    <p class="hanging">
                    Знаем, че празниците не могат да чакат подаръка. Затова ви предлагаме свръх бърза изработка на карикатура по снимка само за 24 часа*. </p>
                    <p class="hanging">
                    Доставката и качеството са нашите приоритети. Затова правим всичко възможно карикатури да станат максимално красиви в максимално кратък срок.</p>
                    </p>


                    <div id="box-1">
                        <p class="title"><strong>Срок за изработка:</strong></p>
                        <p class="hanging">Работим бързо и се съобразяваме изцяло с твоя срок.
Можеш да получиш карикатурата си точно когато ти трябва – дори и за 24 часа.</p>
                    </div>    

                    <div id="box-2">
                        <p class="title"><strong>Срок за доставка:</strong></p>
                        <p class="hanging">Стандартният срок за доставка на територията на Република България е 1 до 2 работни дни.

Можем да доставим карикатурата и с избран от теб куриер. Доставката се таксува отделно от куриерската фирма.  </p>
                    </div> 

                    <p class="star-info">* Експресната изработка за 24 часа важи при изпращане само на дигитален файл.</p>
                    <p class="star-info">**Срокът за изработка започва да тече от момента на финалното потвърждение на описанието (идеята) и снимките.</p>

                </section>
            </section>
`

export function loadHelpView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);
}