//console.log("The script is loaded");

/*
    1. as the page laods, we need to "wire-up" the buttons
    2. also, prepare a random number as the game starts
    3. as the user submits their answer:
        3a. We will take the input value, and compare it against our random number.
        3b. If the number matched, we will show the "win" visuals
        3c. if it doesnt match, we will show to "lose" visuals
        3d. if the user did'nt submit a number...
            3d-1: Alert the user that the input is invalid
        3e. keep count of their attempts
    4. if the user clicks the restart button:
        4a. clear off win/ose visual indications
        4b. reset the counter for number of attempts
        4c. Clear off previous inputs

    How to change the games visual?
        - We can point to the elements, and toggle the "hide" class
        - We also need to change the class b/w "win" and "lose"
*/
const generateRandomNumberWithinRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const submitNumber = function (event) {
    event.preventDefault()
    const numberTextInput = document.querySelector('#numberTextInput');
    const submittedNumber = Number(numberTextInput.value);
    window.attempts += 1;
    //window.attempts++;
    
    if(Number.isNaN(submittedNumber)){
        window.alert('Please enter a number!');
        return;
    }

    if(submittedNumber === window.randomNumber){
        //console.log('you win');
        updateUIWithStatus('win');
    }else{
        //console.log('you lose');
        updateUIWithStatus('lose');
    }


//     if(submittedNumber === 1){
//         console.log('you entered 1');
//     }
//     else {
//         console.log('you entered something else');
//     }
 }

const restartGame = function(){
    const min = 1;
    const max = 5;
    window.randomNumber = generateRandomNumberWithinRange(min,max);
    window.attempts = 0;

    const inputLabel = document.querySelector('span.input-label');
    const labelText = inputLabel.textContent;
    const newLable = labelText.replace('{x}', min).replace('{y}', max);
    inputLabel.textContent = newLable;

    const topBorder=document.querySelector('.feedback-divider:first-child');
    const bottomBorder=document.querySelector('.feedback-divider:last-child');
    const statusText=document.querySelector('.feedback-text .status');
    const attemptsText =document.querySelector('.attempts')

    topBorder.classList.add('hide');
    bottomBorder.classList.add('hide');
    statusText.classList.add('hide');
    attemptsText.classList.add('hide');

} 

const updateUIWithStatus = function(status){ 
    //"status will be either 'win' or 'lose' "

    const topBorder=document.querySelector('.feedback-divider:first-child');
    const bottomBorder=document.querySelector('.feedback-divider:last-child');
    const statusText=document.querySelector('.feedback-text .status');
    const attemptsText=document.querySelector('.attempts');
    let feedback;

    topBorder.classList.remove('hide','win','lose');
    bottomBorder.classList.remove('hide','win','lose');
    statusText.classList.remove('hide','win','lose');
    attemptsText.classList.remove('hide');

    topBorder.classList.add(status);
    bottomBorder.classList.add(status);
    statusText.classList.add(status);

    //attemptsText.textContent=attemptsText.textContent.replace('{x}',window.attempts);

    const attemptsSentence=`You tried ${window.attempts} times${window.attempts ===1 ? '' : 's'}`;
    attemptsText.textContent=attemptsSentence;

    if (status==='win'){
        feedback='You Win!';
    
    }else if (status==='lose'){
        feedback='You Lose!';

    }
statusText.textContent=feedback;
}

document.querySelector('#taskForm').addEventListener('submit', submitNumber);
document.querySelector('#taskForm').addEventListener('reset', restartGame);
restartGame();