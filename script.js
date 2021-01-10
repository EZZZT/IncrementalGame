'use strict';

// Declares all global variables

var balance = 0;
var shops = 0;
var shopCost = 10;
var nextCostShop;
var businesses = 0;
var businessCost = 100;
var nextCostBusiness;
var conglomerates = 0;
var conglomerateCost = 1000;
var nextCostConglomerate;
var governments = 0;
var governmentCost = 10000;
var nextCostGovernment;
var researchOne = false;
var researchTwo = false;
var researchThree = false;
var researchFour = false;
var shopDiv = true;
var businessDiv = true;
var conglomerateDiv = true;
var governmentDiv = true;
var middleColumnDiv = true;
var researchOneDiv = true;
var researchTwoDiv = true;
var researchThreeDiv = true;
var researchFourDiv = true;
var resetModal = document.getElementById("resetModal");
var resetButton = document.getElementById("resetButton");
var resetClose = document.getElementsByClassName("close")[0];
var cancel = document.getElementById('cancel')

// The function for showing new unlocks
const showUnlockedAreas = () => {
    if (balance >= 10 && shopDiv === true) {
      document.getElementById('divshop').style.display = 'block';
      shopDiv = false
    }
    if (balance >= 100 && businessDiv === true) {
      document.getElementById('divbusiness').style.display = 'block';
      businessDiv = false
    }
    if (balance >= 1000 && conglomerateDiv === true) {
      document.getElementById('divconglomerate').style.display = 'block';
      conglomerateDiv = false
    }
    if (balance >= 10000 && governmentDiv === true) {
      document.getElementById('divgovernment').style.display = 'block';
      governmentDiv = false
    }
    if (balance >= 175 && middleColumnDiv === true) {
      document.getElementById('middleColumn').style.display = 'block';
      middleColumnDiv = true;
    }
    if (balance >= 175 && researchOneDiv === true) {
      document.getElementById('divresearch1').style.display = 'block';
      researchOneDiv = false;
    }
    if (balance >= 750 && researchTwoDiv === true) {
      document.getElementById('divresearch2').style.display = 'block';
      researchTwoDiv = false;
    }
    if (balance >= 1000 && researchThreeDiv === true) {
      document.getElementById('divresearch3').style.display = 'block';
      researchThreeDiv = false;
    }
    if (balance >= 4000 && researchFourDiv === true) {
      document.getElementById('divresearch4').style.display = 'block';
      researchFourDiv = false;
    }
}

// This loads users local storage save
 const loadSave = () => {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.balance !== "undefined") {
    balance = savegame.balance;
    document.getElementById('balance').innerHTML = balance;
  }
  if (typeof savegame.shops !== "undefined") {
    shops = savegame.shops; 
    document.getElementById('shops').innerHTML = shops;
  }
  if (typeof savegame.nextCostShop !== "undefined") {
    nextCostShop = savegame.nextCostShop;
    document.getElementById('shopCost').innerHTML = nextCostShop;
  } 
  if (typeof savegame.businesses!== "undefined") {
    businesses = savegame.businesses;
    document.getElementById('businesses').innerHTML = businesses;  
  }
  if (typeof savegame.nextCostBusiness !== "undefined") {
    nextCostBusiness = savegame.nextCostBusiness;
    document.getElementById('businessCost').innerHTML = nextCostBusiness;
  }  
  if (typeof savegame.conglomerates !== "undefined") {
    conglomerates = savegame.conglomerates;
    document.getElementById('conglomerates').innerHTML = conglomerates;
  }
  if (typeof savegame.nextCostConglomerate !== "undefined") {
    nextCostConglomerate = savegame.nextCostConglomerate;
    document.getElementById('conglomerateCost').innerHTML = nextCostConglomerate;
  }
  if (typeof savegame.governments !== "undefined") {
    governments = savegame.governments;
    document.getElementById('governments').innerHTML = governments;  
  }
  if (typeof savegame.nextCostGovernment !== "undefined") {
    nextCostGovernment = savegame.nextCostGovernment;
    document.getElementById('governmentCost').innerHTML = nextCostGovernment;  
  }
  if (typeof savegame.shops == 'undefined' || savegame.shops == 0) {
    document.getElementById('shopCost').innerHTML = 10;
  }
  if (typeof savegame.businesses == 'undefined' || savegame.businesses == 0) {
    document.getElementById('businessCost').innerHTML = 100;
  }
  if (typeof savegame.conglomerates == 'undefined' || savegame.conglomerates == 0) {
    document.getElementById('conglomerateCost').innerHTML = 1000;
  }
  if (typeof savegame.governments == 'undefined' || savegame.governments == 0) {
    document.getElementById('governmentCost').innerHTML = 10000;
  }
  if (typeof savegame.researchOne !== 'undefined') {
   researchOne = savegame.researchOne
   if (researchOne === true) {
    document.getElementById('research1').disabled = true;
    document.getElementById('research1cost').innerHTML = ' Purchased';
   }
  }
  if (typeof savegame.researchTwo !== 'undefined') {
   researchTwo = savegame.researchTwo
   if (researchTwo === true) {
    document.getElementById('research2').disabled = true;
    document.getElementById('research2cost').innerHTML = ' Purchased';
   }
  }
  if (typeof savegame.researchThree !== 'undefined') {
   researchThree = savegame.researchThree
   if (researchThree === true) {
    document.getElementById('research3').disabled = true;
    document.getElementById('research3cost').innerHTML = ' Purchased';
   }
  }
  if (typeof savegame.researchFour !== 'undefined') {
   researchFour = savegame.researchFour
   if (researchFour === true) {
    document.getElementById('research4').disabled = true;
    document.getElementById('research4cost').innerHTML = ' Purchased';
   }
  }
  
  shopDiv = true
  businessDiv = true
  conglomerateDiv = true
  governmentDiv = true
  middleColumnDiv = true
  researchOneDiv = true
  researchTwoDiv = true
  researchThreeDiv = true
  researchFourDiv = true

  // This calculates time offline and adds balance equivalent to the income the user missed while offline
  if (typeof savegame.saveTime !== undefined) {
    var newTime = new Date();
    var newTimeLoaded = Date.parse(newTime);
    var saveTimeLoaded = Date.parse(savegame.saveTime);
    var diffTicks = Math.floor((newTime - saveTimeLoaded) / 1000) ;
    balance = balance + (diffTicks * savegame.totalIncome)
  }
  showUnlockedAreas()
}

// Function for the work button
const addBalance = number => {
  balance = balance + number
  document.getElementById('balance').innerHTML = balance;
  /*function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  var funds = numberWithCommas(balance)
  document.getElementById(`balance`).innerHTML = funds */
  showUnlockedAreas()
}

// Function to buy shops
const buyShop = () => {
    shopCost = Math.floor(10 * Math.pow(1.2,shops));     //works out the cost of this worker
    if(balance >= shopCost){                                   //checks that the player can afford the worker
        shops = shops + 1;                                   //increases number of workers
    	balance = balance - shopCost;                          //removes the balance spent
        document.getElementById('shops').innerHTML = shops;  //updates the number of workers for the user
        document.getElementById('balance').innerHTML = balance;  //updates the balance for the user
    };
     nextCostShop = Math.floor(10 * Math.pow(1.2,shops));       //works out the cost of the next worker
    document.getElementById('shopCost').innerHTML = nextCostShop;  //updates the worker cost for the user
    
};

// Function to buy businesses
const buyBusiness = () => {
    businessCost = Math.floor(100 * Math.pow(1.2,businesses));   
    if(balance >= businessCost){                                  
        businesses = businesses + 1;                                  
    	balance = balance - businessCost;                          
        document.getElementById('businesses').innerHTML = businesses;  
        document.getElementById('balance').innerHTML = balance;  
    };
    nextCostBusiness = Math.floor(100 * Math.pow(1.2,businesses));       
    document.getElementById('businessCost').innerHTML = nextCostBusiness;
   
};

// Function to buy conglomerates
const buyConglomerate = () => {
    conglomerateCost = Math.floor(1000 * Math.pow(1.2,conglomerates));   
    if(balance >= conglomerateCost){                                  
        conglomerates = conglomerates + 1;                                  
    	balance = balance - conglomerateCost;                          
        document.getElementById('conglomerates').innerHTML = conglomerates;  
        document.getElementById('balance').innerHTML = balance;  
    };
    nextCostConglomerate = Math.floor(1000 * Math.pow(1.2,conglomerates));       
    document.getElementById('conglomerateCost').innerHTML = nextCostConglomerate;
    
};

// Function to buy governments
const buyGovernment = () => {
    governmentCost = Math.floor(10000 * Math.pow(1.2,governments));   
    if(balance >= governmentCost){                                  
        governments = governments + 1;                                  
    	balance = balance - governmentCost;                          
        document.getElementById('governments').innerHTML = governments;  
        document.getElementById('balance').innerHTML = balance;  
    };
    nextCostGovernment = Math.floor(10000 * Math.pow(1.2,governments));       
    document.getElementById('governmentCost').innerHTML = nextCostGovernment;
    
};

const unlockResearchOne = () => {
  if(balance >= 175) {
    balance = balance - 175
    researchOne = true
    document.getElementById('research1').disabled = true;
    document.getElementById('research1cost').innerHTML = ' Purchased';
  }
};

const unlockResearchTwo = () => {
  if(balance >= 750) {
    balance = balance - 750
    researchTwo = true
    document.getElementById('research2').disabled = true;
    document.getElementById('research2cost').innerHTML = ' Purchased';
  }
}
const unlockResearchThree = () => {
  if(balance >= 1000) {
    balance = balance - 1000
    researchThree = true
    document.getElementById('research3').disabled = true;
    document.getElementById('research3cost').innerHTML = ' Purchased';
  }
}
const unlockResearchFour = () => {
  if(balance >= 4000) {
    balance = balance - 4000
    researchFour = true
    document.getElementById('research4').disabled = true;
    document.getElementById('research4cost').innerHTML = ' Purchased';
  }
}

// Function to delete users save and reset data to default
const reset = () => {
  localStorage.removeItem("save")
  balance = 0
  document.getElementById('balance').innerHTML = 0
  shops = 0
  document.getElementById('shops').innerHTML = shops; 
  document.getElementById('shopCost').innerHTML = 10
  businesses = 0
  document.getElementById('businesses').innerHTML = businesses; 
  document.getElementById('businessCost').innerHTML = 100
  conglomerates = 0
  document.getElementById('conglomerates').innerHTML = conglomerates; 
  document.getElementById('conglomerateCost').innerHTML = 1000
  governments = 0
  document.getElementById('governments').innerHTML = governments; 
  document.getElementById('governmentCost').innerHTML = 10000
  resetModal.style.display = "none";
  researchOne = false
  researchTwo = false
  researchThree = false
  researchFour = false
  shopDiv = true
  businessDiv = true
  conglomerateDiv = true
  governmentDiv = true
  middleColumnDiv = true
  researchOneDiv = true
  researchTwoDiv = true
  researchThreeDiv = true
  researchFourDiv = true
  document.getElementById('divshop').style.display = 'none';
  document.getElementById('divbusiness').style.display = 'none';
  document.getElementById('divconglomerate').style.display = 'none';
  document.getElementById('divgovernment').style.display = 'none';
  document.getElementById('middleColumn').style.display = 'none';
  document.getElementById('divresearch1').style.display = 'none';
  document.getElementById('divresearch2').style.display = 'none';
  document.getElementById('divresearch3').style.display = 'none';
  document.getElementById('divresearch4').style.display = 'none';
}

// Functions to manage reset button popup
resetButton.onclick = function() {
  resetModal.style.display = "block";
}
resetClose.onclick = function() {
  resetModal.style.display = "none";
}
cancel.onclick = function() {
  resetModal.style.display = "none";
}

// Functions to calculate income
const shopIncome = () => {
  var shopCalc = shops * 1
  if (researchOne === true) {
    shopCalc = shopCalc * 1.25
  }
  if (researchTwo === true) {
    shopCalc = shopCalc * 2
  }
  return shopCalc
}
const businessIncome = () => {
  var businessCalc = businesses * 10
  if (researchThree === true) {
    businessCalc = businessCalc * 1.25
  }
  if (researchFour === true) {
    businessCalc = businessCalc * 2
  }
  return businessCalc
}
const conglomerateIncome = () => {
  var conglomerateCalc = conglomerates * 100
  return conglomerateCalc
}
const governmentIncome = () => {
  var governmentCalc = governments * 1000
  return governmentCalc
}
const totalIncome = () => {
  var calcIncome = shopIncome() + businessIncome() + conglomerateIncome() + governmentIncome();
  return calcIncome
}

// Function to save game data locally to an object 
const save = () => {
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
   researchOne: researchOne,
   researchTwo: researchTwo,
   researchThree: researchThree,
   researchFour: researchFour
  }
  localStorage.setItem("save",JSON.stringify(saveObject));
}

// Function to add balance every 1000ms(1 second)
window.setInterval(function(){
  addBalance(totalIncome())
  save();
}, 1000);
