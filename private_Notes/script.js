console.log("Hello World");

document.body.innerHTML = "<h1> Hello World </h1>";

function myFunction() {
  console.log("my function is functional`!");
}

const button = document.createElement("button");
button.textContent = "myFunction caller Button";
button.onclick = myFunction;
document.body.appendChild(button);
