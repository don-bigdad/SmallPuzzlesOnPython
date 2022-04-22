<body>
    <pre>
        Задание:
        Напишите сценарий, который найдет в массиве все отрицательные значения и заменить их на значения 0.
        После этого выведет на экран все элементы массива.
    </pre>
    <script>
        let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

        for (let i = 0; i < values.length; i++) {
            if (values[i] < 0) {
                values[i] = 0;
            }
        }

        for (let value of values) {
            console.log(value);
        }
    </script>
</body>

<body>
    <pre>
        Задание:
        Поменяйте сценарий таким образом, чтобы обход данных массива происходил с помощью цикла for...of
    </pre>
    <script>
        let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
        let max = Number.MIN_VALUE;

        for (let value of values) {
            if (value > max) {
                max = value;
            }
        }

        console.log("Максимальное значение массива - " + max);
    </script>
</body>
<body>
    <pre>
        Задание:
        Дано массив. Создайте на основе значений этого массива два новых массива. В один массив поместите все четные значения, а во второй все нечетные.
        Выведите на экран значения, которые вошли в первый массив и во второй массив.
    </pre>
    <script>
        let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
        let oddValues = [];
        let evenValues = [];
        let oddValuesPosition = 0;
        let evenValuesPosition = 0;

        for (let value of values) {
            if (value % 2 == 0) {
                evenValues[evenValuesPosition] = value;
                evenValuesPosition++;
            }
            else {
                oddValues[oddValuesPosition] = value;
                oddValuesPosition++;
            }
        }

        console.log("Нечетные значения");
        for (let oddVal of oddValues) {
            console.log(oddVal);
        }

        console.log("Четные значения");
        for (let evenVal of evenValues) {
            console.log(evenVal);
        }

    </script>
</body>
<body>
    <pre>
        Задание:
        Дано массив. Поменяйте элемент с максимальным значением местами с элементом с минимальным значением.
    </pre>
    <script>
        let values = [10, 125, 4, 6, 11, 9, 20, 1, 8, 0, 3];

        let max = Number.MIN_VALUE;
        let min = Number.MAX_VALUE;

        let maxElementIndex, minElementIndex;

        for (let index = 0; index < values.length; index++) {
            const element = values[index];
            if (element > max) {
                max = element;
                maxElementIndex = index; // запоминаем индекс максимального значения
            }
            if (element < min) {
                min = element;
                minElementIndex = index; // запоминаем индекс минимального значения
            }
        }

        // меняем значения местами, используя индексы, которые запомнили ранее
        values[maxElementIndex] = min;
        values[minElementIndex] = max;

        for (const value of values) {
            console.log(value);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.
    </pre>
    <script>
        let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];

        for (let i = 0; i < values.length - 1; i++) {

            const current = values[i];

            // k = i - так как нам не нужно проверять предыдущие значения, то вложенный цикл проверяет текущее значение current с последующими
            // Последний элемент уже сравнивать не нужно, так как предпоследний элемент будет проверен на равенство с последним.
            // Поэтому первый цикл на 16 строке запускается на одну итерацию меньше, чем размер массива.
            for (let k = i + 1; k < values.length; k++) {
                const element = values[k];

                if (current == element) {
                    console.log(`Значение ${current} повторяется`);
                    break;
                }
            }
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Дано массив. Найдите среднее арифметическое для значений этого массива. 
        Выведите на экран только те элементы, которые больше этого среднего арифметического значения
    </pre>
    <script>
        let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];

        // сумма всех элементов
        let sum = 0;
        for (const value of values) {
            sum += value;
        }

        // среднее арифметическое
        let avg = sum / values.length;
        console.log("avg = " + avg);

        for (const value of values) {
            if (value > avg) {
                console.log(value);
            }
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Найдите первый положительный элемент массива и выведите его на экран.
    </pre>
    <script>
        let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
        for (let i = 0; i < values.length; i++) {
            if (values[i] > 0) {
                alert(`Значение ${values[i]} по индексу ${i} - первое положительное в массиве`);
                break; // нет смысла продолжать цикл, так как значение найдено
            }
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Напишите сценарий, который найдет минимальное, максимальное значения массива, а также выведет сумму всех элементов массива.
    </pre>
    <script>
        let values = [10, 20, 4, 6, 11, 9, 125, -1, 8, 0, 3];
        let max = Number.MIN_VALUE;
        let min = Number.MAX_VALUE;
        let sum = 0;

        for (let index = 0; index < values.length; index++) {
            const element = values[index];
            if (element > max) {
                max = element;
            }
            if (element < min) {
                min = element;
            }

            sum += element;
        }

        console.log("Максимальное значение массива - " + max);
        console.log("Минимальное значение массива - " + min);
        console.log("Сумма всех элементов - " + sum);
    </script>
</body>
<body>
    <pre>
        Задание:
        Попросите у пользователя ввести название города. Удалите этот город из элементов массива. 
        Если города нет в массиве, сообщите об этом пользователю.
        Выведите массив на экран после удаления элементов.
    </pre>
    <script>
        let cities = ["London", "Paris", "Berlin", "Rome", "Budapest", "Lisbon", "Madrid", "Amsterdam"];

        let input = prompt("Введите название города");
        let index = cities.indexOf(input);

        if (index == -1) {
            alert("Указанный город не найден.");
        }
        else {
            cities.splice(index, 1);
        }

        for (const city of cities) {
            console.log(city);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Перепишите сценарий и воспользуйтесь одним из методов, изученных в уроке. Поменяйте код так, чтобы сохранить его поведение.
    </pre>
    <script>
        let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
        let oddValues = [];
        let evenValues = [];

        for (let value of values) {
            if (value % 2 == 0) {
                evenValues.push(value);
            }
            else {
                oddValues.push(value);
            }
        }

        console.log("Нечетные значения");
        for (let oddVal of oddValues) {
            console.log(oddVal);
        }

        console.log("Четные значения");
        for (let evenVal of evenValues) {
            console.log(evenVal);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Перепишите код так, чтобы значения для массива count задавались пользователем.
        Посчитайте стоимость покупок. Выведите сколько было потрачено на каждый продукт по отдельности и сколько потрачено в общем.
    </pre>
    <script>
        // названия товаров
        let names = [];
        names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
        names[1] = "Биндеры для бумаги 51 мм";
        names[2] = "Ручка шариковая синяя";

        // цены на товар
        let prices = [];
        prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
        prices[1] = 56;     // Биндеры для бумаги 51 мм
        prices[2] = 12.50;  // Ручка шариковая синяя

        let count = [];
        for (let i = 0; i < names.length; i++) {
            const productName = names[i];
            let counttoBuy = +prompt("Укажите количество для " + productName);

            if (isNaN(counttoBuy))
                counttoBuy = 0;

            count.push(counttoBuy);
        }

        let totalSum = 0;
        for (let i = 0; i < names.length; i++) {
            const productName = names[i];
            const productPrice = prices[i];
            const boughtCount = count[i];

            let price = productPrice * boughtCount;
            totalSum += price;
            console.log(`Куплено ${productName} на сумму ${price}`);
        }
        console.log("Всего продуктов куплено на " + totalSum);
    </script>
</body>
<body>
    <pre>
        Задание:
        Найдите все значения в массиве меньше 0 и удалите их.
    </pre>
    <script>
        let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

        for (let i = values.length; i > 0 ; i--) {
            const element = values[i];

            if (element < 0) {
                values.splice(i, 1);
            }
        }

        console.log("Элементы массива полсе удаления всех значений меньше 0:")
        for (const value of values) {
            console.log(value);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Напишите сценарий, который будет запрашивать у пользователя значения, до тех пор, пока тот не введет значение stop
        Все введенные значения, если они являются числом, должны быть добавлены в массив.
        После того, как пользователь ввел значение стоп, посчитайте сумму всех значений, которые находятся в массиве.
    </pre>
    <script>
        let values = [];

        while (true) {
            let input = prompt("Введите значение. Введите 'стоп' для выхода из цикла.");

            if (input == "стоп") break;

            let num = Number(input);
            if (!isNaN(num)) {
                values.push(num);
            }
        }

        let sum = 0;
        for (const val of values) {
            sum += val;
        }
        alert("Сумма всех введенных элементов " + sum);
    </script>
</body>
<body>
    <pre>
        Задание:
        Выполните рефакторинг кода. Вынесите блок кода инициализирующий массив count и блок кода рассчитывающий и выводящий сумму покупок в две отдельные функции.
        Поведение сценария не должно измениться.
    </pre>
    <script>
        // названия товаров
        let names = [];
        names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
        names[1] = "Биндеры для бумаги 51 мм";
        names[2] = "Ручка шариковая синяя";

        // цены на товар
        let prices = [];
        prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
        prices[1] = 56;     // Биндеры для бумаги 51 мм
        prices[2] = 12.50;  // Ручка шариковая синяя

        let count = [];
        
        initCountArray();
        calculateSum();

        function initCountArray() {
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                let counttoBuy = +prompt("Укажите количество для " + productName);

                if (isNaN(counttoBuy))
                    counttoBuy = 0;

                count.push(counttoBuy);
            }
        }

        function calculateSum() {
            let totalSum = 0;
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                const productPrice = prices[i];
                const boughtCount = count[i];

                let price = productPrice * boughtCount;
                totalSum += price;
                console.log(`Куплено ${productName} на сумму ${price}`);
            }
            console.log("Всего продуктов куплено на " + totalSum);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Создайте функцию random(min, max), которая возвращает случайное значение в диапазоне от min до max.
        Сделайте, чтобы сценарий заработал. Код генерации случайного значения найдите с помощью поисковой системы или в заданиях из прошлых уроков.
    </pre>
    <script>
        let throwCount = +prompt("Сколько раз вы хотите бросить шестигранный кубик");

        for (let i = 0; i < throwCount; i++) {
            const result = random(1, 6);
            console.log(result);
        }

        function random(min, max) {
            return min + Math.floor((max - min + 1) * Math.random());
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Создайте функцию avg(a, b, c), которая возвращает среднее арифметическое для чисел a, b, c
        Если параметр отсутствует - не используйте значение для расчета среднего арифметического значения.
    </pre>
    <script>
        function avg(a, b, c)
        {
            let sum = 0;
            let count = 0;

            if(a)
            {
                sum += a;
                count++;
            }
            if(b)
            {
                sum += b;
                count++;
            }
            if(c)
            {
                sum += c;
                count++;
            }

            let result = sum / count;
            return result;
        }

        let r1 = avg(10, 20, 30);
        let r2 = avg(10, 20);

        console.log(r1);
        console.log(r2);

    </script>
</body>
<body>
    <pre>
        Задание:
        Создайте функцию, которая принимает массив значений и возвращает массив с дублирующимися значениями или null если повторяющихся значений в массиве нет.
    </pre>
    <script>
        let values1 = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];
        let values2 = [1, 2, 3, 4, 5, 6, 7, 8];
        let values3 = [1, 2, 3, 8, 5, 6, 8, 7, 8];

        function findDublicates(array) {
            let result = [];

            for (let i = 0; i < array.length - 1; i++) {

                const current = array[i];

                for (let k = i + 1; k < array.length; k++) {
                    const element = array[k];

                    if (current == element) {
                        if (result.indexOf(current) == -1)
                            result.push(current);
                        break;
                    }
                }
            }

            return result.length != 0 ? result : null;
        }

        console.log(findDublicates(values1));
        console.log(findDublicates(values2));
        console.log(findDublicates(values3));

    </script>
</body>
<body>
    <pre>
        Задание:
        Создайте функцию min(a, b), которая возвращает меньшее из чисел а и b
    </pre>
    <script>
        function f() 
        {
         var myVar = "Hello World";
        }
       
        console.log(myVar);
    </script>
</body>
<body>
    <pre>
        Задание:
        Замените в коде все функции-выражения на стрелочные функции.
    </pre>
    <script>
        var data = [1, 2, 3, 4, 5];

        var result = data.map(value => value * value);
        result.forEach(e => console.log(e));
    </script>
</body>
<body>
    <pre>
        Задание:
        Исправьте ошибку в сценарии, не изменяя способа определения функций (функции должны создаваться как именованные функции-выражения).
    </pre>
    <script>

        let initCountArray = function () {
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                let counttoBuy = +prompt("Укажите количество для " + productName);

                if (isNaN(counttoBuy))
                    counttoBuy = 0;

                count.push(counttoBuy);
            }
        }

        let calculateSum = function () {
            let totalSum = 0;
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                const productPrice = prices[i];
                const boughtCount = count[i];

                let price = productPrice * boughtCount;
                totalSum += price;
                console.log(`Куплено ${productName} на сумму ${price}`);
            }
            console.log("Всего продуктов куплено на " + totalSum);
        }

        // названия товаров
        let names = [];
        names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
        names[1] = "Биндеры для бумаги 51 мм";
        names[2] = "Ручка шариковая синяя";

        // цены на товар
        let prices = [];
        prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
        prices[1] = 56;     // Биндеры для бумаги 51 мм
        prices[2] = 12.50;  // Ручка шариковая синяя

        let count = [];

        initCountArray();
        calculateSum();
    </script>

</body>
<body>
    <pre>
        Задание:
        Перепишите код с использованием функции filter и forEach из ES5. 
    </pre>
    <script>
        let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
        let oddValues = values.filter(x => x % 2 != 0);
        let evenValues = values.filter(x => x % 2 == 0);

        console.log("Нечетные значения");
        oddValues.forEach(x => console.log(x));

        console.log("Четные значения");
        evenValues.forEach(x => console.log(x));
    </script>
</body>
<body>
    <pre>
        Задание:
        Запросите у пользователя число. Выведите все числа в обратном порядке от введенного пользователем значения до 1. Используйте для решения рекурсию.
    </pre>
    <script>
        let value = prompt("Введите число");
        printNumber(value);

        function printNumber(value) {

            console.log(value);

            if (value == 1)
                return 1;
            else {
                value--;
                printNumber(value);
            }

        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Исправьте ошибку в коде, связанную с областями видимостей.
    </pre>
    <script>
        // названия товаров
        let names = [];
        names[0] = "Бумага офисная А4, 80 г/м2, 500 л";
        names[1] = "Биндеры для бумаги 51 мм";
        names[2] = "Ручка шариковая синяя";

        // цены на товар
        let prices = [];
        prices[0] = 280.25; // Бумага офисная А4, 80 г/м2, 500 л
        prices[1] = 56;     // Биндеры для бумаги 51 мм
        prices[2] = 12.50;  // Ручка шариковая синяя

        let count = [];
        
        initCountArray();
        calculateSum();

        function initCountArray() {
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                let counttoBuy = +prompt("Укажите количество для " + productName);

                if (isNaN(counttoBuy))
                    counttoBuy = 0;

                count.push(counttoBuy);
            }
        }

        function calculateSum() {
            let totalSum = 0;
            for (let i = 0; i < names.length; i++) {
                const productName = names[i];
                const productPrice = prices[i];
                const boughtCount = count[i];

                let price = productPrice * boughtCount;
                totalSum += price;
                console.log(`Куплено ${productName} на сумму ${price}`);
            }
            console.log("Всего продуктов куплено на " + totalSum);
        }
    </script>

</body>




