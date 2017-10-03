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
    arr.forEach(function (usluga, index) {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = index;
        checkbox.name = name;
        checkbox.addEventListener("click", function (event) {
            if (checkbox.hasAttribute("checked")) {
                checkbox.removeAttribute("checked");
            } else {
                checkbox.setAttribute("checked", "checked");
            }

            var hotelsToDisplay = filterByMoreFilters();
            showHotels(hotelsToDisplay);
        })
        let label = document.createElement("label");
        label.innerText = usluga;
        checkbox.style.float = "left";
        label.appendChild(checkbox)
        li.appendChild(label);
        holder.appendChild(li);
        ul.appendChild(holder);
    });
}
fillUl(UDOBSTVA_V_HOTELA.HOTELSKI_USLUGI, ulHotelskiUslugi, "hotelskiUslugi");
fillUl(UDOBSTVA_V_HOTELA.TIP_NASTANQVANE, ulTipNastanavqne, "tipNastanavqne");
fillUl(UDOBSTVA_V_HOTELA.PATUVASHTI_S_DECA, ulPatuvashtiSDeca, "patuvashtiSDeca");
fillUl(UDOBSTVA_V_HOTELA.WELLNESS_SPA, ulWellnessSpa, "wellnessSpa");
fillUl(UDOBSTVA_V_HOTELA.NUMBER_OF_ROOMS, ulNumberOfRooms, "numberOfRooms");
fillUl(UDOBSTVA_V_HOTELA.UDOBSTVA_VYV_STAQTA, ulUdobstvaVyvStaqta, "udobstvaVyvStaqta");
fillUl(UDOBSTVA_V_HOTELA.SPORT_EQUIPMENT, ulSportEquipment, "sportEquipment");
fillUl(UDOBSTVA_V_HOTELA.HOTEL_PROFILE, ulHotelProfile, "hotelProfile");
fillUl(UDOBSTVA_V_HOTELA.PODHODQSHT_ZA, ulPodhodqshtZa, "podhodqshtZa");
fillUl(UDOBSTVA_V_HOTELA.DOSTYPNOST, ulDostypnost, "dostypnost");
moreFiltersBtn.addEventListener("click", function () {
    topFilters.style.display = "none";
    moreFilters.style.display = "block";
});
topFiltersBtn.addEventListener("click", function () {
    moreFilters.style.display = "none";
    topFilters.style.display = "block";
});

//add events for closing pop ups for login and register
var login = document.getElementById("login");
var modal = document.getElementById('id01');
var closeLog = document.getElementsByClassName("closeLog")[0];
var logDisplayed = false;
closeLog.addEventListener("click", function () {
    modal.style.display = 'none';
    logDisplayed = false;
});
login.addEventListener("click", function logIn() {
    modal.style.display = "block";
    logDisplayed = true;
    if (logDisplayed) {
        window.addEventListener("click", function (event) {
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
        window.addEventListener("click", function (event) {
            if (event.target == modalReg) {
                modalReg.style.display = "none";
                regDisplayed = false;
            }
        });
        closeReg.addEventListener("click", function () {
            modalReg.style.display = 'none';
            regDisplayed = false;
        });
    }
});
//login
var registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", function (event) {
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
loginButton.addEventListener("click", function (event) {
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

//Filters
//Searching for a city in the search bar
function getHotelsInSearchBar() {
    var searchValue = document.querySelector("input.form-control");
    if (!searchValue.value) {
        searchValue.value = "" + bulgaria.getCities()[Math.floor((Math.random() * bulgaria.getCities().length))].name;
    }
    var hotels = filterByCity(searchValue.value);
        hotels.forEach(hotel => console.log(hotel.name));
        return hotels;
}
//Events for the search bar
document.querySelector("input.form-control1").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        filterByMoreFilters();
    }
}, false)
document.querySelector("button.searchHeader").addEventListener("click", function () {
    filterByMoreFilters();
}, false)
//Event for the hotel search bar
document.getElementById("searchByName").addEventListener("blur", function (event) {
        var searchHotel = document.getElementById("searchByName");
        var hotel = findHotel(searchHotel.value);
        searchHotel.value = hotel.name;
        showHotels(hotel);
}, false)
document.getElementById("searchByNameButton").addEventListener("click", function (event) {
    event.preventDefault();
    var searchHotel = document.getElementById("searchByName");
    var hotel = findHotel(searchHotel.value);
    searchHotel.value = hotel.name;
    showHotels(hotel);
}, false)
//Function for the More filters section
function filterByMoreFilters() {
    var checkedFilters = document.querySelectorAll("input[checked='checked']");
    try {
        var filteredHotels = getHotelsInSearchBar();
        if (checkedFilters.length != 0) {
            for (var index = 0; index < checkedFilters.length; index++) {
                var categoryUdobstvo = checkedFilters[index].parentNode.parentNode.parentNode.parentNode.firstElementChild.id;
                var udobstvoID = checkedFilters[index].value;
                filteredHotels = filterByUdobstvo(categoryUdobstvo, udobstvoID, filteredHotels);
            }
        }
        const ONE_STAR = 1;
        const TWO_STARS = 2;
        const THREE_STARS = 3;
        const FOUR_STARS = 4;
        const FIVE_STARS = 5;
        switch (clickedCategory) {
            case "oneStar":
                filteredHotels = filterByCategory(ONE_STAR, filteredHotels);
                break;
            case "twoStars":
                filteredHotels = filterByCategory(TWO_STARS, filteredHotels);
                break;
            case "threeStars":
                filteredHotels = filterByCategory(THREE_STARS, filteredHotels);
                break;
            case "fourStars":
                filteredHotels = filterByCategory(FOUR_STARS, filteredHotels);
                break;
            case "fiveStars":
                filteredHotels = filterByCategory(FIVE_STARS, filteredHotels);
                break;
            default:
                break;
        }
        const RATING_0 = 0;
        const RATING_20 = 20;
        const RATING_40 = 40;
        const RATING_60 = 60;
        const RATING_80 = 80;
        switch (clickedRating) {
            case "zero":
                filteredHotels = filterByRating(RATING_0, filteredHotels);
                break;
            case "twenty":
                filteredHotels = filterByRating(RATING_20, filteredHotels);
                break;
            case "fourthy":
                filteredHotels = filterByRating(RATING_40, filteredHotels);
                break;
            case "sixty":
                filteredHotels = filterByRating(RATING_60, filteredHotels);
                break;
            case "eighty":
                filteredHotels = filterByRating(RATING_80, filteredHotels);
                break;
            default:
                break;
        }
        if (filterPrice) {
            filteredHotels = filterByPrice(filterPrice, filteredHotels);
        }
        if (clickedSpa) {
            filteredHotels = filterBySpa(filteredHotels)
        }
        if (clickedBeach) {
            filteredHotels = filterByBeach(filteredHotels)
        }
        if (clickedWiFi) {
            filteredHotels = filterByWiFi(filteredHotels)
        }
        if (clickedBreakfast) {
            filteredHotels = filterByBreakfast(filteredHotels)
        }
        if (clickedSwimmingPool) {
            filteredHotels = filterBySwimmingPool(filteredHotels)
        }
        showHotels(filteredHotels);
        return filteredHotels;
    } catch (error) {
        console.error(error.message);
    }
}

var clickedCategory;
var category = document.getElementsByClassName("btnStars");
var categoryArr = Array.from(category);
categoryArr.forEach(category => category.addEventListener('click', function () {
    clickedCategory = category.id;
    filterByMoreFilters();
}));

var clickedRating;
var rating = document.getElementsByClassName("ratingBtn");
var ratingArr = Array.from(rating);
ratingArr.forEach(rating => rating.addEventListener('click', function () {
    clickedRating = rating.id;
    filterByMoreFilters();
}))
var slider = document.getElementById("rangePrice");
var currentRange = document.getElementsByClassName("currentRange")[0];
var filterPrice;
slider.addEventListener("input", function () {
    currentRange.innerText = this.value;
})
slider.addEventListener("mouseup", function () {
    filterPrice = this.value;
    filterByMoreFilters();
})
//topFilters
var clickedSpa = false;
var clickedBeach = false;
var clickedWiFi = false;
var clickedBreakfast = false;
var clickedSwimmingPool = false;
var spa = document.getElementById("spa");
var beach = document.getElementById("beach");
var wiFi = document.getElementById("wiFi");
var breakfast = document.getElementById("breakfast");
var swimmingPool = document.getElementById("swimmingPool");
spa.addEventListener("click", function () {
    clickedSpa = !clickedSpa
    if (clickedSpa) {
        spa.classList.add("btn-primary")
        spa.classList.remove("btn-default")
    } else {
        spa.classList.remove("btn-primary")
        spa.classList.add("btn-default")
    }
    filterByMoreFilters();
})
beach.addEventListener("click", function () {
    clickedBeach = !clickedBeach
    if (clickedBeach) {
        beach.classList.add("btn-primary")
        beach.classList.remove("btn-default")
    } else {
        beach.classList.remove("btn-primary")
        beach.classList.add("btn-default")
    }
    filterByMoreFilters();
})
wiFi.addEventListener("click", function () {
    clickedWiFi = !clickedWiFi
    if (clickedWiFi) {
        wiFi.classList.add("btn-primary")
        wiFi.classList.remove("btn-default")
    } else {
        wiFi.classList.remove("btn-primary")
        wiFi.classList.add("btn-default")
    }
    filterByMoreFilters();
})
breakfast.addEventListener("click", function () {
    clickedBreakfast = !clickedBreakfast
    if (clickedBreakfast) {
        breakfast.classList.add("btn-primary")
        breakfast.classList.remove("btn-default")
    } else {
        breakfast.classList.remove("btn-primary")
        breakfast.classList.add("btn-default")
    }
    filterByMoreFilters();
})
swimmingPool.addEventListener("click", function () {
    clickedSwimmingPool = !clickedSwimmingPool
    if (clickedSwimmingPool) {
        swimmingPool.classList.add("btn-primary")
        swimmingPool.classList.remove("btn-default")
    } else {
        swimmingPool.classList.remove("btn-primary")
        swimmingPool.classList.add("btn-default")
    }
    filterByMoreFilters();
})
//Calendar
$.fn.datepicker.defaults.format = "dd/mm/yyyy";
$.fn.datepicker.defaults.startDate = "0";

console.log(bulgaria._cities)
//handlebars
// show Hotel
function loadTemplate(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            resolve(xhr.responseText);
        }
        xhr.send(null);
    });
}

function showHotels(hotels) {
    var template = "hotelsTemplate.html";

    function putTemplate(template, hotels) {
        loadTemplate(template).then(function (templateText) {
            var templateFunc = Handlebars.compile(templateText);
            var container = document.getElementById("hotelsContainer");
            container.innerHTML = '';
            if (hotels.length > 1) {
                hotels.forEach(function (hotel) {
                    container.innerHTML += templateFunc(hotel)
                    addEventsForHotels();
                })
            } else {
                if (hotels.length==1) {
                    container.innerHTML += templateFunc(hotels)
                    addEventsForHotels();
                }
                
            }

        })
    };
    putTemplate(template, hotels);
}

function addEventsForHotels() {
    var profilePictures = document.getElementsByClassName("profilePicture");
    Array.from(profilePictures).forEach(function (img) {
        img.addEventListener("click", function () {
            var moreAboutHotel = this.parentNode.parentNode.nextElementSibling;
            if (moreAboutHotel.style.display == "none") {
                moreAboutHotel.style.display = "block";
            } else {
                moreAboutHotel.style.display = "none";
            }
        });
    });
    var closeMenu = document.getElementsByClassName("closeMenu");
    Array.from(closeMenu).forEach(function (close) {
        close.addEventListener("click", function () {
            event.preventDefault()
            var moreAboutHotel = this.parentNode.parentNode.parentNode.parentNode
            moreAboutHotel.style.display = "none";
        });
    })
    var menuPhotos = document.getElementsByClassName("menuPhotos");
    Array.from(menuPhotos).forEach(function (photoM) {
        photoM.addEventListener("click", function (event) {
            event.preventDefault()
            var photos = this.parentNode.parentNode.parentNode.nextElementSibling
            var infoHotel = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling
            var opinions = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling
            var offerts = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
            photos.style.display = "block";
            infoHotel.style.display = "none";
            opinions.style.display = "none";
            offerts.style.display = "none";
        })
    })
    var menuInfo = document.getElementsByClassName("menuInfo");
    Array.from(menuInfo).forEach(function (infoM) {
        infoM.addEventListener("click", function (event) {
            event.preventDefault()
            var photos = this.parentNode.parentNode.parentNode.nextElementSibling
            var infoHotel = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling
            var opinions = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling
            var offerts = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
            photos.style.display = "none";
            infoHotel.style.display = "block";
            opinions.style.display = "none";
            offerts.style.display = "none";
        })
    })
    var menuOpinions = document.getElementsByClassName("menuOpinions");
    Array.from(menuOpinions).forEach(function (opinionsM) {
        opinionsM.addEventListener("click", function (event) {
            event.preventDefault()
            var photos = this.parentNode.parentNode.parentNode.nextElementSibling
            var infoHotel = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling
            var opinions = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling
            var offerts = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
            photos.style.display = "none";
            infoHotel.style.display = "none";
            opinions.style.display = "block";
            offerts.style.display = "none";
        })
    })
    var menuOfferts = document.getElementsByClassName("menuOfferts");
    Array.from(menuOfferts).forEach(function (offertsM) {
        offertsM.addEventListener("click", function (event) {
            event.preventDefault()
            var photos = this.parentNode.parentNode.parentNode.nextElementSibling
            var infoHotel = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling
            var opinions = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling
            var offerts = this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
            photos.style.display = "none";
            infoHotel.style.display = "none";
            opinions.style.display = "none";
            offerts.style.display = "block";
        })
    })
}