//1
let str_one = `aaa@bbb@ccc`
str_one = str_one.replace(`@`, `!`).replace(`@`, `!`)
console.log(str_one);
//2
let str_two = `HELLOWORLD`
str_two = str_two[0].toUpperCase() +
    str_two.slice(1, 5).toLowerCase() + ` ` +
    str_two.slice(5, 10).toLowerCase(),
    console.log(str_two);
//3
let s = `not JS`
let str_three = `HELLO  is it HTML`
str_three = str_three.slice(0, 11) + s
console.log(str_three);
//4
let a = prompt(`имя `)
a = a.trim().charAt(0).toUpperCase() + a.slice(1, 1000)
console.log(a);
//5
let random = Math.floor(Math.random() * 100)
console.log(random);
let getName = `Lex Luter has a big suit`
getName = getName.slice(11, 12).toUpperCase() +
    getName.slice(0, 1).toLowerCase() +
    getName.slice(1, 2) +
    getName.slice(2, 3)
console.log(getName);