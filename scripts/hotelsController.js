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
closeLog.addEventListener("click", function() {
    modal.style.display = 'none';
    logDisplayed = false;
});
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
var registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=\S+$).{6,}$/.test(password)
    if ((typeof username == 'string') && (username.trim().length >= 4) && (pattern)) {
        if (!userList.checkUsername(username)) {
            userList.addUser(username, password, email)
            modalReg.style.display = 'none';
            regDisplayed = false;
            alert("Вие успешно направихте вашата регистрация! Моля влезте в системата!")
            modal.style.display = "block";
            logDisplayed = true;
        } else {
            document.getElementById("failReg").innerText = "Потребителското име вече е заето!";
            document.getElementById("failReg").style.color = "red";
        }
    } else {
        document.getElementById("failReg").innerText = "Невалидно потребителско име или парола! Паролата трябва да съдържа главна буква, малка буква, цифра и да бъде поне 6 символа!";
        document.getElementById("failReg").style.color = "red";
        document.getElementById("failReg").style.width = "45%";
    }
});
var loginButton = document.getElementById("logButton");
loginButton.addEventListener("click", function(event) {
    var username = document.getElementById("userValue").value;
    var password = document.getElementById("passwordValue").value;
    var p = document.getElementById("infoSuccess");
    if (userList.login(username, password)) {
        var dropDown = document.getElementsByClassName("dropdown")[0]
        dropDown.style.display = "none";
        document.getElementById("userShowName").innerText = "  " + username;
        document.getElementById("logged").style.display = "inline-block";
        modal.style.display = 'none';
        logDisplayed = false;
    } else {
        p.innerText = "Невалиден потребител или парола!";
        p.style.color = "red";
    }
})
//Calendar
$.fn.datepicker.defaults.format = "dd/mm/yyyy";
$.fn.datepicker.defaults.startDate = "0";
