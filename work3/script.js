let mobileMenu = document.querySelector(".mobileMenu")
let hamburger = document.querySelector("#switch")
let home = document.querySelector("#homepage")


window.onload = () => {
    hamburger.value = "off"
    hamburger.addEventListener("click", (e) => {
        if (hamburger.value == "on") {
            mobileMenu.style.display = "none"
            hamburger.value = "off"
        } else {
            mobileMenu.style.display = "inline"
            hamburger.value = "on"
        }
    })

    mobileMenu.addEventListener('click', (e) => {
        console.log(e.target.nodeName);
        if (e.target.nodeName == "A") {
            mobileMenu.style.display = "none"
            hamburger.value = "off"
        }
    })

    home.addEventListener('click', (e) => {
        location.href = "./index.html"

    })
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 770) {
        mobileMenu.style.display = "none"
    }
});


let goSignup = () => {
    location.href = "./signup.html"
}

let goLogin = () => {
    location.href = "./login.html"
}




var elements = document.getElementsByClassName("fa-heart");

var myFunction = function () {
    var attribute = this.classList.contains("favorite")
    console.log(attribute);
    if (attribute == true) {
        this.classList.remove("favorite")
    } else {
        this.classList.add("favorite")
    }
};

Array.from(elements).forEach(function (element) {
    element.addEventListener('click', myFunction);
});