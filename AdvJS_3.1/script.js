// Advannce Concepts

// global Scope 

console.log(this);

// function Windows

function sittu(){

    console.log(this);
}

sittu();


// method Objects 

var obje ={
    name: function(){
        console.log(this);
    },
    age : 25,
    email: "avtv2stvv@gmail.com"
}
obje.name();


// function inside Methods es5 - window 

var object2 = {
    sayName: function(){
        console.log(this);
        function childfnc(){
            console.log(this);
        }
        childfnc();
    },
    age: 25,
    name : "Sittu Kumar Singh ",
}
object2.sayName();
// | Location            | Code                | `this` kya hoga?  | Kyun?                                                         |
// | ------------------- | ------------------- | ----------------- | ------------------------------------------------------------- |
// | Inside `sayName()`  | `console.log(this)` | **object2**       | kyunki method object ke through call hua                      |
// | Inside `childfnc()` | `console.log(this)` | **window/global** | kyunki normal function directly call hua, object ke sath nahi |


// practice

var sittu = {
    huaBabu   : function(){
        console.log(this);

        // inside innner function call directly
        function Coder(){
            console.log(this);
        }
        Coder();

    },
    umar : 19,
    ptaa: "Daltonganj",
}

sittu.huaBabu();

// fat arrow function helps to this ki function 
// arrow se loo

var obj3 = {
    satName : function(){
        const child = ()=>{
              console.log(this);
        }
        child();
        // child ki value this ke andr object
        // hi haiii
    }
}
obj3.satName(); 
// method call es6 main . dot se hi hota hai
// this ki value parent se loo
// this ki value rewind karo 
// direct fat arrow use kroge mathod main
// than window hi milega so make sure 
// woh function ke andr write hua ho 


// constructor 
function add (){
    console.log(this);
}
const ans = new add();
// NEW JavaScript function ko constructor 
// bana deta hai.

// event listner mein this ki  value 
// that elements jispr events lis.laga hoo

document.querySelector("button")
.addEventListener("click", function(){
    console.log(this); 
})

// "button, suno! Jab tumhe koi click kare, yeh function chalana."