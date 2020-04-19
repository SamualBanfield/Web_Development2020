let addButton = document.getElementById("addButton");
let content = document.getElementById("content");
let inputField = document.getElementById("input");
addButton.onclick = addTask;

function addTask() {
  var node = document.createElement("button");
  var textnode = document.createTextNode(inputField.value);
  node.appendChild(textnode);
  content.appendChild(node);


  node.onclick = function () {
    content.removeChild(node);
  }
}