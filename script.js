var email = document.getElementById('email');
var password = document.getElementById('password');
var nome = document.getElementById('nome');

email.addEventListener('focus', () => {
    email.style.borderColor = '#4A5F6A';
});
email.addEventListener('blur', () => {
    email.style.borderColor = '#ccc';
});
password.addEventListener('focus', () => {
    password.style.borderColor = '#4A5F6A';
});
password.addEventListener('blur', () => {
    password.style.borderColor = '#ccc';
});
nome.addEventListener('focus', () => {
    nome.style.borderColor = '#4A5F6A';
});
nome.addEventListener('blur', () => {
    nome.style.borderColor = '#ccc';
});