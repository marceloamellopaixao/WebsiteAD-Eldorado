document.addEventListener('DOMContentLoaded', function () {
    phoneBox = document.getElementById('celularBox')

    function phoneMask() {
        let num = phoneBox.value.replace(/\D/g, '');

        phoneBox.value = '+' + num.substring(0, 2) + ' (' + num.substring(2, 4) + ') ' + num.substring(4, 9) + '-' + num.substring(9, 13);
    }

    phoneBox.addEventListener('keyup', phoneMask);
});