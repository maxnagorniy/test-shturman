$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    //$(document).foundation();


    $('.menu-open').click(function () {
        $('.menu-list').slideToggle(300);
    });

    $(window).resize(function () {
        if ($(window).width < 768 ){
            $('.menu-list').removeAttr("style");
        }
    })

});