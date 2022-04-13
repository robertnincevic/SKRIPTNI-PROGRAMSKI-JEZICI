const imageGallery = document.querySelector('.image--container');
const imageSelection = document.querySelector('.image--selection');

const loading = '<h1 class="loader">Loading...</h1>';

const showImages = () => {
    // LOading tekst u slučaju ako nema podataka
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
    // dodati opciju promjenu slike
    const changeImage = e => {
        const image = imageGallery.children[0];
        if (e.target.src) {
            image.classList.add('animate-entrance');
            image.src = e.target.src;
            setTimeout(() => {
                image.classList.remove('animate-entrance');
            }, 800);
        }

    };

    document.addEventListener('DOMContentLoaded', showImages);
    imageSelection.addEventListener('click', changeImage);
