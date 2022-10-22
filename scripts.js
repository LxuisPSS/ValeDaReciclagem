
// filtro do portfólio //

$('.filter-btn').on('click', function () {

   let type = $(this).attr('id');
   let boxes = $('.project-box');

   $('.main-btn').removeClass('active');
   $(this).addClass('active');

   if (type == 'gar-btn') {

      eachBoxes('gar', boxes)

   } else if (type == 'pan-btn') {

      eachBoxes('pan', boxes)

   } else if (type == 'pap-btn') {

      eachBoxes('pap', boxes)

   } else if (type == 'sac-btn') {

      eachBoxes('sac', boxes)

   } else if (type == 'fru-btn') {

      eachBoxes('fru', boxes)

   } else if (type == 'lat-btn') {

      eachBoxes('lat', boxes)

   } else {

      eachBoxes('all', boxes)

   }



})

function eachBoxes(type, boxes) {

   if (type == 'all') {

      $(boxes).fadeIn();
   } else {
      $(boxes).each(function () {

         if (!$(this).hasClass(type)) {

            $(this).fadeOut('slow');

         } else {

            $(this).fadeIn();

         }

      });
   }



}

// parallax //

setTimeout(function () {

   $('#apply-area').parallax({ imageSrc: 'img/cartila.jfif' });


}, 250);

// scroll para as seções //

let navBtn = $('.nav-item');

let bannerSection = $('#mainSlider');
let aboutSection = $('#about-area');
let servicesSection = $('#services-area');
let portfolioSection = $('#portfolio-area');
let despejoSection = $('#despejo-area');
let applySection = $('#apply-area');
let contactSection = $('#contact-area');


let scrollTo = '';

$(navBtn).click(function () {

   let btnId = $(this).attr('id');

   if(btnId == '5rs-menu') {

      scrollTo = aboutSection;

   } else if(btnId == 'objetos-menu') {

      scrollTo = servicesSection;

   } else if(btnId == 'videos-menu') {

      scrollTo = portfolioSection; 

   } else if(btnId == 'despejo-menu') {

      scrollTo = despejoSection;

   } else if(btnId == 'cartilha-menu') {

      scrollTo = applySection;

   } else if(btnId == 'contact-menu') {

      scrollTo = contactSection

   } else {

      scrollTo = bannerSection

   }
  
   $([document.documentElement, document.body]).animate({
      
      scrollTop: $(scrollTo).offset().top - 70
     

   }, 1500);

});


