console.log("Задание 1:")
var a;
for(a=0; a<=10; a++){
    if(a%2==0){
        console.log(a);
    }
}

console.log("Задание 2:")
var i, sum;
i=1;
sum=0;
while(sum<10){
    if(i%2==0){
        console.log(i);
        sum++;
    }
    i++;
}

console.log("Задание 3:")
let userPass = '';
let currentPass = '.';
do {
    userPass = prompt("Введите пароль");
} 
while (userPass != currentPass);
console.log("Вы авторизованы");

console.log("Задание 4:")
var k;
for(k=0; k<=10; k++){
    if(k%2==0){
        console.log(k);
    }
}

console.log("Задание 5:")
let x=1
let n = prompt("Введите n:");
do {
    console.log("*");
    x++;
} while (x<=n);