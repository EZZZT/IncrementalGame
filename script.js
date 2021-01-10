"use strict";

// ON LOAD RESEARCHES SHOW UP THAT SHOULD ALREADY BE SAVED AS UNLOCKED IN USERS SAVE FILE ON LOAD

// Declares all global variables

var balance = 0;
var shops = 0;
var shopCost = 15;
var nextCostShop;
var businesses = 0;
var businessCost = 250;
var nextCostBusiness;
var conglomerates = 0;
var conglomerateCost = 3000;
var nextCostConglomerate;
var governments = 0;
var governmentCost = 25000;
var nextCostGovernment;
var researchAnalyze = false;
var researchClickOne = false;
var researchShopOne = false;
var researchShopTwo = false;
var researchBusinessOne = false;
var researchBusinessTwo = false;
var shopDiv = true;
var businessDiv = true;
var conglomerateDiv = true;
var governmentDiv = true;
var middleColumnDiv = true;
var researchAnalyzeDiv = true;
var researchClickOneDiv = true;
var researchShopOneDiv = true;
var researchShopTwoDiv = true;
var researchBusinessOneDiv = true;
var researchBusinessTwoDiv = true;
var resetModal = document.getElementById("resetModal");
var resetButton = document.getElementById("resetButton");
var resetClose = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");

// The function for showing new unlocks
function showUnlockedAreas() {
  if (balance >= 15 && shopDiv === true) {
    document.getElementById("divshop").style.display = "block";
    shopDiv = false;
  }
  if (balance >= 250 && businessDiv === true) {
    document.getElementById("divbusiness").style.display = "block";
    businessDiv = false;
  }
  if (balance >= 3000 && conglomerateDiv === true) {
    document.getElementById("divconglomerate").style.display = "block";
    conglomerateDiv = false;
  }
  if (balance >= 25000 && governmentDiv === true) {
    document.getElementById("divgovernment").style.display = "block";
    governmentDiv = false;
  }
  if (balance >= 50 && middleColumnDiv === true) {
    document.getElementById("middleColumn").style.display = "block";
    middleColumnDiv = true;
  }
  if (balance >= 50 && researchClickOneDiv === true) {
    document.getElementById("divResearchClick1").style.display = "block";
    researchClickOneDiv = false;
  }
  if (balance >= 100 && researchShopOneDiv === true) {
    document.getElementById("divResearchShop1").style.display = "block";
    researchShopOneDiv = false;
  }
  if (balance >= 175 && researchAnalyzeDiv === true) {
    document.getElementById("divResearchAnalyze").style.display = "block";
    researchAnalyzeDiv = false;
  }
  if (balance >= 750 && researchShopTwoDiv === true) {
    document.getElementById("divResearchShop2").style.display = "block";
    researchShopTwoDiv = false;
  }
  if (balance >= 1500 && researchBusinessOneDiv === true) {
    document.getElementById("divResearchBusiness1").style.display = "block";
    researchBusinessOneDiv = false;
  }
  if (balance >= 4000 && researchBusinessTwoDiv === true) {
    document.getElementById("divResearchBusiness2").style.display = "block";
    researchBusinessTwoDiv = false;
  }
}

// This loads users local storage save
function loadSave() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  shopDiv = true;
  businessDiv = true;
  conglomerateDiv = true;
  governmentDiv = true;
  middleColumnDiv = true;
  researchAnalyzeDiv = true;
  researchClickOneDiv = true;
  researchShopOneDiv = true;
  researchShopTwoDiv = true;
  researchBusinessOneDiv = true;
  researchBusinessTwoDiv = true;
  showUnlockedAreas();
  if (shopDiv === false) {
    document.getElementById("shopDiv").style.display = "block";
  }
  if (typeof savegame.balance !== "undefined") {
    balance = savegame.balance;
    document.getElementById("balance").innerHTML = balance.toLocaleString();
  }
  if (typeof savegame.shops !== "undefined") {
    shops = savegame.shops;
    document.getElementById("shops").innerHTML = shops.toLocaleString();
  }
  if (typeof savegame.nextCostShop !== "undefined") {
    nextCostShop = savegame.nextCostShop;
    document.getElementById(
      "shopCost"
    ).innerHTML = nextCostShop.toLocaleString();
  }
  if (typeof savegame.businesses !== "undefined") {
    businesses = savegame.businesses;
    document.getElementById(
      "businesses"
    ).innerHTML = businesses.toLocaleString();
  }
  if (typeof savegame.nextCostBusiness !== "undefined") {
    nextCostBusiness = savegame.nextCostBusiness;
    document.getElementById(
      "businessCost"
    ).innerHTML = nextCostBusiness.toLocaleString();
  }
  if (typeof savegame.conglomerates !== "undefined") {
    conglomerates = savegame.conglomerates;
    document.getElementById(
      "conglomerates"
    ).innerHTML = conglomerates.toLocaleString();
  }
  if (typeof savegame.nextCostConglomerate !== "undefined") {
    nextCostConglomerate = savegame.nextCostConglomerate;
    document.getElementById(
      "conglomerateCost"
    ).innerHTML = nextCostConglomerate.toLocaleString();
  }
  if (typeof savegame.governments !== "undefined") {
    governments = savegame.governments;
    document.getElementById(
      "governments"
    ).innerHTML = governments.toLocaleString();
  }
  if (typeof savegame.nextCostGovernment !== "undefined") {
    nextCostGovernment = savegame.nextCostGovernment;
    document.getElementById(
      "governmentCost"
    ).innerHTML = nextCostGovernment.toLocaleString();
  }
  if (typeof savegame.shops == "undefined" || savegame.shops == 0) {
    document.getElementById("shopCost").innerHTML = 15;
  }
  if (typeof savegame.businesses == "undefined" || savegame.businesses == 0) {
    document.getElementById("businessCost").innerHTML = 250;
  }
  if (
    typeof savegame.conglomerates == "undefined" ||
    savegame.conglomerates == 0
  ) {
    document.getElementById(
      "conglomerateCost"
    ).innerHTML = (3000).toLocaleString();
  }
  if (typeof savegame.governments == "undefined" || savegame.governments == 0) {
    document.getElementById(
      "governmentCost"
    ).innerHTML = (25000).toLocaleString();
  }
  if (typeof savegame.researchAnalyze !== "undefined") {
    researchAnalyze = savegame.researchAnalyze;
    if (researchAnalyze === true) {
      document.getElementById("researchAnalyze1").style.display = "none";
      document.getElementById("researchAnalyzeCost").style.display = "none";
      document.getElementById("totalIncomeCalculator").innerHTML =
        "Funds per second $" + savegame.totalIncome;
      document.getElementById("totalIncomeCalculator").style.display = "block";
    }
  }
  if (typeof savegame.researchClickOne !== "undefined") {
    researchClickOne = savegame.researchClickOne;
    if (researchClickOne === true) {
      document.getElementById("researchClick1").style.display = "none";
      document.getElementById("researchClick1Cost").style.display = "none";
    }
  }
  if (typeof savegame.researchShopOne !== "undefined") {
    researchShopOne = savegame.researchShopOne;
    if (researchShopOne === true) {
      document.getElementById("researchShop1").style.display = "none";
      document.getElementById("researchShop1Cost").style.display = "none";
    }
  }
  if (typeof savegame.researchShopTwo !== "undefined") {
    researchShopTwo = savegame.researchShopTwo;
    if (researchShopTwo === true) {
      document.getElementById("researchShop2").style.display = "none";
      document.getElementById("researchShop2Cost").style.display = "none";
    }
  }
  if (typeof savegame.researchBusinessOne !== "undefined") {
    researchBusinessOne = savegame.researchBusinessOne;
    if (researchBusinessOne === true) {
      document.getElementById("researchBusiness1").style.display = "none";
      document.getElementById("researchBusiness1Cost").style.display = "none";
    }
  }
  if (typeof savegame.researchBusinessTwo !== "undefined") {
    researchBusinessTwo = savegame.researchBusinessTwo;
    if (researchBusinessTwo === true) {
      document.getElementById("researchBusiness2").style.display = "none";
      document.getElementById("researchBusiness2Cost").style.display = "none";
    }
  }

  // This calculates time offline and adds balance equivalent to the income the user missed while offline
  if (typeof savegame.saveTime !== undefined) {
    var newTime = new Date();
    var newTimeLoaded = Date.parse(newTime);
    var saveTimeLoaded = Date.parse(savegame.saveTime);
    var diffTicks = Math.floor((newTime - saveTimeLoaded) / 1000);
    balance = balance + diffTicks * savegame.totalIncome;
  }
  showUnlockedAreas();
}

// Function for the work button
function addBalance(number) {
  balance = balance + number;
  document.getElementById("balance").innerHTML = balance.toLocaleString();
  showUnlockedAreas();
}

// Function to buy shops
function buyShop() {
  shopCost = Math.floor(15 * Math.pow(1.18, shops)); //works out the cost of this worker
  if (balance >= shopCost) {
    //checks that the player can afford the worker
    shops = shops + 1; //increases number of workers
    balance = balance - shopCost; //removes the balance spent
    document.getElementById("shops").innerHTML = shops.toLocaleString(); //updates the number of workers for the user
    document.getElementById("balance").innerHTML = balance.toLocaleString(); //updates the balance for the user
  }
  nextCostShop = Math.floor(15 * Math.pow(1.18, shops)); //works out the cost of the next worker
  document.getElementById("shopCost").innerHTML = nextCostShop.toLocaleString(); //updates the worker cost for the user
}

// Function to buy businesses
function buyBusiness() {
  businessCost = Math.floor(250 * Math.pow(1.18, businesses));
  if (balance >= businessCost) {
    businesses = businesses + 1;
    balance = balance - businessCost;
    document.getElementById(
      "businesses"
    ).innerHTML = businesses.toLocaleString();
    document.getElementById("balance").innerHTML = balance.toLocaleString();
  }
  nextCostBusiness = Math.floor(250 * Math.pow(1.18, businesses));
  document.getElementById(
    "businessCost"
  ).innerHTML = nextCostBusiness.toLocaleString();
}

// Function to buy conglomerates
function buyConglomerate() {
  conglomerateCost = Math.floor(3000 * Math.pow(1.18, conglomerates));
  if (balance >= conglomerateCost) {
    conglomerates = conglomerates + 1;
    balance = balance - conglomerateCost;
    document.getElementById(
      "conglomerates"
    ).innerHTML = conglomerates.toLocaleString();
    document.getElementById("balance").innerHTML = balance.toLocaleString();
  }
  nextCostConglomerate = Math.floor(3000 * Math.pow(1.31, conglomerates));
  document.getElementById(
    "conglomerateCost"
  ).innerHTML = nextCostConglomerate.toLocaleString();
}

// Function to buy governments
function buyGovernment() {
  governmentCost = Math.floor(25000 * Math.pow(1.18, governments));
  if (balance >= governmentCost) {
    governments = governments + 1;
    balance = balance - governmentCost;
    document.getElementById(
      "governments"
    ).innerHTML = governments.toLocaleString();
    document.getElementById("balance").innerHTML = balance.toLocaleString();
  }
  nextCostGovernment = Math.floor(25000 * Math.pow(1.29, governments));
  document.getElementById(
    "governmentCost"
  ).innerHTML = nextCostGovernment.toLocaleString();
}
function unlockResearchAnalyze() {
  if (balance >= 175) {
    balance = balance - 175;
    researchAnalyze = true;
    document.getElementById("divResearchAnalyze").style.display = "none";
    document.getElementById("totalIncomeCalculator").innerHTML =
      "Funds per second $" + totalIncome();
    document.getElementById("totalIncomeCalculator").style.display = "block";
  }
}
function unlockResearchClickOne() {
  if (balance >= 50) {
    balance = balance - 50;
    researchClickOne = true;
    document.getElementById("divResearchClick1").style.display = "none";
  }
}
function unlockResearchShopOne() {
  if (balance >= 100) {
    balance = balance - 100;
    researchShopOne = true;
    document.getElementById("divResearchShop1").style.display = "none";
  }
}

function unlockResearchShopTwo() {
  if (balance >= 750) {
    balance = balance - 750;
    researchShopTwo = true;
    document.getElementById("divResearchShop2").style.display = "none";
  }
}
function unlockResearchBusinessOne() {
  if (balance >= 1500) {
    balance = balance - 1500;
    researchBusinessOne = true;
    document.getElementById("divResearchBusiness1").style.display = "none";
  }
}
function unlockResearchBusinessTwo() {
  if (balance >= 4000) {
    balance = balance - 4000;
    researchBusinessTwo = true;
    document.getElementById("divResearchBusiness2").style.display = "none";
  }
}

// Function to delete users save and reset data to default
function reset() {
  localStorage.removeItem("save");
  balance = 0;
  document.getElementById("balance").innerHTML = 0;
  shops = 0;
  document.getElementById("shops").innerHTML = shops;
  document.getElementById("shopCost").innerHTML = 15;
  businesses = 0;
  document.getElementById("businesses").innerHTML = businesses;
  document.getElementById("businessCost").innerHTML = 250;
  conglomerates = 0;
  document.getElementById("conglomerates").innerHTML = conglomerates;
  document.getElementById(
    "conglomerateCost"
  ).innerHTML = (3000).toLocaleString();
  governments = 0;
  document.getElementById("governments").innerHTML = governments;
  document.getElementById(
    "governmentCost"
  ).innerHTML = (25000).toLocaleString();
  resetModal.style.display = "none";
  researchAnalyze = false;
  researchClickOne = false;
  researchShopOne = false;
  researchShopTwo = false;
  researchBusinessOne = false;
  researchBusinessTwo = false;
  shopDiv = true;
  businessDiv = true;
  conglomerateDiv = true;
  governmentDiv = true;
  middleColumnDiv = true;
  researchAnalyzeDiv = true;
  researchClickOneDiv = true;
  researchShopOneDiv = true;
  researchShopTwoDiv = true;
  researchBusinessOneDiv = true;
  researchBusinessTwoDiv = true;
  document.getElementById("divshop").style.display = "none";
  document.getElementById("divbusiness").style.display = "none";
  document.getElementById("divconglomerate").style.display = "none";
  document.getElementById("divgovernment").style.display = "none";
  document.getElementById("middleColumn").style.display = "none";
  document.getElementById("divResearchAnalyze").style.display = "none";
  document.getElementById("divResearchClick1").style.display = "none";
  document.getElementById("divResearchShop1").style.display = "none";
  document.getElementById("divResearchShop2").style.display = "none";
  document.getElementById("divResearchBusiness1").style.display = "none";
  document.getElementById("divResearchBusiness2").style.display = "none";
}

// Functions to manage reset button popup
resetButton.onclick = function () {
  resetModal.style.display = "block";
};
resetClose.onclick = function () {
  resetModal.style.display = "none";
};
cancel.onclick = function () {
  resetModal.style.display = "none";
};

// Functions to calculate income
function workIncome() {
  var workCalc = 1;
  if (researchClickOne === true) {
    workCalc = workCalc * 2;
  }
  return addBalance(workCalc);
}
function shopIncome() {
  var shopCalc = shops * 1;
  if (researchShopOne === true) {
    shopCalc = shopCalc * 1.25;
  }
  if (researchShopTwo === true) {
    shopCalc = shopCalc * 2;
  }
  return shopCalc;
}
function businessIncome() {
  var businessCalc = businesses * 10;
  if (researchBusinessOne === true) {
    businessCalc = businessCalc * 1.25;
  }
  if (researchBusinessTwo === true) {
    businessCalc = businessCalc * 2;
  }
  return businessCalc;
}
function conglomerateIncome() {
  var conglomerateCalc = conglomerates * 100;
  return conglomerateCalc;
}
function governmentIncome() {
  var governmentCalc = governments * 1000;
  return governmentCalc;
}
function totalIncome() {
  var calcIncome =
    shopIncome() + businessIncome() + conglomerateIncome() + governmentIncome();
  document.getElementById("totalIncomeCalculator").innerHTML =
    "Funds per second $" + calcIncome;
  return calcIncome;
}

// Function to save game data locally to an object
function save() {
  var saveTime = new Date();
  var saveObject = {
    balance: balance,
    shops: shops,
    nextCostShop: nextCostShop,
    businesses: businesses,
    nextCostBusiness: nextCostBusiness,
    conglomerates: conglomerates,
    nextCostConglomerate: nextCostConglomerate,
    governments: governments,
    nextCostGovernment: nextCostGovernment,
    saveTime: saveTime,
    totalIncome: totalIncome(),
    researchAnalyze: researchAnalyze,
    researchClickOne: researchClickOne,
    researchShopOne: researchShopOne,
    researchShopTwo: researchShopTwo,
    researchBusinessOne: researchBusinessOne,
    researchBusinessTwo: researchBusinessTwo,
  };
  localStorage.setItem("save", JSON.stringify(saveObject));
}

// Function to add balance every 1000ms(1 second)
window.setInterval(function () {
  addBalance(totalIncome());
  save();
}, 1000);
