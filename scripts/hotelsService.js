const HOTELSKI_USLUGI = [
    "24 ч. Румсървиз",
    "24 ч. Рецепция",
    "Асансьор",
    "Бар в хотела",
    "Бар при басейна",
    "Безплатно Wi-Fi в лоби",
    "Бизнес център",
    "Бунгала",
    "Външен плувен басейн",
    "Вътрешен плувен басейн",
    "Дискотека/Нощен клуб",
    "Дом. любимци",
    "Експресна регистрация",
    "Здравен център/Спа",
    "Компютър с интернет",
    "Консиерж",
    "Конферентна зала",
    "Лекарски кабинет",
    "Минимаркет",
    "Обслужване по стаите",
    "Бунгала",
    "Директен излаз на плаж",
    "Казино",
    "Компютър с интернет",
    "Лекарски кабинет",
    "Организирани дейности",
    "Паркинг към хотела",
    "Перална машина",
    "Пиколо",
    "Плажни чадъри",
    "Пране и хим. чистене",
    "Превоз до летището",
    "Ресторант",
    "Сейф в хотела (рецепция)",
    "Стаи за непушачи",
    "Тераса",
    "Фитнес",
    "Фризьор",
    "Хавлии при басейн/ плаж",
    "Хипоалергични стаи",
    "Шезлонги",
    "Wi-Fi в лоби"
];
const TIP_NASTANQVANE = [
    "Апартхотел",
    "Ваканционен дом",
    "Къмпинг",
    "Къща за гости",
    "Мотел",
    "Нощувка + закуска",
    "Ризорт",
    "Старовремска къща",
    "Хостел",
    "Хотел",
    "Hostal",
    "Pousada"
];
const PATUVASHTI_S_DECA = ["Детегледачка", "Детска площадка", "Детско/ Бебешко легло"];
const WELLNESS_SPA = [
    "Джакузи/ Хидромас. вана",
    "Масаж",
    "Масаж с горещи камъни",
    "Парна баня",
    "Процедури за тяло",
    "Салон за красота",
    "Сауна",
    "Солариум",
    "Турска баня/ Хамам спа",
    "Хидротерапия"
];
const NUMBER_OF_ROOMS = ["1-50", "51-150", "150+"];
const UDOBSTVA_VYV_STAQTA = [
    "Баня с вана",
    "Баня с душ",
    "Безплатно Wi-Fi в стаите",
    "Бюро",
    "Вентилатор",
    "Ел. чайник",
    "Интернет",
    "Кабелна телевизия",
    "Климатик",
    "Козметично огледало",
    "Кухня/ Кухненски бокс",
    "Микровълнова печка",
    "Отопление",
    "Сейф в стаята",
    "Сешоар",
    "Стаи с балкон/ тераса",
    "Телевизор",
    "Телефон",
    "Хипоалергично спално бельо",
    "Хладилник",
    "Ютия/ Дъска за гладене",
    "Wi-Fi в стаята"
];
const SPORT_EQUIPMENT = [
    "Бадминтон",
    "Билярд",
    "Боулинг",
    "Волейбол",
    "Гмуркане",
    "Голф",
    "Колела под наем",
    "Мини голф",
    "Плаване",
    "Ски",
    "Скуош",
    "Стрелба с лък/ пушка",
    "Сърфиране",
    "Тенис корт",
    "Тенис на маса",
    "Туристическа пътека",
    "Яздене"
];
const HOTEL_PROFILE = [
    "Градски хотел (център)",
    "Дизайнерски хотел",
    "Еко-хотел",
    "Здравен ризорт/ Санаториум",
    "Клуб хотел",
    "Конгресен хотел",
    "Луксозен хотел",
    "Провинциален хотел",
    "Спа хотел",
    "Тематичен хотел",
    "Ферма",
    "Хотел до летище",
    "Хотел за пенсионери",
    "Хотел на плажа"
];
const PODHODQSHT_ZA = [
    "Бизнесмени",
    "Гей двойки",
    "Големи групи",
    "Зимни туристи",
    "Купонджии",
    "Младоженци",
    "Само за възрастни",
    "Семейно необвързани",
    "Семейства"
];
const DOSTYPNOST = ["Достъп инвалидни колички", "Достъпен паркинг", "Достъпни коридори"];
//Hotel constructor
function Hotel(name) {
    this.name = name;
    this.imgs = [];
    var randomForRoom = Math.random();
    this.singleRoom = true;
    if (randomForRoom < 0.75) {
        this.doubleRoom = true;
    }
    if (randomForRoom < 0.50) {
        this.familyRoom = true;
    }
    if (randomForRoom < 0.25) {
        this.multipleRooms = true;
    }
    this.category = Math.floor(Math.random() * 4 + 1);
    this.price = Math.floor(Math.random() * 967 + 27);
    this.offers = [{
            nameOffer: "Booking.com",
            priceOffer: this.price + Math.floor(Math.random() * 30)
        },
        {
            nameOffer: "ESky.bg",
            priceOffer: this.price + Math.floor(Math.random() * 30)
        },
        {
            nameOffer: "Hotels.com",
            priceOffer: this.price + Math.floor(Math.random() * 30)
        }
    ]
    this.offers.sort((offer1, offer2) => offer1.priceOffer - offer2.priceOffer);
    this.isAvailable = (Math.random() < 0.13) ?
        false :
        true;
    this.distanceFromCentre = Math.floor(Math.random() * 19.5 + 0.5);
    this.spa;
    this.beach;
    this.freeWifi;
    this.breakfast;
    this.pool;
    this.numberOfRooms = Math.floor(Math.random() * 150 + 1);
    this.plusoveZaHotela = [];
    this.addPlus = function (array) {
        var arrayOtPlusove = array.slice();
        var broiPlusove = Math.floor(Math.random() * arrayOtPlusove.length);
        for (var index = 0; index < broiPlusove; index++) {
            var nomerNaPlus = Math.floor(Math.random() * arrayOtPlusove.length);
            this.plusoveZaHotela.push(arrayOtPlusove[nomerNaPlus]);
            arrayOtPlusove.splice(nomerNaPlus, 1);
        }
    }
    this.addPlus(HOTELSKI_USLUGI);
    this.addPlus(TIP_NASTANQVANE);
    this.addPlus(PATUVASHTI_S_DECA);
    this.addPlus(UDOBSTVA_VYV_STAQTA);
    this.addPlus(SPORT_EQUIPMENT);
    this.addPlus(PODHODQSHT_ZA);
    this.addPlus(DOSTYPNOST);
    this.freeWifi = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("безплатно wi-fi") !== -1)) ?
        true :
        false;
    this.spa = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("спа") !== -1)) ?
        true :
        false;
    this.breakfast = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("закуска") !== -1)) ?
        true :
        false;
    this.pool = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("басейн") !== -1)) ?
        true :
        false;
}
Hotel.prototype.addImg = function (src) {
    this.imgs.push(src);
}
//Country constructor
function Country(name) {
    this.name = name;
    this._cities = [];
}
Country.prototype.addCity = function (city) {
    if (city instanceof City) {
        this._cities.push(city);
        this._cities.sort((city1, city2) => city1.name > city2.name);
    } else {
        throw new Error("Invalid city.");
    }

}
Country.prototype.getCities = function () {
    return this._cities;
}
//City constructor
function City(name) {
    this.name = name;
    this._hotels = [];
}
City.prototype.addHotel = function (hotel) {
    if (hotel instanceof Hotel) {
        this._hotels.push(hotel);
        this._hotels.sort((hotel1, hotel2) => hotel1.name > hotel2.name);
    } else {
        throw new Error("Invalid hotel.");
    }

}
City.prototype.getHotels = function () {
    return this._hotels;
}

// Examples for hotels,imgs,cities
var namesHotels = ['Princess Hostel Leidse Square',
    'Inner Amsterdam',
    'Hotel Villa Flora',
    'Dutch Design Hotel Artemis',
    'Hotel Nieuw Slotania',
    'Hotel Okura Amsterdam – The Leading Hotels of the World',
    'Bastion Hotel Amsterdam Zuidwest',
    'Hotel La Reine',
    'WestCord Fashion Hotel Amsterdam',
    'Prinsenhotel',
    'ss Rotterdam Hotel en Restaurants',
    'Van der Valk Theaterhotel Almelo',
    'Nadia Hotel',
    'Quentin Amsterdam Hotel',
    'New West Inn Amsterdam',
    'Hotel Vondel Amsterdam',
    'Inntel Hotels Amsterdam Centre',
    'Hotel V Frederiksplein',
    'Belfort Hotel',
    'ART Hotel Rotterdam',
    'Hotel Old Quarter',
    'BackStage Hotel',
    'Grand Hotel Karel V',
    'Hotel Piet Hein',
    'Best Western Amsterdam Airport Hotel',
    'Rokin Hotel',
    'Hotel Johannes Vermeer Delft',
    'Boutique Hotel Notting Hill',
    'Botel Maastricht',
    'Hotel Casa Amsterdam',
    'Hotel CC',
    'Inntel Hotels Art Eindhoven',
    'Frisco Inn',
    'Grand Hotel Central',
    'Ambassador City Centre Hotel',
    'Stayokay Amsterdam Zeeburg',
    'Mozart Hotel',
    'Hotel De Ruyter',
    'Lloyd Hotel and Cultural Embassy',
    'Stayokay Amsterdam Vondelpark',
    'Sandton Eindhoven Centre',
    'Hotel Puur',
    'Bicycle Hotel Amsterdam',
    'Amadeus Hotel',
    'Hampshire Hotel - Crown Eindhoven',
    'Krasnapolsky Apartments',
    'Carlton Beach',
    'Hotel Hermitage Amsterdam',
    'Bilderberg Parkhotel Rotterdam',
    'Euro Hotel Centrum',
    'Hampshire Hotel - Eden Amsterdam',
    'Hampshire Hotel - Oranje Leeuwarden',
    'Hotel De Paris Amsterdam',
    'Bastion Hotel Nijmegen',
    'Hotel De Gerstekorrel',
    'Grand Hotel Amstelveen',
    'Rho Hotel',
    'Grand Hotel Amrâth Kurhaus The Hague Scheveningen',
    'Hotel Blyss',
    'Budget Trianon Hotel',
    'Nova Hotel',
    'Hampshire Hotel - Amsterdam American',
    'Hotel Europa 92',
    'Budget Dam Hotel',
    'Hampshire Hotel - The Manor Amsterdam',
    'Hotel Sebastians',
    'Hotel Mevlana',
    'Pension Zonneweelde',
    'Hotel Babylon Heerhugowaard - Alkmaar',
    'Budgethotel de Zwaan',
    'Hotel Den Helder',
    'Bud Gett Hostels',
    'Hotel Mayflower',
    'Hotel Pegasus',
    'Boutique Hotel Lumiere',
    'Hotel Arnhem Centraal',
    'Alp Hotel',
    'Hotel Iris',
    'Patten Hotel',
    'Hotel Cornelisz',
    'Grand Hotel Amrâth Amsterdam',
    'Fletcher Hotel-Restaurant de Hunzebergen',
    'Hotel Bakker',
    'Best Western Blue Tower Hotel',
    'Hotel Roemer Amsterdam',
    'Hotel Restaurant De Wolfsberg',
    'Hotel De Weyman',
    'Hampshire Hotel - Plaza Groningen',
    'Van der Valk Hotel Arnhem',
    'Villa Magnolia',
    'Owl Hotel',
    'Max Brown Hotel Museum Square',
    'Aston City Hotel',
    'Amsterdam Village Hotel (former Hotel De Oude Taveerne)',
    'Ambassade Hotel',
    'Best Western Delphi Hotel',
    'Hotel Turkuaz',
    'Quentin England Hotel'
];
var imgSrcs = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bxI8S6dz_Ezxz4G_eMf3m-_7WFtwzy87G2lomlBgG4ip8u9I1g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGPOqGBH1tqKKCA3711-r2kwDCj5gWVdQftBUrrBCzIWeZm9z',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHD4Vg7sgurj-UmOEyTjupEdQSNfnyMcYiJYxQI7g9Gw3T6Kbyg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5PdiE4MGsjC_qhMyvQ0D3gnCvdHwW4p1d9vR34QDAQaq4jGPtQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55eig-QJ2J3m_3k9pOW8bo7t8ERQY50KZpq4BL8Ikj_v-4XMAVA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRdmBZwFfMr8gDuGNUBr93j9GXDfp330O5rcIQKzwDJNMPuKQ54w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnQarOb8gJ8Um3i-IJfUQO-L2VUiT4Xi7agpLXYkpOro4t39Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqX7n_X1Fv-SEqmn2Hg8c_MTkYcaYocFMe_o0LoJw7a-qdX_7pg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKPjmD4NAR4X7Q_jkDX4BdL0fF0YvjIzmGaNbOn7zT5ZR0HPpHaw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvUiDYRH7OlocV6drXsJdOOnIXWRmqv2fDiXowIP7EtGtnQUk6w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0ENaTM30kFHlVtZdNhBnIxCO-R6sSWTkx5cZ3BN4II7psmA8',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhEzvhkhhpeHHjBvk6CAFpqo2twNl4KkekK-R1L8hV720PZWy3Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fwqV3aGWxSbymZxUo_r3UIlKLRVWt8yN-MeSDNqlxFNtKjJzrg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHH8m1U1aqZLyucvsrKd7ZGNuysuTat6eFxScc4UC7RdKYxzAnQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSpnVUsF2cshMYzmnv4wn3Id659nTb0y_BJLd_8jUn-z356cNXw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNz5hTJJgITIkcI-htHrunLte5V1ktCCjTqDyR4onkQBEfd74og',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99pxFW_CscFrV1NdvE0SxkPS70GJSbp1FFdTF36oalat_8bS1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmF_DcrlMTn9l-NE1nuQq9074TnDe9FgvqoVFwip-D-uhTyms5A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevD9-Ubxjs0q0gescdT6AGHTeoovosT0oZFg1eNVpJ4Ic8QDPmw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoTUXKiG9t9ZLbLh_E4AgAs2BVYis9Aj8OJqBNnQdJGVjTxcj5A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevud-u7JGzfJU0bft-2zGi8o6jS-jrWC_yRF7Ywn0q_MjXFaL',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvDrUJjGJGMNDWe5P8bn3h_W_qd3HrizlcPPS7462x5VkjrKi',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5pvLgVtK4tKrdyrHZxPDwqzrNRuiqo2es_EQJbJ35QbgHGK-',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-M05Z0sY9X5wqlZUoLP75wqD-2ss4SwUrPZQsoJ6JSToPKUPOdw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDw2VRB5GwEpaIvONGxnlFJoOkdzeGxV3xFuj0S86nnqw7R_j',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q4QjSGvNTER8jm1VwjH-NHipCoT4Pe_afWGnpaF9xFL0ZYZzTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5E71UXzgjbs9tDHzRxduNB1Jbu6uxfjyvmiHQUa4hjTz9Lsl',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_o-Hckt1NKWNtVagtg4fYDMwMIYVtpS74eGJuNOd5c808B_6c_g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jdz3CIQ_LAImMniLtSA5JnOr9pF07xOW_slPMUQbsFFaiK-X',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7L_Dk_iR2JPW9X_S1WWCCLAEoI8CDY1EwFHpbcmbzkmFGPJk',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpH6XhGCc-kPDuv96_W0dzbsZbg3KbD5s9ZdV8QmaMeN1nLNkV',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaB8OqLIfn2RbKxKFjTDSQIrVud2mj4ORVpiPbwZqiiylWnzt8A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-L_RnNiCjeUYnnnnHbighLlQLhNh48ycm6aSKBGq4RjvY_5C',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbG6pOMFmO3IvUEGCsnDbW7Hh04RusYFFQWJPDRgYnS6bf2dS',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GvQpO3RM5AL4FqK6dFYzonYoBzLh_BHoDUzrqehUpqdPI81Cxg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePWpHd88W_6_mXDlzv4TYnbgYacNY6rPhyIIn6ADvo3XAOWmG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-oUhMJwgt5mbulmItutq8EWMt-1AtYOo7xTsdWDiXjENSuP96w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxnJVezAubFpymY7SAq1RrUjYBseTtx08HWHKHvmwlWVvKeMG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2aEaLoIZSZPa1Qk1ELv_L4UA1OQ3wHMsIyppYcYMKY-Gk_WJ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIhw4I-iPfddN7tQKueNk7KBURSSMUxFjkvEBjFjdhKhizSPtyQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDxeHnYRe4g4p00szSKpIA-0JBydBLBDqUgUmSC_f5MvFj28u',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5y7eMlaIeu7uc6nZaassmgvl9Hhni4zJCiwlXG7pXWg--DmjZw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7F67tUiGENMlODp4egKgrZpULoVGf2G3dT9hY3PJCB-vX46oW',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDajMMEaBCvCcepe7MrKfXAqvnUzCOL-5x3GXH8fVIP8dUN09Rg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtno-CgqIfuwK96bRfrUMEUt2_Q9pGZj2FTCD9M6jzMEttwA_jjA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzepsgVwmKlwYeZXnxU03Ul9h-uMoP9BmgKo1fiPYakC2mouFyYw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsX1G8U4iq2t2OvNMSj9uFj-dyzj6uAvxJimCqCoCCOCH7bRsEg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6X0JDJSR2zdBaY1_-Un_guy-nXdwFofhGaAJebgTl7bxgFMyI',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sh4rxCjQZYT6yrHnccc9GPlDqio7867-NbC1z57RylvkB_-p',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfJAhIP2fuN71PKsDF29RzBJNsLZ9Zm4vZ_4a84ZX2LT4NdeR',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB1JWrTKM0Q5boIB0urmjvTkNMV41NTyf6UxeLNu2dS3y5vCi',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkOi8cwqJ6e9weUAWvGBaKbfrYjSOALol5oaQTk4b77C0gH3j2w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJguf6JDdX6W81Wg1X4IwPfODSN9HqVZ_cTHu4HgoThT9Y9y5i',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHQpSuivtsmZBAKhHhvWzCZWL-8lVsOCivAP2LTsqVg-sidnhCA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSA4ZOGS1gHbI7vrYf8bBaGK7e4yn5xK5Z1bwD6lRusiMuHZiP',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6HUXQHL2pw4hlg47GhRkWM8MbJuBj5cAVsd6S_PcZL4jnXQB',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05uKTghqXwMQJRPt8OwmxV3-QBTc5zZSLwIGvOzEmA9RUlCZe8w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWO4kTiAcRs5R1UN7j8Pq9mWa7Pcngqv23G_WvFkDfdZ3VyCWUxQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDRHG8jToa6lhBp4mRu0OSMdqDKC_oBVM9Bq5h-tXzdQqo8AWVQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwbFT6ks3Re_PsjJe9C6n6aImgy10_IV1X14xKdb83ss-mmECYw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXjcu0svQu98YrJEMH4Eux-l3wxV0KWxWmUNOj0FtLagWbNKQuA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXPcbX-mbuvUR0WvP-QZfBGxxWt-_rPLFFuIscxVZ85amxFHg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGbKZD48FbIgrkQaecHw0s7jawrAPDMSXQKoqZ85WNIk7qg3CmA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd829jbpaJDzS2-I9EpBDEXVsHjDaqPUBXcFcqPmgR8mdDnE5idQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcafir1SU9FEivaMbN60hbIHsu0jkLzeQB20TpSWL55fh1jpM',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqK6dUKuIrJ-sR8zR3RpO8Eq26-OsSjVwI92_tsqW4ErymSW0',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuZ01p5rQZAE6xL5vff66MiQO4vCOchYi3pcgYKJ8kiXaUZnz',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDyYuvZAwSqe9X7XIqznkEDc3eV95JCdTw2Af0S79y2OLt5pCvw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCk_qJd8Ivg_oLxZbV-wFfGvRHDQGw064uUuCqm0FI70IsvNNz',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGDKr9YQlmyfmmNIegxSl3r84iPKIlpA-3udU74LfecuQkP0gZg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQqPJhMfCD87hilPj_FzdPx7i3XvIG6aqaN0Hynj1XZ5Rfwtg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMixrH2IKXGsJU6pKaZ-3lRdI3egz7-3jBkZS2Xim6WzqijpcP',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AdJxNL9abpIDM_brcZ5D_czxfpbATUNLDrEu5rObue6Eve6Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH2oXFiTG42k39bYr5T5FNCicElVFZ3J3Y3Q4GSSKiEQ4JNWt4Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41oCBNfDfyekICE8rQ6oq6UCZN1kD7gPwO8EV-e4VrZinVqJi0w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSsAreJXfWJ4J-9lDW1DpGc01BTCc5p14W00N0s7cEuI86ZX_gg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmxSCt7jzTFXRABcLkKJ3GVG-JiZOoG_BfjeN5c8sKMC6thNi0Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zmGuMtpdpTkrib2yjzm9cJ8vpiHhxp_z6DW_kJ_hj7ILASYr',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZr9g3SeDkJHY9Opglr0dRjOm4ORSw4XS53w61h1uazo4mfjCQg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQ-EQdpFoISzCTvGseNDyAtgo90zNMFrHgL-S_7ZMk4mJgSsy_Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfafofo_SaN7musk1VABWHJAVVG3dZPlTqln4sD0pZ-7DXi5vh',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N4mFjHEWLpCUv79eiXyFJfeec0VBDKj6b6ER3z9DtVLDTT6r-w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zRkFa_IJSXxREgu0lFgI7tGiKdKCjJ7kd30YSiQm7vbIA0uy',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4aHHBu0K7vsATRXY5VXcC7KedURpuYWMYEmT1HwItGldVud0Vw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIEr4LsdFpgXxcmpnRzl4U6kOYJqAg3W5TfvnFIeYwjfNvfilYw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFQa4lVFLBN7cpRQiF00-FwGe93ID_XKz_nwX2kYvElbAqrx7',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuGTw2VCHyj00C170j6FB-QUvjUqlDcwxdRPqpMivH6GR6ottPQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfi0GYegLiyJ0evQ1LWxebUxQ9Pe3yt8iRL5vOHxGMsttonkIK',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiY39coE1p4sXj44qGMRPueJ8XOryG_lJpH7OoH8dOuOJ_cQkp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqJSy0F9Lo_kd3JaWNUPP5gT69PJ8sCm8fHtotadfzZXVFyOgug',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPULtKl8a2mBWIPCxJ6Ab1nfbfl-epjVrOw1f9plxKEjsxaFs',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsQP6ZlBWYpMjYV2on3kxtEFDI8kIqE6J4W4ovcpT2FdfzxKz',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWifwyfXz5jUOHnRK4CSmCHDI77Gl8AVDX8wgSurVOMJuT0QgN6w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQH0LH4OtCxX19CBOgUu5nVQBYSKJ0bYa2AMx0FOd8knFfelfPw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0q2Na4lweEDRI_fgoZu0_nvu_-F_-kPUEbjBmSeBKlnENFIN-vA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiNyqwWBVnkPrHTJQ2p1qjHhS3lb10uL_c8G-MtX9kt0MfjLJ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSAZA9Q9w_qIM_XYyEN4FJSmxXdQbYvzwjHVHL6i5_7u4Gl-_',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtoDoLSoqwGC8uKp7874_KqXfqbseNmGSYcEn7Cscx5B0tfKcvQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OgRukeq0RPSd6aBPp_e7k7sQeLM-SbcUD2fsLEbsqxZI4Eco',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXaSjTNNBZMpPevye-UWS9c2JkWk_ez3xJZ5iIghJp1dz2xWY5XA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCFmEFlwS7VZxI4OYIn3nvwtB27HwvhuRj0Wilj6jP5UmxYBJ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsU-gjSrkuTy-oWWfrjvRVbrIvHlk8JUI4GN_KkpyGeGEbchX2',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1kx5MpHFskzEySWiwPh9FKUcb_7Ki5ApW1k33eXQDbizgdM',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsE0_vCBYn8jpc697pFL1M1_chrowwZIqtd2KTzQBtBkZvgyfxg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_GVp66TJnRWSBnjasiC5tM3mkkYb_X6fWWmsBQHx3U7Ua9Gj',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9quuh8q9kjGS_qEeWZ-BxS-vD2J_YM7rLpiJld-e9EFyGscC',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mG1C3DaHvP8gtxi3z77fx3nvX1L9CcGDtLIEATcrFNFf2B9V',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP5gROpkQcdOnt04frhPw7saVHjx06yVkSzrMrs8N6mvfySDPhw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTKUVSrw_l194mtR0Gq-9RDMkmkJZqSojuv2ObYrrCkZVfJIKuA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlFeliEafxR8sCRsyzelMGwmNVVeoJ-Otpj7ncY6Sbdo0nFLI',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4i-bwgXs0ahx6tRMQvRI_86z6SfqfUDAYg1WcLgv8Me2F3oI',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYa4skIMon7yS7EqSrTGvlawBZlXARAMcg26dqq3I1z9Qu-T6VQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVFshGWzXPjSYEADCFfHbPpzxrBOtvCdcaiwsiXu-OSGEv8Gs',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRD4qoPQL7wDUSUQJBDG4CUTzMLjCv6PPLo2qFhJ59uvKq441',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg2iwSGzzTXBKnrHe_-yqbuY6DL7jM7NvLbw388myKaai-YPO7g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacY7vaDjmiW9_p1OimZ6pdTcoji_oyxHrqzaPdz9Ky2kzLxOd',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2peqp43EC0OEqbKVpgb-q-utStNMAQpMVHoFG2RT3b0VoEZWz',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMbujG0UD-9HVKx1kodtidjxLzseOTccff0Sz-gg8aopCwf2l',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyOEXnPCMlheQAwOwfAEQBzyMpDUVqR6q4K7QhJX_L81eZu3H',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfc0bVqKA2UBPip8etfPdQF8iVRzn6RquJHZuxa1HQYefNXOOmmg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5jg03hB66VsO1nA85341KIkRSewQh5iQc-E4glX8crVgfyo9qA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMuJuF0zDzrvn2wj_NVqausqOnUZ3M0ZebeCjVGcKDdGea-uS',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJwn3lhocSMk7UukVFs-P0IsGWqzNwP_Ql-RE9VdTMmp-ZixF',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Pvh8oVYMIBQC3D2gORCXgMxTiT_W4WI8EjbMzJ5kmTwS18pw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkLN11v3sEWlYJtoyKRUYdkRaeFluv81AMV7Wo7PKMEACLPRyzQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zfdmhBRF-FLLvLiGw078Aq2-MR67jPZCvkLlhaKKbIR8UDM4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP6CqYF1yfsy9EUZ7-nc4tnUg7f7ynTneB-b5H2ze1Xdnf0kf',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq788PsBKnUskU0txaiMeveAKdUoaeQoaDTTri3dvQMvn1fWS2',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbhsaLCzkClFo09je1h5INPt4aDNnstKb69SjTHij01LDqhcVCA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QkjYNo7ucGwcB3vkMBbwVeFj_F1qsyUphEYPhywMPS29cMF5',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9Dd-j9gBLkSq1_gO9L1hlZbaX3sDsto1ge3H1TqFbgyz4opRLA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDiemvHau9yU9eOZQKBUCaHYl8iC8KBQ0Nf1NvGStvyvODkAxxdQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIrNnuWPzA6mQ5QNQfJ518mjxfrLk4bW-FdysDNsi9LuHLzCZ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaFUyozN6qcpSeLLT-50eG3rCH4y19oqt1BZgvKlqwudn1yr2',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Iw4uHcrmoTez0tMO1NDFBo63BzExf8ijoH-C2NpGlqDusc4DcA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegSgKH-ilsZ0YXi8nHk9nFyyNTShuDXfoXt4ek3P0CYbE6irT',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQRwnaSG5wbNW02-2R0okvw2RgfqkOis59jX7k6WjKj3rXeuP',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGym17j2z8t8YOuYiQO0yFBD0D_NHQbj1w6es84tpsLI75Ifc',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0bOC45rmHM_ZRFOGXjWaW8idPthMi6blLkxlolC4uCZ2iqID',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfUOSilwKQ8xJdCb-zkRx8Jv_BE5cHTUrrdFsQuJjYeK6NWbstA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DgB9sRJN2f-_Z6VMAqNrSFFg2CGwn9-j-iDRCaGFrcnAsDYX-g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByJ998x1BUjTKJWi-9mV2HLVkZTWAVKEw6fAcf184SHpZvjqsQw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkp4uwWdosY4al8JcSkzS31kGcd0iD9egYuLrAqwT1RfsAL8rwA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlW5GqGAFtEbUe_emPhprILFYauJHS2XekMAzXbenX9s49RvbF_Q',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRE8lChDABvtQtT8U0HWNpD1jOYTdlq9YL05av9vs5lvs0wp3iQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XpNNXAapl5On1puTKIqQkkJi3shOYDXTxzz9VLz9mvdMgfHCQA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzHrVX4OyP95Vp-nb5xPzoNZmJsmpORQHQO0MK6I8f0z5g-v0Rg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNbGFMlKrT0HCJnCB2xhQlAl4IXMIR_qq8-PTwnEovy5P7yh-',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFOdKj0dzql6Xri8AajscJ1T30AsoPi6BWzrEXXcmzBgKvCSP',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkACtjrxOWiDc6Ws6GS3htwoHeHDucOmu-V99Br9ps1logmUV4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt4wZY_dwl78oiOLEeO1xw1AlTkmwjd6TEbFXEIRzEbMk0XcHnA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6R27rZXMKvWo1hP4RkQ3rBikv0kfA5seSZdo2d26XLU4eJYM',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGwkJk2n0tZNUIpicimCdR2lys1B23MPqn_22xpSPej3VHVXg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9c8GBRxF-eHqMDVZIzzrVR8OdJFPSEks-hqJfwDdRACpFc_4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaj_2cnW2ihcPSe8n35gwLV10hdJbo9oH6RG_1hB66G8muSWX',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_SHXXgnztZw0pH6vDkFZv8Vnmz8PGeMOMmk6-UOBIKbQkBcBbOw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu6_23RjVHwLtNzHJwRIw-m8GGgWnm07DHkSXU-HW9YGRWwYh',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDK2K52WLkLom_X0Qvq_nNm58BLuZEUA_GC8GAdrlGy4WNAf1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqTyB7Kp2dBAjBTZF0REIZdz7QuSC2kNcSPrvi-c0mcNWmiseHQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdxxSgvx3Pdb8E2j0PpyFKYlk7hnvFNqgy6BtMRoz-pEnWp44',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdy-Nq7IMXHkXLc1UD2VOmYMgyd2Ry7n6sxhWg3oPNJEynIzh9IA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3bppweI4uKS3gxt6de6-pB9RwNje0gn7Xr-hO_oqyFFBEelL',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcZN2rSLQ3qBja0Uk9gcNimGnx-id745WZTingjryUWNqxKAa',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5611143BnWfjzqkFosm44Hahc1ivCb_KFM_ge9tppoMuuSm6T',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_6bmUO_Bq5qT3DLXeNq2hn8ttjh7musNXnY0sBD6cZfbHyTV_g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzJd2rKKjVysykZgnals3PrCQdOK1zALUMRhrsyvkTj5Cq4hLOQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd9tDOsU5VAsHNSD0pJ8E5hVQ5FzdR1wdSbhC2dWXm_8539ar',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyczB1oP5fwDOj9NwjFEDJDKQX8npOoUufG8TLiqxnemUoYYdL',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT57VrCDUKbDoYjRQG-5Q3befibbOXUth65p8F2r2OnnVa0HsF',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1P2GWR_sLmSsAPt_S75tcQ2hW2yEm2-tBT7vEQsJwUj2T7j5bA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2jF6kHzql-ZSV71iUTVhibMEx3nBCw5xZ6EkDfQ2CrDlwdGOvw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSp4jhWi4KmjEilCYAz5WkW2FeB5bYxcY9kU6v3OsBQ1TnLXO',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8bpeGRzpV2KH4BsBmF3Vqb6VAhTdLkV7_0ZfcaDdEQXHxL2Z',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6twSDlFXQzXVe-_awN4pUzldJcR46Of0bSTDVKjNhCxDv9kC3OQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7xVl0LFXkxOTnOCjjrnVjeG_jtC8s_2zOGwYY0tAEFtHeVXY',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAw2XJ1bc_p4H8wt2qd2S8SYtU-rc2PYMZq3ota9zGhLv6FNZKGQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYPiclH6RC_PVxv9b96Nol2vVRLbCfU_D3XLgQ9D89TNhwIr_Kg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPDjta1M492JvNOYvOJ3Hll_zZiCTOZld_lDXcVBJBHrXfFZsnw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgcPtSqhSxryLUrWa-W5E1emQWUpwBjKkza9wA3alP5YhAANzLA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzyYJ-eKQ70NXBnq915_PzWc_1EdmDWHwZpi544XuNunLRQkM',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6mKXqBBMC1RgORr7oUzQYoGXPzieM87slsprUgLq942KFCET',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLl1tmUhY-mK_-xZtMv0jhaTYMmn1GCN1bRYuat5LMOtKLv8JQhw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEA3AomykaSt3OY8cgj5RMN-kWqkMTK7K1FUHHMcSaBwm8g5tAew',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhjorRICcZRGBDDZ7Gp9yTgOqfS6Jt3Eq2TaoNVeBL8kI6R7_8g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYQgWBwIHuEnP1r-bZzVhIjFPTU2qsT5ktWr00mVA_zZnDxU0',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUQn1o49XVianDMIYkQAepPKkzkvv2ckQWh41c2byERR02uJaPw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFoohSVrkHDs43Cch3SNOHXIJaYtiQKJe8zqY0Eqt7Eh17W0gU8g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0X32XD-f-no6YlhVDdnyViBsUatnqnV3h0ihxDIUQoOXfv-6oA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7jkWOjFefB9c2PHFDR7BCkMO7gze-8nS5sBUguUsm_VbFN9MKQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSixBHZLqia21Sm6YTw9B9cCI1Tb_d8qrHg7HiidjVFFQxYA6Nqw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1YSJUbyuqOZ9lBPSZ-uFQgfDWGtI8SXO7iVE6TgyH88Dklrf_A',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxHgX1sLwBVz9BlbsqGSjzU8PehkUvf3cdVA-b1ZEziurXeG6dg"
]
var nameOfCities = ["Айтос", "Аксаково", "Алфатар", "Антоново", "Априлци", "Ардино", "Асеновград", "Ахелой",
    "Ахтопол", "Балчик", "Банкя", "Банско", "Баня", "Батак", "Батановци", "Белене", "Белица", "Белово", "Белоградчик",
    "Белослав", "Берковица", "Благоевград", "Бобов дол", "Бобошево", "Божурище", "Бойчиновци", "Болярово", "Борово",
    "Ботевград", "Брацигово", "Брегово", "Брезник", "Брезово", "Брусарци", "Бургас", "Бухово", "Българово", "Бяла", "Бяла Слатина",
    "Бяла Черква", "Варна", "Велики Преслав", "Велико Търново", "Велинград", "Ветово", "Ветрен", "Видин", "Враца", "Вълчедръм", "Вълчи дол",
    "Върбица", "Вършец", "Габрово", "Генерал Тошево", "Главиница", "Глоджево", "Годеч", "Горна Оряховица", "Гоце Делчев", "Грамада",
    "Гулянци", "Гурково", "Гълъбово", "Две могили"
];
var bulgaria = new Country("Bulgaria");
for (var cities = 0; cities < 12; cities++) {
    var randomCityNumber = Math.floor(Math.random() * nameOfCities.length);
    var city = new City(nameOfCities[randomCityNumber]);
    bulgaria.addCity(city);
    nameOfCities.splice(randomCityNumber, 1);
    for (var hotels = 0; hotels < 5; hotels++) {
        var randomHotelName = Math.floor(Math.random() * namesHotels.length);
        var hotel = new Hotel(namesHotels[randomHotelName]);
        city.addHotel(hotel);
        namesHotels.splice(randomHotelName, 1);
        for (var imgs = 0; imgs < 3; imgs++) {
            var randomIMG = Math.floor(Math.random() * imgSrcs.length);
            hotel.addImg(imgSrcs[randomIMG]);
            imgSrcs.splice(randomIMG, 1);
        }
    }
}

// // User constructor
// var userList = (function () {
//     function User(username, password, email) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     function UserList() {
//         if (localStorage.getItem("users") != null) {
//             this._users = JSON.parse(localStorage.getItem("users"));
//         } else {
//             this._users = [new User("denny", "dennY7", "denislav.yasenov@abv.bg")];
//             localStorage.setItem("users", JSON.stringify(this._users));
//         }
//     }
//     UserList.prototype.checkUsername = function (username) {
//         return this._users.some(user => user.username === username);
//     }
//     UserList.prototype.addUser = function (username, password, email) {
//         var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=\S+$).{6,}$/.test(password)
//         if ((typeof username == 'string') && (username.trim().length >= 4) && (pattern)) {
//             if (!(this._users.some(user => user.username === username))) {
//                 this._users.push(new User(username, password, email));
//                 localStorage.setItem('users', JSON.stringify(this._users));
//             }
//         }
//     }
//     UserList.prototype.login = function (username, password) {
//         return this._users.some(user => user.username === username &&
//             user.password === password);
//     }
//     return new UserList();
// })();

//Filters
function filterByCity(city) {
    try {
        var findCity = bulgaria.getCities().find(bgCity => city.toLowerCase() === bgCity.name.toLowerCase());
        if (!findCity) {
            throw new Error("Invalid city");
        }
        return findCity.getHotels();
    } catch (error) {
        console.error(error.message);
    }
}
