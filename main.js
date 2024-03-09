//Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

//Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyEnter)

//Callback Functions
function handleTryClick (event) {
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber')

    if (!inputNumber.value || inputNumber.value > 10 || inputNumber.value < 0) {
      alert('Escolha um número de 0 a 10')
    } else {
      if(Number(inputNumber.value)== randomNumber) {
        toggleScreen()
        document
          .querySelector(".screen2 h2")
          .innerText = `Acertou em ${xAttempts} tentativas`
      }
      inputNumber.value = ""
      xAttempts++
    }
}

function handleResetClick () {
  toggleScreen()
  xAttempts=1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function keyEnter (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}


