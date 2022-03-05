
let task2 = document.getElementById('task2');
let task3 = document.getElementById('task3');
let task4 = document.getElementById('task4');
let task5 = document.getElementById('task5');
let task6 = document.getElementById('task6');
let task7 = document.getElementById('task7');
let task8 = document.getElementById('task8');
let task9 = document.getElementById('task9');
let task10 = document.getElementById('task10');
let task11 = document.getElementById('task11');
let task12 = document.getElementById('task12');
let task13 = document.getElementById('task13');
let task14 = document.getElementById('task14');
let task15 = document.getElementById('task15');
let task16 = document.getElementById('task16');
let task17 = document.getElementById('task17');
let task18 = document.getElementById('task18');
let task19 = document.getElementById('task19');
let task20 = document.getElementById('task20');
let task21 = document.getElementById('task21');
let task22 = document.getElementById('task22');
let task23 = document.getElementById('task23');
let task26 = document.getElementById('task26');
let task27 = document.getElementById('task27');
let task28 = document.getElementById('task28');
let task29 = document.getElementById('task29');
let task30 = document.getElementById('task30')

// Task 1
var cl = console.log;

const inputNum = document.getElementById('inputNum');
const btn = document.getElementById('btn');

const onClickHandler = () => {
    if (inputNum.value % 2 === 0) {
        alert("Given number is even number")
    } else {
        alert("Given number is Odd number");
    }
}
if (btn !== null) {
    btn.addEventListener('click', onClickHandler);
}

//Task-2
if (task2) {
    const numOne = document.getElementById('numOne');
    const numTwo = document.getElementById('numTwo');
    const calciBtn = document.getElementById('calciBtn');

    const onClickCalciHandler = () => {
        cl("rajat")
        let add = Number(numOne.value) + Number(numTwo.value);

        let substraction = numOne.value - numTwo.value;
        let multiple = numOne.value * numTwo.value;
        let divsn = numOne.value / numTwo.value;

        cl(`Addition of ${numOne.value} and ${numTwo.value} is ${add} `)
        cl(`substraction of ${numOne.value} and ${numTwo.value} is ${substraction} `)
        cl(`Multiplication of ${numOne.value} and ${numTwo.value} is ${multiple} `)
        cl(`Division of ${numOne.value} and ${numTwo.value} is ${divsn} `)

    }
    calciBtn.addEventListener('click', onClickCalciHandler);
}
// Task-3

if (task3) {

    const firstNum = document.getElementById('firstNum');
    const secondNum = document.getElementById('secondNum');
    const btnRandome = document.getElementById('btnRandome');
    const onClickRandomeHandler = () => {
        let result = Number(firstNum.value) + Math.floor(Math.random() * (Number(secondNum.value) - Number(firstNum.value) + 1))
        cl(result);
        alert(result);
    }
    btnRandome.addEventListener('click', onClickRandomeHandler);
}

if (task4) {
    const fnum = document.getElementById('fnum');
    const Snum = document.getElementById('Snum');
    const Tnum = document.getElementById('Tnum');
    const btn = document.getElementById('btn');

    const onClickHandler = () => {
        let maxNum = Math.max(Number(fnum.value), Number(Snum.value), Number(Tnum.value))
        let minNum = Math.min(Number(fnum.value), Number(Snum.value), Number(Tnum.value))
        alert(`highest number is ${maxNum} and lowest number is ${minNum}`);
    }
    btn.addEventListener('click', onClickHandler);
}
//task 5
if (task5) {
    const inputstr = document.getElementById('inputstr');
    const btn = document.getElementById('btn');

    const onclickhandler = () => {
        let input = inputstr.value.slice(3, -3)

        alert(input)
    }
    btn.addEventListener('click', onclickhandler);
}
//task 6

if (task6) {

    let cl = console.log;
    const btn = document.getElementById('btn');

    const calculate_Age = () => {
        let fName = (document.getElementById('fname').value);
        let lName = (document.getElementById('lname').value);
        let birthDate = new Date(document.getElementById('birthYear').value);
        let birth_year = birthDate.getFullYear();

        let today = new Date();
        let today_year = today.getFullYear();
        let output = today_year - birth_year;

        alert("Age of " + fName + " " + lName + " is " + output + ".");
    };
    btn.addEventListener('click', calculate_Age);
}

//task 7
if (task7) {
    const date = new Date(1989, 05, 11);
    const getd = (date.getDay());

    if (getd === 6 || getd == 0) {
        alert(" It is a weekend")
    } else {
        alert("It's a week day")

    }
}

//task 8

if (task8) {

    let inputCap = document.getElementById('inputCap');
    const btn = document.getElementById('btn');

    const Onclickhandler = () => {

        let result = inputCap.value.charAt(0).toUpperCase() + inputCap.value.slice(1);
        alert(result)
    }

    btn.addEventListener('click', Onclickhandler)
}
//task 9
if (task9) {
    var cl = console.log;

    const d1 = new Date();
    const d2 = new Date(2021, 10, 18);

    const diffwrtdays = d2.getDay() - d1.getDay()
    const diffwrtmonths = (d2.getMonth() - d1.getMonth()) * 30;
    const diffwrtyears = (d2.getFullYear() - d1.getFullYear()) * 365;
    const totaldiff = diffwrtdays + diffwrtmonths + diffwrtyears
    alert("the differance between mention dates are" + totaldiff)

}

//task 11

if (task11) {

    let inputNum = document.getElementById('inputNum');
    let btn = document.getElementById('btn');

    const onclickHandler = () => {
        for (var i = 0; i < 5; i++) {
            inputNum.value++
            cl(inputNum.value);
        }
    }

    btn.addEventListener('click', onclickHandler);
}

//task 12

if (task12) {
    let inputNum1 = document.getElementById('inputNum1');
    let inputNum2 = document.getElementById('inputNum2');
    let inputNum3 = document.getElementById('inputNum3');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');

    const onclickOneHandler = () => {
        let seconds = inputNum1.value * 60;
        cl(`${inputNum1.value} minuts is equal to ${seconds}`)
    }
    const onclickTwoHandler = () => {
        let minutsmintosec = inputNum2.value * 60;
        cl(`${inputNum2.value} minuts is equal to ${minutsmintosec}`)
    }
    const onclickThreeHandler = () => {
        let mintosec = inputNum3.value / 60;
        cl(`${inputNum3.value} minuts is equal to ${mintosec}`)
    }


    btn1.addEventListener('click', onclickOneHandler);
    btn2.addEventListener('click', onclickTwoHandler);
    btn3.addEventListener('click', onclickThreeHandler);
}

//task 13

if (task13) {

    const btns = Array.from(document.querySelectorAll('.btn'));
    let score = 0;

    const onclickHandler = (e) => {
        let flag = e.target.className;
        cl(flag)
        cl(flag.indexOf('decrease'))
        if (flag.indexOf('decrease') != -1) {
            score--;
            cl(score);
        } else if (flag.indexOf('increase') != -1) {
            score++;
            cl(score);
        }
        document.getElementById('count').innerHTML = score;
    }

    btns.forEach((btn) => {
        btn.addEventListener('click', onclickHandler)
    })

}

//task 14

if (task14) {
    const btn = document.querySelector('.btn');

    const onclickHandler = () => {
        cl(add(3, 4))
    }
    function add(num1, num2) {
        return num1 + num2;
    }



    btn.addEventListener('click', onclickHandler);
}

if (task15) {
    const body = document.querySelector('body')
    const btn1 = document.getElementById('orangeC')
    const btn2 = document.getElementById('greenC')
    const btn3 = document.getElementById('blueC')

    const onclickOrangeHandler = (e) => {
        body.style.backgroundColor = e.target.value;
    }
    const onclickGreenHandler = (e) => {
        body.style.backgroundColor = e.target.value;
    }
    const onclickBlueHandler = (e) => {
        body.style.backgroundColor = e.target.value;

    }
    btn1.addEventListener('click', onclickOrangeHandler);
    btn2.addEventListener('click', onclickGreenHandler);
    btn3.addEventListener('click', onclickBlueHandler);
}

//task 16

if (task16) {

    var arr = [77, 60, 32, 1, 10, 3, 12, 32]
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);

    alert(`lowest number from array is ${min}, and highest number from array is ${max}`)
}

//task 17
if (task17) {
    let array = [31, 12, 13, 24, 51, 71];

    let firstArray = array[0]
    cl(firstArray)
    let lastArray = array[array.length - 1]
    cl(lastArray)
    alert(`first value of array is ${firstArray} and last value of array is ${lastArray} `)
}

//task 18
if (task18) {


    let inputNum = document.getElementById('inputNum');
    let btn = document.getElementById('btn');

    let onClickbtnHandler = () => {
        if (Number(inputNum.value) >= 50 && Number(inputNum.value) <= 100) {
            alert(`${inputNum.value} is between 50 and 100`)
        } else (Number(inputNum.value) <= 50 && Number(inputNum.value) >= 100)
        alert(`${inputNum.value} is not between 50 and 100`)
    }

    btn.addEventListener('click', onClickbtnHandler)
}

//task 19

if (task19) {

    const btns = Array.from(document.querySelectorAll('.btn'));
    let div = document.getElementById('para');

    const onclickHandler = (e) => {
        let flag = e.target.className;

        if (flag.indexOf('decrease') != -1) {
            let currentFont = window.getComputedStyle(div).fontSize;
            div.style.fontSize = currentFont.replace("px", "") - 1 + "px"
            cl(currentFont.replace("px", "") - 1 + "px")
        } else if (flag.indexOf('increase') != -1) {
            let currentFont = window.getComputedStyle(div).fontSize;
            div.style.fontSize = (Number(currentFont.replace("px", "")) + 1) + "px"
            cl((currentFont.replace("px", "")) + "px")
        }
    }
    btns.forEach((btn) => {
        btn.addEventListener('click', onclickHandler)
    })
}

//task 20
if (task20) {
    const person1 = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    const persone1 = {
        firstname: "rajat",
        lastname: "Patle",
        fullname: function () {
            return this.firstname + " " + this.lastname
        }
    }
}

//task 21

if (task21) {
    const btn = document.getElementById('btn');
    let url = "https://in.search.yahoo.com/?fr2=inr"
    const onclickHandler = () => {
        window.open(url, "_blank")
    }

    btn.addEventListener('click', onclickHandler)
}
//task 22
if (task22) {
    let array = ["Bihar", "Andra-Pradesh", "Maharashtra", "Aasam", "Zarkhand", "Punjab", "Uttrakhand"];

    array.sort();

    cl(array)
}

//task 23
if (task23) {

    isNumberThirtyFive(3, 32);

    function isNumberThirtyFive(num1, num2) {
        let sum = num1 + num2;
        if (sum == 35 || num1 == 35 || num2 == 35) {
            cl("true")

        } else {
            cl("false")
        }
    }
}
//task 24
// code for this task is written in HTML file

//task 25
// code for this task is written in HTML file

//task26

if (task26) {

    let inputstr = (document.getElementById('inputstr'));
    let btn = document.querySelector('#btn');

    const onbuttonclickHandler = () => {
        var result = inputstr.value + inputstr.value.charAt(0)
        cl(result);
    }
    btn.addEventListener('click', onbuttonclickHandler)
}

//task 27

if (task27) {

    let array = ['Aasam', 'Bihar', 'Maharashtra', 'Gujrat', 'Andra Pradesh'];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        cl(`${element} is state of india`)
    }
}

//task 28
if (task28) {
    let array = [10, 30, 56]

    function swap(arra) {
        [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
        return arra;
    }


    console.log(swap([10, 30, 56]))
}
//task 29

if (task29) {
    var arr = [
        'first item',
        'second item is longer than the third one',
        'third longish item'
    ];

    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }

    console.log(longest);
}

//task 30

if (task30) {

    const capToFront = (s) => {
        var sp = s.split("");
        var caps = [];
        var lower = [];
        for (var i = 0; i < sp.length; i++) {
            if (sp[i] == sp[i].toUpperCase()) {
                caps.push(sp[i]);
            } else if (sp[i] == sp[i].toLowerCase()) {
                lower.push(sp[i]);
            }
        }
        return caps.join("").concat(lower.join(""));
    }
    cl(capToFront("boTtlE"));

    const capToFront1 = (str) => {
        let sp = str.split("");
        let caps = [];
        let lower = [];
        for (let i = 0; i < sp.length; i++) {
            if (sp[i] == sp[i].toUpperCase()) {
                caps.push(sp[i]);
            } else if (sp[i] == sp[i].toLowerCase()) {
                lower.push(sp[i]);
            }
        }
        return caps.join("").concat(lower.join(""));
    }
    cl(capToFront1("poTAtO"));
}














