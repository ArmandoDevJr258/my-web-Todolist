const mainTasks = document.querySelector(".maintasks");
const input = document.getElementById("input");
const btnadd = document.getElementById("btnadd");

function addTask() {
  const txt = input.value.trim();

  if (txt === "") {
    alert("Input box can't be empty");
    return;
  }

  // Create a new div for the task
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // Create a span for the task text
  const taskText = document.createElement("span");
  taskText.textContent = txt;
   taskText.classList.add("mytxt");


  // Create delete button
  const btndelete = document.createElement("button");
  btndelete.textContent = "Delete";
  btndelete.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
  btndelete.classList.add("btndelete");

// Optional styling
btndelete.style.background = "transparent";
btndelete.style.border = "none";
btndelete.style.cursor = "pointer";
btndelete.style.fontSize = "18px"; // adjust size if needed
  btndelete.addEventListener("click", () => {
    taskDiv.remove(); // remove the task when clicked
  });

  // Optional inline styles
  taskDiv.style.padding = "10px";
  taskDiv.style.width = "100%";
  taskDiv.style.marginTop = "10px";
  taskDiv.style.borderRadius = "8px";
  
  taskDiv.style.fontFamily = "Arial";

  // Flex for side-by-side layout
  taskDiv.style.display = "flex";
  taskDiv.style.alignItems = "center";
  taskDiv.style.justifyContent = "space-between"; // text left, button right
  taskDiv.style.gap = "10px";

  // Append text and button inside taskDiv
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(btndelete);

  // Append the taskDiv to mainTasks
  mainTasks.appendChild(taskDiv);

  // Clear the input field
  input.value = "";
}

// Run addTask() when the button is clicked
btnadd.addEventListener("click", addTask);
