// Top and More Filters show
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
var registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=\S+$).{6,}$/.test(password)
    if ((typeof username == 'string') && (username.trim().length >= 4) && (pattern)) {
        if (!(userList._users.some(user => user.username === username))) {
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
