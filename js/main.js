const button = document.querySelector('.picture__btn')
// console.log(botton);

const infoText = document.querySelector('.info')
// console.log(infoText);

// btn__info

let imgs = document.querySelectorAll('.img')
// console.log(imgs)

let next = document.querySelector('.btn__slider--primary')
// console.log(next)


let burger = document.querySelector('.nav__menu');
console.log(burger);


let menu = document.querySelectorAll('.menu');

let back = document.querySelector('.btn__slider--secondary')
// console.log(back)

let btn_default = document.querySelector('.btn__slider');


let imgPicture = 0;

burger.addEventListener('click', () => {
    menu.style.opacity = '1';
})

button.addEventListener('click', () => {
    infoText.classList.toggle('info_active');
})

btn_default.addEventListener('click', () => {
    btn_default.style.backgroundColor = '#24A3FF;';
    btn_default.style.opacity = '1';
    next.style.opacity = '0.2';
    back.style.opacity = '0.2';
    if (imgPicture == imgs.length - 1) {
        imgPicture = 0;
    } else {
        imgPicture++;
    }
    imgs[imgPicture].style.opacity = 1;
})

next.addEventListener('click', () => {
    imgs[imgPicture].style.opacity = 0
    btn_default.style.opacity = '0.2';
    next.style.backgroundColor = '#24A3FF;';
    next.style.opacity = '1';
    back.style.opacity = '0.2';
    if (imgPicture == imgs.length - 1) {
        imgPicture = 0;
    } else {
        imgPicture++;
    }
    imgs[imgPicture].style.opacity = 1;
})

back.addEventListener('click', () => {
    next.style.backgroundColor = '#24A3FF;'
    next.style.opacity = '0.2'
    back.style.backgroundColor = '#24A3FF;'
    back.style.opacity = '1';
    btn_default.style.opacity = '0.2';
    imgs[imgPicture].style.opacity = 0;
    if (imgPicture == 0) {
        imgPicture == imgs.length - 1;
    } else {
        imgPicture--;
    }
    imgs[imgPicture].style.opacity = 1;
})
