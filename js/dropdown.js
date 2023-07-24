document.querySelector('#open-popup-btn').addEventListener('click', function(){
    document.querySelector('.popup').classList.add('active-popup');
    document.body.style.overflow = 'hidden';
});


document.querySelector('.popup .popup__close-btn').addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('active-popup');
    document.body.style.overflow = 'auto';
});


