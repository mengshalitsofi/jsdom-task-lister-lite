document.addEventListener("DOMContentLoaded", () => {
  // your code  here
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const task = document.getElementById("new-task-description").value;

    const li = document.createElement("li");
    li.innerText = task;

    document.getElementById("tasks").appendChild(li);
    
    e.preventDefault();
  })
});
