'use strict';

let balance = 0

const addBalance = number => {
  balance = balance + number
  document.getElementById('balance').innerHTML = balance;
}

let workers = 0

const buyWorker = () => {
    let workerCost = Math.floor(10 * Math.pow(1.2,workers));     //works out the cost of this worker
    if(balance >= workerCost){                                   //checks that the player can afford the worker
        workers = workers + 1;                                   //increases number of workers
    	balance = balance - workerCost;                          //removes the balance spent
        document.getElementById('workers').innerHTML = workers;  //updates the number of workers for the user
        document.getElementById('balance').innerHTML = balance;  //updates the balance for the user
    };
    let nextCostWorker = Math.floor(10 * Math.pow(1.2,workers));       //works out the cost of the next worker
    document.getElementById('workerCost').innerHTML = nextCostWorker;  //updates the worker cost for the user
};

let factories = 0

const buyFactory = () => {
    let factoryCost = Math.floor(100 * Math.pow(1.2,factories));   
    if(balance >= factoryCost){                                  
        factories = factories + 1;                                  
    	balance = balance - factoryCost;                          
        document.getElementById('factories').innerHTML = factories;  
        document.getElementById('balance').innerHTML = balance;  
    };
    let nextCostFactory = Math.floor(100 * Math.pow(1.2,factories));       
    document.getElementById('factoryCost').innerHTML = nextCostFactory;  
};

let conglomerates = 0

const buyConglomerate = () => {
    let conglomerateCost = Math.floor(1000 * Math.pow(1.2,conglomerates));   
    if(balance >= conglomerateCost){                                  
        conglomerates = conglomerates + 1;                                  
    	balance = balance - conglomerateCost;                          
        document.getElementById('conglomerates').innerHTML = conglomerates;  
        document.getElementById('balance').innerHTML = balance;  
    };
    let nextCostConglomerate = Math.floor(1000 * Math.pow(1.2,conglomerates));       
    document.getElementById('conglomerateCost').innerHTML = nextCostConglomerate;  
};

let governments = 0 

const buyGovernment = () => {
    let governmentCost = Math.floor(10000 * Math.pow(1.2,governments));   
    if(balance >= governmentCost){                                  
        governments = governments + 1;                                  
    	balance = balance - governmentCost;                          
        document.getElementById('governments').innerHTML = governments;  
        document.getElementById('balance').innerHTML = balance;  
    };
    let nextCostGovernment = Math.floor(10000 * Math.pow(1.2,governments));       
    document.getElementById('governmentCost').innerHTML = nextCostGovernment;  
};

const save = () => {
  let saveObject = {
   balance: balance,
   shops: workers,
   businesses: factories,
   conglomerates: conglomerates,
   governments: governments
  }
  localStorage.setItem("save",JSON.stringify(saveObject));
  console.log(saveObject)
}

window.setInterval(function(){
  addBalance(workers)
  addBalance(factories * 10)
  addBalance(conglomerates * 100)
  addBalance(governments * 1000)
}, 1000);

window.setInterval(function(){
  save()
 }, 20000)

