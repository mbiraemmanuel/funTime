//Challenge 1: Age in Days

function ageInDays() {
  var birthYear = prompt("What year were you born?")
  var ageInDayss = (2020 - birthYear)* 365;
  // console.log(ageInDayss);
  var h1  = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.')
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('result').appendChild(h1);
  console.log(ageInDayss)
}

function reset() {
  document.getElementById('ageInDays').remove();
}

function genImage() {
  var image = document.createElement('img');
  var div = document.getElementById('image');
  image.src = "https://picsum.photos/200/200";
  div.appendChild(image);
}

function rpsGame(yourChoice) {
  // console.log(yourChoice);
  var rock = document.getElementById('rock').src
  var paper = document.getElementById('paper').src
  var scissors = document.getElementById('scissors').src
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  function rand() {
    num = Math.floor(Math.random() * 3 );
    switch(num){
      case 0 :
        botChoice = 'rock';
        break;
      case 1:
        botChoice = 'paper';
        break;
      case 2:
        botChoice = 'scissors';
        break;
      default:
        botChoice = 'scissors'
    }
  }

  rand();
  console.log(botChoice);
  var winner;
  var bot = document.getElementById(botChoice);
  console.log(bot);

  function decideWinner(humanChoice, botChoice){
    if (humanChoice == 'rock' && botChoice == 'paper'){
      winner = 'bot'
    }
    else if (humanChoice == 'rock' && botChoice == 'scissors'){
      winner = 'human'
    }
    else if(humanChoice == 'scissors' && botChoice == 'paper'){
      winner = 'human'
    }
    else if (humanChoice == botChoice) {
      winner = 'tie'
    }
    else if (botChoice == 'rock' && humanChoice == 'paper'){
      winner = 'human'
    }
    else if(botChoice == 'scissors' && humanChoice == 'paper'){
      winner = 'bot'
    }
    else if (botChoice == 'rock' && humanChoice == 'scissors'){
      winner = 'bot'
    }
  }

  decideWinner(humanChoice, botChoice);

  var message = {
    text : '',
    color : '',
  };
  // console.log(winner);

  if (winner == 'human'){
    message.text = "You Won!!"
    message.color = 'green'
  }
  else if(winner == 'tie') {
    message.text ="You Tied!!"
    message.color = 'yellow'
  }
  else if(winner == 'bot'){
    message.text = "You Lost!!"
    message.color = 'red'
  }
  // console.log(message);
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var h1 = document.createElement('h1');
  h1.style.color = message.color;
  h1.style.marginTop = "50px";
  h1.setAttribute('onClick', 'resetGame')
  text = document.createTextNode(message.text)
  h1.appendChild(text)

  var humanDiv = document.createElement('div')
  var textDiv = document.createElement('div')
  var botDiv = document.createElement('div')

  humanDiv.innerHTML = "<img src='" + yourChoice.src + "'>"
  humanDiv.style.boxShadow = "0 10px 50px " + message.color
  humanDiv.style.padding = "30px";
  textDiv.appendChild(h1)
  botDiv.innerHTML = "<img src='" + bot.src + "'>"
  botDiv.style.marginTop = "40px";
  // botDiv.style.boxShadow = "0 10px 50px " + message.color

  container = document.getElementById('cont-2');

  container.appendChild(humanDiv)
  container.appendChild(textDiv)
  container.appendChild(botDiv)
}

function restGame(){

}


// Challenge 4 : Change the color of all Buttons


// get all Buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
// var buttonState = {
//   button
// }

function buttonColorChange(yourChoice){
  // console.log(yourChoice.value);
  // color = yourChoice.value;
  if (yourChoice.value != "reset" && yourChoice.value != "random"){
    color = yourChoice.value;
    for(let i = 0; i < all_buttons.length; ++i){
      all_buttons[i].style.background = color;
    }
  }
  else if(yourChoice.value == "reset"){
    for(let i = 0; i < all_buttons.length; ++i){
      all_buttons[i].style.background = "";
    }
  }
  else if(yourChoice.value == "random"){
    console.log(yourChoice.value)
    var number = Math.floor(Math.random()*4);
    console.log(number);
    switch (number) {
      case 0:
        for(let i = 0; i < all_buttons.length; ++i){
          all_buttons[i].style.background = "blue";
        }
        break;
      case 1:
        for(let i = 0; i < all_buttons.length; ++i){
          all_buttons[i].style.background = "red";
        }
        break;
      case 2:
        for(let i = 0; i < all_buttons.length; ++i){
          all_buttons[i].style.background = "yellow";
        }
        break;
      case 3:
        for(let i = 0; i < all_buttons.length; ++i){
          all_buttons[i].style.background = "green";
        }
        break;
      default:

    }
  }
  // console.log(all_buttons.style.background);
}

//challenge 5: BlackJack
let BlackJackGame = {
  'player' : {'scoreSpan' : '#player-score', 'div': '#player-box', 'score' : 0, 'wins': 0, 'losses' : 0, 'draws' : 0},
  'dealer' : {'scoreSpan' : '#dealer-score-box', 'div': '#dealer-box', 'score' : 0, /*'wins': 0, 'losses' : 0, 'draws' : 0*/},
  'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'],
  'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'K':10, 'Q':10, 'A':[1,11]
},
  'isStand' : false,
  'turnsOver' : false,
}

const PLAYER = BlackJackGame['player'];
const DEALER = BlackJackGame['dealer'];

console.log();

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3')

document.querySelector("#blackjack-hit").addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand').addEventListener('click', dealerLogic);
// console.log(cards[2])

function blackjackHit() {
  if(BlackJackGame['isStand'] === false){
    let card = randomCard()
    showCard(PLAYER, card);
    updateScore(card, PLAYER);
    showScore(PLAYER)
  }

}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function dealerLogic() {
  BlackJackGame['isStand'] = true;
  while(DEALER['score'] < 16 && BlackJackGame['isStand'] === true){
    let card = randomCard();
    showCard(DEALER, card);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000)
  }

  BlackJackGame['turnsOver'] = true;
  showResult(computeWinner());
}

function showCard(activePlayer, card){
  if(activePlayer['score'] <= 21){
    let cardImage = document.createElement('img')
    cardImage.src = `static/images/${card}.png`
    cardImage.style.height = "40%"
    cardImage.style.objectFit = "contain"
    cardImage.style.margin = "5px"
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    hitSound.play()
  }

}

function blackjackDeal() {
  if (BlackJackGame['turnsOver'] == true){
    let playerImages = document.querySelector('#player-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    console.log(playerImages);
    for(let i = 0; i < playerImages.length; ++i){
      playerImages[i].remove();
    }
    for(let i = 0; i < dealerImages.length; ++i){
      dealerImages[i].remove();
    }
    PLAYER['score'] = 0;
    DEALER['score'] = 0;

    BlackJackGame['isStand'] = false;
    document.querySelector('#dealer-score-box').textContent = 0
    document.querySelector('#dealer-score-box').style.color = "white"
    document.querySelector('#player-score').textContent = 0
    document.querySelector('#player-score').style.color = "white"
    document.querySelector('#blackjack-result').textContent = "Let's Play"
    document.querySelector('#blackjack-result').style.color = "black"
  }
}

function randomCard() {
  var randomIndex =  Math.floor(Math.random() * 13);
  return BlackJackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer){
  //if adding 11 keeps me below 21, add 11, otherwise add 1
  if (card === "A"){
    if(activePlayer['score'] + BlackJackGame['cardsMap'][card][1] <= 21){
      activePlayer['score'] += parseInt(BlackJackGame['cardsMap'][card][1]);
    }
    else{
      activePlayer['score'] += parseInt(BlackJackGame['cardsMap'][card][0]);
    }
  }
  else{
    activePlayer['score'] += BlackJackGame['cardsMap'][card];
  }
}

function showScore(activePlayer){
  if(activePlayer['score'] > 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = "Bust!"
    document.querySelector(activePlayer['scoreSpan']).style.color = "red"
  }
  else{
    document.querySelector(activePlayer['scoreSpan']).innerHTML = activePlayer['score']
  }
}


function computeWinner() {
  let winner;
  if(PLAYER['score'] <= 21 ){
    // if higher score that dealer or when dealer bursts
    if(PLAYER['score'] > DEALER['score'] || DEALER['score'] > 21){
      winner = PLAYER;
      document.querySelector('#result').textContent = "You Win";
    }
    else if(PLAYER['score'] < DEALER['score']){
      winner = DEALER
      document.querySelector('#result').textContent = "You Lost";
    }
    else if (PLAYER['score'] === PLAYER['score']) {
      document.querySelector('#result').textContent = "Its a Tie";
      console.log("Draw")
    }
  }
  else if (PLAYER['score'] > 21 && DEALER['score'] <= 21){
    winner = DEALER;
    document.querySelector('#result').textContent = "You Lost";
  }
  else if (PLAYER['score'] > 21 && DEALER['score']) {
    console.log("both lost");
  }
  console.log("winner is" + winner)
  return winner;
}

function showResult(winner){
  let message, messageColor;
  if (BlackJackGame['turnsOver'] === true){
    if(winner == PLAYER ){
      PLAYER['wins'] ++;
      // DEALER['losses'] ++;
      message= "You Won";
      messageColor = "green"
      winSound.play()
    }else if (winner == DEALER) {
      // DEALER['wins'] ++;
      PLAYER['losses'] ++;
      message = "You lost";
      messageColor = "red"
      lossSound.play();
    }else {
      // DEALER['draws'] ++;
      PLAYER['draws'] ++;
      message = "You Drew";
      messageColor = 'black'
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
    document.querySelector('#wins').textContent = PLAYER['wins'];
    document.querySelector('#losses').textContent = PLAYER['losses'];
    document.querySelector('#draws').textContent = PLAYER['draws'];
  }
}
