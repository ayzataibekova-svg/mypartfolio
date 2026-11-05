
// Получаем HTML элементы
const greeting = document.getElementById('greeting');
const button = document.getElementById('askName');

// Функция показывает приветствие
function showGreeting(name) {
    greeting.textContent = name
        ? `Welcome to my portfolio, ${name}!`
        : 'Welcome to my portfolio!';
}

// Функция спрашивает имя посетителя
function askName() {
    const name = prompt('What is your name?');

    if (name && name.trim() !== '') {
        localStorage.setItem('visitorName', name.trim());
    } else {
        localStorage.removeItem('visitorName');
    }

    showGreeting(localStorage.getItem('visitorName'));
}

