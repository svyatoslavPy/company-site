const button = document.querySelector('.picture__btn');
// console.log(botton);

const infoText = document.querySelector('.info');
// console.log(infoText);

button.addEventListener('click', function (e) {
    infoText.classList.toggle('info_active');
});




