/* Избавиться от системного outline при клике по элементам button */
let buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++)
	buttons[i].addEventListener('click', (e) => e.target.blur())