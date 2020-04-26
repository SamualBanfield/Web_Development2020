let counterDOM = document.getElementById("counter");
let noteRateDOM = document.getElementById("noteRate");
let clicker = document.getElementById("clicker");
let clickUpgradeDOM = document.getElementById("clickUpgrade");
let rateUpgradeDOM = document.getElementById("rateUpgrade");
let clickPriceDOM = document.getElementById("clickPrice");
let ratePriceDOM = document.getElementById("ratePrice");

let count = Number(counterDOM.innerHTML);
let noteRate = Number(noteRateDOM.innerHTML);
let clickPrice = Number(clickPriceDOM.innerHTML);
let ratePrice = Number(ratePriceDOM.innerHTML);
// How much a click is worth
let clickPower = 1;
// Rate of Automated clicks
let clickRate = 0;
// Check to determion if the player can buy a thing.
let purchasingAbility = false;

rateUpgradeDOM.addEventListener('click', rateUpgrade);
clickUpgradeDOM.addEventListener('click', upgradeClickPower);
clicker.addEventListener('click', addToCount);

function addToCount() {
  // Removing commas from counterDOM/ Reading it in
  counterDOM.innerHTML = parseFloat(counterDOM.innerHTML.replace(/,/g, ''))
  let counter = Number(counterDOM.innerHTML);
  let newNum = counter + clickPower;
  counterDOM.innerHTML = addCommas(newNum);
  console.log('Added to count')
}

// For adding commas every 3 digits
function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// mousing over the box will check your current points against the cost
function checking(buttonDOM) {
  button = buttonDOM;
  currentCount = Number(document.getElementById("counter").innerHTML);
  currentCost = Number(buttonDOM.getElementsByTagName("div")[3].innerHTML);
  if (currentCount < currentCost) {
    notAllowed(button);
  }
  else {
    purchasingAbility = true;
  }
}

function notAllowed(button) {
  button.style.opacity = 0.6;
  button.style.cursor = 'not-allowed';
}

// When leaving the box it will return to its normal values
function defaulting(buttonDOM) {
  button = buttonDOM;
  button.style.opacity = 1;
  button.style.cursor = 'pointer';
  purchasingAbility = false;
}


function upgradeClickPower() {
  if (purchasingAbility == true) {
    clickPower += 1;
    counterDOM.innerHTML -= currentCost;
    currentCost += 100;
    clickPriceDOM.innerHTML = currentCost;
    purchasingAbility = false;
    console.log('Purchased Click Power')
  }
}

function rateUpgrade() {
  if (purchasingAbility == true) {
    clickRate += 0.1;
    clickRate = Number(clickRate.toFixed(2));
    noteRateDOM.innerHTML = clickRate;
    counterDOM.innerHTML -= currentCost;
    currentCost += 50;
    ratePriceDOM.innerHTML = currentCost;
    purchasingAbility = false;
    console.log('Purchased Rate Upgrade')
    updateAuto();
  }
}

function updateAuto() {
  clearInterval();
  let timeout = (10 / clickRate) * 100;
  timeout = Number(timeout.toFixed(2));
  setInterval(addToCount, timeout);
}