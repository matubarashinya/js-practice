// 課題①-1

// for (var i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz",i);
//   }
//   else if (i % 3 === 0){
//     console.log("Fizz",i);
//   }
//   else if(i % 5 === 0){
//     console.log("Buzz",i);
//   }
// }

// 課題①-2
let flag = 0;

while(flag == 0) {
  let quiz = prompt('日本の首都は？');
  if (quiz !== '東京'){
    alert('不正解です！');
  }
  else{
    alert('正解です！');
    flag = 1;
  }
}

