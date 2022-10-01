$(document).ready(function () {
    $('.btn-stage').click(function () {
        $('.btn-stage.active').removeClass("active");
        $(this).addClass("active");
    })
});