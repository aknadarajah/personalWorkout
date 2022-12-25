//Assign buttons as variables
const pushButton = document.getElementById("push");
const pullButton = document.getElementById("pull");
const legsButton = document.getElementById("legs");

//Assign eventListener functions
pushButton.addEventListener("click", function () {
  document.location = "push.html";
});

pullButton.addEventListener("click", function () {
  document.location = "pull.html";
});

legsButton.addEventListener("click", function () {
  document.location = "legs.html";
});

const dateObject = new Date();
console.log(dateObject.toString);
