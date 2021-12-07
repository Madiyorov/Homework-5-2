    /* ДЗ-№2 */

let a = +prompt('Сколько примеров вы хотите решить?');

while (a == '' || isNaN(a)) {
    a =  +prompt('Введите число а не текст')  
}

function rand(max){
    return Math.floor(Math.random() * max + 1);
}
let max = 20;
 
for (i = 0; i < a; i++) {
    let b = rand(max);
    let c = rand(max);
    let e = Math.floor(Math.random() * 4 + 1)
 
    if (e == 1) {
        sum = b + c;
        d = +prompt("Дайте правильный ответ:" + b + "+" + c + "=");
    } else if (e == 2) {
        sum = b - c;
        d = +prompt("Дайте правильный ответ:" + b + "-" + c + "=");
    } else if (e == 3) {
        sum = b * c;
        d = +prompt("Дайте правильный ответ:" + b + "*" + c + "=");
    } else if (e == 4) {
        sum = b / c;
        d = +prompt("Дайте правильный ответ:" + b + "/" + c + "=");
    }
 
    if (sum == d){
        console.log("Ваш ответ верный - " + sum);
    } else {
        console.log("Ваш ответ не верный - " + d + "!" + " Верный ответ - " + sum + "!");
    }
}