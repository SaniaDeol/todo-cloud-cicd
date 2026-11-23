
const STORAGE_KEY = "todoTasks";

// Load saved tasks from the browser
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Display all tasks
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const item = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        // Mark task as completed
        taskText.onclick = function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Delete task
        deleteButton.onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        };

        item.appendChild(taskText);
        item.appendChild(deleteButton);
        list.appendChild(item);
    });
}

// Add a new task
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = "";
}

// Display saved tasks when the page opens
renderTasks();
