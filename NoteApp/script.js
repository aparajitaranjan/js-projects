// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");
// const notes = document.querySelectorAll(".input-box");

// const showNotes = () => {
//   notesContainer.innerHTML = localStorage.getItem("notes");
// };
// showNotes();
// const updateStorage = () => {
//   localStorage.setItem("notes", notesContainer.innerHTML);
// };

// createBtn.addEventListener("click", () => {
//   let inputBox = document.createElement("p");
//   let img = document.createElement("img");
//   inputBox.className = "input-box";
//   inputBox.setAttribute("contenteditable", "true");
//   img.src = "images/delete-xxl.png";
//   notesContainer.appendChild(inputBox).appendChild(img);
//   updateStorage();
// });

// notesContainer.addEventListener("click", (e) => {
//   if ((e.target.tagName = "IMG")) {
//     e.target.parentElement.remove();
//     updateStorage();
//   } else if (e.target.tagName === "P") {
//     const notes = document.querySelectorAll(".input-box");
//     notes.forEach((nt) => {
//       nt.onkeyup = function () {
//         updateStorage();
//       };
//     });
//   }
// });
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     document.execCommand("insertLineBreak");
//     event.preventDefault();
//   }
// });
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

const showNotes = () => {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
};
showNotes();

const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete-xxl.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage(); // Update storage after creating a new note
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage(); // Update storage after deleting a note
  }
});

// Use a single event listener for input changes
notesContainer.addEventListener("input", (e) => {
  if (e.target.classList.contains("input-box")) {
    updateStorage(); // Update storage on text change
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
