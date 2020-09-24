$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 700,
      prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/prev.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/next.png"></button>',
      responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
              arrows: false
            }
          }
        ]
    });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  function toggleClass (classNames){
    $(classNames).each(function(i){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }
  toggleClass(".catalog-item-link");
  toggleClass(".catalog-item__back");

  //modal
  $('[data-modal=consultation]').on('click',()=>{
    $('.overlay, #consultation').fadeIn('fast');
  });
  $('.modal__close').on('click',()=>{
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').each(function(i){
    $(this).on('click',()=>{
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('fast');
    });
  });
  $('#consultation-form').validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        email: {
          required: "Нам нужна почта для контакта с вами",
          email: "Некорректный адрес почты"
        }
      }
    }
  });
  $('#consultation form').validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        email: {
          required: "Нам нужна почта для контакта с вами",
          email: "Некорректный адрес почты"
        }
      }
    }
  });
  $('#order form').validate();
});


