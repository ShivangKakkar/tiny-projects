let turnOne = true
let winner = false
let limit = 100

let headOne = document.querySelector(`.player-1 .player-heading`)
let headTwo = document.querySelector(`.player-2 .player-heading`)
let headOneVal = headOne.innerHTML
let headTwoVal = headTwo.innerHTML

let playerOneTotal = 0
let playerTwoTotal = 0
let playerOneCurrent = 0
let playerTwoCurrent = 0

let playerOneTotalEl = document.querySelector('.player-1 .total-score')
let playerTwoTotalEl = document.querySelector('.player-2 .total-score')
let playerOneCurrentEl = document.querySelector(
  '.player-1 .current .current-score'
)
let playerTwoCurrentEl = document.querySelector(
  '.player-2 .current .current-score'
)

let dice = document.querySelector('.dice')
let newGame = document.querySelector('.btn-new')
let roll = document.querySelector('.btn-roll')
let hold = document.querySelector('.btn-hold')

roll.addEventListener('click', () => {
  if (winner) return
  let num = Math.floor(Math.random() * 6 + 1)
  dice.src = `images/dice-${num}.png`
  if (num === 1) {
    if (turnOne) {
      playerOneCurrent = 0
    } else {
      playerTwoCurrent = 0
    }
    updateValues()
    changeTurn()
    return
  }
  if (turnOne) {
    playerOneCurrent += num
  } else {
    playerTwoCurrent += num
  }
  updateValues()
})

newGame.addEventListener('click', () => {
  reset()
})

hold.addEventListener('click', () => {
  if (winner) return
  if (turnOne) {
    playerOneTotal += playerOneCurrent
    playerOneCurrent = 0
  } else {
    playerTwoTotal += playerTwoCurrent
    playerTwoCurrent = 0
  }
  updateValues()
  let won = checkWinner()
  if (won) return
  changeTurn()
})

function setTurn() {
  // dice.style.display = 'none'
  let firstBullet = document.querySelector(`.bullet-${turnOne ? 1 : 2}`)
  let otherBullet = document.querySelector(`.bullet-${turnOne ? 2 : 1}`)
  firstBullet.style.display = 'initial'
  otherBullet.style.display = 'none'
}

function changeTurn() {
  turnOne = turnOne ? false : true
  setTurn()
}

function reset() {
  winner = false
  playerOneTotal = 0
  playerTwoTotal = 0
  playerOneCurrent = 0
  playerTwoCurrent = 0
  headOne.innerHTML = headOneVal
  headTwo.innerHTML = headTwoVal
  updateValues()
}

function updateValues() {
  playerOneTotalEl.innerHTML = playerOneTotal
  playerTwoTotalEl.innerHTML = playerTwoTotal
  playerOneCurrentEl.innerHTML = playerOneCurrent
  playerTwoCurrentEl.innerHTML = playerTwoCurrent
}

function checkWinner() {
  let total = turnOne ? playerOneTotal : playerTwoTotal
  if (total >= limit) {
    let head = turnOne ? headOne : headTwo
    head.innerHTML = 'Winner !'
    console.log('WON')
    winner = true
  }
  return winner
}

setTurn()
