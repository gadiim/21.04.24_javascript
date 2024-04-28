// // 1. Створити об'єкт project. У нього є назва, наприклад FaceBook. У нього є developer, у якого є ім'я, 
// //прізвище та адреса, а у адреси є країна і місто.
// // За допомогою деструктуризації витягнути країну і місто.

// const LegBook = {
//   developer : { 
//     firstName: "developer_firstName",
//     lastName: "developer_lastName"
//   },
//   adress : { 
//     state: "adress_state",
//     city: "adress_city"
//   }
// };
// const {adress : {state, city}} = LegBook;
// console.log("state:\t" + state);
// console.log("city:\t" + city);

// // 2. Є дані у такому форматі: Ivan;Ivanov;1990;ivanov@gmail.com. Витягнути електронну адресу та рік 
// //народження за допомогою деструктуризації.

// const data = "Ivan;Ivanov;1990;ivanov@gmail.com";

// const [firstName, lastName, year, email] = data.split(";");

// console.log("email:\t" + email);
// console.log("year:\t" + year);

// // 3. У Map помістити 10 слів англо-українських. У якості ключа англійське слово, у якості значення - українське.
// // Наприклад: mother->мама. Користувач вводить слово англійською, програма видає результат українською.

// const dict = new Map();
// dict.set('apple', 'яблуко');
// dict.set('cat', 'кіт');
// dict.set('dog', 'пес');
// dict.set('book', 'книга');
// dict.set('car', 'машина');
// dict.set('tree', 'дерево');
// dict.set('flower', 'квітка');
// dict.set('computer', 'коп\'ютер');
// dict.set('music', 'музика');
// dict.set('house', 'будинок');
// console.log(dict);
// console.log(dict.get('apple'));


// // 4. Створити об'єкт телефон за допомогою функції конструктора, у нього є бренд, модель, ціна, колір.
// // Створити три об'єкти телефонів. Наприклад: бренд samsung, модель x100, ціна 1000грн, колір червоний.
// // При перетворенні(преобразуванні) до рядка потрібно відобразити інформацію: samsung x100 1000грн.

// function Phone(brand, model, price, color) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.color = color;
  
//   this.toString = function() {
//       return `${this.brand} ${this.model} ${this.price} UAH`;
//   }
// }

// const phone_1 = new Phone("Samsung", "x100", 1000, "red");
// const phone_2 = new Phone("Samsung", "x200", 2000, "not red");
// const phone_3 = new Phone("Samsung", "x300", 800, "not red");

// console.log(phone_1.toString());

// // 5. Створити функцію, яка приймає будь-яку кількість чисел і обчислює середнє арифметичне, 
// //повертаючи його як результат. Викликати цю функцію з трьома аргументами та з масивом, 
// //в якому три значення.

// function sum(...args) {
//   const res = args.reduce((accum, e) => accum + e);
//   console.log(res/args.length);
// }
// sum(1, 2, 3);

// // 6. Є масив об'єктів User. У них є ім'я та прізвище. Створити новий масив користувачів на основі старого,
// // додавши при цьому до кожного об'єкту властивість isSelected: false.

// const users = [
//   { firstName: "U.", lastName: "Ser" },
//   { firstName: "Us.", lastName: "Er" },
//   { firstName: "Use.", lastName: "R" }
// ];
// let isSelected = false;
// const new_users = users.map(user => {
//   return { ...user, isSelected };
// });

// console.log(new_users);

// // 7. При натисканні на кнопку починає працювати таймер від 5 до 1. 
// //На екрані повинні відображатися значення таймера (5, 4, 3, 2, 1).
// // Після того як таймер зупинився - екран забарвлюється червоним.
// // Повторно запустити таймер можна лише після того, як він закінчився. 
// //При повторному запуску лічильник починає з початку і екран знову білий.

// let count = 0;
// const btnStart = document.getElementById('btnStart');
// const counter = document.getElementById('counter');
// let interval = null;
// function stop() {
//   clearInterval(interval);
//   interval = null;
//   document.body.style.backgroundColor = 'red';
//   btnStart.innerText = 'START';
//   btnStart.style.backgroundColor = 'dodgerblue';
//   btnStart.style.fontWeight = 500;
//   btnStart.disabled = false;
// };
// btnStart.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'white';
//   count = 0;
//   counter.innerText = count;
//   btnStart.disabled = true;
//   btnStart.innerText = 'counting...';
//   btnStart.style.backgroundColor = 'lightgrey';
//   btnStart.style.fontWeight = 100;
//   if (interval === null) {
//     interval = setInterval(() => {
//       counter.innerText = ++count;
//       if (count === 5) {
//         stop();
//       }
//     }, 1000);
//   }
// });

// // 8. Створити гру хрестики-нолики. В одне й те ж місце неможливо повторно встановити значення. 
// //Під час гри відображати чий хід. В кінці гри відобразити переможця.

//   let turnCounter = 0;

//   const statusDisplay = document.getElementById('statusDisplay');

//   const buttons = {};
//   for (let i = 0; i < 9; i++) {
//     buttons[i] = document.getElementById(`btn${i + 1}`);
//   }
  
//   let boards = {};
//   for (let i = 0; i < 9; i++) {
//     boards[i] = '';
//   }

//   function checkWin(side) {
//     let win = false;
//     if (boards[0] === side && boards[1] === side && boards[2] === side) {
//       buttons[0].style.color = 'red';
//       buttons[1].style.color = 'red';
//       buttons[2].style.color = 'red';
//       win = true;
//     }
//     else if (boards[3] === side && boards[4] === side && boards[5] === side) {
//       buttons[3].style.color = 'red';
//       buttons[4].style.color = 'red';
//       buttons[5].style.color = 'red';
//       win = true;
//     }
//     else if (boards[6] === side && boards[7] === side && boards[8] === side) {
//       buttons[6].style.color = 'red';
//       buttons[7].style.color = 'red';
//       buttons[8].style.color = 'red';
//       win = true;
//     }
//     else if (boards[0] === side && boards[3] === side && boards[6] === side) {
//       buttons[0].style.color = 'red';
//       buttons[3].style.color = 'red';
//       buttons[6].style.color = 'red';
//       win = true;
//     }
//     else if (boards[1] === side && boards[4] === side && boards[7] === side) {
//       buttons[1].style.color = 'red';
//       buttons[4].style.color = 'red';
//       buttons[7].style.color = 'red';
//       win = true;
//     }
//     else if (boards[2] === side && boards[5] === side && boards[8] === side) {
//       buttons[2].style.color = 'red';
//       buttons[5].style.color = 'red';
//       buttons[8].style.color = 'red';
//       win = true;
//     }
//     else if (boards[0] === side && boards[4] === side && boards[8] === side) {
//       buttons[0].style.color = 'red';
//       buttons[4].style.color = 'red';
//       buttons[8].style.color = 'red';
//       win = true;
//     }
//     else if (boards[2] === side && boards[4] === side && boards[6] === side) {
//       buttons[2].style.color = 'red';
//       buttons[4].style.color = 'red';
//       buttons[6].style.color = 'red';
//       win = true;
//     }
//     if (win) {
//       for (let i = 0; i < 9; i++) {
//         buttons[i].disabled = true;
//       }
//       statusDisplay.innerText = side + " won!";
//     }
//   }

//   function toClick(btn, board) {
//     btn.addEventListener('click', () => {
//       if (turnCounter % 2 === 0) {
//         btn.innerText = 'X';
//         boards[board] = 'X';
//         statusDisplay.innerText = '0 turn';
//       } else {
//         btn.innerText = '0';
//         boards[board] = '0';
//         statusDisplay.innerText = 'X turn';
//       }
//       turnCounter++;
//       btn.disabled = true;
//       checkWin("X");
//       checkWin("0");
//     });
//   }
  
//   for (let i = 0; i < 9; i++) {
//     toClick(buttons[i], i);
//   }


