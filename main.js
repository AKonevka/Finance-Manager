const inputName = document.getElementById('inputName');
const price = document.getElementById('price');
const selectCategory = document.getElementById('selectCategory');
const inputBtn = document.getElementById('addBtn');
const tbody = document.getElementById('tbody');
const purcashesItem = document.querySelectorAll('purcashesItem');
//const itemDel = document.querySelectorAll('i.itemDel');
const legendProduct = document.getElementById('legendProduct');
const legendProductPrice = document.getElementById('legendProductPrice');
const legendFastfood = document.getElementById('legendFastfood');
const legendFastfoodPrice = document.getElementById('legendFastfoodPrice');
const legendSport = document.getElementById('legendSport');
const legendSportPrice = document.getElementById('legendSportPrice');
const legendDrinks = document.getElementById('legendDrinks');
const legendDrinksPrice = document.getElementById('legendDrinksPrice');
const purcashesPrice = document.querySelector('purcashesPrice');
const legendHousehold = document.getElementById('legendHousehold');
const legendHouseholdPrice = document.getElementById('legendHouseholdPrice');
const legendCloth = document.getElementById('legendCloth');
const legendClothPrice = document.getElementById('legendClothPrice');


// массив данных
let productArray = [];

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
    purcashes3.classList.add('purcashesPrice');

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

    if (selectCategory.value == 'poduct') {
        purcashes2.textContent = 'Продукты';
        legendProductPrice.textContent = Number(price.value) + Number(legendProductPrice.textContent);
    }
    else if (selectCategory.value == 'fastFood') {
        purcashes2.textContent = 'Фастфуд';
        legendFastfoodPrice.textContent = Number(price.value) + Number(legendFastfoodPrice.textContent);
    }
    else if (selectCategory.value == 'sport') {
        purcashes2.textContent = 'Спорт';
        legendSportPrice.textContent = Number(price.value) + Number(legendSportPrice.textContent);
    }
    else if (selectCategory.value == 'drinks') {
        purcashes2.textContent = 'Напитки';
        legendDrinksPrice.textContent = Number(price.value) + Number(legendDrinksPrice.textContent);
    }   
    else if (selectCategory.value == 'household') {
        purcashes2.textContent = 'Хозяйственные товары';
        legendHouseholdPrice.textContent = Number(price.value) + Number(legendHouseholdPrice.textContent);
    }
    else if (selectCategory.value == 'cloth') {
        purcashes2.textContent = 'Одежда';
        legendClothPrice.textContent = Number(price.value) + Number(legendClothPrice.textContent);
    };

    // Кнопка удаления
    purcashesItemDel.addEventListener('click', () => {
        // Если удалена категория продуктов
        if (purcashes2.textContent == legendProduct.textContent) {
            legendProductPrice.textContent = Number(legendProductPrice.textContent) - Number(purcashes3.textContent);
        } // Если удалена категория напитков
        else if (purcashes2.textContent == legendDrinks.textContent) {
            legendDrinksPrice.textContent = Number(legendDrinksPrice.textContent) - Number(purcashes3.textContent);
        } // Если удалена категория спорта 
        else if (purcashes2.textContent == legendSport.textContent) {
            legendSportPrice.textContent = Number(legendSportPrice.textContent) - Number(purcashes3.textContent);
        } // Если удалена категория хозяйственных товаров
        else if (purcashes2.textContent == legendHousehold.textContent) {
            legendHouseholdPrice.textContent = Number(legendHouseholdPrice.textContent) - Number(purcashes3.textContent);
        }
        else if (purcashes2.textContent == legendCloth.textContent) {
            legendClothPrice.textContent = Number(legendClothPrice.textContent) - Number(purcashes3.textContent);
        }
         // Если удалена категория фастфуда
        else {
            legendFastfoodPrice.textContent = Number(legendFastfoodPrice.textContent) - Number(purcashes3.textContent);
        }

        //console.log(Number(legendFastfoodPrice.textContent) - Number(purcashes3.textContent));
        //console.log(purcashes2.textContent);


        //console.log(purcashes3.textContent);
        //purcashes.textContent = 'asd';
        //console.log(purcashes2.textContent);
        purcashes.remove(purcashes)
    });



    // Сохранение параметров в памяти
    console.log(purcashesItem)


});

let df = [
    {
        pivi: "di"
    },
]
df.ret = true;


//достаем из массива di

console.log(df);

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