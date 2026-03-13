// Ques 3 : Create a form with input fields and a submit button. Use javascript to validate
// the form and display an error message if the input is invalid.
// forms ke sath deal karo yaad rakho 
// submit pr form page ko reload kar dete hai
// iss liye js nhi chl pate 

var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
var inps = document.querySelectorAll('input[type="text"]');
var h3  = document.querySelector("h3");

form.addEventListener("submit", function(ev){
    ev.preventDefault();

    // if(inp1.value === '' || inp2.value === ''){
    //    h3.textContent ="error , some fields are blank check it.";
    //    h3.style.color ="pink";
    // } else{
    //     h3.textContent = "";
    //     h3.style.color = "black";
    // }


 // inps

    // inps.forEach(function(inp){
    //     if(inp.value === ''){
    //         h3.textContent = "Error , Some fields are blank.";
    //         h3.style.color = "red";
    //     } else{
    //         h3.textContent = '';
    //         h3.style.color = "black";
    //     }
        console.log(inps.length);

    // })

   for(var i =0; i<inps.length; i++){
    if(inps[i].value.trim() === ''){
        h3.textContent = "Error hai Bhaiwaa , firse check karo. ";
        h3.style.color = "hotpink";
        break;
    }
   }

})


 