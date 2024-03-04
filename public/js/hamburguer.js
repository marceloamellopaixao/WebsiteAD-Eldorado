
let navBar = document.getElementsByClassName("menu");
let ulnavBar = document.getElementsByClassName("menu-cabecalho");

function hamburguer() {
    if (navBar[0].classList.contains("active-nav")) {
        navBar[0].classList.toggle("active-nav");
        navBar[0].classList.remove("active-nav")

        ulnavBar[0].classList.toggle("active-ul");
        ulnavBar[0].classList.remove("active-ul");

        navBar[0].classList.toggle("inactive-nav");
        ulnavBar[0].classList.toggle("inactive-ul");

    } else {
        navBar[0].classList.toggle("active-nav");
        ulnavBar[0].classList.toggle("active-ul");

        navBar[0].classList.remove("inactive-nav");
        ulnavBar[0].classList.remove("inactive-ul");
    }
}
