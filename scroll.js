
const topButton = document.getElementById('scrollTopBtn');

// Показываем кнопку после прокрутки
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }
});

// Плавный переход наверх
topButton.addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
