$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        autoPlay: true,
        navigation: true,
        responsive: false,
    });

    //carousel 2
    $('.owl-carousel2').owlCarousel({
        items: 1,
        margin: 10,
        navigation: true,
        responsive: false,
    });

    //carousel 3
    $('#owl-carousel3').owlCarousel({
        items: 1,
        margin: 10,
        navigation: true,
        responsive: false,
    });

    // popup
    $('.popup-second-shower .btn-inverse').on('click', function() {
        $('.popup-second').css('opacity', '1').css('display', 'block');
        $('.popup-content').css('opacity', '0').css('display', 'none');

    })
    $('#closeSecPP').on('click', function() {
        $('.popup-second').css('opacity', '0').css('display', 'none');
        $('.popup').css('opacity', '0').css('display', 'none');

    })
    $('.popup-second-shower .btn-inverse-xs').on('click', function() {
        $('.popup-second').css('opacity', '1').css('display', 'block');
        $('.popup-content').css('opacity', '0').css('display', 'none');

    })
    $('#closeSecPP').on('click', function() {
            $('.popup-second').css('opacity', '0').css('display', 'none');
            $('.popup').css('opacity', '0').css('display', 'none');

        })
        // tabs
    $('.tab-content:first').show(0);
    $('.tab:first>span').addClass('selected');
    $('.tab>span').click(function() {
        $('.tab>span').removeClass('selected');
        $(this).addClass('selected');
        $('.tab-content').hide(0);
        $(this).next('.tab-content').show(0);
    });
    // init select boxex
    $('select[name="originLang"]').select2({
        placeholder: "Язык оригинала*",
        allowClear: true
    });
    $('select[name="translateName"]').select2({
        placeholder: "Язык перевода*",
        allowClear: true
    });
    $('select[name="theme"]').select2({
        placeholder: "Тематика*",
        allowClear: true
    });
}); //-- end doc ready
!$(function() {
    $('.service-expandable-text__button').click(function() {
        $('.service-expandable-text__hidden').removeAttr('class');

        $(this).remove();
    })
});

!$(function() {
    $(window).scroll(function(e) {
        if ($(window).scrollTop() > $('.pagenav').offset().top) {
            $('.navbar__inner').addClass('pagenav--fixed');
        } else {
            $('.navbar__inner').removeClass('pagenav--fixed');
        }
    });
});

//
var field = $('#list').find('option');

// search
$('#searchInput').bind('keyup', function() {
    var q = new RegExp($(this).val(), 'ig'),
        bol = true;

    for (var i = 0, l = field.length; i < l; i += 1) {
        var option = $(field[i]),
            parent = option.parent();

        if ($(field[i]).text().match(q)) {
            if (parent.is('span')) {
                option.show();
                parent.replaceWith(option);
            }
        } else {
            if (option.is('option') && (!parent.is('span'))) {
                option.wrap('<span>').hide()
            }
        }
    }

});
