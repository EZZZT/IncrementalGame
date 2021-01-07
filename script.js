'use strict';

window.onload = function() {
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
}

var balance=0;
var shops;
var nextCostShop;
var businesses;
var nextCostBusiness;
var conglomerates;
var nextCostConglomerate;
var governments;
var nextCostGovernment;
var resetModal = document.getElementById("resetModal");
var resetButton = document.getElementById("resetButton");
var resetClose = document.getElementsByClassName("close")[0];
var cancel = document.getElementById('cancel')

const addBalance = number => {
  balance = balance + number
  document.getElementById('balance').innerHTML = balance;
}

shops = 0

const buyShop = () => {
    var shopCost = Math.floor(10 * Math.pow(1.2,shops));     //works out the cost of this worker
    if(balance >= shopCost){                                   //checks that the player can afford the worker
        shops = shops + 1;                                   //increases number of workers
    	balance = balance - shopCost;                          //removes the balance spent
        document.getElementById('shops').innerHTML = shops;  //updates the number of workers for the user
        document.getElementById('balance').innerHTML = balance;  //updates the balance for the user
    };
     nextCostShop = Math.floor(10 * Math.pow(1.2,shops));       //works out the cost of the next worker
    document.getElementById('shopCost').innerHTML = nextCostShop;  //updates the worker cost for the user
};

businesses = 0

const buyBusiness = () => {
    var businessCost = Math.floor(100 * Math.pow(1.2,businesses));   
    if(balance >= businessCost){                                  
        businesses = businesses + 1;                                  
    	balance = balance - businessCost;                          
        document.getElementById('businesses').innerHTML = businesses;  
        document.getElementById('balance').innerHTML = balance;  
    };
    nextCostBusiness = Math.floor(100 * Math.pow(1.2,businesses));       
    document.getElementById('businessCost').innerHTML = nextCostBusiness;  
};

conglomerates = 0

const buyConglomerate = () => {
    var conglomerateCost = Math.floor(1000 * Math.pow(1.2,conglomerates));   
    if(balance >= conglomerateCost){                                  
        conglomerates = conglomerates + 1;                                  
    	balance = balance - conglomerateCost;                          
        document.getElementById('conglomerates').innerHTML = conglomerates;  
        document.getElementById('balance').innerHTML = balance;  
    };
    nextCostConglomerate = Math.floor(1000 * Math.pow(1.2,conglomerates));       
    document.getElementById('conglomerateCost').innerHTML = nextCostConglomerate;  
};

governments = 0 

const buyGovernment = () => {
    var governmentCost = Math.floor(10000 * Math.pow(1.2,governments));   
    if(balance >= governmentCost){                                  
        governments = governments + 1;                                  
    	balance = balance - governmentCost;                          
        document.getElementById('governments').innerHTML = governments;  
        document.getElementById('balance').innerHTML = balance;  
    };
    nextCostGovernment = Math.floor(10000 * Math.pow(1.2,governments));       
    document.getElementById('governmentCost').innerHTML = nextCostGovernment;  
};

const save = () => {
  var saveObject = {
   balance: balance,
   shops: shops,
   nextCostShop: nextCostShop,
   businesses: businesses,
   nextCostBusiness: nextCostBusiness,
   conglomerates: conglomerates,
   nextCostConglomerate: nextCostConglomerate,
   governments: governments,
   nextCostGovernment: nextCostGovernment
  }
  localStorage.setItem("save",JSON.stringify(saveObject));
  console.log(saveObject)
}

const reset = () => {
  localStorage.removeItem("save")
  balance = 0
  shops = 0
  document.getElementById('shops').innerHTML = shops; 
  document.getElementById('shopCost').innerHTML = '10'
  businesses = 0
  document.getElementById('businesses').innerHTML = businesses; 
  document.getElementById('businessCost').innerHTML = '100'
  conglomerates = 0
  document.getElementById('conglomerates').innerHTML = conglomerates; 
  document.getElementById('conglomerateCost').innerHTML = '1000'
  governments = 0
  document.getElementById('governments').innerHTML = governments; 
  document.getElementById('governmentCost').innerHTML = '10000'
  resetModal.style.display = "none";
}

resetButton.onclick = function() {
  resetModal.style.display = "block";
}


resetClose.onclick = function() {
  resetModal.style.display = "none";
}

cancel.onclick = function() {
  resetModal.style.display = "none";
}

window.setInterval(function(){
  addBalance(shops)
  addBalance(businesses * 10)
  addBalance(conglomerates * 100)
  addBalance(governments * 1000)
}, 1000);

window.setInterval(function(){
  save()
 }, 20000)


