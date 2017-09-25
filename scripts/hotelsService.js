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
    "Сейф в хотела (рецепция)", ,
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
    this.category = Math.floor(Math.random() * 4 + 1);
    this.price = Math.floor(Math.random() * 234 + 24);
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
//Country constructor
function Country(name){
    this.name = name;
    this.cities = [];
}
Country.prototype.addCity = function(name){
    this.cities.push(new City(name));
}
//City constructor
function City(name) {
    this.name = name;
    this.hotels = [];
}
City.prototype.addHotel = function (name) {
    this.hotels.push(new Hotel(name));
}

//Image sources for hotels
var imgSrcs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyhA2YRR9Mdpd6nv01Jzfjmkhp9azNxARNFDbpsgWMCo1nf2tZA", "http://www.memmohotels.com/media/memmo-hotels-imageLinkhotel-garden_sea-view-2-7.jpg", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…6qV5/ZMUVb90KFDROYLVa/nnAo1bz+6FCikdhXuewoUKHOP/Z",
"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…+XtpUqnLaLfzGj8SXyJcHpbCngD8TTL7zHh9aVKl8ivg//9k=",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ynqgAuAxmqx2rCxrKyt5wJqXr1WrysroJkgnIr2srKzhEyf/Z", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…WcjVTCskkqJIwxqJi9JJNQtiD1IPSSWMSFRSD0kkrQ6Z//9k=",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…oxdmAVWyiCSAJ33HwpUq3EWze8MOG/dQfFqVKlR1M2lH/2Q==", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…Tn51E8ht51K38I9Kg9cuHgvOfX10oXufl/ap/dNeFTJpMF//Z",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ABtDyGx16HanBj59pAfMaHQT+VZWUkMHntfhb4/1rKyspiP/Z", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…1KlRYqKcmz5VN0lDeDKb+sH4VCZsQuhiB8QwI9oFKlTEz/9k=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…xI8S6dz_Ezxz4G_eMf3m-_7WFtwzy87G2lomlBgG4ip8u9I1g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…hGPOqGBH1tqKKCA3711-r2kwDCj5gWVdQftBUrrBCzIWeZm9z",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…D4Vg7sgurj-UmOEyTjupEdQSNfnyMcYiJYxQI7g9Gw3T6Kbyg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…PdiE4MGsjC_qhMyvQ0D3gnCvdHwW4p1d9vR34QDAQaq4jGPtQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…eig-QJ2J3m_3k9pOW8bo7t8ERQY50KZpq4BL8Ikj_v-4XMAVA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…mBZwFfMr8gDuGNUBr93j9GXDfp330O5rcIQKzwDJNMPuKQ54w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…UnQarOb8gJ8Um3i-IJfUQO-L2VUiT4Xi7agpLXYkpOro4t39Q", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…X7n_X1Fv-SEqmn2Hg8c_MTkYcaYocFMe_o0LoJw7a-qdX_7pg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jmD4NAR4X7Q_jkDX4BdL0fF0YvjIzmGaNbOn7zT5ZR0HPpHaw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…UiDYRH7OlocV6drXsJdOOnIXWRmqv2fDiXowIP7EtGtnQUk6w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…D0ENaTM30kFHlVtZdNhBnIxCO-R6sSWTkx5cZ3BN4II7psmA8", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…EzvhkhhpeHHjBvk6CAFpqo2twNl4KkekK-R1L8hV720PZWy3Q",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…wqV3aGWxSbymZxUo_r3UIlKLRVWt8yN-MeSDNqlxFNtKjJzrg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…H8m1U1aqZLyucvsrKd7ZGNuysuTat6eFxScc4UC7RdKYxzAnQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…pnVUsF2cshMYzmnv4wn3Id659nTb0y_BJLd_8jUn-z356cNXw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…z5hTJJgITIkcI-htHrunLte5V1ktCCjTqDyR4onkQBEfd74og",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…99pxFW_CscFrV1NdvE0SxkPS70GJSbp1FFdTF36oalat_8bS1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…F_DcrlMTn9l-NE1nuQq9074TnDe9FgvqoVFwip-D-uhTyms5A",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…D9-Ubxjs0q0gescdT6AGHTeoovosT0oZFg1eNVpJ4Ic8QDPmw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…TUXKiG9t9ZLbLh_E4AgAs2BVYis9Aj8OJqBNnQdJGVjTxcj5A",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…evud-u7JGzfJU0bft-2zGi8o6jS-jrWC_yRF7Ywn0q_MjXFaL", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…qvDrUJjGJGMNDWe5P8bn3h_W_qd3HrizlcPPS7462x5VkjrKi",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…y5pvLgVtK4tKrdyrHZxPDwqzrNRuiqo2es_EQJbJ35QbgHGK-", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…05Z0sY9X5wqlZUoLP75wqD-2ss4SwUrPZQsoJ6JSToPKUPOdw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…gDw2VRB5GwEpaIvONGxnlFJoOkdzeGxV3xFuj0S86nnqw7R_j", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…4QjSGvNTER8jm1VwjH-NHipCoT4Pe_afWGnpaF9xFL0ZYZzTA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…I5E71UXzgjbs9tDHzRxduNB1Jbu6uxfjyvmiHQUa4hjTz9Lsl", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…-Hckt1NKWNtVagtg4fYDMwMIYVtpS74eGJuNOd5c808B_6c_g",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…_jdz3CIQ_LAImMniLtSA5JnOr9pF07xOW_slPMUQbsFFaiK-X", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…F7L_Dk_iR2JPW9X_S1WWCCLAEoI8CDY1EwFHpbcmbzkmFGPJk",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…pH6XhGCc-kPDuv96_W0dzbsZbg3KbD5s9ZdV8QmaMeN1nLNkV", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…B8OqLIfn2RbKxKFjTDSQIrVud2mj4ORVpiPbwZqiiylWnzt8A",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…z-L_RnNiCjeUYnnnnHbighLlQLhNh48ycm6aSKBGq4RjvY_5C", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…EbG6pOMFmO3IvUEGCsnDbW7Hh04RusYFFQWJPDRgYnS6bf2dS",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…vQpO3RM5AL4FqK6dFYzonYoBzLh_BHoDUzrqehUpqdPI81Cxg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…ePWpHd88W_6_mXDlzv4TYnbgYacNY6rPhyIIn6ADvo3XAOWmG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…oUhMJwgt5mbulmItutq8EWMt-1AtYOo7xTsdWDiXjENSuP96w", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…qxnJVezAubFpymY7SAq1RrUjYBseTtx08HWHKHvmwlWVvKeMG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…U2aEaLoIZSZPa1Qk1ELv_L4UA1OQ3wHMsIyppYcYMKY-Gk_WJ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…hw4I-iPfddN7tQKueNk7KBURSSMUxFjkvEBjFjdhKhizSPtyQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…tDxeHnYRe4g4p00szSKpIA-0JBydBLBDqUgUmSC_f5MvFj28u", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…y7eMlaIeu7uc6nZaassmgvl9Hhni4zJCiwlXG7pXWg--DmjZw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…7F67tUiGENMlODp4egKgrZpULoVGf2G3dT9hY3PJCB-vX46oW", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…ajMMEaBCvCcepe7MrKfXAqvnUzCOL-5x3GXH8fVIP8dUN09Rg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…o-CgqIfuwK96bRfrUMEUt2_Q9pGZj2FTCD9M6jzMEttwA_jjA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…psgVwmKlwYeZXnxU03Ul9h-uMoP9BmgKo1fiPYakC2mouFyYw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…X1G8U4iq2t2OvNMSj9uFj-dyzj6uAvxJimCqCoCCOCH7bRsEg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…6X0JDJSR2zdBaY1_-Un_guy-nXdwFofhGaAJebgTl7bxgFMyI",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…-Sh4rxCjQZYT6yrHnccc9GPlDqio7867-NbC1z57RylvkB_-p", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…ZfJAhIP2fuN71PKsDF29RzBJNsLZ9Zm4vZ_4a84ZX2LT4NdeR",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…MB1JWrTKM0Q5boIB0urmjvTkNMV41NTyf6UxeLNu2dS3y5vCi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Oi8cwqJ6e9weUAWvGBaKbfrYjSOALol5oaQTk4b77C0gH3j2w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Jguf6JDdX6W81Wg1X4IwPfODSN9HqVZ_cTHu4HgoThT9Y9y5i", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…QpSuivtsmZBAKhHhvWzCZWL-8lVsOCivAP2LTsqVg-sidnhCA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…SA4ZOGS1gHbI7vrYf8bBaGK7e4yn5xK5Z1bwD6lRusiMuHZiP", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…H6HUXQHL2pw4hlg47GhRkWM8MbJuBj5cAVsd6S_PcZL4jnXQB",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…uKTghqXwMQJRPt8OwmxV3-QBTc5zZSLwIGvOzEmA9RUlCZe8w", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…4kTiAcRs5R1UN7j8Pq9mWa7Pcngqv23G_WvFkDfdZ3VyCWUxQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…RHG8jToa6lhBp4mRu0OSMdqDKC_oBVM9Bq5h-tXzdQqo8AWVQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…bFT6ks3Re_PsjJe9C6n6aImgy10_IV1X14xKdb83ss-mmECYw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jcu0svQu98YrJEMH4Eux-l3wxV0KWxWmUNOj0FtLagWbNKQuA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…LXPcbX-mbuvUR0WvP-QZfBGxxWt-_rPLFFuIscxVZ85amxFHg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…bKZD48FbIgrkQaecHw0s7jawrAPDMSXQKoqZ85WNIk7qg3CmA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…kn5VkZPxP4joB3izdhN7ePhHKGhFqWJF15NmhL60BFJeKRRdw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…29jbpaJDzS2-I9EpBDEXVsHjDaqPUBXcFcqPmgR8mdDnE5idQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…zcafir1SU9FEivaMbN60hbIHsu0jkLzeQB20TpSWL55fh1jpM",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…QqK6dUKuIrJ-sR8zR3RpO8Eq26-OsSjVwI92_tsqW4ErymSW0", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…yYuvZAwSqe9X7XIqznkEDc3eV95JCdTw2Af0S79y2OLt5pCvw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Ck_qJd8Ivg_oLxZbV-wFfGvRHDQGw064uUuCqm0FI70IsvNNz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…DKr9YQlmyfmmNIegxSl3r84iPKIlpA-3udU74LfecuQkP0gZg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…LQqPJhMfCD87hilPj_FzdPx7i3XvIG6aqaN0Hynj1XZ5Rfwtg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…MixrH2IKXGsJU6pKaZ-3lRdI3egz7-3jBkZS2Xim6WzqijpcP",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…5AdJxNL9abpIDM_brcZ5D_czxfpbATUNLDrEu5rObue6Eve6Q", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…oCBNfDfyekICE8rQ6oq6UCZN1kD7gPwO8EV-e4VrZinVqJi0w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…sAreJXfWJ4J-9lDW1DpGc01BTCc5p14W00N0s7cEuI86ZX_gg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…2oXFiTG42k39bYr5T5FNCicElVFZ3J3Y3Q4GSSKiEQ4JNWt4Q",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…xSCt7jzTFXRABcLkKJ3GVG-JiZOoG_BfjeN5c8sKMC6thNi0Q", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…9zmGuMtpdpTkrib2yjzm9cJ8vpiHhxp_z6DW_kJ_hj7ILASYr",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…r9g3SeDkJHY9Opglr0dRjOm4ORSw4XS53w61h1uazo4mfjCQg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…-EQdpFoISzCTvGseNDyAtgo90zNMFrHgL-S_7ZMk4mJgSsy_Q",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…4mFjHEWLpCUv79eiXyFJfeec0VBDKj6b6ER3z9DtVLDTT6r-w", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…0zRkFa_IJSXxREgu0lFgI7tGiKdKCjJ7kd30YSiQm7vbIA0uy",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…aHHBu0K7vsATRXY5VXcC7KedURpuYWMYEmT1HwItGldVud0Vw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Er4LsdFpgXxcmpnRzl4U6kOYJqAg3W5TfvnFIeYwjfNvfilYw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…UFQa4lVFLBN7cpRQiF00-FwGe93ID_XKz_nwX2kYvElbAqrx7", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…GTw2VCHyj00C170j6FB-QUvjUqlDcwxdRPqpMivH6GR6ottPQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…fi0GYegLiyJ0evQ1LWxebUxQ9Pe3yt8iRL5vOHxGMsttonkIK", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…iY39coE1p4sXj44qGMRPueJ8XOryG_lJpH7OoH8dOuOJ_cQkp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…JSy0F9Lo_kd3JaWNUPP5gT69PJ8sCm8fHtotadfzZXVFyOgug", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…rPULtKl8a2mBWIPCxJ6Ab1nfbfl-epjVrOw1f9plxKEjsxaFs",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…OsQP6ZlBWYpMjYV2on3kxtEFDI8kIqE6J4W4ovcpT2FdfzxKz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…fwyfXz5jUOHnRK4CSmCHDI77Gl8AVDX8wgSurVOMJuT0QgN6w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…H0LH4OtCxX19CBOgUu5nVQBYSKJ0bYa2AMx0FOd8knFfelfPw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…2Na4lweEDRI_fgoZu0_nvu_-F_-kPUEbjBmSeBKlnENFIN-vA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…biNyqwWBVnkPrHTJQ2p1qjHhS3lb10uL_c8G-MtX9kt0MfjLJ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…VSAZA9Q9w_qIM_XYyEN4FJSmxXdQbYvzwjHVHL6i5_7u4Gl-_",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…oDoLSoqwGC8uKp7874_KqXfqbseNmGSYcEn7Cscx5B0tfKcvQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…3OgRukeq0RPSd6aBPp_e7k7sQeLM-SbcUD2fsLEbsqxZI4Eco",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…SjTNNBZMpPevye-UWS9c2JkWk_ez3xJZ5iIghJp1dz2xWY5XA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…kCFmEFlwS7VZxI4OYIn3nvwtB27HwvhuRj0Wilj6jP5UmxYBJ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…sU-gjSrkuTy-oWWfrjvRVbrIvHlk8JUI4GN_KkpyGeGEbchX2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Sy1kx5MpHFskzEySWiwPh9FKUcb_7Ki5ApW1k33eXQDbizgdM",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…E0_vCBYn8jpc697pFL1M1_chrowwZIqtd2KTzQBtBkZvgyfxg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…v_GVp66TJnRWSBnjasiC5tM3mkkYb_X6fWWmsBQHx3U7Ua9Gj",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…S9quuh8q9kjGS_qEeWZ-BxS-vD2J_YM7rLpiJld-e9EFyGscC", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…6mG1C3DaHvP8gtxi3z77fx3nvX1L9CcGDtLIEATcrFNFf2B9V",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…5gROpkQcdOnt04frhPw7saVHjx06yVkSzrMrs8N6mvfySDPhw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…KUVSrw_l194mtR0Gq-9RDMkmkJZqSojuv2ObYrrCkZVfJIKuA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…SlFeliEafxR8sCRsyzelMGwmNVVeoJ-Otpj7ncY6Sbdo0nFLI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…S4i-bwgXs0ahx6tRMQvRI_86z6SfqfUDAYg1WcLgv8Me2F3oI", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…a4skIMon7yS7EqSrTGvlawBZlXARAMcg26dqq3I1z9Qu-T6VQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…yVFshGWzXPjSYEADCFfHbPpzxrBOtvCdcaiwsiXu-OSGEv8Gs", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…uRD4qoPQL7wDUSUQJBDG4CUTzMLjCv6PPLo2qFhJ59uvKq441", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…2iwSGzzTXBKnrHe_-yqbuY6DL7jM7NvLbw388myKaai-YPO7g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…acY7vaDjmiW9_p1OimZ6pdTcoji_oyxHrqzaPdz9Ky2kzLxOd", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…2peqp43EC0OEqbKVpgb-q-utStNMAQpMVHoFG2RT3b0VoEZWz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…SMbujG0UD-9HVKx1kodtidjxLzseOTccff0Sz-gg8aopCwf2l", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…EyOEXnPCMlheQAwOwfAEQBzyMpDUVqR6q4K7QhJX_L81eZu3H", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…0bVqKA2UBPip8etfPdQF8iVRzn6RquJHZuxa1HQYefNXOOmmg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jg03hB66VsO1nA85341KIkRSewQh5iQc-E4glX8crVgfyo9qA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…eMuJuF0zDzrvn2wj_NVqausqOnUZ3M0ZebeCjVGcKDdGea-uS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…tJwn3lhocSMk7UukVFs-P0IsGWqzNwP_Ql-RE9VdTMmp-ZixF", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…9Pvh8oVYMIBQC3D2gORCXgMxTiT_W4WI8EjbMzJ5kmTwS18pw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…LN11v3sEWlYJtoyKRUYdkRaeFluv81AMV7Wo7PKMEACLPRyzQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…5zfdmhBRF-FLLvLiGw078Aq2-MR67jPZCvkLlhaKKbIR8UDM4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…ZP6CqYF1yfsy9EUZ7-nc4tnUg7f7ynTneB-b5H2ze1Xdnf0kf", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…YuZ01p5rQZAE6xL5vff66MiQO4vCOchYi3pcgYKJ8kiXaUZnz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…q788PsBKnUskU0txaiMeveAKdUoaeQoaDTTri3dvQMvn1fWS2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…hsaLCzkClFo09je1h5INPt4aDNnstKb69SjTHij01LDqhcVCA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…_QkjYNo7ucGwcB3vkMBbwVeFj_F1qsyUphEYPhywMPS29cMF5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Dd-j9gBLkSq1_gO9L1hlZbaX3sDsto1ge3H1TqFbgyz4opRLA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…emvHau9yU9eOZQKBUCaHYl8iC8KBQ0Nf1NvGStvyvODkAxxdQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…eIrNnuWPzA6mQ5QNQfJ518mjxfrLk4bW-FdysDNsi9LuHLzCZ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…JaFUyozN6qcpSeLLT-50eG3rCH4y19oqt1BZgvKlqwudn1yr2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…w4uHcrmoTez0tMO1NDFBo63BzExf8ijoH-C2NpGlqDusc4DcA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…egSgKH-ilsZ0YXi8nHk9nFyyNTShuDXfoXt4ek3P0CYbE6irT", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…BGym17j2z8t8YOuYiQO0yFBD0D_NHQbj1w6es84tpsLI75Ifc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…CQRwnaSG5wbNW02-2R0okvw2RgfqkOis59jX7k6WjKj3rXeuP", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…q0bOC45rmHM_ZRFOGXjWaW8idPthMi6blLkxlolC4uCZ2iqID", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…UOSilwKQ8xJdCb-zkRx8Jv_BE5cHTUrrdFsQuJjYeK6NWbstA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…gB9sRJN2f-_Z6VMAqNrSFFg2CGwn9-j-iDRCaGFrcnAsDYX-g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…p4uwWdosY4al8JcSkzS31kGcd0iD9egYuLrAqwT1RfsAL8rwA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…J998x1BUjTKJWi-9mV2HLVkZTWAVKEw6fAcf184SHpZvjqsQw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…5GqGAFtEbUe_emPhprILFYauJHS2XekMAzXbenX9s49RvbF_Q", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…E8lChDABvtQtT8U0HWNpD1jOYTdlq9YL05av9vs5lvs0wp3iQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…pNNXAapl5On1puTKIqQkkJi3shOYDXTxzz9VLz9mvdMgfHCQA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…HrVX4OyP95Vp-nb5xPzoNZmJsmpORQHQO0MK6I8f0z5g-v0Rg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…RNbGFMlKrT0HCJnCB2xhQlAl4IXMIR_qq8-PTwnEovy5P7yh-", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…qFOdKj0dzql6Xri8AajscJ1T30AsoPi6BWzrEXXcmzBgKvCSP", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…kACtjrxOWiDc6Ws6GS3htwoHeHDucOmu-V99Br9ps1logmUV4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…4wZY_dwl78oiOLEeO1xw1AlTkmwjd6TEbFXEIRzEbMk0XcHnA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…S6R27rZXMKvWo1hP4RkQ3rBikv0kfA5seSZdo2d26XLU4eJYM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…EGwkJk2n0tZNUIpicimCdR2lys1B23MPqn_22xpSPej3VHVXg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Yaj_2cnW2ihcPSe8n35gwLV10hdJbo9oH6RG_1hB66G8muSWX", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…d9c8GBRxF-eHqMDVZIzzrVR8OdJFPSEks-hqJfwDdRACpFc_4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…HXXgnztZw0pH6vDkFZv8Vnmz8PGeMOMmk6-UOBIKbQkBcBbOw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…rDK2K52WLkLom_X0Qvq_nNm58BLuZEUA_GC8GAdrlGy4WNAf1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…lu6_23RjVHwLtNzHJwRIw-m8GGgWnm07DHkSXU-HW9YGRWwYh", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…TyB7Kp2dBAjBTZF0REIZdz7QuSC2kNcSPrvi-c0mcNWmiseHQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…BdxxSgvx3Pdb8E2j0PpyFKYlk7hnvFNqgy6BtMRoz-pEnWp44", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…-Nq7IMXHkXLc1UD2VOmYMgyd2Ry7n6sxhWg3oPNJEynIzh9IA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…5611143BnWfjzqkFosm44Hahc1ivCb_KFM_ge9tppoMuuSm6T", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…E3bppweI4uKS3gxt6de6-pB9RwNje0gn7Xr-hO_oqyFFBEelL", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…PcZN2rSLQ3qBja0Uk9gcNimGnx-id745WZTingjryUWNqxKAa", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…6bmUO_Bq5qT3DLXeNq2hn8ttjh7musNXnY0sBD6cZfbHyTV_g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Jd2rKKjVysykZgnals3PrCQdOK1zALUMRhrsyvkTj5Cq4hLOQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…md9tDOsU5VAsHNSD0pJ8E5hVQ5FzdR1wdSbhC2dWXm_8539ar", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…yczB1oP5fwDOj9NwjFEDJDKQX8npOoUufG8TLiqxnemUoYYdL", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…T57VrCDUKbDoYjRQG-5Q3befibbOXUth65p8F2r2OnnVa0HsF", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…P2GWR_sLmSsAPt_S75tcQ2hW2yEm2-tBT7vEQsJwUj2T7j5bA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jF6kHzql-ZSV71iUTVhibMEx3nBCw5xZ6EkDfQ2CrDlwdGOvw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…rSp4jhWi4KmjEilCYAz5WkW2FeB5bYxcY9kU6v3OsBQ1TnLXO", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…wSDlFXQzXVe-_awN4pUzldJcR46Of0bSTDVKjNhCxDv9kC3OQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…m7xVl0LFXkxOTnOCjjrnVjeG_jtC8s_2zOGwYY0tAEFtHeVXY", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Z8bpeGRzpV2KH4BsBmF3Vqb6VAhTdLkV7_0ZfcaDdEQXHxL2Z", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…2XJ1bc_p4H8wt2qd2S8SYtU-rc2PYMZq3ota9zGhLv6FNZKGQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…PiclH6RC_PVxv9b96Nol2vVRLbCfU_D3XLgQ9D89TNhwIr_Kg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Djta1M492JvNOYvOJ3Hll_zZiCTOZld_lDXcVBJBHrXfFZsnw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…cPtSqhSxryLUrWa-W5E1emQWUpwBjKkza9wA3alP5YhAANzLA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…bzyYJ-eKQ70NXBnq915_PzWc_1EdmDWHwZpi544XuNunLRQkM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…k6mKXqBBMC1RgORr7oUzQYoGXPzieM87slsprUgLq942KFCET", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…1tmUhY-mK_-xZtMv0jhaTYMmn1GCN1bRYuat5LMOtKLv8JQhw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…3AomykaSt3OY8cgj5RMN-kWqkMTK7K1FUHHMcSaBwm8g5tAew", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jorRICcZRGBDDZ7Gp9yTgOqfS6Jt3Eq2TaoNVeBL8kI6R7_8g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…bYQgWBwIHuEnP1r-bZzVhIjFPTU2qsT5ktWr00mVA_zZnDxU0", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…Qn1o49XVianDMIYkQAepPKkzkvv2ckQWh41c2byERR02uJaPw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…ohSVrkHDs43Cch3SNOHXIJaYtiQKJe8zqY0Eqt7Eh17W0gU8g", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jkWOjFefB9c2PHFDR7BCkMO7gze-8nS5sBUguUsm_VbFN9MKQ", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…X32XD-f-no6YlhVDdnyViBsUatnqnV3h0ihxDIUQoOXfv-6oA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…xBHZLqia21Sm6YTw9B9cCI1Tb_d8qrHg7HiidjVFFQxYA6Nqw", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…YSJUbyuqOZ9lBPSZ-uFQgfDWGtI8SXO7iVE6TgyH88Dklrf_A"
]
var nameOfCities = ["Айтос", "Аксаково", "Алфатар", "Антоново", "Априлци", "Ардино", "Асеновград", "Ахелой",
    "Ахтопол", "Балчик", "Банкя", "Банско", "Баня", "Батак", "Батановци", "Белене", "Белица", "Белово", "Белоградчик",
    "Белослав", "Берковица", "Благоевград", "Бобов дол", "Бобошево", "Божурище", "Бойчиновци", "Болярово", "Борово",
    "Ботевград", "Брацигово", "Брегово", "Брезник", "Брезово", "Брусарци", "Бургас", "Бухово", "Българово", "Бяла", "Бяла Слатина",
    "Бяла Черква", "Варна", "Велики Преслав", "Велико Търново", "Велинград", "Ветово", "Ветрен", "Видин", "Враца", "Вълчедръм", "Вълчи дол",
    "Върбица", "Вършец", "Габрово", "Генерал Тошево", "Главиница", "Глоджево", "Годеч", "Горна Оряховица", "Гоце Делчев", "Грамада",
    "Гулянци", "Гурково", "Гълъбово", "Две могили"
];

var userList = (function() {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    function UserList() {
        if (localStorage.getItem("users") != null) {
            this._users = JSON.parse(localStorage.getItem("users"));
        } else {
            this._users = [new User("denny", "dennY7", "denislav.yasenov@abv.bg")];
            localStorage.setItem("users", JSON.stringify(this._users));
        }
    }
    UserList.prototype.checkUsername = function(username){
        return this._users.some(user => user.username === username);
    }
    UserList.prototype.addUser = function(username, password, email) {
      var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=\S+$).{6,}$/.test(password)
        if ((typeof username == 'string') && (username.trim().length >= 4) && (pattern)) {
            if (!(this._users.some(user => user.username === username))) {
                this._users.push(new User(username, password, email));
                localStorage.setItem('users', JSON.stringify(this._users));
            }
        }
    }
    UserList.prototype.login = function(username, password) {
            return this._users.some(user => user.username === username &&
                user.password === password);
        }
        return new UserList();
})();
