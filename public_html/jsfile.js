function a() {
    alert("aaa");
}



function b() {
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';

}


function c() {
    var calc = document.getElementById("calc");
    calc.style.display = "none";

}

function d(){
    
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    sum= parseInt(b)+ parseInt(a);
    alert(sum);
}

          