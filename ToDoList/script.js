const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  const taskValue = inputBox.value.trim();
  if (taskValue === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskValue;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Cross icon (X)
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML); // Save list data to localStorage
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data") || ""; // Display saved tasks if available
};

showTask();
