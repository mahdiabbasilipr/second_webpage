$(function () {
    $("#menu").slideUp(0)
    $("#open_menu").click(
        function () {
            $("#menu").slideToggle(1000);
        }
    )
    $("a").click(
        function () {
            $("#menu").slideUp(1000)
        }
    )
    $(".close_modal").click(
        function () {
            $(".modal").slideDown(1000)
        }
    )
})
//
// var slideIndex = 0;
// carousel();
//
// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1}
//     x[slideIndex-1].style.display = "block";
//     setTimeout(carousel, 2500);
// }