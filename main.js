document.getElementById("form-button").onclick = function() {

  const fuzzNumber = document.getElementById("fizznumber").value;
  const buzzNumber = document.getElementById("buzznumber").value;
  const addElement = document.getElementById('answer');
 

  if(isNaN(fuzzNumber) || isNaN(buzzNumber)) {
    const e = document.createElement("p");
    e.innerHTML = "整数値を入力してください";
    addElement.appendChild(e);
  } else {
    for (const i = 1; i < 99; i++) {
      const v = document.createElement("div");
      if (i % fuzzNumber === 0 && i % buzzNumber === 0) {
        v.innerText = "FizzBuzz" + " " + i ;
        addElement.appendChild(v);
      } else if (i % fuzzNumber === 0){
        v.innerText = "Fizz" + " " + i ;
        addElement.appendChild(v);
      } else if(i % buzzNumber === 0){
        v.innerText = "Buzz" + " " + i ;
        addElement.appendChild(v);
      }
    }
  }
}

