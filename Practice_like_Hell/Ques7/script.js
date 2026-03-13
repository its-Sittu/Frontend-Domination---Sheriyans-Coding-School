var prgs = document.querySelector("#progress");
var h3 = document.querySelector("h3");
var count = 0;
var int = setInterval(function(){

//to stop

if(count === 100){
   clearInterval(int);
  h3.style.opacity = 1;
}

 count++;
  prgs.style.width =count+'%';
//   remember yha par width badh raha hai 
} , 100)