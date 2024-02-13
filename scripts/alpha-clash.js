function play() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  const playGroundSection = document.getElementById("play-ground");
  playGroundSection.classList.remove("hidden");
  // generate a random alphabet
  const alphabet = getRandomAlphabet();
  console.log("Your Random Alphabet:", alphabet);
  //    set randomly generate alphabet to the screen(show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

//   set background color
 setBackgroundColor(alphabet);

}
