// create a tabbed interfcae where clicking on tabs displays
// different content sections without page
// reload.
 var about = document.querySelector("#about");
 var home = document.querySelector("#home");
 var contact = document.querySelector("#contact");


 var hometext = document.querySelector("#hometext");
 var abouttext = document.querySelector("#abouttext");
 var contacttext = document.querySelector("#contacttext");


 hometext.style.display = "block";
 hometext.style.width = "50%";


 home.addEventListener("click", function(){
     saretexthatoo();
     hometext.style.display = "block";
     hometext.style.width = "50%";
 })


  about.addEventListener("click", function(){
     saretexthatoo();
     abouttext.style.display = "block";
     abouttext.style.width = "50%";
 })



  contact.addEventListener("click", function(){
     saretexthatoo();
     contacttext.style.display = "block";
     contacttext.style.width = "50%";
 })


 function saretexthatoo(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display ="none";
    })
 }