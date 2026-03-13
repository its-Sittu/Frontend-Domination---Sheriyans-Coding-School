// now i make all those things by using javascript .............



var data = [
    {name: "harsh", src: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     {name: "harshita", src: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      {name: "harshika", src: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
       {name: "himanshu", src: "https://plus.unsplash.com/premium_photo-1705563088246-3673a401ed6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
]

var pers = ""; //globally define

data.forEach(function(elem){
    pers  += `<div class="person">
                          <div class="img">
                                 <img src="${elem.src}" alt="">
                          </div>
                          <h4>${elem.name}</h4> 
                      </div>`
})

document.querySelector(".people").innerHTML = pers;

// we can perfrom actions by using ${}









// searching by using name 

var input = document.querySelector("input");

input.addEventListener("input", function(){
    // console.log(input.value);
    //just like one more condition by using filter

   var matching = data.filter(function(okay){
       return okay.name.startsWith(input.value)
    })
   var newuser = "";
  matching.forEach(function(elem){
    newuser+= `<div class="person">
                          <div class="img">
                                 <img src="${elem.src}" alt="">
                          </div>
                          <h4>${elem.name}</h4> 
                      </div>`
})
  document.querySelector(".people").innerHTML = newuser;
}) 