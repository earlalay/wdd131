let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark');
        logo.src = 'dark-theme-byui-logo.png';
    } else if (current = 'light') {
        document.body.classList.remove('dark');
        logo.src = 'BYUI-logo.png';
    }
}