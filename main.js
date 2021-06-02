
// 課題①-4

function AddTask(){

  const tasks = [
    {
      content: "机を片付ける",
      genre: "掃除",
    },
    {
      content: "牛乳を買う",
      genre: "買い物",
    },
    {
      content: "散歩する",
      genre: "運動",
    }
  ];

  console.log("===========");
  console.log("現在持ってるタスク一覧");
  console.log("===========");
  tasks.forEach((task, index) => {
    console.log(index + ": [内容]" + task.content + "、[ジャンル]" + task.genre);
  });
  let content = prompt('内容を追加してください');
  let genre = prompt('ジャンルを追加してください');
  tasks.push({ content: content, genre: genre});
  alert('新しいタスクを追加しました');
  
  console.log("===========");
  console.log("現在持ってるタスク一覧");
  console.log("===========");
  tasks.forEach((task, index) => {
    console.log(index + ": [内容]" + task.content + "、[ジャンル]" + task.genre);
  });

};


AddTask();