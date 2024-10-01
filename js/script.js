// Arquivo: js/script.js

$(document).ready(function(){
    // Efeito de transparência no menu fixo
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $('#menu').addClass('bg-dark');
        } else {
            $('#menu').removeClass('bg-dark');
        }
    });
});
