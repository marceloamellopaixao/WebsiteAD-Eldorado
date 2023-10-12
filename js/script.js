function hamburguer(tipo){
    let menu = document.getElementsByClassName('menu')
    let buttonClose = document.getElementsByClassName('btnClose')

    if (tipo == 1){
        menu[0].style.display = 'block';
    }else{
        menu[0].style.display = 'none';
    }
}