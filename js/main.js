$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    //$(document).foundation();


    $('.menu-open').click(function () {
        $('.menu-list').slideToggle(300);
        if ( $('.menu-open .fa').hasClass('fa-bars')){
            $('.menu-open .fa').removeClass('fa-bars');
            $('.menu-open .fa').addClass('fa-times');
        } else if ($('.menu-open .fa').hasClass('fa-times')){
            $('.menu-open .fa').removeClass('fa-times');
            $('.menu-open .fa').addClass('fa-bars');
        }
    });
    function checkWidth() {
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 991) {
            $('.menu-list').removeAttr("style");
            console.log('test2')
        }
    }
    checkWidth();
    $(window).resize(checkWidth);





    $('.current_option').on('click', function() {

        $('.current_option').toggleClass('select_active');
        $('#select-icon').toggleClass('fa-caret-down fa-caret-up');
        $('.custom_options').toggle();

    });

    $('.custom_options').on('click', 'li', function() {

        $('.current_option').toggleClass('select_active');
        $('#select-icon').toggleClass('fa-caret-down fa-caret-up');


        var choosenValue = $(this).data('value');
        var	choosenText = $(this).text();

        $('select').val(choosenValue).prop('selected', true);

        $(".current_option")
            .data('value', choosenValue)
            .find('span')
            .text(choosenText);

        $('.custom_options').hide();
    });




    window.addEventListener("DOMContentLoaded", function() {
        function setCursorPosition(pos, elem) {
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select()
            }
        }

        function mask(event) {
            var matrix = "+38(___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
            if (event.type == "blur") {
                if (this.value.length == 2) this.value = ""
            } else setCursorPosition(this.value.length, this)
        };
        var input = document.querySelector("#tel");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
    });




});