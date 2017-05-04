$(document).ready(function(){ 
$('.owl-carousel').owlCarousel({ 
items:1, 
lazyLoad:true, 
loop:true, 
margin:10, 
autoPlay: true,
navigation: true,
responsive: false,
navigation: true,
}); 
});
!$(function() {
  $('.service-expandable-text__button').click(function() {
    $('.service-expandable-text__hidden').removeAttr('class');
    
    $(this).remove();
  })
});

!$(function() {
  $(window).scroll(function(e) {
    if($(window).scrollTop() > $('.pagenav').offset().top) {
      $('.navbar__inner').addClass('pagenav--fixed');
    } else {
      $('.navbar__inner').removeClass('pagenav--fixed');
    }
  });
});

$(document).ready(function(){
    $('.tab-content:first').show(0);
    $('.tab:first>span').addClass('selected');
    $('.tab>span').click(function(){
       $('.tab>span').removeClass('selected');
       $(this).addClass('selected'); 
       $('.tab-content').hide(0);   
       $(this).next('.tab-content').show(0);     
    });
});
var field = $('#list').find('option');
  
// собственно поиск
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
/*$(document).ready(function(){ 
$('.owl-carousel-1').owlCarousel({ 
items:4, 
lazyLoad:true, 
loop:true, 
margin:10, 
autoPlay: true,
}); 
});
*/
 
