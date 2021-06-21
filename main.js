document.getElementById("form-button").onclick = function() {

  let f_number = document.getElementById("fizznumber").value;
  let b_number = document.getElementById("buzznumber").value;
  let parent = document.getElementById('answer');
 

  if(isNaN(f_number) || isNaN(b_number)) {
    var e = document.createElement("p");
    e.innerHTML = "整数値を入力してください";
    parent.appendChild(e);
  } else {
    for (var i = 1; i < 99; i++) {
      var e = document.createElement("div");
      if (i % f_number === 0 && i % b_number === 0) {
        e.innerText = "FizzBuzz" + " " + i ;
        parent.appendChild(e);
      }
      else if (i % f_number === 0){
        e.innerText = "Fizz" + " " + i ;
        parent.appendChild(e);
      }
      else if(i % b_number === 0){
        e.innerText = "Buzz" + " " + i ;
        parent.appendChild(e);
      }
    }
  }
}

