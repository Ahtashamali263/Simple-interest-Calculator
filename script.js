//1.change the range of the slider
//2.calculate interest
//3.no of year =actual years
//4.results are highlighted
//5.alert if negative value is Enter
//6.take user back to  fill principal

function updateRate() {
  var rateval = parseFloat(document.getElementById("rate").value);
  document.getElementById("rate_val").innerText = rateval;
}


function compute() {




  var principal =parseFloat(document.getElementById("principal").value) ;
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseFloat(document.getElementById("years").value);
  var year = new Date().getFullYear() + parseInt(years);
  var interest = principal * years * rate / 100;
  var amount = parseInt(principal) + parseFloat(interest);

  document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" + rate +"%</mark>,<br/>Your Simple intrest will be<mark> "+interest+
    "</mark><br/>You will receive an amount of <mark>" + amount + ",</mark><br/>in the year <mark>" + year + "</mark><br\>";




  if (principal <= 0) {
    alert("Enter positive number");
    document.getElementById("result").remove();
  }
  document.getElementById("principal").focus();
}
