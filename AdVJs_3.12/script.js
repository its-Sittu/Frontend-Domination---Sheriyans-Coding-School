// function inside the method

var obj = {
    age: 25,
    name : "Sittu Kumar Singh ",
    hello: function(){
        // method
        console.log(this.name);
        function hello2(){
         console.log(this);
        }
        hello2();
    }
}
obj.hello();



// Call..........................................
var obj ={name : "Sittu "};

function child(){
    console.log(this)
}
child.call(34);
child.call(obj);

// apply main parameters ki value hm pass kr skte hai

const obj2 ={name : "Rajputana"};

 function abcd(a,b,c){
    console.log(this,a,b,c);
 }
 abcd.apply(obj2,[1,2,3])



//  bind bilkul call ki tarh hai .......
// ye another function deta hai run, call krne ke liye 

const obj3 = {name : "Hello Hello Bachooo"};
function chalo(){
    console.log(this);
}

const abhichalega = chalo.bind(obj3);
abhichalega();



// Prototype Inheritance..................
// hm object create krte hai parent constructor main kuch
// add kiya child bhi use krenge 

function heyy (){
    this.name ="harshita";
    this.age =20;
}

const ans = new heyy(); 
const ans2= new heyy(); 



// if you take deafult value ....   
function heyyy(name, age){
    this.name =name;
    this.age =age;
}

const ans3= new heyyy("Rajput",20); 
const ans4= new heyyy("Sittu",21); 



// prototype Inheritamce In shared Way ..........
function heyyyy(name, age){
    this.name =name;
    this.age =age;

    heyyyy.prototype.printMyName =function(){
        console.log(this.name);
    }
}

const ans5= new heyyyy("Rajput",20); 
const ans6= new heyyyy("Sittu",21); 




// JavaScript Closer...............................................................
// ek function jo return kare dusra function
// aur use kare parent ka  funtion ka koi variable  
function counter(){
    var a = 34;
    return function(){
        console.log(a)
    }
}
var result = counter();
result(); 





//  Event Deligation.........................................................................................
// ek sath multiple Events ko handle kr skte hai 
// by the use of event listner
// NOTE
// agar events pr listner nhi lga rha too uske parents ko
// Check kiya jayegaa...

var parentt= document.querySelector("#parent");

parentt.addEventListener("click", function(){
    console.log("Its Works");
})
// Also known as Events Bobling...

var parent= document.querySelector("#parent");

parentt.addEventListener("click", function(details){
    if(details.target.id ==="play"){
        console.log("Ganna bajat hauuu reeee")
    }else if(details.target.id === "pause"){
         console.log("Ganwa Band Ho galauu reee");
    }  
})

// ab isme kiya kya hmne details liya or target dekha
// jisee hame match krna tha agr match khata too console chtlta
// events work krta ... or hmne target ke sath id issliye
// lagai ki hm match === krna kya chahtee haiii 
// 59 min lect- 13.1





// Higher Order Function............................................................
// Parameter ki jagh function ko parameters ki tarh use 
// kiya jayee... 

function abcdd(parameters){

}
abcdd(function(){});

// function jo function return kare 
// higher order function

var arr =[1,2,3,4,5,6];

arr.forEach(function(){}) 
// forEach bhi higher function hua .... 






// Error Handling Like Pro , try , Catch .......................................................
// default code of it 
// try{}
// catch(err){}

function divide(a ,b){
    try{
        if(b === 0){
            throw Error("Koi Gadbad  haii");
        }
        console.log(a/b);
    }
    catch(err){
        console.error(err);
    }
}
divide(12,27); 




// Custom Events ...............................................
// click , chacha , hua , jayegaa.. 
// how
// make Events
// attach event to some dom element
// dispatch that event from that dom element in which you attached the event

const meraEventhai = new Event("gharJaoo");

document.querySelector("button")
.addEventListener("gharJaoo", function(){
    alert("Jaa raha huu");
})

document.querySelector("button").dispatchEvent(meraEventhai);
