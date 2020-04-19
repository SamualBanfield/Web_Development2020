let addButton = document.getElementById("addButton");
let clearButton = document.getElementById("clearButton");
let left = document.getElementById("left");
let middle = document.getElementById("middle");
let right = document.getElementById("right");
let inputField = document.getElementById("input");
let selection = document.getElementById("selection");
let elementArray = []

addButton.onclick = addTask;
clearButton.onclick = clearTask;

function addTask() {
  var crossButtonNode = document.createElement("button"); var checkButtonNode = document.createElement("button");
  var checkNode = document.createElement("i"); var crossNode = document.createElement("i");
  crossNode.className = "fas fa-times"; checkNode.className = "fas fa-check";
  crossButtonNode.appendChild(crossNode); checkButtonNode.appendChild(checkNode);
  var pNode = document.createElement("p");
  var textnode = document.createTextNode(inputField.value);
  pNode.appendChild(textnode);
  var finalNode = document.createElement("div");
  finalNode.appendChild(crossButtonNode); finalNode.appendChild(pNode); finalNode.appendChild(checkButtonNode);
  elementArray.push(finalNode);
  console.log(elementArray);
  switch (selection.value) {
    case "left":
      var choice = left;
      choice.appendChild(finalNode);
      break;

    case "middle":
      var choice = middle;
      middle.appendChild(finalNode);
      break;

    case "right":
      var choice = right;
      right.appendChild(finalNode);
      break;

    default:
      break;
  }
  crossButtonNode.onclick = function () {
    choice.removeChild(finalNode);
  }
  checkButtonNode.onclick = function () {
    finalNode.style.backgroundColor = `#97ee97`;
    checkButtonNode.style.backgroundColor = `#97ee97`;
    crossButtonNode.style.backgroundColor = `#97ee97`;
  }
}

function clearTask() {
  elementArray.forEach(element => {
    var parentNode = element.parentNode;
    parentNode.removeChild(element);
  });
  elementArray = [];
}