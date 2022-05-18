"use strict"
// Скрипты и время их выполнения. setTimeout и setInterval


//const timerId = setTimeout(function(text){
 //   console.log(text);
// }, 2000, "Hi");

//const timerId = setTimeout(logger,2000);
//function logger () {
 //   console.log("log");
//}

// clearInterval(timerId); // - сбросили таймер

//function logger () {
   //console.log("log!")
//}

// const btn = document.querySelector(".btn");

// btn.addEventListener("click" , ()=>{
  //  const timerId = setTimeout(logger,2000);
//})

// setInterval



/*const btn = document.querySelector(".btn");
let timerId;
let counter = 0;

btn.addEventListener("click", ()=>{
    timerId = setInterval(logger, 1000)
})


clearInterval(timerId);

function logger () {
    if(counter == 3) {
        clearInterval(timerId);
    }
    console.log("Log!!");
    counter++;
    
}*/

// Рекурсивный метод SetTimeout

// let id = setTimeout(function log (){
    //console.log("Hello");
    //id = setTimeout(log,500)
//},500);

// Анимация


const btn = document.querySelector(".btn");

let timeId;
let i = 0;

function myAnimation(){
    const elem = document.querySelector(".box");
    let pos = 0;
    
    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);


   

