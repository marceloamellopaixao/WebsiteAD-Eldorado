
let form = document.querySelector('form')
let nameBox = document.getElementById('nomeBox')
let phoneBox = document.getElementById('celularBox')
let emailBox = document.getElementById('emailBox')
let messageBox = document.getElementById('pedidoBox')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

// Verificação do formulário
function checkInputs() {
    const nameValue = nameBox.value.trim()
    const phoneValue = phoneBox.value.trim()
    const emailValue = emailBox.value.trim()
    const messageValue = messageBox.value.trim()

    if (nameValue === '') {
        // Adiciona a classe de erro
        setErrorFor(nameBox, 'Preencha este campo')
    } else {
        // Adiciona a classe de sucesso
        setSucessFor(nameBox)
    }

    if (phoneValue === '') {
        setErrorFor(phoneBox, 'Preencha este campo')
    } else {
        setSucessFor(phoneBox)
    }

    if (emailValue === '') {
        setErrorFor(emailBox, 'Preencha este campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(emailBox, 'E-mail inválido')
    } else {
        setSucessFor(emailBox)
    }

    if (messageValue === '') {
        setErrorFor(messageBox, 'Escreva o pedido de oração!')
    } else {
        setSucessFor(messageBox)
    }

}

// Função para aplicar a máscara ao número de telefone
function phoneMask() {
    // Remove todos os caracteres não numéricos do valor do input
    let num = phoneBox.value.replace(/\D/g, '');

    // Aplica a máscara ao número de telefone formatando-o como +XX (XX) XXXX-XXXX
    phoneBox.value = '(' + num.substring(0, 2) + ') ' + num.substring(2, 7) + '-' + num.substring(7, 11);
}

// Adiciona um ouvinte de evento 'keyup' ao input do telefone, que chama a função phoneMask quando uma tecla é liberada
phoneBox.addEventListener('keyup', phoneMask);

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

