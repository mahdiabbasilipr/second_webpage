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
// Get the modal
var modal = document.getElementById("modal1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image1");
var modalImg = document.getElementById("img1");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close0")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


var modal = document.getElementById("modal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image2");
var modalImg = document.getElementById("img2");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById("modal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image3");
var modalImg = document.getElementById("img3");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}



var modal = document.getElementById("modal4");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image4");
var modalImg = document.getElementById("img4");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

