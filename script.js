function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const list = document.getElementById("taskList");
    const item = document.createElement("li");

    const task = document.createElement("span");
    task.textContent = taskText;

    task.onclick = function () {
        task.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function () {
        item.remove();
    };

    item.appendChild(task);
    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = "";
}
