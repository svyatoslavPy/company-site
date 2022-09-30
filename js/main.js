const button = document.querySelector('.picture__btn');
// console.log(botton);

const infoText = document.querySelector('.info');
// console.log(infoText);

// btn__info

let imgs = document.querySelectorAll('.img');
console.log(imgs);
let next = document.querySelector('.btn__slider--primary');
console.log(next);

let back = document.querySelector('.btn__slider--secondary');
console.log(back);

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

back.addEventListener('click', () =>  {
     imgs[imgPicture].style.opacity = 0;
    if (imgPicture == 0 ) {
        imgPicture == imgs.length-1;
    } else {
        imgPicture--;
    }
    imgs[imgPicture].style.opacity = 1;
});





