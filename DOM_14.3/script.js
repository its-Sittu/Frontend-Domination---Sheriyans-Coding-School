// Manipulating Class and CSS

var h1 = document.querySelector('h1');
h1.textContent ="hey Sittu kaise HOO";
h1.style.color ='red';
  
//   directly CSS linked here
  

// Creating and deleteing elements
var img =document.createElement("img");
img.src ='https://tse4.mm.bing.net/th/id/OIP.kZlrCjVobrzTwsLXpM73yAHaEo?cb=defcache2&defcache=1&w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3';
document.querySelector("body").appendChild(img);

//removechild();
 document.querySelector("body").removeChild(img);



//  Event Handling
// add event listner 
// jab bhi aap kisi event main event listner lagaya too 
// listen kia jayega ...
// after click listner work

var btn = document.querySelector("button");
btn.addEventListener(event, function(){});
// button par jaise koi event hoga ye function chalega 

var btn2 = document.querySelector("button");
btn2.addEventListener('click', function(){
    alert("button clicked");
}) 


// example
var btn3 = document.querySelector("button");
btn3.addEventListener("mouseover", function(){
   btn3.textContent ="starting...";
   btn3.style.backgroundColor ="red";
})

var btn3 = document.querySelector("button");
btn3.addEventListener("mouseleave", function(){
   btn3.textContent ="make new button";
   btn3.style.backgroundColor ="hotpink";
})



// event object
document.querySelector("body")
.addEventListener("mouseover", function(dets){
    console.log(dets);
})

// mouse client x and y pr click karne par mouse ki position show hogi
// mouse jaha jayega circle bhi waha jayega