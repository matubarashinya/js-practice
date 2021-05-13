
// 課題①-3

function AddTask() {
  let flag = 0;
  let tasks = [];
  while(flag < 5){
    let task = prompt('タスクを入力してください');
    tasks.push(task);
    alert('新しいタスクを追加しました')
    console.log("===========");
    console.log("現在持ってるタスク一覧");
    console.log("===========");
    for (let i = 0; i < tasks.length; i++){
      console.log(i + ":" + tasks[i]);
    }
    flag ++;
  }
};

window.onload = AddTask();


