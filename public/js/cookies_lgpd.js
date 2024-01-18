'use strict';

const purecookieTitle = "Cookies",
    purecookieDesc = "Ao utilizar este site, você aceita automaticamente que utilizemos os cookies.",
    purecookieLink = '<br><br><a class="termo-uso-lgpd" href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/lgpd/termo-de-uso" target="_blank">Gostaria de saber mais?</a>',
    purecookieLGPD = '<br><a class="lgpd-informacoes" href="https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd" target="_blank">Lei Geral de Proteção de Dados (LGPD)</a>',
    purecookieButton = "Concordo";

function fade(element, fadeIn, duration) {
    let opacity = fadeIn ? 0 : 1;
    element.style.opacity = opacity;
    element.style.display = fadeIn ? "block" : "none";

    function animate() {
        opacity += fadeIn ? 0.02 : -0.02;
        if ((fadeIn && opacity > 1) || (!fadeIn && opacity < 0)) {
            element.style.display = fadeIn ? "block" : "none";
        } else {
            element.style.opacity = opacity;
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (24 * days * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let cookieName = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

function cookieConsent() {
    if (!getCookie("purecookieDismiss")) {
        let consentContainer = document.createElement("div");
        consentContainer.className = "cookieConsentContainer";
        consentContainer.id = "cookieConsentContainer";
        consentContainer.innerHTML = `
      <div class="cookieTitle"><a>${purecookieTitle}</a></div>
      <div class="cookieDesc"><p>${purecookieDesc} ${purecookieLink} ${purecookieLGPD}</p></div>
      <div class="cookieButton"><a onClick="purecookieDismiss();">${purecookieButton}</a></div>
    `;
        document.body.appendChild(consentContainer);
        fade(consentContainer, true);
    }
}

function purecookieDismiss() {
    setCookie("purecookieDismiss", "1", 7);
    fade(document.getElementById("cookieConsentContainer"), false);
}

window.onload = function () {
    cookieConsent();
};