var r = document.getElementById('#red');
var g = document.querySelector('#green');
var b = document.querySelector('#blue');
var outputR = document.querySelector('#outputR');
var outputG = document.querySelector('#outputG');
var outputB = document.querySelector('#outputB');



function changeRed(newVal) {
  outputR.value = newVal;
  setColor();
}

function changeGreen(newVal) {
  outputG.value = newVal;
  setColor();
}

function changeBlue(newVal) {
  outputB.value = newVal;
  setColor();
}

function setColor() {
  var redValue = outputR.value;
  if (outputR.value === '') {
    var redValue = 0;
  } else {
    var redValue = outputR.value;
  }

  if (outputG.value === '') {
    var greenValue = 0;
  } else {
    var greenValue = outputG.value;
  }
  if (outputB.value === '') {
    var blueValue = 0;
  } else {
    var blueValue = outputB.value;
  }
  var quadrado = document.querySelector('#quadrado');
  quadrado.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
  console.log('rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')')
}