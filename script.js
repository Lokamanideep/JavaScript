console.log("Hi Loka");
// var a = 9
// var b = 17.7643
// var c = "hero"
// var d = true
// var e = "10"
// console.log(a + b)
// console.log(c, d)
// if (a == b) {
//     console.log("Equal")
// } else if (a !== e) {
//     console.log("=== checking here")
// } else {
//     console.log("Not Equal")
// }
// var y = 2004
// if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0)
//     console.log("Leap year")
// else
//     console.log("Not A Leap Year")

// var aa = 3; 
// var z = true; 
//     if (aa <= 1) {
//         z = false; 
//     } else {
//         for (var i = 2; i <= Math.sqrt(aa); i++) { 
//             if (aa % i == 0) {
//                 z = false; 
//                 break;
//             }
//         }
//     }
//     if (z) {
//         console.log("prime"); 
//     } else {
//         console.log("Not prime");
//     }


// var array =[10,32.434,"hjijb",true]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);   
// }

// array.push(40)//last add
// array.pop()//last remove no parameter
// array.shift()//remove first 
// array.unshift(1)//add 1st

// console.log(array); 

// var array1=[10,20,30,40]
// var array2=[100,200,300,400]
// var newarray=[0,...array1,90,...array2]

// console.log(newarray)

// array.forEach()
// array.map()
// array.filter()
// array.reduce()


//json
// var userdata = [
//     {
//         id: 1122,
//         name: "LokaManideep",
//         age: 21,
//         techStack: ["deveops", "cloud", "full stack"]
//     },
//     {
//         id: 42,
//         name: "Loka",
//         age: 22,
//         techStack: ["html"]
//     }
// ]
// console.log(userdata[0].name)

//Functions

// function myFun(){
//     console.log("jumping");
//     return "ok"
// }

// console.log(myFun())

// const myFun= function add(a, b){
//     console.log(a + b);
// }

// const myFun=(a, b)=>{
//     return a + b
// }
// console.log( myFun(3, 5));

// const myFun = (a, b) => a + b
// console.log(myFun(3, 5));


// function add(a, b) {
//     console.log(a - b);
// }
// add(3, 5) //here we wont get 8 we get 3 times -2 becoz all add funtions go up logic exicute then these exicute so we get same -2

// let heading = document.getElementsByTagName("h1")
// // console.log(heading);
// heading[2].innerText = "bbbyyyyyyyyyyyyyyyyyyyyyyy"
// //console.log(heading[2].innerText);
// let para = document.getElementById("para")
// //para.innerText="<b>bhai </b>"
// para.innerHTML = "<b>bhai</b>"

// let hola = document.getElementsByClassName("hola")
// hola[0].innerHTML = "booooo"

// const change = () => {
//     let display = document.getElementById('hello')
//     display.innerHTML = "Hii sis!!!!"
//     display.style.backgroundColor="red"
//     display.style.color="black"
// }

// function change() {
//     document.getElementById("box").style.backgroundColor = "red";
// }


// function change() {
//     let box = document.getElementById("box");

//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);

//     box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// }

let colorcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const change = () => {
    let display = document.getElementById("box")
    let randcolor = "#"
    let color = document.getElementById("color")
    for (let index = 0; index < 6; index++) {
        let randNo = Math.floor(Math.random() * 16)
        randcolor += colorcode[randNo]
    }
    color.innerHTML = randcolor
    display.style.backgroundColor = randcolor
}