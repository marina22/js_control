// получаем ссылку по айди, что б работать с ним дальше

const inputField = document.getElementById('inputField');
const addButton = document.getElementById('add_Button');
const list = document.getElementById('list');
const sortByNameButton = document.getElementById('sort_ByName');
const sortByValueButton = document.getElementById('sort_ByValue');
const clearButton = document.getElementById('clear_button');

let pairs = [];

/// обьявляем функцию для обновления отображения списка
function updateList() {
   list.innerHTML = '';
   pairs.forEach(pair => {
      const li = document.createElement('li');
      li.textContent = `${pair.name} = ${pair.value}`;
      list.appendChild(li);
   });
}

// Функция для добавления новой пары
add_Button.addEventListener('click', () => {
   const inputValue = inputField.value.trim();
   if (inputValue) {
      const [name, value] = inputValue.split('=').map(item => item.trim());
      if (name && value) {
         pairs.push({ name, value });
         inputField.value = '';
         updateList();
      } else {
         alert('Введіть згідно Name=Value');
      }
   }
});

// Функция для сортировки по Name
sortByNameButton.addEventListener('click', () => {
   pairs.sort((a, b) => a.name.localeCompare(b.name));
   updateList();
});



// Функция для сортировки по Value
sortByValueButton.addEventListener('click', () => {
   pairs.sort((a, b) => a.value.localeCompare(b.value));
   updateList();
});

// приписываем функцию для  удаления полей
clearButton.addEventListener('click', () => {
   list.innerHTML = '';
   inputField.value = '';
});






















