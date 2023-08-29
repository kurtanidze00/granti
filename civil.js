function calculate() {
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var z = parseFloat(document.getElementById("z").value);
  
    var result = (x + y + z * 1.5) * 10;
  
    var message = "თქვენი საგრანტო ქულაა: " + result;
  
    if (result >= 5881.0) {
        message +="\nგილოცავთ თქვენ მოიპოვეთ 100%იანი გრანტი";
    } else if(result >= 5616.0) {
        message += "\nგილოცავთ თქვენ მოიპოვეთ 70%იანი გრანტი"
    } else if(result >= 4879.0) {
        message += "\nგილოცავთ თქვენ მოიპოვეთ 50%იანი გრანტი"
    } else {
        message += "\nსამწუხაროდ თქვენ ვერ მოიპოვეთ გრანტი"
    }
    document.getElementById("result").textContent = message;
  }
  