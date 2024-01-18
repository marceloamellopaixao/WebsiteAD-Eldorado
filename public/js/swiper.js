// Cria uma instância do Swiper associada ao seletor de classe CSS ".mySwiper".
let swiper = new Swiper(".mySwiper", {
  // Define o número de slides visíveis ao mesmo tempo.
  slidesPerView: 1,
  // Especifica o espaço (em pixels) entre os slides.
  spaceBetween: 30,
  // Habilita o loop contínuo do carrossel, permitindo a transição de volta ao primeiro slide após o último.
  loop: true,
  // Configuração da paginação do Swiper.
  pagination: {
    // Define o elemento HTML que servirá como contêiner para os indicadores de paginação.
    el: ".swiper-pagination",
    // Permite a navegação clicável através dos indicadores de paginação.
    clickable: true,
  },
  // Configuração da navegação do Swiper.
  navigation: {
    // Define o elemento HTML que atuará como botão de próxima (avanço) navegação.
    nextEl: ".swiper-button-next",
    // Define o elemento HTML que atuará como botão de anterior (retrocesso) navegação.
    prevEl: ".swiper-button-prev",
  },
});
