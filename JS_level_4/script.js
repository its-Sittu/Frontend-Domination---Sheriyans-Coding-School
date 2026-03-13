// Function
// when you want to call it for multiple times
// and when you want to code after some time 

// without function



function sittu(){
    console.log("kha haii babuaaa");
console.log("sab theek haii naa");
console.log("chlo mann lga krr padhoo ");
console.log("or khane pr bhi dhyan rakhoo");
console.log("mujhe pata hai tum aache ladke ho");
console.log("collge main sabse pehele teri palacement lagegi");
console.log("chlao dhyan rakho , keep grow ");

}

sittu();
sittu();
//  function call multiple inputs in one call
sittu();

sittu();

// match command than run after
var dateofbirth = 13;
var todaysdate = 13;

function happybirthday(){
    console.log("happy dear babuaaa ");
}

if(dateofbirth === todaysdate){
    happybirthday();
    // to uresue the code and to warp the code which 
    // we want to run in future at point of time 
}


// parameters and arguments 

function abcd(val){
    console.log(val+23);
}

abcd(98);


// Prepration for interviews 

function abcd(){
    // function statements 
}

var abcd = function(){
    // function expression
}


// function(){
//     // function without name 
//     // anonymous function
// }


// es6 
// fat Arrows
var a =()=>{};
var b =()=>{};
var c =()=>{};
var d =()=>{};

// fat arrow  with single parameters

var g = ab=>{}
g(12);

var g = (ab)=>{}
g(12);

// we write any reference data types by Arrow
// [],{}

//            RETURN

// return ka matlb jha pr return hua
// uske aage jo bhu lga hua hai ya likha hua hai
// woh jayega jha pr function call  hua tha 

// note 
// asha function jo kuch bhi return nhi krta woh
// undefined return krta hai

function akuu(){
    return 12;
}
var a = akuu();



function aaa(){
    return 32;
}
console.log(aaa());
// always return something 
// defined or undefined



var tum = ()=>{
    return 365;
}
// also return value 
var yoo = tum();