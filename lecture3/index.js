// домашка 
const pinCodes = ["1111", "5678", "1234", "9999"];
const myPin = "1234";

for(const pinCode of pinCodes){
    if (pinCode === myPin){
        console.log("Пин-код найден!");
        break;
    }

    console.log("Неверный пин: " + pinCode)
}







//test changing file


// const files = ["cat.jpg", "dog.png", "document.pdf", "virus.exe"];

// for(const file of files){
//     if (file === "dog.png"){
//         console.log("Пропускаем данную картинку");
//         continue;
//     }

//     if(file === "virus.exe") {
//         console.log("Virus nashli pizda");
//         break;
//     }

//     console.log('Файл проверен: ' + file)
// }

// files.push("music.mp3");


// Новая запись
// for (const file of files){
//     console.log(file)

//Старая запись
    // for (let i = 0; i < files.length; i++) {
    //     console.log(files[i])
    // }


// console.log(files.length);
// console.log(files[3]);



// let fuel =100;

// while(fuel >0) {
//     console.log("Поехали " + "Топливо осталось: " + fuel);
//     fuel -= 10; //same as fuel = fuel - 10;
// }

// console.log("Приехали");



// //for (старт, финиш, шаг);

// for (let i = 1; i <= 5; i++) {
//     console.log("Отжимание номер: " + i)
// }

