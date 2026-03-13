function check(){
    let n = document.getElementById("name").value;
    if(n == ""){
        alert("Name Required Bro");
        return false;
    }
}


let d = new Date();
document.getElementById("dt").innerHTML = d;
console.log(d);


setInterval(time, 1000);
    function time (){
    var t =new Date();
    document.getElementById("clock").innerHTML = t.getHours() +" " + t.getMinutes() +" " + t.getSeconds();
 }
