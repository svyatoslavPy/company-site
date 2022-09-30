const button = document.querySelector('.picture__btn');
// console.log(botton);

const infoText = document.querySelector('.info');
// console.log(infoText);

// btn__info

let imgs = document.querySelectorAll('about-us .about-us__title img');
let next = document.querySelector('.about-us .btn .btn__slider--primary');

let imgPicture = 0;

// const buttonSlider = document.querySelector('.btn__slider');
// const buttonSlider_primary = document.querySelector('btn__slider--primary');
// const buttonSlider_secondary = document.querySelector('btn__slider--secondary');


button.addEventListener('click', () => {
        infoText.classList.toggle('info_active');
    });


next.addEventListener('click', () =>  {
     imgs[imgPicture].style.opacity = 0;
    if (imgPicture == imgs.length-1 ) {
        imgPicture = 0;
    } else {
        imgPicture++;
    }
    imgs[imgPicture].style.opacity = 1;
});





