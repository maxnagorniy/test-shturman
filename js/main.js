$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    //$(document).foundation();


    /*$('.menu-open').click(function () {
        $('.menu-list').slideToggle(300);
    });

    $(window).resize(function () {
        console.log('test');
        if ($(window).width < 768 ){
            $('.menu-list').removeAttr("style");
            console.log('test2');
        }
    })*/
    $('.menu-open').click(function () {
        $('.menu-list').slideToggle(300);
        if ( $('.menu-open .fa').hasClass('fa-bars')){
            $('.fa').removeClass('fa-bars');
            $('.fa').addClass('fa-times');
        } else if ($('.menu-open .fa').hasClass('fa-times')){
            $('.fa').removeClass('fa-times');
            $('.fa').addClass('fa-bars');
        }
    });
    function checkWidth() {
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 768) {
            $('.menu-list').removeAttr("style");
            console.log('test2')
        }
    }
    checkWidth();
    $(window).resize(checkWidth);

});