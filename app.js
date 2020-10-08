
  AOS.init();


var result = document.getElementById("result");

function getnum(num){
    result.value += num;
}

function clearResult(){
    result.value = "";
}

function getResult()
{
    result.value = eval(result.value);
}
function getpow(){
    result.value = Math.pow(num)
}

 window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      result.value = "";
  }