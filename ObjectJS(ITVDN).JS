<body>
    <pre>
        Задание:
        Исправьте ошибки в коде.
    </pre>
    <script>

        let user = {
            name: "admin",
            email: "admin@example.com"
        };

        console.log(user.name);
        console.log(user.email);

        user.email = "admin@itvdn.com";

        console.log(user.email);
    </script>
</body>
<body>
    <pre>
        Задание:
        Поменяйте сценарий. Выведите информацию только о тех пользователях, кто работает в компании Keebler LLC
    </pre>
    <script>
        // массив создан с помощью https://jsonplaceholder.typicode.com/users
        // все свойства в объектах, которые находятся в массиве взяты в "". Такой форат данны
        let users = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496'
                    }
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets'
                }
            },
            {
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv',
                address: {
                    street: 'Victor Plains',
                    suite: 'Suite 879',
                    city: 'Wisokyburgh',
                    zipcode: '90566-7771',
                    geo: {
                        lat: '-43.9509',
                        lng: '-34.4618'
                    }
                },
                phone: '010-692-6593 x09125',
                website: 'anastasia.net',
                company: {
                    name: 'Deckow-Crist',
                    catchPhrase: 'Proactive didactic contingency',
                    bs: 'synergize scalable supply-chains'
                }
            },
            {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net',
                address: {
                    street: 'Douglas Extension',
                    suite: 'Suite 847',
                    city: 'McKenziehaven',
                    zipcode: '59590-4157',
                    geo: {
                        lat: '-68.6102',
                        lng: '-47.0653'
                    }
                },
                phone: '1-463-123-4447',
                website: 'ramiro.info',
                company: {
                    name: 'Romaguera-Jacobson',
                    catchPhrase: 'Face to face bifurcated interface',
                    bs: 'e-enable strategic applications'
                }
            },
            {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org',
                address: {
                    street: 'Hoeger Mall',
                    suite: 'Apt. 692',
                    city: 'South Elvis',
                    zipcode: '53919-4257',
                    geo: {
                        lat: '29.4572',
                        lng: '-164.2990'
                    }
                },
                phone: '493-170-9623 x156',
                website: 'kale.biz',
                company: {
                    name: 'Keebler LLC',
                    catchPhrase: 'User-centric fault-tolerant solution',
                    bs: 'revolutionize end-to-end systems'
                }
            },
            {
                id: 5,
                name: 'Chelsey Dietrich',
                username: 'Kamren',
                email: 'Lucio_Hettinger@annie.ca',
                address: {
                    street: 'Skiles Walks',
                    suite: 'Suite 351',
                    city: 'Roscoeview',
                    zipcode: '33263',
                    geo: {
                        lat: '-31.8129',
                        lng: '62.5342'
                    }
                },
                phone: '(254)954-1289',
                website: 'demarco.info',
                company: {
                    name: 'Keebler LLC',
                    catchPhrase: 'User-centric fault-tolerant solution',
                    bs: 'revolutionize end-to-end systems'
                }
            },
            {
                id: 6,
                name: 'Mrs. Dennis Schulist',
                username: 'Leopoldo_Corkery',
                email: 'Karley_Dach@jasper.info',
                address: {
                    street: 'Norberto Crossing',
                    suite: 'Apt. 950',
                    city: 'South Christy',
                    zipcode: '23505-1337',
                    geo: {
                        lat: '-71.4197',
                        lng: '71.7478'
                    }
                },
                phone: '1-477-935-8478 x6430',
                website: 'ola.org',
                company: {
                    name: 'Considine-Lockman',
                    catchPhrase: 'Synchronised bottom-line interface',
                    bs: 'e-enable innovative applications'
                }
            },
            {
                id: 7,
                name: 'Kurtis Weissnat',
                username: 'Elwyn.Skiles',
                email: 'Telly.Hoeger@billy.biz',
                address: {
                    street: 'Rex Trail',
                    suite: 'Suite 280',
                    city: 'Howemouth',
                    zipcode: '58804-1099',
                    geo: {
                        lat: '24.8918',
                        lng: '21.8984'
                    }
                },
                phone: '210.067.6132',
                website: 'elvis.io',
                company: {
                    name: 'Keebler LLC',
                    catchPhrase: 'User-centric fault-tolerant solution',
                    bs: 'revolutionize end-to-end systems'
                }
            },
            {
                id: 8,
                name: 'Nicholas Runolfsdottir V',
                username: 'Maxime_Nienow',
                email: 'Sherwood@rosamond.me',
                address: {
                    street: 'Ellsworth Summit',
                    suite: 'Suite 729',
                    city: 'Aliyaview',
                    zipcode: '45169',
                    geo: {
                        lat: '-14.3990',
                        lng: '-120.7677'
                    }
                },
                phone: '586.493.6943 x140',
                website: 'jacynthe.com',
                company: {
                    name: 'Abernathy Group',
                    catchPhrase: 'Implemented secondary concept',
                    bs: 'e-enable extensible e-tailers'
                }
            },
            {
                id: 9,
                name: 'Glenna Reichert',
                username: 'Delphine',
                email: 'Chaim_McDermott@dana.io',
                address: {
                    street: 'Dayna Park',
                    suite: 'Suite 449',
                    city: 'Bartholomebury',
                    zipcode: '76495-3109',
                    geo: {
                        lat: '24.6463',
                        lng: '-168.8889'
                    }
                },
                phone: '(775)976-6794 x41206',
                website: 'conrad.com',
                company: {
                    name: 'Yost and Sons',
                    catchPhrase: 'Switchable contextually-based project',
                    bs: 'aggregate real-time technologies'
                }
            },
            {
                id: 10,
                name: 'Clementina DuBuque',
                username: 'Moriah.Stanton',
                email: 'Rey.Padberg@karina.biz',
                address: {
                    street: 'Kattie Turnpike',
                    suite: 'Suite 198',
                    city: 'Lebsackbury',
                    zipcode: '31428-2261',
                    geo: {
                        lat: '-38.2386',
                        lng: '57.2232'
                    }
                },
                phone: '024-648-3804',
                website: 'ambrose.net',
                company: {
                    name: 'Hoeger LLC',
                    catchPhrase: 'Centralized empowering task-force',
                    bs: 'target end-to-end models'
                }
            }
        ];

        const companyName = "Keebler LLC";
        for (const user of users) {
            if (user.company.name == companyName)
                console.log(user.name + " from " + user.address.city);
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Создайте два объекта, используя конструктор и литерал. Оба объекта должны содержать свойства firstName и lastName
        с произвольными значениями. Создайте функцию print, которая будет принимать в качестве параметра объект и выводить свойства
        lastName и firstName полученного объекта на экран.
    </pre>
    <script>
        let obj1 = new Object();
        obj1.firstName = "Jhon";
        obj1.lastName = "Doe";

        let obj2 = {
            firstName: "JHON",
            lastName: "DOE"
        };

        function print(obj) {
            console.log("First Name: " + obj.firstName);
            console.log("Last Name: " + obj.lastName);
        }

        print(obj1);
        print(obj2);
    </script>
</body>
<body>
    <pre>
        Задание:
        Выведите на экран свойства first и last из вложенного объекта name. Поменяйте значение свойства balance на '$2000'. Удалите свойство email.
        Выведите на экран все содержимое объекта с помощью кода console.log(user)
    </pre>
    <script>
        let user = {
            balance: '$1,250.89',
            age: 24,
            name: {
                first: 'Golden',
                last: 'Clements'
            },
            company: 'EWAVES',
            email: 'golden.clements@ewaves.io',
            friends: [
                {
                    id: 0,
                    name: 'Buchanan Austin'
                },
                {
                    id: 1,
                    name: 'Richmond Garrison'
                },
                {
                    id: 2,
                    name: 'Burns Cook'
                },
                {
                    id: 3,
                    name: 'Sally Mcpherson'
                }
            ],
            favoriteFruit: 'strawberry'
        }
        console.log("First Name " + user.name.first);
        console.log("Last Name " + user.name.last);
        user.balance = "$2000";
        delete user.email;
        console.log(user);
    </script>
</body>
<body>
    <pre>
        Задание:
        Все объекты в массиве users имеют одинаковую структуру. 
        Выведите на экран:
        1) Адреса электронной почты всех пользователей (email)
        2) Имя и фамилию пользователей с наибольшим количеством друзей (свойства name и friends)
        3) Компанию пользователя с наибольшим балансом и компанию пользователя с наименьшим балансом (свойства company и balance)
    </pre>
    <script>
        // массив сгенерирован с помощью https://next.json-generator.com/
        let users = [
            {
                balance: '1250.89',
                age: 24,
                name: {
                    first: 'Golden',
                    last: 'Clements'
                },
                company: 'EWAVES',
                email: 'golden.clements@ewaves.io',
                friends: [
                    {
                        id: 0,
                        name: 'Buchanan Austin'
                    },
                    {
                        id: 1,
                        name: 'Richmond Garrison'
                    },
                    {
                        id: 2,
                        name: 'Burns Cook'
                    },
                    {
                        id: 3,
                        name: 'Sally Mcpherson'
                    },
                    {
                        id: 4,
                        name: 'Nina Hood'
                    },
                    {
                        id: 5,
                        name: 'Rhonda Anderson'
                    },
                    {
                        id: 6,
                        name: 'Mathis Bowen'
                    },
                    {
                        id: 7,
                        name: 'Janie Carlson'
                    },
                    {
                        id: 8,
                        name: 'Brooke Reilly'
                    },
                    {
                        id: 9,
                        name: 'Peters Oliver'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '3637.94',
                age: 23,
                name: {
                    first: 'Francis',
                    last: 'Hebert'
                },
                company: 'XPLOR',
                email: 'francis.hebert@xplor.biz',
                friends: [
                    {
                        id: 0,
                        name: 'Clements Glass'
                    },
                    {
                        id: 1,
                        name: 'Gutierrez Padilla'
                    },
                    {
                        id: 2,
                        name: 'Noelle Wilkinson'
                    },
                    {
                        id: 3,
                        name: 'Kim Sampson'
                    },
                    {
                        id: 4,
                        name: 'Luz Palmer'
                    }
                ],
                favoriteFruit: 'apple'
            },
            {
                balance: '1106.44',
                age: 31,
                name: {
                    first: 'Hale',
                    last: 'Cross'
                },
                company: 'EARTHPURE',
                email: 'hale.cross@earthpure.us',
                friends: [
                    {
                        id: 0,
                        name: 'Terri Clark'
                    },
                    {
                        id: 1,
                        name: 'Marie Joyce'
                    },
                    {
                        id: 2,
                        name: 'Howell Moses'
                    },
                    {
                        id: 3,
                        name: 'Juarez Marshall'
                    },
                    {
                        id: 4,
                        name: 'Corinne Grant'
                    },
                    {
                        id: 5,
                        name: 'Chandra Ferrell'
                    },
                    {
                        id: 6,
                        name: 'Emily Kidd'
                    },
                    {
                        id: 7,
                        name: 'Claudine Pollard'
                    },
                    {
                        id: 8,
                        name: 'Walter Cooper'
                    },
                    {
                        id: 9,
                        name: 'Isabella Hays'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '2502.43',
                age: 25,
                name: {
                    first: 'Delores',
                    last: 'Sykes'
                },
                company: 'ASSITIA',
                email: 'delores.sykes@assitia.com',
                friends: [
                    {
                        id: 0,
                        name: 'Amy Fox'
                    },
                    {
                        id: 1,
                        name: 'Laurel Gaines'
                    },
                    {
                        id: 2,
                        name: 'Mcguire French'
                    },
                    {
                        id: 3,
                        name: 'Savage Rocha'
                    },
                    {
                        id: 4,
                        name: 'Durham Fowler'
                    },
                    {
                        id: 5,
                        name: 'Jacobson Clay'
                    },
                    {
                        id: 6,
                        name: 'Hamilton Pierce'
                    },
                    {
                        id: 7,
                        name: 'Johns Jefferson'
                    },
                    {
                        id: 8,
                        name: 'Avery Campbell'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '3651.54',
                age: 21,
                name: {
                    first: 'Ryan',
                    last: 'Bolton'
                },
                company: 'MOLTONIC',
                email: 'ryan.bolton@moltonic.biz',
                friends: [
                    {
                        id: 0,
                        name: 'Weaver Buchanan'
                    },
                    {
                        id: 1,
                        name: 'Francesca Rice'
                    },
                    {
                        id: 2,
                        name: 'Sheppard Calhoun'
                    },
                    {
                        id: 3,
                        name: 'Schmidt Murray'
                    }
                ],
                favoriteFruit: 'apple'
            },
            {
                balance: '1345.79',
                age: 21,
                name: {
                    first: 'Carey',
                    last: 'Schwartz'
                },
                company: 'UXMOX',
                email: 'carey.schwartz@uxmox.info',
                friends: [
                    {
                        id: 0,
                        name: 'Lilia Wiggins'
                    },
                    {
                        id: 1,
                        name: 'Snider Tanner'
                    },
                    {
                        id: 2,
                        name: 'Taylor Perez'
                    },
                    {
                        id: 3,
                        name: 'Raquel Castaneda'
                    },
                    {
                        id: 4,
                        name: 'Burris Mcmahon'
                    },
                    {
                        id: 5,
                        name: 'Henderson Osborn'
                    },
                    {
                        id: 6,
                        name: 'Carrillo Ortiz'
                    },
                    {
                        id: 7,
                        name: 'Herminia Puckett'
                    },
                    {
                        id: 8,
                        name: 'Shelby Ware'
                    }
                ],
                favoriteFruit: 'banana'
            },
            {
                balance: '3261.11',
                age: 30,
                name: {
                    first: 'Trevino',
                    last: 'Mullins'
                },
                company: 'TERRASYS',
                email: 'trevino.mullins@terrasys.org',
                friends: [
                    {
                        id: 0,
                        name: 'Corine Deleon'
                    },
                    {
                        id: 1,
                        name: 'Alta Walker'
                    },
                    {
                        id: 2,
                        name: 'Jeannie Santana'
                    },
                    {
                        id: 3,
                        name: 'Velazquez Oneill'
                    },
                    {
                        id: 4,
                        name: 'Perry Merrill'
                    },
                    {
                        id: 5,
                        name: 'Tabitha Mcintosh'
                    },
                    {
                        id: 6,
                        name: 'Shields Castillo'
                    }
                ],
                favoriteFruit: 'banana'
            },
            {
                balance: '1659.17',
                age: 20,
                name: {
                    first: 'Gilliam',
                    last: 'Mendez'
                },
                company: 'ZENTHALL',
                email: 'gilliam.mendez@zenthall.tv',
                friends: [
                    {
                        id: 0,
                        name: 'Nora Ratliff'
                    },
                    {
                        id: 1,
                        name: 'Simone Michael'
                    },
                    {
                        id: 2,
                        name: 'Lang Rose'
                    },
                    {
                        id: 3,
                        name: 'Priscilla Hester'
                    },
                    {
                        id: 4,
                        name: 'Stuart Barker'
                    },
                    {
                        id: 5,
                        name: 'Florine Mcintyre'
                    },
                    {
                        id: 6,
                        name: 'Karin Rosa'
                    },
                    {
                        id: 7,
                        name: 'Vinson Rutledge'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '2340.54',
                age: 32,
                name: {
                    first: 'Brewer',
                    last: 'Vargas'
                },
                company: 'QIMONK',
                email: 'brewer.vargas@qimonk.co.uk',
                friends: [
                    {
                        id: 0,
                        name: 'Tamera Sharp'
                    },
                    {
                        id: 1,
                        name: 'Jackie Parks'
                    },
                    {
                        id: 2,
                        name: 'Wanda Merritt'
                    },
                    {
                        id: 3,
                        name: 'Castillo Sloan'
                    }
                ],
                favoriteFruit: 'apple'
            },
            {
                balance: '1736.91',
                age: 24,
                name: {
                    first: 'Newman',
                    last: 'Wynn'
                },
                company: 'VISALIA',
                email: 'newman.wynn@visalia.name',
                friends: [
                    {
                        id: 0,
                        name: 'Lopez Mccarthy'
                    },
                    {
                        id: 1,
                        name: 'Melinda Diaz'
                    },
                    {
                        id: 2,
                        name: 'Silva Shepherd'
                    },
                    {
                        id: 3,
                        name: 'Claudia Contreras'
                    },
                    {
                        id: 4,
                        name: 'Jenna Golden'
                    },
                    {
                        id: 5,
                        name: 'Blair Hayden'
                    },
                    {
                        id: 6,
                        name: 'Antonia Woods'
                    },
                    {
                        id: 7,
                        name: 'Felecia Greer'
                    },
                    {
                        id: 8,
                        name: 'Sherry Howard'
                    },
                    {
                        id: 9,
                        name: 'Montgomery Cohen'
                    }
                ],
                favoriteFruit: 'apple'
            }
        ];

        function showAllEmails() {
            console.log("Электронные адреса пользователей:")
            users.forEach(user => console.log(user.email));
        }

        function showHigestFriendCount() {
            console.log("Пользователи с наибольшим количеством друзей");

            let max = Number.MIN_VALUE;

            users.forEach(user => {
                if (max < user.friends.length)
                    max = user.friends.length;
            });

            users
                .filter(user => user.friends.length == max)
                .forEach(user => console.log(user.name.first + " " + user.name.last));
        }

        function showMinMaxBalance() {
            let minBalance = Number.MAX_VALUE;
            let maxBalance = Number.MIN_VALUE;

            users.forEach(user => {
                const currentBalance = +user.balance;
                if (currentBalance > maxBalance)
                    maxBalance = currentBalance;
                else if (currentBalance < minBalance) {
                    minBalance = currentBalance;
                }
            });

            console.log("Компании пользователей с наибольшим балансом:")
            users
                .filter(user => user.balance == maxBalance)
                .forEach(user => console.log(user.company));

            console.log("Компании пользователей с наименьшим балансом:")
            users
                .filter(user => user.balance == minBalance)
                .forEach(user => console.log(user.company));
        }

        showAllEmails();
        showHigestFriendCount();
        showMinMaxBalance();
    </script>
</body>
<body>
    <pre>
        Задание:
        Используя цикл for in выведите на экран имена и значения всех строковых свойств объекта.
    </pre>
    <script>
        let user = {
            balance: '$1,250.89',
            age: 24,
            name: 'Golden Clements',
            company: 'EWAVES',
            email: 'golden.clements@ewaves.io',
            friends: 5,
            favoriteFruit: 'strawberry'
        }

        console.log("Строковые свойства объекта user");
        for (const key in user) {
            if (typeof user[key] == "string") {
                console.log(key + "=" + user[key]);
            }
        }
    </script>
</body>

<body>
    <pre>
        Задание:
        Создайте фабричный метод для создания объектов со свойствами name, price, ordered. Поменяйте код, который инициализирует массив products. 
        Воспользуйтесь фабричным методом для инициализации массива.
    </pre>
    <script>
        let products = [
            createProduct("Бумага офисная А4, 80 г/м2, 500 л", 280.25),
            createProduct("Биндеры для бумаги 51 мм", 56),
            createProduct("Ручка шариковая синяя", 12.5)
        ];

        function createProduct(name, price, order) {
            return {
                name,
                price,
                ordered: 0
            }
        }

        // цикл для получения количества покупаемых продуктов
        for (let index = 0; index < products.length; index++) {
            const name = products[index].name;
            const price = products[index].price;

            products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
        }

        // цикл для расчета общей цены купленных продуктов
        let totalPrice = 0;
        for (let index = 0; index < products.length; index++) {
            totalPrice += products[index].price * products[index].ordered;
        }

        alert(`Сумма Вашего заказа ${totalPrice}.`);

        let isFreeShipping = totalPrice > 1000;
        if (isFreeShipping) // иногда в условии используется только одна переменная.
        {
            alert("Доставка будет бесплатной.");
        }
    </script>
</body>
<body>
    <pre>
        Задание:
        Перепишите код. Сделайте фабричный метод, который будет принимать два параметра firstName и lastName и создавать объект с двумя свойствами firstName и lastName.
        Сделайте так, чтобы функция print стала методом объекта, который создается через фабричную функцию.
        Используйте shorthand методы и shorthand свойства.        
    </pre>
    <script>
        function createUser(firstName, lastName) {
            return {
                firstName,
                lastName,

                print() {
                    console.log("First Name: " + this.firstName);
                    console.log("Last Name: " + this.lastName);
                }
            };
        }

        let obj1 = createUser("Ivan", "Ivanov");
        let obj2 = createUser("Jhon", "Doe"); 

        obj1.print();
        obj2.print();
    </script>
</body>
<body>
    <pre>
        Задание:
        Реализуйте метод showMostFavoritedFruit. Метод должен отображать фрукт, который чаще всего указывали как любимый на основе данных по пользователям из массива users.
    </pre>
    <script>
        // массив сгенерирован с помощью https://next.json-generator.com/
        let users = [
            {
                balance: '1250.89',
                age: 24,
                name: {
                    first: 'Golden',
                    last: 'Clements'
                },
                company: 'EWAVES',
                email: 'golden.clements@ewaves.io',
                friends: [
                    {
                        id: 0,
                        name: 'Buchanan Austin'
                    },
                    {
                        id: 1,
                        name: 'Richmond Garrison'
                    },
                    {
                        id: 2,
                        name: 'Burns Cook'
                    },
                    {
                        id: 3,
                        name: 'Sally Mcpherson'
                    },
                    {
                        id: 4,
                        name: 'Nina Hood'
                    },
                    {
                        id: 5,
                        name: 'Rhonda Anderson'
                    },
                    {
                        id: 6,
                        name: 'Mathis Bowen'
                    },
                    {
                        id: 7,
                        name: 'Janie Carlson'
                    },
                    {
                        id: 8,
                        name: 'Brooke Reilly'
                    },
                    {
                        id: 9,
                        name: 'Peters Oliver'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '3637.94',
                age: 23,
                name: {
                    first: 'Francis',
                    last: 'Hebert'
                },
                company: 'XPLOR',
                email: 'francis.hebert@xplor.biz',
                friends: [
                    {
                        id: 0,
                        name: 'Clements Glass'
                    },
                    {
                        id: 1,
                        name: 'Gutierrez Padilla'
                    },
                    {
                        id: 2,
                        name: 'Noelle Wilkinson'
                    },
                    {
                        id: 3,
                        name: 'Kim Sampson'
                    },
                    {
                        id: 4,
                        name: 'Luz Palmer'
                    }
                ],
                favoriteFruit: 'apple'
            },
            {
                balance: '1106.44',
                age: 31,
                name: {
                    first: 'Hale',
                    last: 'Cross'
                },
                company: 'EARTHPURE',
                email: 'hale.cross@earthpure.us',
                friends: [
                    {
                        id: 0,
                        name: 'Terri Clark'
                    },
                    {
                        id: 1,
                        name: 'Marie Joyce'
                    },
                    {
                        id: 2,
                        name: 'Howell Moses'
                    },
                    {
                        id: 3,
                        name: 'Juarez Marshall'
                    },
                    {
                        id: 4,
                        name: 'Corinne Grant'
                    },
                    {
                        id: 5,
                        name: 'Chandra Ferrell'
                    },
                    {
                        id: 6,
                        name: 'Emily Kidd'
                    },
                    {
                        id: 7,
                        name: 'Claudine Pollard'
                    },
                    {
                        id: 8,
                        name: 'Walter Cooper'
                    },
                    {
                        id: 9,
                        name: 'Isabella Hays'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '2502.43',
                age: 25,
                name: {
                    first: 'Delores',
                    last: 'Sykes'
                },
                company: 'ASSITIA',
                email: 'delores.sykes@assitia.com',
                friends: [
                    {
                        id: 0,
                        name: 'Amy Fox'
                    },
                    {
                        id: 1,
                        name: 'Laurel Gaines'
                    },
                    {
                        id: 2,
                        name: 'Mcguire French'
                    },
                    {
                        id: 3,
                        name: 'Savage Rocha'
                    },
                    {
                        id: 4,
                        name: 'Durham Fowler'
                    },
                    {
                        id: 5,
                        name: 'Jacobson Clay'
                    },
                    {
                        id: 6,
                        name: 'Hamilton Pierce'
                    },
                    {
                        id: 7,
                        name: 'Johns Jefferson'
                    },
                    {
                        id: 8,
                        name: 'Avery Campbell'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '3651.54',
                age: 21,
                name: {
                    first: 'Ryan',
                    last: 'Bolton'
                },
                company: 'MOLTONIC',
                email: 'ryan.bolton@moltonic.biz',
                friends: [
                    {
                        id: 0,
                        name: 'Weaver Buchanan'
                    },
                    {
                        id: 1,
                        name: 'Francesca Rice'
                    },
                    {
                        id: 2,
                        name: 'Sheppard Calhoun'
                    },
                    {
                        id: 3,
                        name: 'Schmidt Murray'
                    }
                ],
                favoriteFruit: 'apple'
            },
            {
                balance: '1345.79',
                age: 21,
                name: {
                    first: 'Carey',
                    last: 'Schwartz'
                },
                company: 'UXMOX',
                email: 'carey.schwartz@uxmox.info',
                friends: [
                    {
                        id: 0,
                        name: 'Lilia Wiggins'
                    },
                    {
                        id: 1,
                        name: 'Snider Tanner'
                    },
                    {
                        id: 2,
                        name: 'Taylor Perez'
                    },
                    {
                        id: 3,
                        name: 'Raquel Castaneda'
                    },
                    {
                        id: 4,
                        name: 'Burris Mcmahon'
                    },
                    {
                        id: 5,
                        name: 'Henderson Osborn'
                    },
                    {
                        id: 6,
                        name: 'Carrillo Ortiz'
                    },
                    {
                        id: 7,
                        name: 'Herminia Puckett'
                    },
                    {
                        id: 8,
                        name: 'Shelby Ware'
                    }
                ],
                favoriteFruit: 'banana'
            },
            {
                balance: '3261.11',
                age: 30,
                name: {
                    first: 'Trevino',
                    last: 'Mullins'
                },
                company: 'TERRASYS',
                email: 'trevino.mullins@terrasys.org',
                friends: [
                    {
                        id: 0,
                        name: 'Corine Deleon'
                    },
                    {
                        id: 1,
                        name: 'Alta Walker'
                    },
                    {
                        id: 2,
                        name: 'Jeannie Santana'
                    },
                    {
                        id: 3,
                        name: 'Velazquez Oneill'
                    },
                    {
                        id: 4,
                        name: 'Perry Merrill'
                    },
                    {
                        id: 5,
                        name: 'Tabitha Mcintosh'
                    },
                    {
                        id: 6,
                        name: 'Shields Castillo'
                    }
                ],
                favoriteFruit: 'banana'
            },
            {
                balance: '1659.17',
                age: 20,
                name: {
                    first: 'Gilliam',
                    last: 'Mendez'
                },
                company: 'ZENTHALL',
                email: 'gilliam.mendez@zenthall.tv',
                friends: [
                    {
                        id: 0,
                        name: 'Nora Ratliff'
                    },
                    {
                        id: 1,
                        name: 'Simone Michael'
                    },
                    {
                        id: 2,
                        name: 'Lang Rose'
                    },
                    {
                        id: 3,
                        name: 'Priscilla Hester'
                    },
                    {
                        id: 4,
                        name: 'Stuart Barker'
                    },
                    {
                        id: 5,
                        name: 'Florine Mcintyre'
                    },
                    {
                        id: 6,
                        name: 'Karin Rosa'
                    },
                    {
                        id: 7,
                        name: 'Vinson Rutledge'
                    }
                ],
                favoriteFruit: 'strawberry'
            },
            {
                balance: '2340.54',
                age: 32,
                name: {
                    first: 'Brewer',
                    last: 'Vargas'
                },
                company: 'QIMONK',
                email: 'brewer.vargas@qimonk.co.uk',
                friends: [
                    {
                        id: 0,
                        name: 'Tamera Sharp'
                    },
                    {
                        id: 1,
                        name: 'Jackie Parks'
                    },
                    {
                        id: 2,
                        name: 'Wanda Merritt'
                    },
                    {
                        id: 3,
                        name: 'Castillo Sloan'
                    }
                ],
                favoriteFruit: 'apple'
            },
            {
                balance: '1736.91',
                age: 24,
                name: {
                    first: 'Newman',
                    last: 'Wynn'
                },
                company: 'VISALIA',
                email: 'newman.wynn@visalia.name',
                friends: [
                    {
                        id: 0,
                        name: 'Lopez Mccarthy'
                    },
                    {
                        id: 1,
                        name: 'Melinda Diaz'
                    },
                    {
                        id: 2,
                        name: 'Silva Shepherd'
                    },
                    {
                        id: 3,
                        name: 'Claudia Contreras'
                    },
                    {
                        id: 4,
                        name: 'Jenna Golden'
                    },
                    {
                        id: 5,
                        name: 'Blair Hayden'
                    },
                    {
                        id: 6,
                        name: 'Antonia Woods'
                    },
                    {
                        id: 7,
                        name: 'Felecia Greer'
                    },
                    {
                        id: 8,
                        name: 'Sherry Howard'
                    },
                    {
                        id: 9,
                        name: 'Montgomery Cohen'
                    }
                ],
                favoriteFruit: 'apple'
            }
        ];

        function showAllEmails() {
            console.log("Электронные адреса пользователей:")
            users.forEach(user => console.log(user.email));
        }

        // метод для отображения пользователя из массива с наибольшим количеством друзей
        function showHigestFriendCount() {
            console.log("Пользователи с наибольшим количеством друзей");

            // в начале поиска пользователя с максимальным количеством друзей устанавливаем переменной max минимально возможное
            // значение для переменной типа number
            let max = Number.MIN_VALUE;

            // Для каждого элемента массива users вызываем функцию, которая передается как параметр метода forEach
            // текущий элемент массива передается в функцию как параметр user
            users.forEach(user => {
                if (max < user.friends.length) // если у текущего пользователя друзей больше чем значение переменной max меняем значение переменной
                    max = user.friends.length;
            }); // в итоге в переменной max будет находится значение максимального количества друзей среди пользователей описанных элементами массива

            users
                .filter(user => user.friends.length == max) // выбираем пользователей в новый массив у которых количество друзей соответствует значению переменной max
                .forEach(user => console.log(user.name.first + " " + user.name.last)); // выводим всех пользователей с максимальным количеством друзей
        }

        // функция для отображения компании пользователя с максимальным и минимальным балансом
        function showMinMaxBalance() {
            // переменные для хранения максимального и минимального значения баланса
            let minBalance = Number.MAX_VALUE;
            let maxBalance = Number.MIN_VALUE;

            // Проход по всем пользователям для того чтобы определить значения переменных определенных ранее
            users.forEach(user => {
                const currentBalance = +user.balance;
                if (currentBalance > maxBalance)
                    maxBalance = currentBalance;
                else if (currentBalance < minBalance) {
                    minBalance = currentBalance;
                }
            });

            console.log("Компании пользователей с наибольшим балансом:")
            users
                .filter(user => user.balance == maxBalance) // выборка из массива пользователей, значение свойства balance которых соответствует значению переменной maxBalance
                .forEach(user => console.log(user.company)); // вывод компании в которой работает пользователь

            // тоже самео для минимального баланса
            console.log("Компании пользователей с наименьшим балансом:")
            users
                .filter(user => user.balance == minBalance)
                .forEach(user => console.log(user.company));
        }

        // отображение самого популярного фрукта (того который встречается чаще всего среди пользователей в свойстве favoriteFruit)
        function showMostFavoritedFruit() {
            let counters = {}; // создаем пустой объект, данный объект будет использоваться для подсчёта количества популярных фруктов
            // имя свойства соотвествует имени фрукта, значение свойства, количество раз сколько этот фрукт встречался в популярных

            // для каждого элемента массива выполняем указанную функцию
            users.forEach(user => {
                // если свойсва с именем, например, counters["apple"] есть увеличиваем его значение
                if (counters[user.favoriteFruit]) {
                    counters[user.favoriteFruit]++;
                }
                else { // если свойства нет создаем его присваивая значение 1
                    counters[user.favoriteFruit] = 1;
                }
            });

            let maxCount = Number.MIN_VALUE;
            let favoriteFruit = "";
            for (const key in counters) { // цикл for in позволяет перебрать все свойства которые есть в объетке
                if(counters[key] > maxCount) {
                    maxCount = counters[key]; // запоминаем максимальное значение
                    favoriteFruit = key; // и запоминаем название фрукта, который был связан с этим максимальным значением
                }
            }

            // после завершения цикла в переменной favoriteFruit 
            console.log(favoriteFruit + " чаще всего указан как любимый фрукт")
        }

        // запуск методов определенных ранее
        showAllEmails();
        showHigestFriendCount();
        showMinMaxBalance();
        showMostFavoritedFruit();
    </script>
</body>
<body>
    <pre>
        Задание:
        Перепишите код так, чтобы метод print использовал контекст и поведение кода при этом не поменялось.      
    </pre>
    <script>
        let obj1 = {
            firstName: "Ivan",
            lastName: "Ivanov",

            print: function (obj) {
                console.log("First Name: " + this.firstName);
                console.log("Last Name: " + this.lastName);
            }
        };

        obj1.print();
    </script>
</body>
