// Validando formulario
$('#cell-phone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})


$('form').validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        cellPhone: {
            required: false
        },
        message: {
            required: true
        }
    },
    submitHandler: function (form) {
        alert("Sua mensagem foi enviada.");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        const camposInvalidos = validator.numberOfInvalids()
        if (camposInvalidos) {
            alert("Por favor, preencha os campos para enviar sua mensagem!");
        }
        
    }
})

$(document).ready(function () {
    // Acionando a outra cor na header quando a tela rola
    $(window).on('scroll', function () {
        const header =  $('#header')
        const colorTitle = $('.navbar-brand')
        const colorLink = $('.nav-link')

        if ($(window).scrollTop() > 50) { // Detecta se o scroll passou de 50px
            header.addClass('scrolled')
            colorTitle.css('color', '#111111')
            colorLink.css('color', '#111111')
        } else {
            header.removeClass('scrolled')
            colorTitle.css('color', '#fff')
            colorLink.css('color', '#fff')
        }
    })
})