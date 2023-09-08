const object = [];
        let a = 10;
        for (let i = 1; i <= a; i++) {
            
            let name = prompt(`Введите имя человека с id ${i}`);
            let age = +prompt(`Введите возраст человека с id ${i}`);

            const user = { 
                name: name, 
                age: age }
                object.push(user);
        }
 
        let b = "";
        for (let i = 1; i <= a; i++) {
            let user = object[i - 1];
            b += `Пользователь ${i}
Имя ${user.name}
Возраст ${user.age}

`;
        }

        console.log(b);



//----------------------------------------------




let objDelivery = receipt();

let delivery = 9000;
let sum = delivery;
let array = [];

for (let key in objDelivery) {
    array.push(`${key} ${objDelivery[key].info}`);
    sum += objDelivery[key].price;
}

console.log(`Вы заказали ${array}. Общая стоимость ${sum}сумм с доставкой (${delivery})`);