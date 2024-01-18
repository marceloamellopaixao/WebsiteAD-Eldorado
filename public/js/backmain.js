(function () {
    // Cria uma função imediatamente invocada para encapsular o código
    window.addEventListener("scroll", function () {
        // Adiciona um ouvinte de evento de rolagem à janela
        let backInit = document.getElementById("back-top");
        // Obtém a referência ao elemento com o ID "back-top"
        let scroll = window.scrollY;
        // Obtém a quantidade de rolagem vertical da janela

        if (scroll >= 300) {
            // Se o valor de rolagem for maior ou igual a 300 pixels
            backInit.classList.remove("seta-top-disable");
            // Remove a classe "seta-top-disable" do elemento
        } else {
            // Se o valor de rolagem for inferior a 300 pixels
            backInit.classList.add("seta-top-disable");
            // Adiciona a classe "seta-top-disable" ao elemento
        }
    });
})();
