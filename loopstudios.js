$(document).ready(function () {
    $(".hamburger img").click(function () {
        $(".navLinks").slideDown('fast');
    });
    $(".close img").click(function () {
        $(".navLinks").slideUp('fast');
    });

});
