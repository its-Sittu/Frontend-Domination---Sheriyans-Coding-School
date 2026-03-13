// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inp = document.querySelector("input");
// var ul  = document.createElement("ul");

// add.addEventListener("click", function(){
//     if(inp.value.trim() === ''){}
//     else{
//       var li = document.createElement('li');
//       li.textContent = inp.value;
//       ul.appendChild(li);
//     }
// })




var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector("ul");


// Global variable banate hai taki dono functions me use kar sake
var li; // global variable

add.addEventListener("click", function(){
    if(inp.value.trim() === ''){
        return;
    } else {
         li = document.createElement('li');
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = ""; // input clear karne ke liye
    }
});

remove.addEventListener("click", function(){
    ul.removeChild(li);
});