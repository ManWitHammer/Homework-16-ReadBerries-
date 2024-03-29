import startTimer from "./actions/startTime.mjs";
import getData from "./actions/getData.mjs";
import discount from "./actions/discount.mjs";

const container = document.querySelector('.container')
const preloader = document.querySelector('.preloader');
const infoblocked = document.querySelector('.infoblock')
const spinner = document.querySelector('.spinner')

window.addEventListener('load', function () {
    preloader.classList.add('invisblock');
    spinner.style.display = 'none'
    setTimeout(() => {
        preloader.style.display = 'none'
    }, 1000)
  });

getData('http://localhost:3000/PRODUCTS')
    .then(data => {
        data.forEach(element => {
            container.insertAdjacentHTML(
                'beforeend',
                `
                <div class="user">
                    <div class="picture">
                        <img src="${element.picture}">
                        <div class="overlay">-25%</div>
                        <div class="timer"></div>
                    </div>
                    <p class="cost">${discount(element.cost)}ㅤ<span style="text-decoration: line-through;">${element.cost}</span></p>
                    <p class="producer">${element.publisher}/<span>${element.name}</span></p>
                    <p class="producer"><span>${element.quantity}</span> в наличии</p>
                </div>
                `
            )
        })
        startTimer(infoblocked, data, container)
        container.insertAdjacentHTML(
            'afterend',
            `
            <div class="aboutblock">
                <p class="upT">© 1939...2024 ReadBerries</p>
                <p class="downT">ООО «ИМВБРБ», г. Минск, ул. Грушевская 21, помещение 217. УНП 193630204 
                (сви­де­тельст­во о го­су­дар­ст­вен­ной ре­гист­ра­ции юри­ди­чес­ко­го ли­ца вы­да­но Мин­ским гор­ис­пол­ко­мом от 06.06.2022 г. №0198794).
                Да­та вклю­че­ния све­де­ний об ин­тер­нет-ма­га­зи­не в Тор­го­вый ре­естр Рес­пуб­ли­ки Бе­ла­русь 01.07.2022. Телефон для связи: +375 17 388 60 00.
                Режим работы: круглосуточно. Ли­цо, упол­но­мо­чен­ное про­дав­цом рас­смат­ри­вать об­ра­ще­ния по­ку­па­те­лей о на­ру­ше­нии их прав,
                пре­ду­смот­рен­ных за­ко­но­да­тельст­вом о за­щи­те прав по­тре­би­те­лей — До­бри­ян Оль­га Вик­то­ров­на, тел. +375 17 388 60 22. +375 17 263 97 69,+375 17 258 30 82 
                — от­дел тор­гов­ли и услуг ад­ми­нист­ра­ции Мос­ков­ско­го рай­о­на г. Мин­ска. +375 17 368 80 49 — упол­но­мо­чен­ный по за­щи­те прав по­тре­би­те­лей. По оформ­ле­нию рек­ла­ма­ции 
                или воз­вра­та, свя­жи­тесь с на­ми по элек­трон­ной поч­те: sales@wildberries.by. Кни­га за­ме­ча­ний и пред­ло­же­ний на­хо­дит­ся по ад­ре­су: г. Минск, ул. Скрыганова, д. 6а,
                 помещение 8, офис 22.</p>
            </div>
            `
        )
    })
    .catch(err => console.log(err))