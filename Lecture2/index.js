let totalPrice = 5000;
let accountBalance = 4000;
const isVip = false;

if (isVip === true){
    totalPrice = totalPrice - totalPrice/10
}

console.log(totalPrice)

if (accountBalance >= totalPrice){
    console.log('"Успешно! Покупка сделана".')
} else{
    console.log("Недостаточно средств")
}






//const serverPort = 3000;
//serverPort = 2000;

//const won't change but with let there is room to change information in variable
//let status = "Ожидание";
//console.log(status) 
//status = "Оплата прошла успешно"
//console.log(status)

//concst strtbs = 14 + '18';
//will be printed 1418

// const age = "18";

//if (age >= 18) {
//    console.log("Доступ разрешен")
//} else{
//    console.log("иди домой")
//}

//difference between == and ===

// if (age == 18) {
//     console.log("Доступ разрешен")
// } else{
//     console.log("иди домой")
// }