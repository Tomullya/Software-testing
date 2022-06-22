// Напишите валидационный скрипт используя функции 

// 1. Скрипт должен на вход принимать строку.
// // 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// // 3. Минимум 5 символов в строке
// // 4. Максимум 64 символа в строке
// // 5. В строке должны быть буквы
// // 7. Должна быть хотя бы одна цифра
// // 6. Должна быть хотя бы одна буква в верхнем регистре
// // 8. Должна быть хотя бы одна @
// // 9. Строка не должна быть пустой

let message;

const check_message = function (message)
{
    if(typeof(message)=="string"){
        console.log("Message type is string!You're right!")
    }
    else{console.log("Your message is not a string!")};
    
    if(message.length >=5 && message.length <=64){        
    console.log("Number of characters is Ok!")}
    else{console.log("Please, use number of characters from 5 till 64!")
        };
    if( /[a-z]/.test(message) && /[0-9]/.test(message))
    console.log("OK!Message has letters and numbers!");
    else {        
    console.log("Oh,no! Something is wrong!Check your message!");}

    if (/[A-Z]/.test(message)){
    console.log("Good!Message has a letter in upper register")}
    else {console.log("Message hasn't any letter in upper register")};
    if (/@/.test(message))
    console.log("Good! You have @!")
    else {console.log("Message hasn't @ !Please, add @!")};
    
    if (message != null && message != undefined){
    console.log("Message is full of symbols!")
    }else {
    console.log("Message is empty!")};
    }

check_message ("Please, enter your email in like 1225454@mail.ru");




































