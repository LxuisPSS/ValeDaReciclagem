// scroll para as seções //

let navBtn = $('.nav-item');

let aboutSection = $('#about-area');
let servicesSection = $('#vale-area');
let applySection = $('#apply-area');


let scrollTo = '';

$(navBtn).click(function () {

   let btnId = $(this).attr('id');

   if(btnId == 'about-menu') {

      scrollTo = aboutSection;

   } else if(btnId == 'projeto-menu') {

      scrollTo = applySection;

   } else if(btnId == 'vale-menu') {

      scrollTo = servicesSection; 

   } 
  
   $([document.documentElement, document.body]).animate({
      
      scrollTop: $(scrollTo).offset().top - 70
     

   }, 1500);

});