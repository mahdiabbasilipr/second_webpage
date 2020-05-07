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
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close0")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


var modal = document.getElementById("modal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image2");
var modalImg = document.getElementById("img2");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


var modal = document.getElementById("modal3");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image3");
var modalImg = document.getElementById("img3");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


var modal = document.getElementById("modal4");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("image4");
var modalImg = document.getElementById("img4");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// smooth scroll with easing
$(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html , body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 1000, 'linear', function () {
                window.location.hash = hash;
            })
        }
    })
    //for showing elements animated
    new WOW().init()
})






window.onscroll = function () {
    scrollFunctionService();
    HideNavbarScroll();
    scrollFunctionGallery();
    scrollFunction()
};




// change image of header on scroll

function scrollFunction() {
    if (document.documentElement.scrollTop > 750) {
        document.getElementById("image_header").src = "image/36231833334_e6843c90f0_h.jpg";
    } else if (document.documentElement.scrollTop < 750){
        document.getElementById("image_header").src = "image/robot1.jpg";
    }
}


// change css of icon of navbar when i on that element
function scrollFunctionService() {
    if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1100) {
        document.getElementById("services_button").style.backgroundColor = "rgb(179, 242, 241)";
    } else {
        document.getElementById("services_button").style.backgroundColor = "#2f0c55";
    }
}
function scrollFunctionGallery() {
    if (document.documentElement.scrollTop > 1550 && document.documentElement.scrollTop < 1900) {
        document.getElementById("gallery_button").style.backgroundColor = "rgb(179, 242, 241)";
    } else {
        document.getElementById("gallery_button").style.backgroundColor = "#2f0c55";
    }
}
// function scrollFunctionService() {
//     if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1100) {
//         document.getElementById("services_button").style.backgroundColor = "rgb(179, 242, 241)";
//     } else {
//         document.getElementById("services_button").style.backgroundColor = "#2f0c55";
//     }
// }
// function scrollFunctionService() {
//     if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1100) {
//         document.getElementById("services_button").style.backgroundColor = "rgb(179, 242, 241)";
//     } else {
//         document.getElementById("services_button").style.backgroundColor = "#2f0c55";
//     }
// }



// hide navbar on scroll down
var prevScrollpos = window.pageYOffset;


function HideNavbarScroll() {
    var currentScrollPos = window.pageYOffset;
    if (document.documentElement.scrollTop > 500) {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar_for_pc").style.top = "0";
            document.getElementById("navbar_for_mobile").style.top = "0";
        } else {
            document.getElementById("navbar_for_pc").style.top = "-50px";
            document.getElementById("navbar_for_mobile").style.top = "-50px";
        }
    }
    prevScrollpos = currentScrollPos;
}


// owl do'nt work for me
// // slideshow js
// $(function () {
//     $('.owl-carousel').owlCarousel(
//         {
//
//
//         }
//     )
// })



