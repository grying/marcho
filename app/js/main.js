$(function () {
   $('.shop__filter-btn').on('click', function () {
      $('.shop__filters').slideToggle();
   });
   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active')   
   });
   $('.blogs__slider').slick({
      nextArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path  d="M 8.027344 7.464844 L 2.5625 12.777344 C 2.300781 13.035156 1.871094 13.035156 1.609375 12.777344 L 0.972656 12.160156 C 0.707031 11.902344 0.707031 11.488281 0.96875 11.230469 L 5.300781 7 L 0.96875 2.769531 C 0.707031 2.511719 0.707031 2.097656 0.972656 1.839844 L 1.609375 1.222656 C 1.871094 0.964844 2.300781 0.964844 2.5625 1.222656 L 8.027344 6.535156 C 8.292969 6.792969 8.292969 7.207031 8.027344 7.464844 Z M 8.027344 7.464844 "/></g></svg>  </button>',
      prevArrow: '<button type="button" class="slick-next">   <svg  xmlns = "http://www.w3.org/2000/svg"  width = "9px"height = "14px" viewBox = "0 0 9 14" version = "1.1" > <g id="surface1"><path d="M 0.972656 6.535156 L 6.4375 1.222656 C 6.699219 0.964844 7.128906 0.964844 7.390625 1.222656 L 8.027344 1.84375 C 8.292969 2.097656 8.292969 2.511719 8.03125 2.769531 L 3.699219 7 L 8.03125 11.230469 C 8.292969 11.488281 8.292969 11.902344 8.027344 12.160156 L 7.390625 12.777344 C 7.128906 13.035156 6.699219 13.035156 6.4375 12.777344 L 0.972656 7.464844 C 0.707031 7.207031 0.707031 6.792969 0.972656 6.535156 Z M 0.972656 6.535156 " /></g></svg></button>',
       infinite:false,
   });
   $(".product-tabs__top-item").on('click', function (e) {
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');
      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
   });
   $(".product-slide__thumb").slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
   });
   $(".product-slide__big").slick({
      asNavFor: '.product-slide__thumb',
      draggable: false,
      arrows: false,
      fade: true,
       responsive:[
         {
            breakpoint: 1051,
            settings:{
               draggable: true,
            }
         },
      ]
   });

   $(".shop-content__filter-btn").on('click', function () {
      $(".shop-content__filter-btn").removeClass('shop-content__filter-btn--active');
      $(this).addClass('shop-content__filter-btn--active');
   });
   $('.button-list').on('click', function () {
      $('.product-item').addClass('product-item--list');
      $('.shop-content__inner').addClass('shop-content__nogrid');
   });
   $('.button-grid').on('click', function () {
      $('.product-item').removeClass('product-item--list');
      $('.shop-content__inner').removeClass('shop-content__nogrid');
   });

   $(".filter-price__input").ionRangeSlider({
      prefix: "$",
      onStart: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
         $('.filter-price__from').text(data.from);
         $('.filter-price__to').text(data.to);
      },

   });
   $('.select-style').styler();
   $('.product-one__item-num').styler();
   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });

   $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
      starSbg: '<svg xmlns="http://www.w3.org/2000/svg"xmlns: xlink = "http://www.w3.org/1999/xlink" width="18px" height="16px"viewBox="0 0 18 16" version="1.1" ><g id="surface1"><pathstyle=" stroke:none;fill-rule:nonzero;fill: #d8d8d8;;fill-opacity:1;"d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
   });
   function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
         total,
         days,
         hours,
         minutes,
         seconds
      };
   }

   function initializeClock(id, endtime) {
      const clock = document.querySelector('.promo__clock');
      const daysSpan = clock.querySelector('.promo__days');
      const hoursSpan = clock.querySelector('.promo__hours');
      const minutesSpan = clock.querySelector('.promo__minutes');
      const secondsSpan = clock.querySelector('.promo__seconds');

      function updateClock() {
         const t = getTimeRemaining(endtime);

         daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
            clearInterval(timeinterval);
         }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
   }

   const deadline = $('.promo__clock').attr('data-time');
   initializeClock('promo__clock', deadline);

   

});