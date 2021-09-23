var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
buttonTest = document.getElementById('button-test');
buttonKamien = document.getElementById('button-rock');
buttonPapier = document.getElementById('button-paper');
buttonNozyce = document.getElementById('button-scissor');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonKamien.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPapier.addEventListener('click', function(){ buttonClicked('papier'); });
buttonNozyce.addEventListener('click', function(){ buttonClicked('nożyce'); });