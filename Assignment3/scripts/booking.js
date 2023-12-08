/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
// and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let numOfDaysSelected = 0;
let totalCost = 0;
let weeklyCost = document.getElementById('calculated-cost');
let clearButton = document.getElementById('clear-button');
let mon = document.getElementById("monday");
let tue = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thu = document.getElementById("thursday");
let fri = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, 
// and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. 
// hint: .classList.contains() might be helpful here!

function calculateCost(){
    totalCost = costPerDay * numOfDaysSelected;
    weeklyCost.innerHTML = totalCost;
}

mon.addEventListener('click',function(){
    if (!mon.classList.contains('clicked')) {
        numOfDaysSelected += 1;
        mon.classList.add('clicked');
        calculateCost();
    }
});
tue.addEventListener('click',function(){
    if (!tue.classList.contains('clicked')) {
        numOfDaysSelected += 1;
        tue.classList.add('clicked');
        calculateCost();
    }
});
wed.addEventListener('click',function(){
    if (!wed.classList.contains('clicked')) {
        numOfDaysSelected += 1;
        wed.classList.add('clicked');
        calculateCost();
    }
});
thu.addEventListener('click',function(){
    if (!thu.classList.contains('clicked')) {
        numOfDaysSelected += 1;
        thu.classList.add('clicked');
        calculateCost();
    }
});
fri.addEventListener('click',function(){
    if (!fri.classList.contains('clicked')) {
        numOfDaysSelected += 1;
        fri.classList.add('clicked');
        calculateCost();
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, 
// any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click',function(){
    mon.classList.remove('clicked');
    tue.classList.remove('clicked');
    wed.classList.remove('clicked');
    thu.classList.remove('clicked');
    fri.classList.remove('clicked');
    weeklyCost.innerHTML = 0;
    numOfDaysSelected = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to 
// the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener('click',function(){
    costPerDay = 20;
    half.classList.add('clicked');
    full.classList.remove('clicked');
    calculateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is 
// added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener('click',function(){
    costPerDay = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// included above