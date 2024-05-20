const inputName = document.getElementById('inputName');
const price = document.getElementById('price');
const selectCategory = document.getElementById('selectCategory');
const inputBtn = document.getElementById('addBtn');
const tbody = document.getElementById('tbody');
//const itemDel = document.querySelectorAll('i.itemDel');


let purcashesItemDel
inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Создание таблицы
    let purcashes = document.createElement('tr');
    tbody.appendChild(purcashes);

    purcashes.classList.add('purcashes__item');
    purcashes.classList.add('purcashes__row');
    purcashes.dataset.category = 'product';


    // первый столбец таблицы
    let purcashes1 = document.createElement('td');
    purcashes.appendChild(purcashes1);
    purcashes1.classList.add('purcashes__td');

    // второй столбец таблицы
    let purcashes2 = document.createElement('td');
    purcashes.appendChild(purcashes2);
    purcashes2.classList.add('purcashes__td');

    // третий столбец таблицы
    let purcashes3 = document.createElement('td');
    purcashes.appendChild(purcashes3);
    purcashes3.classList.add('purcashes__td');

    // четвертый столбец таблицы
    let purcashes4 = document.createElement('td');
    purcashes.appendChild(purcashes4);
    purcashes4.classList.add('purcashes__td');

    // Создание ссылки удаления
    let purcashesItemDel = document.createElement('i');
    purcashes4.appendChild(purcashesItemDel);
    purcashesItemDel.classList.add('purcashes__item-del');
    purcashesItemDel.classList.add('fa-solid');
    purcashesItemDel.classList.add('fa-xmark');
    purcashesItemDel.classList.add('itemDel');

    // Добавление выбранных параметров
    purcashes1.textContent = inputName.value;
    purcashes3.textContent = price.value
    if (selectCategory.value == 'poduct') { purcashes2.textContent = 'Продукты' }
    else if (selectCategory.value == 'fastFood') { purcashes2.textContent = 'Фастфуд' }
    else if (selectCategory.value == 'sport') { purcashes2.textContent = 'Спорт' }
    else if (selectCategory.value == 'drinks') { purcashes2.textContent = 'Напитки' };

    purcashesItemDel.addEventListener('click', () => {
        purcashes.remove(purcashes)
    });
    // Сохранение параметров в памяти

});

//const purcashesTable = document.getElementById('purcashes');



/*
for (let i of itemDel) {
    i.addEventListener('click', () => {
        console.log('a');
    });
}*/









inputName.addEventListener('click', () => {
    console.log(price.name);
})

// Пример считывания выбранного option
/*price.addEventListener('click', () => {
    console.log(selectCategory.value);
})*/