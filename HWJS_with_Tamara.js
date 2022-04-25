// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_2=18, 
    age_3=60;
let value;

const checkage = function (value){
if (value<age_2)
    {console.log("You don’t have access cause your age is " + value +['.'] + " It's less then " +  age_2+['.']);
}
else if (value>=  age_2, value <  age_3) 
    {console.log("Welcome !");
}
else if(value > age_3)
{console.log("Keep calm and look Culture channel");
}

else {console.log ("Technical work");
}
};
checkage (17);
checkage (18);
checkage (61);
checkage ('cat');
// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age_2=18, 
    age_3=60;
let value;

const checkage = function (value){
if (typeof(value) != "number"){
    console.log("Eror")
}
else if (value<age_2)
{console.log("You don’t have access cause your age is " + value +['.'] + " It's less then " +  age_2+['.']);
}
else if (value>=  age_2, value <  age_3) 
{console.log("Welcome !");
}
else if(value > age_3)
{console.log("Keep calm and look Culture channel");
}

else {console.log ("Technical work");
}
};
checkage (17);
checkage (18);
checkage (61);
checkage ('cat');
    
// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age_2=18, 
    age_3=60;
let value;

const checkage = function (value){
if (+value<age_2){
console.log("You don’t have access cause your age is " + +value +['.'] + " It's less then " +  age_2+['.']);
}
else if (+value>=  age_2, +value <  age_3) 
{console.log("Welcome !");
}
else if(+value > age_3)
{console.log("Keep calm and look Culture channel");
}

else {console.log ("Technical work");
}
};
checkage (17);
checkage (18);
checkage (61);
checkage ('cat');


// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_2=18, 
    age_3=60;
let age = prompt("Please, enter your age ");
let value= age
for (var i=0, i<5;i++)
const checkage = function (value){
if (+value<age_2){
alert("You don’t have access cause your age is " + +value +['.'] + " It's less then " +  age_2+['.']);
}
else if (+value>=  age_2, +value <  age_3) 
{alert("Welcome !");
}
else if(+value > age_3)
{alert("Keep calm and look Culture channel");
}

else {alert("Error!Technical work");
}
};
checkage(value);
alert("Thanks for visiting us!");







