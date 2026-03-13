var hmm = document.querySelector("h1");
hmm.textContent = ("haaa bhai hu too main Engineer");


// document.querySelector()

var hey = document.querySelector("button");
hey.textContent =("Start ")


// Multiple Selection  
// document.querySelectorAll();

// var h1 = document.querySelectorAll("h1");
hmm.innerHTML = "<i>Yup  You  Are </i>";



// | Method        | Kaam                             |
// | ------------- | -------------------------------- |
// | `textContent` | Sirf text (HTML tag nahi chalta) |
// | `innerHTML`   | HTML + tags dono chalte hain     |




// Manupulating Css.....................

var css = document.createElement('h2');
css.textContent = 'Change ho gyaaaaa reee babuu';
// Classlist that connect ditrectly css to js 
css.classList.add("makeitchange");

document.querySelector("body").appendChild(css);
// kahaparrahoge.appendChild();



var img = document.createElement("img");
img.src ='https://tse1.mm.bing.net/th/id/OIP.trcmoT_WG-z3SHIlMsZs4AHaE0?rs=1&pid=ImgDetMain&o=7&rm=3';
document.querySelector("body").appendChild(img)



// Event Listner 
// var fun = document.querySelector("button");
// fun.addEventListener("click", function(){
//     fun.textContent = "DownLoading .....";
//     fun.style.backgroundColor ="pink";
// })


// 
var fun = document.querySelector("button");
fun.addEventListener("mouseover", function(){
    fun.textContent = "DownLoading .....";
    fun.style.backgroundColor ="pink";
})



var fun = document.querySelector("button");
fun.addEventListener("mouseleave", function(){
    fun.textContent = "click here to download";
    fun.style.backgroundColor ="Orange";
})