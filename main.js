
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

