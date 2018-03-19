/**
 * Sticky the navigation bar up when you scroll.
 */
$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("navbar-fixed-top");
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
    }
});
