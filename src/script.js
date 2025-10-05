const mainTasks = document.querySelector(".maintasks");
const input = document.getElementById("input");
const btnadd = document.getElementById("btnadd");

function addTask() {
  const txt = input.value.trim();
  if (txt === "") {
    alert("Input box can't be empty");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskText = document.createElement("span");
  taskText.textContent = txt;
  taskText.style.fontSize="20px";
  taskText.classList.add("mytxt");

  // Create mark buttons
  const markbtn1 = document.createElement("button");
  markbtn1.classList.add("unchecked");
  markbtn1.innerHTML = '<ion-icon name="square-outline"></ion-icon>';

  const markbtn2 = document.createElement("button");
  markbtn2.classList.add("checked");
  markbtn2.innerHTML = '<ion-icon name="checkmark-done-outline"></ion-icon>';
  
  // Initially hide markbtn2
  markbtn2.style.display = "none";

  // Delete button
  const btndelete = document.createElement("button");
  btndelete.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
  btndelete.classList.add("btndelete");
  btndelete.style.background = "transparent";
  btndelete.style.border = "none";
  btndelete.style.cursor = "pointer";
  btndelete.style.fontSize = "18px";
  btndelete.addEventListener("click", () => taskDiv.remove());

  // Style taskDiv
  taskDiv.style.display = "flex";
  taskDiv.style.alignItems = "center";
  taskDiv.style.justifyContent = "space-between";
  taskDiv.style.gap = "10px";
  taskDiv.style.padding = "10px";
  taskDiv.style.marginTop = "10px";
  taskDiv.style.borderRadius = "8px";
  taskDiv.style.fontFamily = "Arial";

  // Append buttons and text
  taskDiv.appendChild(markbtn1);
  taskDiv.appendChild(markbtn2);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(btndelete);
  mainTasks.appendChild(taskDiv);
  input.value = "";

  // Click markbtn1: hide itself, show markbtn2, add strikethrough
  markbtn1.addEventListener("click", () => {
    markbtn1.style.display = "none";
    markbtn2.style.display = "block"; // show second button
    taskText.style.textDecoration = "line-through"; // add line-through
    taskText.style.color="red";
  });

  // Optional: Click markbtn2 to undo
  markbtn2.addEventListener("click", () => {
    markbtn2.style.display = "none";
    markbtn1.style.display = "block"; // show first button
    taskText.style.textDecoration = "none"; // remove line-through
     taskText.style.color="black"
  });
}

// Run addTask() when the button is clicked
btnadd.addEventListener("click", addTask);
