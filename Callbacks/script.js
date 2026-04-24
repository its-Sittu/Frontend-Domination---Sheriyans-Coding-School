 function sum(a, b){
    console.log(a + b);
 }

 function calculator(a,b , sumCallback){
    sumCallback(a,b);
 }

 calculator(1,3, sum);




 
//  Callback Hell

function getData(dattId){
    setInterval(() => {
        console.log("data", dattId);
    },2000);
}


getData(1);
getData(2);
getData(3);
