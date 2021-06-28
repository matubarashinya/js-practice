let i = 0;

document.getElementById("addTask").onclick = function() {

  const taskContent = document.getElementById("task_content").value;
  const statusDisplay = document.getElementById("status_display");
 
  if(taskContent) {

    const e = document.createElement("p");
    e.innerHTML = i + " " + taskContent + " " + '<button type="button">作業中</button>' + " " + '<button type="button">削除</button>';
    statusDisplay.appendChild(e);
    i++ ;
  };
}
