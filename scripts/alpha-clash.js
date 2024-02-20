// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

const artBoard = document.getElementById("art-board");
const modalBox = document.getElementById('modal-box')

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);
  // stop the game if press 'Esc'
  if (playerPressed === "Escape") {
    gameOver();
  }
  // current expected press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);
  // check match or not
  if (playerPressed === expectedAlphabet) {
    console.log("you got a point");
    const currentScore = getTextElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElementById("current-score", updateScore);

    // .......................option-2................................
    // update score
    // const currentScoreElement = document.getElementById('current-score')
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // increase the score number 1
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText= newScore;
    // .............................................................

    // start a new round
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lose a point");
    const currentLife = getTextElementValueById("current-life");
    const updateLife = currentLife - 1;
    const updateLifeParcent = (updateLife / 5) *100;
    artBoard.style.background =`linear-gradient(#FFFFFFB3 ${updateLifeParcent}%,red)`;

    setTextElementById("current-life", updateLife);
    if (updateLife === 0) {
      gameOver();
      // update final score
      const gameScore = getTextElementValueById("current-score");
      setTextElementById("game-score", gameScore);
      // clear the last selected alphabet
      const currentAlphabet = getElementTextById("current-alphabet");
      removeBackgroundColor(currentAlphabet);
    }
    // .......................option-2................................
    // const currentLifeElement = document.getElementById("current-life");
    // const currentScoreText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentScoreText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
    // ................................................................
  }
}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // step 1 :generate a random alphabet
  const alphabet = getRandomAlphabet();
  //    set randomly generate alphabet to the screen(show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  //   set background color
  setBackgroundColor(alphabet);
}
function play() {
  hideElementById("home-screen");
  hideElementById("score");
  showElementById("play-ground");
  // reset score and life
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);
  continueGame();
  artBoard.style.background= "linear-gradient(#FFFFFFB3 100%,red)"
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("score");
}

function modalOpen(event){
if(event.clientY < 20){
  modalBox.style.display = 'flex';
}
}
function modalColse(){
  modalBox.style.display = 'none';
}
document.body.onmousemove=modalOpen;