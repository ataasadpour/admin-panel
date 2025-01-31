const dropdone = document.getElementById("dropdone")
const uldropejs = document.getElementById("uldropejs")
const lidrop = document.getElementsByClassName("lidrop")


// swiper hero

var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//   swiper hero2

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: false,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // when window width is >= 320px
    400: {
        slidesPerView: 1,
        spaceBetween: 10,


    },
    // when window width is >= 480px
    480: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
});

function dropfunc() {
    uldropejs.className = "ul-dropdone"
    lidrop.className = "li-dropjs"

}
function droplivefunc() {
    uldropejs.className = "ul-dropdonelive"
    // uldropejs.remove(".ul-dropdone")
    // uldropejs.style.display="none !important"
}

dropdone.addEventListener("mousemove", dropfunc)
dropdone.addEventListener("mouseleave", droplivefunc)


// loding

document.addEventListener("DOMContentLoaded", () => {
    let load = document.getElementById("load");
    load.style.display = "none"
})