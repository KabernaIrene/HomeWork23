/*
Реалізовуємо форму для реєстрації.
Поля:
Ім'я, Прізвище (Текстові поля)
Дата народження (Текстове поле)
Стать (radio)
Місто (select)
Адреса (textarea)
Мови, якими володіє (checkbox)
….
Кнопка “Зберегти”
За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
*/

const body = document.querySelector('body');
const form = document.querySelector('.form');
const table = document.createElement('div');
body.appendChild(table);



function tableData (object) {
    let tableItem = '';
    for (const key in object) {
        tableItem += `<p> ${key}: ${object[key]} </p>`
    }
    return tableItem;
}
   
form.addEventListener('submit',
(e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)
    form.style.display = 'none';
    
    const user = tableData(data);
    table.innerHTML = user;
    table.classList.add('table');
})   
   

















