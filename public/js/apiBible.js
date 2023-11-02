let textMsgDay = document.getElementById('msg-day');
let versiculoMsgDay = document.getElementById('versiculo-p');

// Função para buscar e exibir um novo versículo
function fetchAndDisplayVerse() {
  fetch('https://www.abibliadigital.com.br/api/verses/nvi/random')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      let textBible = data.text;
      textMsgDay.innerText = textBible;

      let nomeCapBible = data.book.name;
      let capChapterBible = data.chapter;
      let versicleBible = data.number;

      // Armazene as informações no armazenamento local
      localStorage.setItem('nomeCapBible', nomeCapBible);
      localStorage.setItem('capChapterBible', capChapterBible);
      localStorage.setItem('versicleBible', versicleBible);
      localStorage.setItem('textBible', textBible);
      localStorage.setItem('lastUpdateTimestamp', Date.now()); // Armazene o carimbo de data/hora da última atualização

      // Atualize o versículo no DOM
      updateVerseInfo(nomeCapBible, capChapterBible, versicleBible);
    });
}

// Função para atualizar o versículo no DOM
function updateVerseInfo(nomeCapBible, capChapterBible, versicleBible) {
  versiculoMsgDay.innerText = nomeCapBible + ' ' + capChapterBible + ':' + versicleBible;
}

// Verifique e atualize o versículo quando a página for carregada
const storedNomeCap = localStorage.getItem('nomeCapBible');
const storedCapChapter = localStorage.getItem('capChapterBible');
const storedVersicle = localStorage.getItem('versicleBible');
const storedTextBible = localStorage.getItem('textBible');

if (storedNomeCap && storedCapChapter && storedVersicle) {
  updateVerseInfo(storedNomeCap, storedCapChapter, storedVersicle);
  textMsgDay.innerText = storedTextBible;
} else {
  fetchAndDisplayVerse();
}

// Use setTimeout para calcular o tempo restante no dia atual
function updateVerseAtMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const timeUntilMidnight = midnight - now;

  // Defina um timeout para buscar e exibir um novo versículo após ultrapassar as 23:59
  setTimeout(fetchAndDisplayVerse, timeUntilMidnight);
}

// Chame a função para atualizar o versículo à meia-noite
updateVerseAtMidnight();

// Use setInterval para verificar e atualizar o versículo a cada 24 horas após a meia-noite
setInterval(updateVerseAtMidnight, 24 * 60 * 60 * 1000);
