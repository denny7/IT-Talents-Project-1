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
    "Сейф в хотела (рецепция)",,
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

function Hotel(name) {
    this.name = name;
    this.category = Math.floor(Math.random() * 4 + 1);
    this.price = Math.floor(Math.random() * 234 + 24);
    this.isAvailable = (Math.random() < 0.13)
        ? false
        : true;
    this.distanceFromCentre = Math.floor(Math.random() * 19.5 + 0.5);
    this.spa;
    this.beach;
    this.freeWifi;
    this.breakfast;
    this.pool;
    this.numberOfRooms = Math.floor(Math.random() * 150 + 1);
    this.plusoveZaHotela = [];
    this.addPlus = function(array) {
        var arrayOtPlusove = array.slice();
        var broiPlusove = Math.floor(Math.random() * arrayOtPlusove.length);
        console.log(broiPlusove);
        for (var index = 0; index < broiPlusove; index++) {
            var nomerNaPlus = Math.floor(Math.random() * arrayOtPlusove.length);
            console.log(arrayOtPlusove.length);
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
    this.freeWifi = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("безплатно wi-fi") !== -1))
        ? true
        : false;
    this.spa = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("спа") !== -1))
        ? true
        : false;
    this.breakfast = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("закуска") !== -1))
        ? true
        : false;
    this.pool = (this.plusoveZaHotela.find(plus => plus.toLowerCase().indexOf("басейн") !== -1))
        ? true
        : false;
}
function City(name) {
    this.name = name;
    this.hotels = [];
}
City.prototype.addHotel = function(name) {
    this.hotels.push(new Hotel(name));
}
//add functions for buttons TopFilter and moreFilters
var topFiltersBtn = document.getElementById("topFiltersBtn");
var moreFiltersBtn = document.getElementById("moreFiltersBtn");
var topFilters = document.getElementsByClassName("topFilters")[0];
var moreFilters = document.getElementsByClassName("moreFilters")[0];
var ulHotelskiUslugi = document.querySelector(".hotelskiUslugi>ul");
var ulTipNastanavqne = document.querySelector(".tipNastanavqne>ul");
var ulPatuvashtiSDeca = document.querySelector(".patuvashtiSDeca>ul");
var ulWellnessSpa = document.querySelector(".wellnessSpa>ul");
var ulNumberOfRooms = document.querySelector(".numberOfRooms>ul");
var ulUdobstvaVyvStaqta = document.querySelector(".udobstvaVyvStaqta>ul");
var ulSportEquipment = document.querySelector(".sportEquipment>ul");
var ulHotelProfile = document.querySelector(".hotelProfile>ul");
var ulPodhodqshtZa = document.querySelector(".podhodqshtZa>ul");
var ulDostypnost = document.querySelector(".dostypnost>ul");
function fillUl(arr, ul, name) {
    var holder = document.createDocumentFragment();
    arr.forEach(function(usluga, index) {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = index;
        checkbox.name = name;
        let label = document.createElement("label");
        label.innerText = usluga;
        checkbox.style.float = "left";
        label.appendChild(checkbox)
        li.appendChild(label);
        holder.appendChild(li);
        ul.appendChild(holder);
    });
}
fillUl(HOTELSKI_USLUGI, ulHotelskiUslugi, "hotelskiUslugi");
fillUl(TIP_NASTANQVANE, ulTipNastanavqne, "tipNastanavqne");
fillUl(PATUVASHTI_S_DECA, ulPatuvashtiSDeca, "patuvashtiSDeca");
fillUl(WELLNESS_SPA, ulWellnessSpa, "wellnessSpa");
fillUl(NUMBER_OF_ROOMS, ulNumberOfRooms, "numberOfRooms");
fillUl(UDOBSTVA_VYV_STAQTA, ulUdobstvaVyvStaqta, "udobstvaVyvStaqta");
fillUl(SPORT_EQUIPMENT, ulSportEquipment, "sportEquipment");
fillUl(HOTEL_PROFILE, ulHotelProfile, "hotelProfile");
fillUl(PODHODQSHT_ZA, ulPodhodqshtZa, "podhodqshtZa");
fillUl(DOSTYPNOST, ulDostypnost, "dostypnost");
moreFiltersBtn.addEventListener("click", function() {
    topFilters.style.display = "none";
    moreFilters.style.display = "block";
});
topFiltersBtn.addEventListener("click", function() {
    moreFilters.style.display = "none";
    topFilters.style.display = "block";
});

//add events for closing pop ups for login and register
var login = document.getElementById("login");
var modal = document.getElementById('id01');
var closeLog = document.getElementsByClassName("closeLog")[0];
var logDisplayed = false;
login.addEventListener("click", function logIn() {
    modal.style.display = "block";
    logDisplayed = true;
    if (logDisplayed) {
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                logDisplayed = false;
            }
        });
        closeLog.addEventListener("click", function() {
            modal.style.display = 'none';
            logDisplayed = false;
        });
    }
});
var register = document.getElementById("register");
var modalReg = document.getElementById('id02');
var closeReg = document.getElementsByClassName("closeReg")[0];
var regDisplayed = false;
register.addEventListener("click", function register() {
    modalReg.style.display = "block";
    regDisplayed = true;
    if (regDisplayed) {
        window.addEventListener("click", function(event) {
            if (event.target == modalReg) {
                modalReg.style.display = "none";
                regDisplayed = false;
            }
        });
        closeReg.addEventListener("click", function() {
            modalReg.style.display = 'none';
            regDisplayed = false;
        });
    }
});
//login
var users = [];
function Register(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    users.push(this);
}
new Register("denny", "123456", "denislav.yasenov@abv.bg");
var registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    new Register(username, password, email)
    modalReg.style.display = 'none';
    regDisplayed = false;
    alert("Вие успешно направехте вашата регистрация! Моля влезте в системата!")
    modal.style.display = "block";
    logDisplayed = true;
});
var loginButton = document.getElementById("logButton");
loginButton.addEventListener("click", function(event) {
    var userValue = document.getElementById("userValue").value;
    var password = document.getElementById("passwordValue").value;
    var userCheck = users.find(x => x.name == userValue && x.password == password);
    var p = document.getElementById("infoSuccess");
    if (userCheck) {
        var dropDown = document.getElementsByClassName("dropdown")[0]
        dropDown.style.display = "none";
        console.log(dropDown)
        document.getElementById("userShowName").innerText = "  " + userValue;
        document.getElementById("logged").style.display = "inline-block";
        modal.style.display = 'none';
        logDisplayed = false;
    } else {
        p.innerText = "Невалиден потребител или парола!";
        p.style.color = "red";
    }
})
