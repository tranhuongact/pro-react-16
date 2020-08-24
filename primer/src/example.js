console.log("This is example file")
console.log("hehe")

const myFunc1 = function () {
    console.log("This statement is inside the function")
}
console.log("This statement is outside the function")
myFunc1()

function myFunc2() {
    console.log("This statement in the function 2")
}
console.log("This statement out the function 2")
myFunc2()

function myFunc3(name, weather) {
    console.log("Hello " + name)
    console.log("It is " + weather + " today.")
}
myFunc3("Huong", "raining")

function myFunc4(name, weather = "sunny") {
    console.log("Hello " + name)
    console.log("It is " + weather + " today.")
}
myFunc4("Diem")
myFunc4("Huong", "raining")

function myFunc5(name, day, ...extraArgs) {
    console.log("My name is " + name)
    console.log("Today is " + day)
    extraArgs.forEach(ele => {
        console.log("Extra arg: " + ele)
    });
}
myFunc5("Huong", "Tuesday", "one", "two")

function func(nameFunc) {
    return ("Hello " + nameFunc())
}
function printName(nameFunc, printFunc) {
    printFunc(func(nameFunc))
}
printName(function () { return "Diem Huong" }, console.log)

const func1 = (nameFunc) => ("Hello " + nameFunc())
const printName1 = (nameFunc, printFunc) => printFunc(func1(nameFunc))
printName1(() => "Hahaha", console.log)

const firstVal = 5;
const secondVal = "5";
if (firstVal == secondVal) {
    console.log("== They are the same");
} else {
    console.log("== They are NOT the same");
}
//nên sử dụng === hơn vì với == thì nó phải ép kiểu các toán hạng về cùng 1 kiểu rồi kiểm tra giá trị
// còn === thì kiểm tra cả kiểu dữ liệu và giá trị các toán hạng
if (firstVal === secondVal) {
    console.log("=== They are the same");
} else {
    console.log("=== They are NOT the same");
}

console.log(5 + 10)        //15
console.log(5 + "10")      //510
console.log(5 + 2 + "10")  //710
console.log("5" + 2 + 10)  //5210
console.log("5" + "10")    //510

let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;
console.log(myArray)
//thay vì khai báo mảng như myArray thì nên khai báo như myArray1 
let myArray1 = [100, "Adam", true];
console.log(myArray1)

let myArray2 = [100, "Adam", true];
myArray2[0] = "Tuesday";
console.log(myArray2)
myArray2.forEach((value, index) => console.log(`Index ${index}: ${value}`));

const myArray3 = ["Tran", "Diem", "Huong", 897, ...myArray1]
myArray3.forEach((value, index) => console.log(`Index ${index}: ${value}`))

const arr1 = ["Tran", "Huong", 108]
const arr2 = [2020, "KMA"]
console.log("Concat: ", arr1.concat(arr2))
console.log("Join: ", arr1.join(arr2))
console.log("Pop: ", arr1.pop())
console.log("Shift: ", arr1.shift())
console.log("Push: ", arr1.push("Tran"))
console.log("Reverse: ", arr1.reverse())

const products = [
    { name: 'a', price: 10, stock: 10 },
    { name: 'b', price: 20, stock: 20 },
    { name: 'c', price: 30, stock: 0 },
    { name: 'd', price: 40, stock: 30 },
]

const totalValue = products.filter(item => item.stock > 0)
    // .reduce((prev, item) => {
    //     console.log("Prev: ", prev)
    //     console.log("Item: ", item)
    //     return prev + (item.price * item.stock), 0
    // })
    .reduce((prev, item) => prev + (item.price * item.stock), 0)

console.log(`TotalValue = ${totalValue.toFixed(2)}`)