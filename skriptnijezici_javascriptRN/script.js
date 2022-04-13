const imageGallery = document.querySelector('.image--container');
const imageSelection = document.querySelector('.image--selection');
const apiUrl =
    'https://api.unsplash.com/photos/?client_id=8dd839a74ceea72e92afe3771beb91e0f2aae03d661286914f7cad77ba63e157';
let output = '';
const loading = '<h1 class="loader">Loading...</h1>';

const showImages = () => {
    // LOading tekst u slučaju ako nema podataka
    if (imageSelection.children.length === 0)
        imageSelection.innerHTML = loading;

    fetch(apiUrl)
        .then(res => {
            res.json().then(images => {
                //prikaz prve slike koju smo dohvatili u image--containeru
                imageGallery.innerHTML = `<img src="${images[0].urls.regular}" class="animate-entrance image--gallery" alt=${images[0].alt_description}>`;
                setTimeout(() => {

                    imageGallery.children[0].classList.remove('animate-entrance');
                }, 500);
                //kako prikazati sliku koje nisu odabrane
                images.forEach(({ urls, alt_description }) => {
                    output += `<img src="${urls.regular}"  alt=${alt_description} class="image__item">`

                });
                imageSelection.innerHTML = output;
            });

        })
        .catch(e => {
            console.log(e);

        });

};
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
