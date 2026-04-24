// build a character counter 

var textarea = document.querySelector("textarea");
var counter = document.querySelector("span");


textarea.addEventListener("input", function(){
    counter.textContent = textarea.value.length;
})