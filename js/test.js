buttonKamien = document.getElementById('button-rock');
buttonPapier = document.getElementById('button-paper');
buttonNozyce = document.getElementById('button-scissors');
buttonKamien.addEventListener('click', function () {
  buttonClicked('kamień');
});
buttonPapier.addEventListener('click', function () {
  buttonClicked('papier');
});
buttonNozyce.addEventListener('click', function () {
  buttonClicked('nożyce');
});





function displayResult(argPlayerMove, argComputerMove) {

    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else
      printMessage('Przegrywasz :(');
  }


  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce'
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }


  function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
  
    const playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerMove);
    console.log('ruch gracza to: ' + playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
    displayResult(playerMove, computerMove);
  }