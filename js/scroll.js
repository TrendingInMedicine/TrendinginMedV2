// jQuery to collapse the navbar on scroll
// function collapseNavbar() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("navbar-inverse");
//         console.log("ello");
//     } else {
//         $(".navbar-fixed-top").removeClass("navbar-inverse");
//     }
// }
//
// $(window).scroll(collapseNavbar);
// $(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
