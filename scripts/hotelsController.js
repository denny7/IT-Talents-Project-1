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
        checkbox.addEventListener("click", function(event) {
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
        document.getElementById("userShowName").innerText = username;
        document.getElementById("logged").style.display = "inline-block";
        modal.style.display = 'none';
        logDisplayed = false;
        favouriteHotels();
    } else {
        p.innerText = "Невалиден потребител или парола!";
        p.style.color = "red";
    }
})

//Filters
//Searching for a city in the search bar
function getHotelsInSearchBar() {
    var searchValue = document.querySelector("input.form-control");
    var city = filterByCity(searchValue.value);
    searchValue.value = city.name;
    if (city) {
        return city.getHotels();
    }
    return city;
}
//Events for the search bar
var isItSearchingByCity = true;
document.querySelector("input.form-control1").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        isItSearchingByCity = true;
        filterByMoreFilters();
    }
}, false)
document.querySelector("button.searchHeader").addEventListener("click", function() {
    isItSearchingByCity = true;
    filterByMoreFilters();
}, false)
//Event for the hotel search bar
document.getElementById("searchByName").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.key == "Enter") {
        isItSearchingByCity = false;
        filterByMoreFilters();
    }
}, false)
document.getElementById("searchByNameButton").addEventListener("click", function(event) {
    event.preventDefault();
    isItSearchingByCity = false;
    filterByMoreFilters();
}, false)
//Function for the More filters section
function filterByMoreFilters() {
    var checkedFilters = document.querySelectorAll("input:checked");
    try {
        var filteredHotels = [];
        if (!isItSearchingByCity) {
            var searchHotel = document.getElementById("searchByName");
            var hotel = findHotel(searchHotel.value);
            searchHotel.value = hotel.name;
            document.querySelector("input.form-control1").value = '';
            filteredHotels.push(hotel);
        } else {
            filteredHotels = getHotelsInSearchBar();
            document.getElementById("searchByName").value = '';
        }
        if (checkedFilters.length != 0) {
            for (var index = 0; index < checkedFilters.length; index++) {
                var categoryUdobstvo = checkedFilters[index].parentNode.parentNode.parentNode.parentNode.firstElementChild.id;
                var udobstvoID = checkedFilters[index].value;
                filteredHotels = filterByUdobstvo(categoryUdobstvo, udobstvoID, filteredHotels);
            }
        }
        $("#mapGoogle").hide()
        $("#hotelsContainer").show()
        $(".showDate").show()
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
        if (selectedValue == 'singleRoom') {
            filteredHotels = filterBySingleRoom(filteredHotels)
        }
        if (selectedValue == 'doubleRoom') {
            filteredHotels = filterByDoubleRoom(filteredHotels)
        }
        if (selectedValue == 'familyRoom') {
            filteredHotels = filterByFamilyRoom(filteredHotels)
        }
        if (selectedValue == 'multipleRooms') {
            filteredHotels = filterByMultipleRoom(filteredHotels)
        }
        if (selectedCurrency == "eur") {
            var coef;
            getCurrency().then(function(result) {
                coef = result;
                filteredHotels.forEach(function(hotel) {
                    hotel.coef = coef;
                    hotel.currency = 'EUR';
                    hotel.price = Math.round(hotel.price * hotel.coef)
                    hotel.offers.forEach(function(offer) {
                        offer.priceOffer = Math.round(offer.priceOffer * coef)
                    })
                })
                $(".minRange").html("10 EUR");
                $(".maxRange").html("500 EUR");
                $("#rangePrice").attr("min", "10").attr("max", "500");
                $("#rangePrice").val(250);
                selectedCurrency = '';
            })
        }
        if (selectedCurrency == "bgn") {
            var coef;
            getCurrency().then(function(result) {
                coef = result;
                filteredHotels.forEach(function(hotel) {
                    hotel.coef = coef;
                    hotel.currency = 'BGN';
                    hotel.price = Math.round(hotel.price / hotel.coef)
                    hotel.offers.forEach(function(offer) {
                        offer.priceOffer = Math.round(offer.priceOffer / coef)
                    })
                })
            })
            $(".minRange").html("20 BGN");
            $(".maxRange").html("1000 BGN");
            $("#rangePrice").attr("min", "20").attr("max", "1000");
            selectedCurrency = '';
        }
        showHotels(filteredHotels);
        return filteredHotels;

    } catch (error) {
        var container = document.getElementById("hotelsContainer");
        container.innerHTML = "<h2>Зададеното име от вас го няма!</h2>"
    }
}

var clickedCategory;
var category = document.getElementsByClassName("btnStars");
var categoryArr = Array.from(category);
categoryArr.forEach(category => category.addEventListener('click', function() {
    clickedCategory = category.id;
    categoryArr.forEach(function(btn) {
        btn.classList.add("btn-default")
        btn.classList.remove("btn-primary")
    })
    var categotyClicked = document.getElementById(clickedCategory)
    categotyClicked.classList.add("btn-primary")
    categotyClicked.classList.remove("btn-default")
    filterByMoreFilters();
}));

var clickedRating;
var rating = document.getElementsByClassName("ratingBtn");
var ratingArr = Array.from(rating);
ratingArr.forEach(rating => rating.addEventListener('click', function() {
    clickedRating = rating.id;
    ratingArr.forEach(function(btn) {
        btn.classList.add("btn-default")
        btn.classList.remove("btn-primary")
    })
    var ratingClicked = document.getElementById(clickedRating)
    ratingClicked.classList.add("btn-primary")
    ratingClicked.classList.remove("btn-default")
    filterByMoreFilters();
}))
var slider = document.getElementById("rangePrice");
var currentRange = document.getElementsByClassName("currentRange")[0];
var filterPrice;
slider.addEventListener("input", function() {
    currentRange.innerText = this.value;
})
slider.addEventListener("mouseup", function() {
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
spa.addEventListener("click", function() {
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
beach.addEventListener("click", function() {
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
wiFi.addEventListener("click", function() {
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
breakfast.addEventListener("click", function() {
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
swimmingPool.addEventListener("click", function() {
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
var selectedValue = '';
var selectRoom = document.getElementById("sel1");
selectRoom.addEventListener("change", function() {
    selectedValue = selectRoom.value;
    filterByMoreFilters();
})
var selectedCurrency = '';
var selectCurrency = document.getElementById("currency");
selectCurrency.addEventListener("change", function() {
    selectedCurrency = selectCurrency.value;
    filterByMoreFilters();
})
//Reset filters
function resetFilters() {
    var checkedFilters = document.querySelectorAll("input:checked");
    checkedFilters.forEach(function(filter) {
        filter.checked = false;
    });
    selectedValue = '';
    clickedCategory = '';
    clickedRating = '';
    slider.value = (parseInt(document.querySelector(".maxRange").value))/2;
    currentRange.innerText = '';
    filterPrice = '';
    if (clickedSpa) {
        spa.classList.add("btn-default")
        spa.classList.remove("btn-primary")
        clickedSpa = !clickedSpa;
    }
    if (clickedBeach) {
        beach.classList.add("btn-default")
        beach.classList.remove("btn-primary")
        clickedBeach = !clickedBeach;
    }
    if (clickedBreakfast) {
        breakfast.classList.add("btn-default")
        breakfast.classList.remove("btn-primary")
        clickedBreakfast = !clickedBreakfast;
    }
    if (clickedWiFi) {
        wiFi.classList.add("btn-default")
        wiFi.classList.remove("btn-primary")
        clickedWiFi = !clickedWiFi;
    }
    if (clickedSwimmingPool) {
        swimmingPool.classList.add("btn-default")
        swimmingPool.classList.remove("btn-primary")
        clickedSwimmingPool = !clickedSwimmingPool;
    }
    filterByMoreFilters();
}
document.querySelector("button.deleteFiltersBtn").addEventListener("click", function() {
    resetFilters();
})
//Calendar
$.fn.datepicker.defaults.format = "dd/mm/yyyy";
$.fn.datepicker.defaults.startDate = "0";
var date = new Date();
document.getElementsByClassName("firstDateSpan")[0].innerText = date.getDay() + 1 + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
document.getElementsByClassName("secondDateSpan")[0].innerText = date.getDay() + 2 + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

function secondDateF() {
    var day = +($(".firstDate").val().slice(0, 2)) + 1;
    var month = $(".firstDate").val().slice(3, 5)
    var year = $(".firstDate").val().slice(6, 10)
    document.getElementsByClassName("secondDateSpan")[0].innerText = day + "/" + month + "/" + year
}
$(".firstDate").change(function() {
    var firstDate = $(".firstDate").val()
    document.getElementsByClassName("firstDateSpan")[0].innerText = firstDate;
    secondDateF()
    filterByMoreFilters();
})
$(".secondDate").change(function() {
    var secondDate = $(".secondDate").val()
    if (secondDate.slice(0, 2) > $(".firstDate").val().slice(0, 2) && secondDate.slice(3, 5) >= $(".firstDate").val().slice(3, 5) && secondDate.slice(6, 10) >= $(".firstDate").val().slice(6, 10)) {
        document.getElementsByClassName("secondDateSpan")[0].innerText = secondDate;
        filterByMoreFilters();
    } else {
        secondDateF()
    }
})
//map

$(".showMapBtn").on("click", function() {
    $("#mapGoogle").show()
    $("#hotelsContainer").hide()
    $(".showDate").hide()

})
console.log(bulgaria._cities)
//handlebars
// show Hotel
function loadTemplate(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            resolve(xhr.responseText);
        }
        xhr.send(null);
    });
}

function showHotels(hotels) {
    var template = "hotelsTemplate.html";

    function putTemplate(template, hotels) {
        loadTemplate(template).then(function(templateText) {
            var templateFunc = Handlebars.compile(templateText);
            var container = document.getElementById("hotelsContainer");
            container.innerHTML = '';
            if (Array.isArray(hotels)) {
                for (var index = 0; index < hotels.length; index++) {
                    container.innerHTML += templateFunc(hotels[index]);
                }
            } else {
                container.innerHTML += templateFunc(hotels);
            }
            favouriteHotels();
            addEventsForHotels();
        })
        document.getElementsByClassName("showDate")[0].style.display = "block";
    };
    putTemplate(template, hotels);

}

function favouriteHotels() {
    if (document.getElementById("logged").style.display === "inline-block") {
        document.querySelectorAll(".templateHotels > .row > .col-sm-7 > img.favourites").forEach(function(fav) {
            fav.style.display = "inline-block";
            var hotelName = fav.parentNode.querySelector("p").innerText;
            var hotel = findHotel(hotelName);
            var username = document.getElementById("userShowName").innerText;
            if (userList.isTheHotelAdded(username, hotel)) {
                fav.style.opacity = 1;
            } else {
                fav.style.opacity = 0.7;
            }
            fav.addEventListener("click", function(event) {

                if (userList.isTheHotelAdded(username, hotel)) {
                    userList.removeFavourite(username, hotel);
                    fav.style.opacity = 0.7;
                } else {
                    userList.addFavourite(username, hotel);
                    fav.style.opacity = 1;
                }
            })
        });
    }
}
function addEventsForHotels() {
    var profilePictures = document.getElementsByClassName("profilePicture");
    Array.from(profilePictures).forEach(function(img) {
        img.addEventListener("click", function() {
            var moreAboutHotel = this.parentNode.parentNode.nextElementSibling;
            if (moreAboutHotel.style.display == "none") {
                moreAboutHotel.style.display = "block";
            } else {
                moreAboutHotel.style.display = "none";
            }
        });
    });
    var closeMenu = document.getElementsByClassName("closeMenu");
    Array.from(closeMenu).forEach(function(close) {
        close.addEventListener("click", function() {
            event.preventDefault()
            var moreAboutHotel = this.parentNode.parentNode.parentNode.parentNode
            moreAboutHotel.style.display = "none";
        });
    })
    var menuPhotos = document.getElementsByClassName("menuPhotos");
    Array.from(menuPhotos).forEach(function(photoM) {
        photoM.addEventListener("click", function(event) {
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
    Array.from(menuInfo).forEach(function(infoM) {
        infoM.addEventListener("click", function(event) {
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
    Array.from(menuOpinions).forEach(function(opinionsM) {
        opinionsM.addEventListener("click", function(event) {
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
    Array.from(menuOfferts).forEach(function(offertsM) {
        offertsM.addEventListener("click", function(event) {
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
var clickedShowFilters = false;
$(".showFilters").on("click", function() {
    clickedShowFilters = !clickedShowFilters
    if (clickedShowFilters) {
        $(".sidenav").css("display", "none")
        $(".btnText").text("Покажи филтрите")

    } else {
        $(".sidenav").css("display", "block")
        $(".btnText").text("Скрий филтрите")
    }
})
