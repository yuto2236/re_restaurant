document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");
        currentIndex = index;
        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    function showNextSlide() {
        showSlide((currentIndex + 1) % slides.length);
    }

    function showPrevSlide() {
        showSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        interval = setInterval(showNextSlide, 3000);
    }

    document.querySelector(".next").addEventListener("click", function () {
        showNextSlide();
        resetAutoSlide();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        showPrevSlide();
        resetAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            let index = parseInt(this.getAttribute("data-index"));
            showSlide(index);
            resetAutoSlide();
        });
    });

    interval = setInterval(showNextSlide, 3000);
});
