let todos = []

document.getElementById("addTask").addEventListener('click', () => {

  const taskContent = document.getElementById("task_content").value;
  const statusDisplay = document.getElementById("status_display");
  statusDisplay.textContent = '';

  todos.push({comment: taskContent, status: "作業中"});

  todos.forEach((todo, index) => {
    
    const tr = document.createElement('tr');
    
    const tdId = document.createElement('td');
    tdId.innerHTML = index;
    tr.appendChild(tdId);

    const tdComment = document.createElement('td');
    tdComment.innerHTML = todo.comment;
    tr.appendChild(tdComment);

    const tdStatus = document.createElement('td');
    const inputStatus = document.createElement('input');
    inputStatus.type = "submit";
    inputStatus.value = todo.status;
    inputStatus.name = "button";
    const tdDeleteButton = document.createElement('input');
    tdDeleteButton.type = "submit";
    tdDeleteButton.value = "削除";
    tdDeleteButton.name = "button";
    tdStatus.appendChild(inputStatus);
    tdStatus.appendChild(tdDeleteButton);
    tr.appendChild(tdStatus);

    statusDisplay.appendChild(tr);
  });
});


