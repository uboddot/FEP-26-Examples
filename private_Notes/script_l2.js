// backtick for strings:

const a = 1.456;

let html = `
    <p>
        Here goes the value of a: <b> ${a} </b>
    <p>
`;

const paragraph = document.createElement("p");
paragraph.innerHTML = html;
document.body.appendChild(paragraph);

const sayingBtn = document.getElementById("sayingBtn");

const sayHello = () => {
  lstOfSayings = ["hi", "howdy", "yo bruh"];
  rnd = Math.floor(Math.random() * lstOfSayings.length);
  updateSayingButton(lstOfSayings[rnd]);
};

const updateSayingButton = (text) => {
  sayingBtn.textContent = text;
};

let saying = "not greeting yet";
updateSayingButton(saying);

function handleName() {
  const name = document.getElementById("name").value;

  alert(`Hellou there ${name}`);
}

function nextYear() {
  let year = Number(document.getElementById("year").value);

  alert(`Next year is ${++year}`);
}

function getPromptInput() {
  input = prompt("give input");
  document.getElementById("prompt-shower").textContent = "Input was:" + input;
}
