 /* ===================================================================================
                                              SERVICES
  ======================================================================================*/
 $(function () {
     // animate on scroll
     new WOW().init();
 });

 /* ===================================================================================
                                             WORK
 ======================================================================================*/
 $(function () {
     // magnify image
     $("#work").magnificPopup({
         delegate: 'a',
         type: 'image',
         gallery: {
             enabled: true
         }
     });
 });
 /* =====================================================================================
                                         TEAM
 ==========================================================================================*/
 $(function () {
     $("#team-members").owlCarousel({
         items: 3,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true
     });

 });


 /* =====================================================================================
                                        TESTIMOVIALS
==========================================================================================*/
 $(function () {
     $("#customers-testimonials").owlCarousel({
         items: 1,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true
     });

 });

 /* =====================================================================================
                                        STATS
==========================================================================================*/

 $(function () {
     $('.counter').counterUp({
         dalay: 10,
         time: 2000
     });
 });

 /* =====================================================================================
                                        CLIENTS
==========================================================================================*/
 $(function () {
     $("#clients-list").owlCarousel({
         items: 6,
         autoplay: true,
         smartSpeed: 700,
         loop: true,
         autoplayHoverPause: true
     });

 });

 /* =====================================================================================
                                         NAVIGATION
 ==========================================================================================*/
 // Show/Hide  transparent black navigation
 $(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() < 50) {
             // hide navbar
             $("nav").removeClass("vesco-top-nav")
             // back-to-top -button
             $("#back-to-top").fadeOut();

         } else {
             // show navbar
             $("nav").addClass("vesco-top-nav")
             // show back to top button
             $("#back-to-top").fadeIn();
         }
     });
 });

 $(function () {
     $("a.smooth-scroll").click(function (event) {
         event.preventDefault();
         // get/return id like #about, #work, #team, and etc
         var section = $(this).after("href");
         $('html, body').animate({
             scrollTop: $(section).offset().top - 64
         }, 1250, "easeInOutExpo");
     });
 });