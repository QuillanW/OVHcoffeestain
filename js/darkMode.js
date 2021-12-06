// Variables
var content = document.getElementsByTagName("body")[0];
const check = document.getElementById("checkbox");
var hasCookie = document.cookie.includes("consent=true");
var darkding = false;
checkStatus();

function checkStatus() {
    if (hasCookie){
        if (localStorage.getItem("darkMode") === null){
            localStorage.setItem("darkMode", "false");
        }
        else if (localStorage.getItem('darkMode') === "true"){
            check.checked = true;
            content.classList.toggle("night");
        }else {
            check.checked = false;
            content.classList.toggle("dag");
        }
    }
    else{
        checkStatus = false;
    }
}

function changeStatus(){
    if (hasCookie){
        if (localStorage.getItem('darkMode') === "true"){
            content.classList.remove("night");
            content.classList.toggle("dag");
            localStorage.setItem('darkMode', "false");
        } else {
            localStorage.setItem('darkMode', "true");
            content.classList.remove("dag");
            content.classList.toggle("night");
        }
    }
    else {
        checkStatus = !checkStatus;
        changeModeNoCookie();
    }
}

function changeModeNoCookie(){
    if(checkStatus){
        content.classList.remove("night");
        content.classList.toggle("dag");
    }
    else{
        content.classList.remove("dag");
        content.classList.toggle("night");
    }
}

/*
checkStatus();

// We kijken of het in de localStorage aan of uit staat en veranderen we de website op basis van de gegevens.
function checkStatus() {
    if (localStorage.getItem('darkMode') === "true"){
        check.checked = true;
        content.classList.toggle("night");
    }else {
        check.checked = false;
        content.classList.toggle("dag");
    }
}

// Check als darkMode al aanstaat, zo ja dan verwijderen we de css darkMode variable en zetten we de dagMode variable aan.
// zo nee dan is het omgekeerd.
function changeStatus(){
    console.log(content.classList);
    if (localStorage.getItem('darkMode') === "true"){
        content.classList.remove("night");
        content.classList.toggle("dag");
        localStorage.setItem('darkMode', "false");
    } else {
        localStorage.setItem('darkMode', "true");
        content.classList.remove("dag");
        content.classList.toggle("night");
    }
}*/