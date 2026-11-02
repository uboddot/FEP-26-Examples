let nameOfUser = null;
let energyLevelOfUser = null;

function calculateBatteryLevel(inputLevel) {
  if (inputLevel == 0) {
    return "DEATH";
  }
  return inputLevel * 20;
}

function submitInput() {
  inputLevel = Number(document.getElementById("energy-level-input").value);

  if (validInputLevel(inputLevel)) {
    nameOfUser = document.getElementById("name-input").value;
    energyLevelOfUser = calculateBatteryLevel(inputLevel);
    setResponse();
  }
}

function setResponse() {
  document.getElementById("response").textContent = `
        Hi ${nameOfUser}, your energy level is ${energyLevelOfUser} ${getSuffix()} !
    `;
}

function validInputLevel(level) {
  if (level > 5 || level < 0) {
    alert("Please read the instructions again, and try harder :)");
    return false;
  }
  return true;
}

function getSuffix() {
  if (typeof energyLevelOfUser === "string") return "";
  if (typeof energyLevelOfUser === "number") return "%";
}
