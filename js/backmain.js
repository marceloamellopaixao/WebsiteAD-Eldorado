(function () {
    window.addEventListener("scroll", function () {
        let backInit = document.getElementById("back-top");
        let scroll = window.scrollY;

        if (scroll >= 300) {
            backInit.classList.remove("seta-top-disable");

        } else {
            backInit.classList.add("seta-top-disable");
        }
    });
})();