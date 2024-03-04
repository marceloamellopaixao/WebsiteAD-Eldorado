$(function () {
    $('.br').click(function () {
        $('title').text('Igreja Assembleia de Deus - Eldorado Online');
        $('.menu-cabecalho li a').eq(0).text('sobre');
        $('.menu-cabecalho li a').eq(1).text('eventos');
        $('.menu-cabecalho li a').eq(2).text('doações');
        $('.menu-cabecalho li a').eq(3).text('pedido de oração');
        $('.menu-cabecalho li a').eq(4).text('visite-nos');
        $('.language-selected').removeClass('change-en');
        $('.language-selected').removeClass('change-es');
        $('.language-selected').addClass('change-br');

        // SECTION MENSAGEM DO DIA - EM MANUTENÇÃO (Resolver questão da API traduzir também).
        $('.msg-day-content .title-commum').text('Mensagem do Dia')

        // SECTION SOBRE A IGREJA
        $('#sobre .title-commum').text('Sobre')
        $('#sobre .content-p .text-p').text("EM MANUTENÇÃO")
        $('#sobre a p').text('ler mais')

        // SECTION EVENTOS
        $('#eventos .title-commum').text("Eventos")

        // SECTION DOACOES
        $('#doacoes .title-commum').text('Doações')
        $('#doacoes .content-doacoes .text-p').text('Faça sua doação de cesta básica e ajude ao próximo, Contate-nos via Instagram.')

        // SECTION PEDIDO DE ORAÇÃO
        $('#pedido-oracao .title-commum').text('Pedido de Oração')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(1) span').text('Nome Completo')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(2) span').text('Celular')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(3) span').text('E-mail')
        $('#pedido-oracao .pedido-oracao-form .textBox span').text('Pedido de Oração')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(5) input').val('Enviar')

        // SECTION VISITE-NOS
        $('#visite-nos .title-commum').text('Visite-nos')

        // FOOTER/RODAPÉ DO SITE
        $('.rodape-content .logo-rodape h3.title-rodape:eq(0)').text('Igreja Evangelica Assembleia de Deus - Jardim Eldorado');
        $('.rodape-content .logo-rodape h3.title-rodape:eq(1)').text('Setor 3 - Campo do Jabaquara');

        $('.txt-rodape .text-p:nth-child(1)').text('Todos os direitos da página são reservados para a igreja.');
        $('.txt-rodape .text-p:nth-child(2)').text('Desenvolvido por Marcelo Augusto M. Paixão');
        $('.txt-rodape .text-p:nth-child(3) a').text('Versão 1.5.6').attr('href', './versions.html');
    })
});

$(function () {
    $('.en').click(function () {
        $('title').text('Evangelical Church Assembly of God - Eldorado Online');
        $('.menu-cabecalho li a').eq(0).text('about');
        $('.menu-cabecalho li a').eq(1).text('events');
        $('.menu-cabecalho li a').eq(2).text('donations');
        $('.menu-cabecalho li a').eq(3).text('prayer request');
        $('.menu-cabecalho li a').eq(4).text('visit us');
        $('.language-selected').removeClass('change-br');
        $('.language-selected').removeClass('change-es');
        $('.language-selected').addClass('change-en');

        // SECTION MENSAGEM DO DIA - EM MANUTENÇÃO (Resolver questão da API traduzir também).
        $('.msg-day-content .title-commum').text('Message of the day')

        // SECTION SOBRE A IGREJA
        $('#sobre .title-commum').text('About')
        $('#sobre .content-p .text-p').text('UNDER MAINTENANCE')
        $('#sobre a p').text('read more')

        // SECTION EVENTOS
        $('#eventos .title-commum').text("Events")

        // SECTION DOACOES
        $('#doacoes .title-commum').text('Donations')
        $('#doacoes .content-doacoes .text-p').text('Make your food basket donation and help others, contact us via Instagram.')

        // SECTION PEDIDO DE ORAÇÃO
        $('#pedido-oracao .title-commum').text('Prayer Request')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(1) span').text('Full Name')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(2) span').text('Cell phone')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(3) span').text('Email')
        $('#pedido-oracao .pedido-oracao-form .textBox span').text('Prayer Request Text')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(5) input').val('Send')

        // SECTION VISITE-NOS
        $('#visite-nos .title-commum').text('Visit Us')

        // FOOTER/RODAPÉ DO SITE
        $('.rodape-content .logo-rodape h3.title-rodape:eq(0)').text('Evangelical Church Assembly of God - Garden Eldorado');
        $('.rodape-content .logo-rodape h3.title-rodape:eq(1)').text('Sector 3 - Campo do Jabaquara');

        $('.txt-rodape .text-p:nth-child(1)').text('All rights to the page are reserved for the church.')
        $('.txt-rodape .text-p:nth-child(2)').text('Developed by Marcelo Augusto M. Paixão')
        $('.txt-rodape .text-p:nth-child(3) a').text('Version 1.5.6').attr('href', './versions.html');
    })
});

$(function () {
    $('.es').click(function () {
        $('title').text('Igreja Evangélica Asamblea de Dios - Eldorado Online');
        $('.menu-cabecalho li a').eq(0).text('about');
        $('.menu-cabecalho li a').eq(1).text('eventos');
        $('.menu-cabecalho li a').eq(2).text('donações');
        $('.menu-cabecalho li a').eq(3).text('solicitud de oración');
        $('.menu-cabecalho li a').eq(4).text('visítanos');
        $('.language-selected').removeClass('change-en');
        $('.language-selected').removeClass('change-br');
        $('.language-selected').addClass('change-es');

        // SECTION MENSAGEM DO DIA - EM MANUTENÇÃO (Resolver questão da API traduzir também).
        $('.msg-day-content .title-commum').text('Mensaje del día')

        // SECTION SOBRE A IGREJA
        $('#sobre .title-commum').text('Acerca de')
        $('#sobre .content-p .text-p').text('EN MANUTENCIÓN')
        $('#sobre a p').text('leer más')

        // SECTION EVENTOS
        $('#eventos .title-commum').text("Eventos")

        // SECTION DOACOES
        $('#doacoes .title-commum').text('Donaciones')
        $('#doacoes .content-doacoes .text-p').text('Haz tu donación de canasta de alimentos y ayuda a otros, Contáctanos vía Instagram.')

        // SECTION PEDIDO DE ORAÇÃO
        $('#pedido-oracao .title-commum').text('Solicitud de oración')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(1) span').text('Nombre completo')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(2) span').text('Celular')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(3) span').text('Correo electrónico')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(4) span').text('Solicitud de oración')
        $('#pedido-oracao .pedido-oracao-form .inputBox:nth-child(5) input').val('Enviar')

        // SECTION VISITE-NOS
        $('#visite-nos .title-commum').text('Visítenos')

        // FOOTER/RODAPÉ DO SITE
        $('.rodape-content .logo-rodape h3.title-rodape:eq(0)').text('Igreja Evangélica Asamblea de Dios - Jardim Eldorado');
        $('.rodape-content .logo-rodape h3.title-rodape:eq(1)').text('Sector 3 - Campo do Jabaquara');

        $('.txt-rodape .text-p:nth-child(1)').text('Todos los derechos de la página están reservados a la iglesia.')
        $('.txt-rodape .text-p:nth-child(2)').text('Desarrollado por Marcelo Augusto M. Paixão')
        $('.txt-rodape .text-p:nth-child(3) a').text('Versión 1.5.6').attr('href', './versions.html');
    })
});