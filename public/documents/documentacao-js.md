# Documentação de Arquivos JavaScript do Site

<details>
    <summary><b>Versiculo Diário da Biblia</b></summary>

<br>

*Este código em JavaScript é um script que exibe diariamente um versículo aleatório da Bíblia em uma página da web. Vamos analisar o código e explicar cada parte:*

## Obtendo elementos DOM:

```javascript
let textMsgDay = document.getElementById('msg-day');
let versiculoMsgDay = document.getElementById('versiculo-p');
```

Essas linhas obtêm referências aos elementos HTML com os IDs 'msg-day' e 'versiculo-p'. Eles provavelmente são elementos de texto em que o versículo e suas informações serão exibidos.

---

## Função para buscar e exibir um novo versículo:

```javascript
function fetchAndDisplayVerse() {
  //...
}
```

Essa função utiliza a API da Biblioteca Digital da Bíblia para buscar um versículo aleatório em português. O resultado é processado e exibido na página, e as informações do versículo também são armazenadas no armazenamento local.

---

## Atualização do versículo no DOM:

```javascript
function updateVerseInfo(nomeCapBible, capChapterBible, versicleBible) {
  versiculoMsgDay.innerText = nomeCapBible + ' ' + capChapterBible + ':' + versicleBible;
}
```

Esta função recebe as informações do versículo (nome do livro, capítulo e versículo) e atualiza o conteúdo do elemento com o ID 'versiculo-p' no DOM.

---

## Verificação e exibição do versículo salvo localmente:

```javascript
const storedNomeCap = localStorage.getItem('nomeCapBible');
const storedCapChapter = localStorage.getItem('capChapterBible');
const storedVersicle = localStorage.getItem('versicleBible');
const storedTextBible = localStorage.getItem('textBible');

if (storedNomeCap && storedCapChapter && storedVersicle) {
  //...
} else {
  fetchAndDisplayVerse();
}
```

O código verifica se há informações do versículo armazenadas localmente. Se existirem, ele atualiza o DOM com essas informações. Caso contrário, ele chama a função `fetchAndDisplayVerse()` para buscar e exibir um novo versículo.

---

## Atualização do versículo à meia-noite e a cada 24 horas:

```javascript
function updateVerseAtMidnight() {
  //...
}

updateVerseAtMidnight();
setInterval(updateVerseAtMidnight, 24 * 60 * 60 * 1000);
```

A função `updateVerseAtMidnight` é definida para calcular o tempo restante até a meia-noite do dia atual. Em seguida, ela usa `setTimeout` para chamar `fetchAndDisplayVerse` após esse intervalo de tempo. O `setInterval` é configurado para chamar `updateVerseAtMidnight` a cada 24 horas, garantindo que o versículo seja atualizado diariamente.

</details>
<hr>
<details>

<summary><b>Cookies (LGPD e Termo de Uso)</b></summary>

<br>

*Este código implementa um aviso de consentimento de cookies para um site, conforme exigido pela Lei Geral de Proteção de Dados (LGPD). Vamos analisar e documentar o código por seção:*

### Configurações Iniciais

```javascript
'use strict';

const purecookieTitle = "Cookies",
    purecookieDesc = "Ao utilizar este site, você aceita automaticamente que utilizemos os cookies.",
    purecookieLink = '<br><br><a href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/lgpd/termo-de-uso" target="_blank">Gostaria de saber mais?</a>',
    purecookieLGPD = '<br><a href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd" target="_blank">Lei Geral de Proteção de Dados (LGPD)</a>',
    purecookieButton = "Concordo";
```

Aqui são definidas algumas constantes que armazenam informações sobre o aviso de cookies, como título, descrição, links e texto do botão de consentimento.

### Função de Animação

```javascript
function fade(element, fadeIn, duration) {
    // ...
}
```

Esta função `fade` é responsável por criar uma animação de fade-in ou fade-out para o elemento fornecido. Ela é utilizada para mostrar e esconder o aviso de cookies.

### Funções de Manipulação de Cookies

```javascript
function setCookie(name, value, days) {
    // ...
}

function getCookie(name) {
    // ...
}

function eraseCookie(name) {
    // ...
}
```

Essas funções são utilitárias para definir, obter e excluir cookies. Elas são usadas para gerenciar o cookie que registra se o usuário já deu seu consentimento.

### Função de Consentimento de Cookies

```javascript
function cookieConsent() {
    if (!getCookie("purecookieDismiss")) {
        // ...
    }
}
```

Esta função verifica se o cookie de consentimento já foi definido. Se não, ela cria e exibe o aviso de cookies na página.

### Função para Descartar o Aviso de Cookies

```javascript
function purecookieDismiss() {
    setCookie("purecookieDismiss", "1", 7);
    fade(document.getElementById("cookieConsentContainer"), false);
}
```

A função `purecookieDismiss` é chamada quando o usuário clica no botão de consentimento. Ela define o cookie de descarte e oculta o aviso de cookies.

### Configuração do Evento `onload`

```javascript
window.onload = function () {
    cookieConsent();
};
```

O código configura o evento `onload` para chamar a função `cookieConsent` quando a página é carregada, garantindo que o aviso de cookies seja exibido conforme necessário.

### Considerações Finais

Este script é uma implementação simples e eficaz para um aviso de cookies, com suporte à LGPD. Ele utiliza JavaScript para manipular cookies e criar uma experiência de usuário que atende aos requisitos legais relacionados à privacidade. Certifique-se de adaptar os links e textos conforme necessário para atender aos requisitos específicos do seu site e à legislação local.

</details>
<hr>
<details>

<summary><b>Hamburguer - Responsividade (Mobile)</b></summary>
<br>

*O código JavaScript apresentado manipula as classes de elementos HTML para criar um efeito de menu hamburguer (hamburger menu) em uma barra de navegação. Vamos explicar cada parte do código:*

```javascript
let navBar = document.getElementsByClassName("menu");
let ulnavBar = document.getElementsByClassName("menu-cabecalho");
```

`navBar` e `ulnavBar` são arrays-like objects que armazenam os elementos do DOM com as classes "menu" e "menu-cabecalho", respectivamente.

```javascript
function hamburguer() {
    if (navBar[0].classList.contains("active-nav")) {
        // Remove as classes "active-nav" e "inactive-nav" da barra de navegação
        navBar[0].classList.toggle("active-nav");
        navBar[0].classList.remove("active-nav");
        
        // Remove as classes "active-ul" e "inactive-ul" da lista de navegação
        ulnavBar[0].classList.toggle("active-ul");
        ulnavBar[0].classList.remove("active-ul");

        // Adiciona as classes "inactive-nav" e "inactive-ul" para esconder os elementos
        navBar[0].classList.toggle("inactive-nav");
        ulnavBar[0].classList.toggle("inactive-ul");
    
    } else {
        // Adiciona as classes "active-nav" e "active-ul" para exibir os elementos
        navBar[0].classList.toggle("active-nav");
        ulnavBar[0].classList.toggle("active-ul");

        // Remove as classes "inactive-nav" e "inactive-ul" para reverter o efeito de esconder
        navBar[0].classList.remove("inactive-nav");
        ulnavBar[0].classList.remove("inactive-ul");
    }
}
```

`hamburguer()` é uma função que manipula as classes dos elementos da barra de navegação quando chamada.
- A função verifica se a barra de navegação possui a classe "active-nav". Se tiver, ela remove as classes "active-nav" e "active-ul" e adiciona as classes "inactive-nav" e "inactive-ul". Isso esconde os elementos.
- Se a barra de navegação não tiver a classe "active-nav", a função faz o oposto, adicionando "active-nav" e "active-ul" e removendo "inactive-nav" e "inactive-ul". Isso exibe os elementos.
- O uso de `toggle` é para alternar a presença das classes, adicionando se não estiver presente e removendo se já estiver.

</details>
<hr>
<details>

<summary><b>Idiomas Disponíveis</b></summary>
<br>

*Este código jQuery tem a finalidade de alternar o conteúdo do site entre diferentes idiomas (português, inglês e espanhol) ao clicar em botões de seleção de idioma. Vamos analisar e documentar cada parte do código:*

### Função para o Idioma Português (BR)
```javascript
$(function () {
    $('.br').click(function () {
        // Atualiza o título da página
        $('title').text('Igreja Assembleia de Deus - Eldorado Online');

        // Atualiza o conteúdo do menu de navegação
        $('.menu-cabecalho li a').eq(0).text('sobre');
        $('.menu-cabecalho li a').eq(1).text('eventos');
        $('.menu-cabecalho li a').eq(2).text('doações');
        $('.menu-cabecalho li a').eq(3).text('pedido de oração');
        $('.menu-cabecalho li a').eq(4).text('visite-nos');

        // Atualiza a classe e o texto do elemento de seleção de idioma
        $('.language-selected').text('pt-BR');
        $('.language-selected').removeClass('change-en');
        $('.language-selected').removeClass('change-es');
        $('.language-selected').addClass('change-br');

        // ... Atualiza outros elementos do site
    })
});
```

### Função para o Idioma Inglês (EN)
```javascript
$(function () {
    $('.en').click(function () {
        // Atualiza o título da página
        $('title').text('Evangelical Church Assembly of God - Eldorado Online');

        // Atualiza o conteúdo do menu de navegação
        $('.menu-cabecalho li a').eq(0).text('about');
        $('.menu-cabecalho li a').eq(1).text('events');
        $('.menu-cabecalho li a').eq(2).text('donations');
        $('.menu-cabecalho li a').eq(3).text('prayer request');
        $('.menu-cabecalho li a').eq(4).text('visit us');

        // Atualiza a classe e o texto do elemento de seleção de idioma
        $('.language-selected').text('en-US');
        $('.language-selected').removeClass('change-br');
        $('.language-selected').removeClass('change-es');
        $('.language-selected').addClass('change-en');

        // ... Atualiza outros elementos do site
    })
});
```

### Função para o Idioma Espanhol (ES)
```javascript
$(function () {
    $('.es').click(function () {
        // Atualiza o título da página
        $('title').text('Igreja Evangélica Asamblea de Dios - Eldorado Online');

        // Atualiza o conteúdo do menu de navegação
        $('.menu-cabecalho li a').eq(0).text('about');
        $('.menu-cabecalho li a').eq(1).text('eventos');
        $('.menu-cabecalho li a').eq(2).text('donações');
        $('.menu-cabecalho li a').eq(3).text('solicitud de oración');
        $('.menu-cabecalho li a').eq(4).text('visítanos');

        // Atualiza a classe e o texto do elemento de seleção de idioma
        $('.language-selected').text('ES');
        $('.language-selected').removeClass('change-en');
        $('.language-selected').removeClass('change-br');
        $('.language-selected').addClass('change-es');

        // ... Atualiza outros elementos do site
    })
});
```

### Notas Gerais
- Cada função é executada quando um elemento com a classe correspondente ao idioma é clicado.
- A função atualiza o título da página, o texto do menu de navegação, a classe e o texto do elemento de seleção de idioma, e outros elementos do site conforme necessário.
- Elementos que estão em manutenção ou dependem de uma API externa estão identificados no código.
- O código utiliza jQuery para manipulação do DOM de forma simplificada.
- Certifique-se de fornecer traduções precisas e atualizadas para cada idioma.

</details>
<hr>
<details>

<summary><b>Botão de Rolagem para o Topo</b></summary>
<br>

*Este trecho de código JavaScript cria um efeito de exibição ou ocultação de uma seta de retorno ao topo (scroll-to-top) com base no comportamento de rolagem da página. Vamos analisar cada parte do código:*

### Função IIFE (Immediately Invoked Function Expression)
```javascript
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
```

### Funcionamento do Código
- A função imediatamente invocada (IIFE) é utilizada para encapsular o código, prevenindo que variáveis locais afetem o escopo global.
- Um ouvinte de evento de rolagem é adicionado à janela (`window`). A função de callback será acionada sempre que ocorrer um evento de rolagem.
- O código obtém a referência ao elemento com o ID "back-top" através de `document.getElementById("back-top")`.
- A quantidade de rolagem vertical da janela é obtida através de `window.scrollY`.
- Se a quantidade de rolagem (`scroll`) for maior ou igual a 300 pixels, a classe "seta-top-disable" é removida do elemento. Isso geralmente indica que o usuário rolou para baixo na página.
- Se a quantidade de rolagem for inferior a 300 pixels, a classe "seta-top-disable" é adicionada ao elemento. Isso indica que o usuário está no início ou próximo do início da página.
- A classe "seta-top-disable" é responsável por ocultar ou exibir a seta de retorno ao topo, conforme estilizado no CSS.

### Notas Adicionais
- Certifique-se de que o elemento com o ID "back-top" e a classe "seta-top-disable" estejam definidos no HTML e CSS, respectivamente.
- O valor 300 pixels (`scroll >= 300`) pode ser ajustado conforme necessário para controlar em qual ponto da rolagem a seta deve ser exibida ou ocultada.
- Esse tipo de funcionalidade é comumente utilizado para melhorar a experiência do usuário em páginas longas, facilitando o retorno ao topo.

</details>
<hr>
<details>

<summary><b>Carrossel de Imagens (Eventos)</b></summary>
<br>

*O código apresentado cria uma instância da biblioteca Swiper para implementar um carrossel (slider) interativo em uma página web. Abaixo, uma explicação detalhada de cada parte do código:*

```javascript
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

```

### Instância do Swiper:

```javascript
let swiper = new Swiper(".mySwiper", {
  // ...
});
```

Cria uma nova instância do Swiper associada ao seletor de classe CSS .mySwiper. Certifique-se de que esse seletor corresponda ao elemento HTML desejado.

### Configurações do Swiper:

```javascript
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
```

- slidesPerView: 1: Define o número de slides visíveis ao mesmo tempo. Neste caso, está configurado para exibir um slide por vez.
- spaceBetween: 30: Especifica o espaço (em pixels) entre os slides.
- loop: true: Habilita o loop contínuo do carrossel, permitindo que a transição ocorra de volta ao primeiro slide após o último.

### Paginação:

```javascript
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
```

- Configura a paginação do Swiper.
- el: ".swiper-pagination": Define o elemento HTML que servirá como contêiner para os indicadores de paginção.
- clickable: true: Permite a navegação clicável através dos indicadores de paginção.

### Navegação:

```javascript
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
```

- Configura a navegação do Swiper.
- nextEl: ".swiper-button-next": Define o elemento HTML que atuará como botão de próxima (avanço) navegação.
- prevEl: ".swiper-button-prev": Define o elemento HTML que atuará como botão de anterior (retrocesso) navegação.
Esse código é utilizado para criar um carrossel de slides em páginas web, proporcionando uma experiência de navegação dinâmica e interativa.

</details>