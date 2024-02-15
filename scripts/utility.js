function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = element.innerText;
  const value = parseInt(elementValue);
  return value;
}
function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text =element.innerText;
    return text;
}
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // Get random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  // console.log(alphabet,index);
  return alphabet;
}
