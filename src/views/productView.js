import { html, render } from 'https://unpkg.com/lit-html?module';
// import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { setCollapsed } from "./../dropDownMenu.js"

let main;

let temp = (dummy) => html `
<section class="product-wrapper">
            <section class="product-top-text">
                <h2>Подготовка</h2>
                <ul>
                    <li>Преди да започнем работа трябва да ни обясните какво точно искате от нас;</li>
                    <li>На този етап събираме всички нужни снимки, за да започнем проекта - обикновено 2-3 снимки с добро качество на лицата, които ще рисуваме;</li>
                    <li>След като определим цената за изработката, трябва да заплатите сумата предварително(банков път, Paypal, Изипей, Еконт...).</li>
                </ul>
                <div class="underlined-text">
                    ЗАБЕЛЕЖКА 1: Изискваме снимки на домашни любимци, коли или какъвто и да е тип превозни средства, или конкретна сграда... и т.н.
                </div>
                <div class="underlined-text">
                    ЗАБЕЛЕЖКА 2: Повечето от нашите клиенти поръчват карикатури в А4 и А3 форматни рамки, но ние можем да направим изображение във всякакъв размер по Ваше желание(работим с вектори) и да Ви изпратим файла дигитално.
                </div>
            </section>

            <section class="wrap-container">
                <section class="wrap-image">
                    <img src="./images/product/1_work.jpg">
                    <h2>Фаза 1: СКЕЧ</h2>
                    <ul>
                        <li>По време на тази фаза започваме с груб скеч на обектите(персонажи, домашни любимци, коли...);</li>
                        <li>След това изпращаме мостра на клиента за одобрение;</li>
                        <li>Правим колкото е необходимо на брой промени докато стигнем до съгласие, след което продължаваме със следващия етап.</li>
                    </ul>
                    <p class="tools-text"><strong>ИНСТРУМЕНТИ:</strong><br>Молив, хартия и скенер</p>
                </section>
                <section class="wrap-image">
                    <img src="./images/product/2_work.jpg">
                    <h2>Фаза 2: ЛИНИРАНЕ</h2>
                    <ul>
                        <li>Полагаме скеча, който сме направили по време на Фаза 1, под формата на шаблон и започваме да линираме над него;</li>
                        <li>Използваме различни образци и дебелени на линиите, за да постигнем нашия уникален стил;</li>
                        <li>Подготвяме обектите за оцветяване.</li>
                    </ul>
                    <p class="tools-text"><strong>ИНСТРУМЕНТИ:</strong><br>Wacom таблет, Illustrator</p>
                </section>
                <section class="wrap-image">
                    <img src="./images/product/3_work.jpg">
                    <h2>Фаза 3: ОЦВЕТЯВАНЕ</h2>
                    <ul>
                        <li>Импортираме векторизираните линии в растерна програма и разпределяме главните цветове;</li>
                        <li>Оцветяваме външните очертания и започваме да добавяме светлосенки;</li>
                        <li>След това поставяме последните щрихи и изпращаме продукта на клиента, ако имаме одобрение го принтираме (висококачествен печат с 8 цвята) и рамкираме;</li>
                        <li><strong>Готови сме за изпращане!</strong></li>
                    </ul>
                    <p class="tools-text"><strong>ИНСТРУМЕНТИ:</strong><br>Wacom таблет, Illustrator & Photoshop</p>
                </section>
            </section>

            <section class="product-bottom-text">
                <h3>Долу можете да видите малка част от нашите проекти по време на трифазовия работен процес:</h3>
            </section>
            
            <div class="product-img"><img src="./images/product/product-img-1.jpg"></div>
            <div class="product-img"><img src="./images/product/product-img-2.jpg"></div>
            <div class="product-img"><img src="./images/product/product-img-3.jpg"></div>
            <div class="product-img"><img src="./images/product/product-img-4.jpg"></div>
            <div class="product-img"><img src="./images/product/product-img-5.jpg"></div>
            <div class="product-img"><img src="./images/product/product-img-6.jpg"></div>
            
        </section>
`

export function loadProductView(ctx) {
    main = document.querySelector("main");

    render(temp("dummy"), main);

    setCollapsed(false);
}