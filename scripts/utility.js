function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    // Get random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(alphabet,index);
    return alphabet;

}

function setBackgroundColor(elementId){
     const element = document.getElementById(elementId);
     element.classList.add('bg-orange-400');
}