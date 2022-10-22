// scroll para as seções //

let navBtn = $('.nav-item');

let homeSection = $('#home-area');
let despejoSection = $('#team-area');
let applySection = $('#despejo-area');


let scrollTo = '';

$(navBtn).click(function () {

   let btnId = $(this).attr('id');

   if(btnId == 'home-menu') {

      scrollTo = homeSection;

   } else if(btnId == 'despejo-menu') {

      scrollTo = despejoSection;

   } else if(btnId == 'points-menu') {

      scrollTo = applySection; 

   } 
  
   $([document.documentElement, document.body]).animate({
      
      scrollTop: $(scrollTo).offset().top - 70
     

   }, 1500);

});