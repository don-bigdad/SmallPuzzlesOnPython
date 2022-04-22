<body>
    <p>
        Задание: разбейте код на отдельные инструкции таким образом, чтобы он выводил на экран два сообщения "hello", а
        потом "world"
    </p>
    <script>
        alert("hello");
		alert("hello");
        alert("world");
    </script>
</body>
<body>
    <p>
        Задание: Закомментируйте те строки сценария, которые  являются не инструкциями, а описанием к инструкциям.
    </p>
    <div>
        Hello world
    </div>
    <script>
        // создаем переменную с именем element и присваиваем ей первый HTML элемент div, который будет найден в документе. 
        let element = document.querySelector("div");

        /*
        "вешаем" обработчик на событие click (клик левой клавишей мыши). 
        При клике по HTML элементу, находящемуся в переменной element, будет запускаться функция-обработчик.
        */
        element.addEventListener("click", function () {
            element.innerText = "Привет мир!";  //для HTML элемента, который находится в переменной element меняем значение текста, который находится в элементе.
        });
    </script>
<body>
    <p>
        Задание: Подключите к этому документу сценарий из файла my-script.js
    </p>
    <script src="my-script.js"></script>
</body>
<body>
    <pre>
        Задание:
        1) Объявите две переменные: login и name.
        3) Переменной name в качестве значения присвойте свое имя
        3) Скопируйте значение из переменной name в login
        4) Выведите в консоль браузера значение переменной login
    </pre>

    <script>
        let login, name;
        name = "Dmitriy";
        login = name;
        console.log(login);
    </script>
</body>
<body>
    <pre>
        Задание:
        Выполните задание согласно комментарию в коде.
    </pre>

    <script>
        let productPrice1 = 101.5; // цена 1го продукта
        let productPrice2 = 50.25; // цена 2го продукта
        let productPrice3 = 10.11; // цена 3го продукта

        let productQuantity1 = 5;  // количество единиц 1го продукта на складе
        let productQuantity2 = 9;  // количество единиц 2го продукта на складе
        let productQuantity3 = 15; // количество единиц 3го продукта на складе

        // Выведите на экран:
        // 1) Среднюю цену на продукт
        // 2) Общую стоимость всех продуктов, которые есть на складе

        let avgPrice = (productPrice1 + productPrice2 + productPrice3) / 3;
        let totalPrice = productPrice1 * productQuantity1
            + productPrice2 * productQuantity2
            + productPrice3 * productQuantity3;

        console.log(avgPrice);
        console.log(totalPrice);

    </script>
</body>
<body>
    <pre>
        Задание:
        Выполните задание согласно комментарию в коде.
    </pre>

    <script>
        let r = 15; // радиус
        let Pi = 3.1415; // число Пи

        // Вычислите значение площади окружности на основании значений выше. 
        // Площадь круга равна произведению квадрата радиуса на число Пи (3.1415)
        // Выведите результат
        let S = Pi * r * r;
        alert(S);
    </script>
</body>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task5</title>
</head>

<body>
    <pre>
        Определите, какую из переменных нужно заменить на константу.
    </pre>

    <script>
        console.log("Вычисление объема цилиндра.");
        //  V=π * r в квадрате * h
        let V;
        const Pi = 3.1415926535; // правильно использовать константу для подобных значений
        let r = 10;
        let h = 20;

        V = Pi * r * r * h;
        console.log(V);
    </script>
</body>
<body>
    <pre>
        Задание:
        Выберите подходящие имена для переменных и создайте их в коде.
        1) Переменная для хранения даты создания файла.
        2) Переменная для хранения имени файла.
        3) Переменная для хранения количества ошибок.
    </pre>

    <script>
        let fileCreatedDate = "10 September 2020";
        let fileName = "test.txt";
        let errorCount = 0;
    </script>
</body>
   <script>
        let name = "Иван";
        let age = 25;
        let company = "ITVDN";
        let position = "Frontend Developer";

        // инициализируйте переменную message
        // значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
        // строковое значение должно быть создано на основе значений переменных name, age, company, position
        // Значение должно быть составлено по шаблону:
        // Привет, меня зовут Иван. Мне 25 лет. Я работаю на должности Frontend Developer в компании ITVDN. 

        let message = "Привет, меня зовут " + name + ". Мне " + age + " лет. Я работаю на должности "
            + position + " в компании " + company + ".";

        message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}.`
        console.log(message);
    </script>
    <pre>
        Задание:
        1) запросите у пользователя сколько он хочет купить единиц товара
        2) выведите на экран какую сумму должен внести пользователь с учетом количества покупаемых единиц
        3) выведите на экран сколько единиц товара останется на складе после покупки
    </pre>

    <script>
        let productPrice = 101.5; // цена товара
        let productQuantity = 50;  // количество единиц товара на складе

        let count = prompt("Сколько единиц товара Вы хотите приобрести?", 1);
        let totalSum = count * productPrice;
        let leftInStorage = productQuantity - count;

        alert("Общая стоимость " + totalSum);
        alert("Количество товара, которое останется на складе после покупки " + leftInStorage);
    </script>
<body>
    <pre>
        Задание:
        Выполните задание в соответствии с комментарием в коде
    </pre>
    <script>
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отедльности и всего за все продукты
        // используйте форматированный вывод
        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2;
        let totalPriceProduct3 = productPrice3 * productQuantity3;

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
        console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
        console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
        console.log("Всего " + total);
    </script>
</body>
<body>
    <pre>
        Задание:
        Представьте, что вы разрабатываете сценарий, который будет использоваться для каталога товаров в интернет-магазине.
        Задача сценария, рассчитать какая должна быть ширина блока с описанием товара, для того чтобы в одну строку поместилось
        определенное количество товаров. Полученное значение ширины одного блока отобразите в консоли.
    </pre>
    <script>
        let screenWidth = 1980; // ширина экрана
        let margin = 10; // отступы межу блоками с описанием товара
        let desieredBlockCount = 5; // количество блоков с описанием, которые должны отобразиться в одну строку

        let totalMargins = margin * (desieredBlockCount - 1); // сколько пикселей уйдет на отступы, если блоков 5 отступов между ними будет 4
        let widthForBlock = screenWidth - totalMargins; // сколько пикселей останется для блоков
        let width = widthForBlock / desieredBlockCount; // ширина одного блока

        alert("ширина одного блока " + width + "px.");

    </script>
</body>
<body>
    <pre>
        Задание:
        Внесите изменения в сценарий. Сделайте, чтобы значение для радиуса и высоты вводил пользователь.
        При выводе значений используйте форматированный вывод, например, "объем цилиндра с высотой X и радиусом Y = Z"
    </pre>
    <script>
        alert("Вычисление объема цилиндра.");
        //  V=π * r в квадрате * h
        let V;
        const Pi = 3.1415926535; // правильно использовать константу для подобных значений
        let r = Number(prompt("Введите радиус цилиндра"));
        let h = Number(prompt("Введите высоту цилиндра"));

        V = Pi * r * r * h;
        alert(`Объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);
    </script>
</body>
<body>
    <pre>
        Задание:
        Добавьте операторы сокращенной арифметики, где это возможно
    </pre>
    <script>
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        let totalPrice = 0;

        totalPrice += productPrice1 * productQuantity1;
        totalPrice += productPrice2 * productQuantity2;
        totalPrice += productPrice3 * productQuantity3;

        alert(`Общая сумма ${totalPrice}`);
    </script>
<body>
    <pre>
        Задание
        Поменяйте бинарные операторы на унарные, где это возможно
    </pre>
    <script>
        let ordersCount = 0;
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        let totalPrice = 0;

        totalPrice = totalPrice + productPrice1 * productQuantity1;
        totalPrice = totalPrice + productPrice2 * productQuantity2;
        totalPrice = totalPrice + productPrice3 * productQuantity3;
        ordersCount++; // ordersCount = ordersCount + 1  

        alert(`Общая сумма ${totalPrice}`); 
    </script>
</body>
<body>
    <pre>
        Задание
        Поменяйте код согласно комментариям
    </pre>
    <script>
        let a = 10;
        let b = 20;

        // укажите операторы так, чтобы на консоль вывелись сообщения, такие же, как и в комментариях на строках 18, 19, 20
        console.log(a < b);  // true
        console.log(a > b);  // или a == b false 
        console.log(a != b); // true

    </script>
</body>
<body>
    <pre>
        Задание:
        Найдите и исправьте логические ошибки в сценарии.
    </pre>
    <script>
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
        // используйте форматированный вывод
        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2; // замена переменной productQuantity1 на productQuantity2
        let totalPriceProduct3 = productPrice3 * productQuantity3; // замена переменной productQuantity1 на productQuantity2

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
        console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
        console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
        console.log("Всего " + total);
    </script>
</body>
body>
    <pre>
        Задание:
        Исправьте ошибки, добавив недостающие операторы
    </pre>
    <script>
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = +prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = +prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = +prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        let totalPrice = 0;

        totalPrice = totalPrice + productPrice1 * productQuantity1;
        totalPrice = totalPrice + productPrice2 * productQuantity2;
        totalPrice = totalPrice + productPrice3 * productQuantity3;

        alert(`Общая сумма ${totalPrice}`);
    </script>
</body>
  <script>
        alert("Вычисление объема цилиндра.");
        //  V=π * r в квадрате * h
        let V;
        const Pi = 3.1415926535;
        let r = +prompt("Введите радиус цилиндра");
        let h = +prompt("Введите высоту цилиндра");
        let isDataValid = true;

        if (isNaN(r) || r == 0) {
            alert("Не правильное значение для радиуса.");
            isDataValid = false;
        }

        if (isNaN(h) || h == 0) {
            alert("Не правильное значение для высоты.");
            isDataValid = false;
        }

        if (isDataValid) {
            V = Pi * r * r * h;
            alert(`Объем цилиндра с высотой ${h} и радиусом ${r} = ${V}`);
        }
        else {
            alert("Невозможно вычислить объем цилиндра.");
        }
    </script>
<body>
    <pre>
        Задание:
        Доработайте сценарий. Перед выводом общей стоимости заказа узнайте у пользователя, будет ли он заказывать доставку. 
        Если да, добавьте к стоимости заказа 40.
    </pre>
    <script>
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        // Выведите на экран сколько пользователю нужно заплатить за каждый продукт по отдельности и всего за все продукты
        // используйте форматированный вывод
        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2;
        let totalPriceProduct3 = productPrice3 * productQuantity3;

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
        console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
        console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);

        let shipping = confirm("Заказываете доставку курьером?");
        if (shipping) {
            total += 40;
            alert("Всего к оплате с доставкой(40)="+total);
        }
        else{
            alert("Всего " + total);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Доработайте сценарий. Если пользователь заказывает товаров больше, чем есть на складе - сообщите ему об этом. Пользователь не может заказать 0 товаров.
        Если пользователь заказывает количество товаров, не превышающее количество на складе - рассчитайте общую стоимость заказа.
    </pre>
    <script>
        let productPrice = 101.5; // цена товара
        let productQuantity = 50; // количество единиц товара на складе

        let count = prompt("Сколько единиц товара Вы хотите приобрести?");

        if (count == 0) {
            alert("Количество единиц товара не может быть равное 0");
        }
        else if (count > productQuantity) {
            alert("Недостаточное количество товара на складе.")
        }
        else {
            let totalSum = count * productPrice;
            let leftInStorage = productQuantity - count;

            alert("Общая стоимость " + totalSum);
            alert("Количество товара останется на складе после покупки " + leftInStorage);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Перепишите код так, чтобы в нем использовалась конъюнкция
    </pre>
    <script>
        let login = "admin";
        let password = "12345";

        let inputLogin = prompt("Введите логин");
        let inputPassword = prompt("Введите пароль");

        if (inputLogin != login || inputPassword != password) {
            alert("Логин или пароль введены неправильно");
        }
        else {
            alert("Вы авторизованы");
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Используя if...else создайте сценарий, который запросит у пользователя значение и выведет на экран
        1 если значение больше нуля
        -1 если значение меньше нуля
        0 если значение равно 0
    </pre>
    <script>
        let value = prompt("Введите числовое значение");

        if (value > 0) {
            alert("1");
        }
        else if (value < 0) {
            alert("-1");
        }
        else {
            alert("0");
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Поменяйте switch на if...else. Поведение сценария, после изменений, должно остаться прежним (обратите внимание на значения USA и Great Britain).
    </pre>
    <script>
        let country = prompt("введите название страны");

        if (country == "USA" || country == "Great Britain") {
            alert("Английский язык");
        }
        else if (country == "Germany") {
            alert("Немецкий язык");
        }
        else if (country == "France") {
            alert("Французский язык");
        }
        else {
            alert("Указанной страны нет в списке");
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Переменная season может принимать 4 значения: 1, 2, 3 или 4. Если значение переменной 1 в переменную result запишите значение "зима",
        если значение 2 - "весна" и т.д. Выведите значение переменной result на экран. Решите задачу используя конструкцию switch.
    </pre>
    <script>
        let season = prompt("Введите значение 1, 2, 3 или 4");
        let result;

        switch (season) {
            case "1":
                result = "Зима";
                break;
            case "2":
                result = "Весна";
                break;
            case "3":
                result = "Лето";
                break;
            case "4":
                result = "Осень";
                break;
            default:
                result = "Введите значение 1, 2, 3 или 4";
                break;
        }

        alert(result);
    </script>
</body>
            <body>
    <pre>
        Задание:
        Замените условные конструкции на тернарный оператор где это возможно.
    </pre>
    <script>
        let age = +prompt("Введите ваш возраст");
        let technology = prompt("Ведите 1 или 2. 1 - JavaScript. 2 - C#");
        let expirience = prompt("Введите опыт работы в годах.");

        let adult, specialization, position;

        adult = age > 18 ? "совершеннолетний" : "несовершеннолетний";
        specialization = technology == 1 ? "Frontend" : "Backend";

        if (expirience == 0) {
            position = "Без опыта работы";
        }
        else if (expirience > 0 && expirience < 1.5) {
            position = "Junior";
        }
        else if (expirience > 1.5 && expirience < 3) {
            position = "Middle";
        }
        else if (expirience > 3) {
            position = "Senior";
        }
        else {
            position = "error";
        }

        let result = `Возраст: ${adult}\r\nСпециализация: ${specialization}\r\nПозиция: ${position}`;

        alert(result);
    </script>
</body>
            <body>
    <pre>
        Задание:
        Доработайте сценарий. Добавьте расчет скидки. 
        Если заказ от 500, скидка 5%, если заказ от 1000 скидка 10%, если заказ от 1500 скидка 15% и доатсвка бесплатная.
        Выведите пользователю стоимость заказа с учтом скидки и сумму скидки, которую он получил. Также информацию о стоимости доатавки, если она была заказана.
        Используйте подходящую условную конструкцию.
    </pre>
    <script>
        let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
        let product2 = "Биндеры для бумаги 51 мм";
        let product3 = "Ручка шариковая синяя";

        let productPrice1 = 280.25;
        let productPrice2 = 56;
        let productPrice3 = 12.50;

        let productQuantity1 = prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, 0);
        let productQuantity2 = prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, 0);
        let productQuantity3 = prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, 0);

        let totalPriceProduct1 = productPrice1 * productQuantity1;
        let totalPriceProduct2 = productPrice2 * productQuantity2;
        let totalPriceProduct3 = productPrice3 * productQuantity3;

        let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
        console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
        console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
        console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);

        /////////////////////////////////////////////////
        // определения процента скидки
        /////////////////////////////////////////////////
        let dicsountPercent = 0;
        let isFreeShipping = false;
        if (total > 500 && total < 1000) {
            dicsountPercent = 0.05;
        }
        else if (total > 1000 & total < 1500) {
            dicsountPercent = 0.1;
        }
        else if (total > 1500) {
            dicsountPercent = 0.15;
            isFreeShipping = true;
        }

        /////////////////////////////////////////////////
        // расчет скидки, стоимости доставки и общей стоимости с учетом скидки
        /////////////////////////////////////////////////
        let sheepingPrice = 0;
        let totalWithShipping = 0;
        let discount = 0;

        if (!isFreeShipping) {
            let shipping = confirm("Заказываете доставку курьером?");
            if (shipping) {
                sheepingPrice = 40;
            }
        }

        discount = total * dicsountPercent;
        totalWithShipping = total - discount + sheepingPrice;

        alert(`Сумма заказа - ${total}\r\nСкидка (${dicsountPercent * 100}%) - ${discount}\r\nДоставка - ${sheepingPrice}\r\nВего к оплате - ${totalWithShipping}`);
    </script>
</body>
<body>
    <pre>
        Задание:
        Поменяйте if...else на switch
    </pre>
    <script>
        let value = +prompt("Введите число 1 или 2");

        switch (value) {
            case 1:
                alert("Вы ввели число 1");
                break;
            case 2:
                alert("Вы ввели число 2");
                break;
            default:
                alert("Вы ввели неправильное значение");
                break;
        }
    </script>
</body>
            <body>
    <pre>
        Задание:
        Поменяйте цикл for на цикл while не меняя поведение сценария.
    </pre>
    <script>
        // for (let i = 0; i < 5; i++)
        // {
        //     console.log(`значение ${i}`);
        // }

        let i = 0;
        while (i < 5) {
            console.log(`значение ${i}`);
            i++;
        }
    </script>
</body>
            <body>
    <pre>
        Задание:
        Напишите сценарий, который должен получить у пользователя значение больше 10.
        Если пользователь ввел значение меньше 10 запросите значение еще раз и так до тех пор, пока пользователь не введет корректное значение.
        Предусматривать обработку нечисловых значений не обязательно.
    </pre>
    <script>
        // Вариант 1
        let input;

        do {
            input = +prompt("Введите значение больше 10");
        } while (input <= 10);

        alert("Вы ввели значение " + input);

        // Вариант 2
        while (true) {
            input = +prompt("Введите значение больше 10");
            if (input > 10)
                break;
        }
        alert("Вы ввели значение " + input);
    </script>
</body>
            <body>
    <pre>
        Задание:
        Запросите у пользователя число, посчитайте сумму всех числе между 0 и введенным значением и отобразите результат на экран.
    </pre>
    <script>
        let value = +prompt("Введите число");
        let sum = 0;

        for (let i = 0; i < value; i++) {
            sum += i;
        }

        console.log(`Сумма всех числе между 0 и ${value} = ${sum}`);
    </script>
</body>
            <body>
    <pre>
        Задание:
        Напишите сценарий "Игра 'Угадай число'". Суть игры - угадать за меньшее количество попыток число, которое загадал сценарий.
        Каждый раз, когда игрок пытается угадать число, сценарий выводит подсказку - меньшее или большее число было загадано сценарием.
        Сценарий загадывает число только один раз в начале игры и это число не меняется до завершения игры.
        Для решения задачи используйте циклические и условные конструкции.
        Для завершения игры можно вместо числа ввести фразу "стоп"

        для генерации случайного числа используйте следующий код:
        let randomValue = Math.floor(Math.random() * 101); // случайное значение от 0 до 100 будет записано в переменную randomValue
        
        Пример игры:
        Сценарий: я загадал случайное значение от 0 до 100
        Пользователь: 50
        Сценарий: я загадал значение больше, чем 50
        Пользователь: 75
        Сценарий: я загадал значение меньше, чем 75
        Пользователь: 62
        Сценарий: я загадал значение меньше, чем 62
        Пользователь: 56
        Сценарий: Правильно! Загаданное значение 56. Вы угадали с 4й попытки. 
    </pre>
    <script>
        let randomValue = Math.floor(Math.random() * 101);
        let attempt = 0;
        alert("я загадал случайное значение от 0 до 100");

        while (true) {
            attempt++; // увеличили количество попыток
            let currentValue = prompt("Попробуйте угадать. Введите значение");

            if (currentValue == "стоп") {
                break;
            }

            if (currentValue > randomValue) {
                alert(`Я загадал значение меньше чем ${currentValue}`);
            }
            else if (currentValue < randomValue) {
                alert(`Я загадал значение больше чем ${currentValue}`);
            }
            if (currentValue == randomValue) {
                alert(`Правильно! Загаданное значение ${randomValue}. Вы угадали с ${attempt}й попытки.`);
                break;
            }
        }
    </script>
</body>
            <body>
    <pre>
        Задание:
        При помощи цикла for выведите все четные числа между 0 и 100
    </pre>
    <script>
        for (let i = 0; i < 100; i++) {
            if (i % 2 == 0) // делиться на 2 без остатка
            {
                console.log(i);
            }
        }
    </script>
</body>
