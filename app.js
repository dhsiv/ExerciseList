const addExercise = document.getElementById("addButton");
const workoutInput = document.getElementById("exerciseName");
const exerciseList = document.querySelector(".exerciseList");

loadEventListeners();

function loadEventListeners() {
  // Gets list from local storage function
  document.addEventListener("DOMContentLoaded", getList);

  // Add Exercise from input
  addExercise.addEventListener("click", addToList);
}

//*** GETTING ITEMS FROM LOCAL STORAGE AND POPULATING UL ***//
function getList() {
  let exercises;
  if (localStorage.getItem("exercises") === null) {
    exercises = [];
  } else {
    exercises = JSON.parse(localStorage.getItem("exercises"));
  }
  exercises.forEach(function (exercise) {
    // Create li
    const li = document.createElement("li");
    // Create Class for li
    li.className = "exerciseItem";
    // Create text node for li
    li.appendChild(document.createTextNode(exercise));
    // Append li to ul
    exerciseList.appendChild(li);
  });
}
console.log("exercises");
//*** ADDING EXERCISE INPUT TO DOM UL ***//
function addToList() {
  if (workoutInput.value === "") {
    alert("Please add an exercise");
  }

  // Create li
  const li = document.createElement("li");
  // Create Class for li
  li.className = "exerciseItem";
  // Create text node for li
  li.appendChild(document.createTextNode(workoutInput.value));
  // Append li to ul
  exerciseList.appendChild(li);

  // Add to local storage
  exerciseStorage(workoutInput.value);

  // clear input
  workoutInput = "";
}

//*** FUNCTION TO ADD TO LOCALSTORAGE ***//
function exerciseStorage(exercise) {
  let exercises;
  if (localStorage.getItem("exercises") === null) {
    exercises = [];
  } else {
    exercises = JSON.parse(localStorage.getItem("exercises"));
  }

  exercises.push(exercise);

  localStorage.setItem("exercises", JSON.stringify(exercises));
  // Add item
  // Append item to
}
