/*
Questions:
1. Is calculator-test.html automatically generated?
2. Code walk through to make sure I have it right
3. why get input from ui and dom?
4. how does it know to pull from UI values the way I have it now?

 */

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

/* 
Get the inputs from the DOM.
Put some default values in the inputs
Call a function to calculate the current monthly payment
*/
function setupIntialValues() {
  // sets the default value
  const defaulValues = { amount: 1000, years: 2, rate: 1.5 }
  
  /*
   Create initial variables for the DOM then set the inital variables values to the default values. 
   */
  initialAmount = document.getElementById("loan-amount");
  initialAmount.value = defaulValues.amount;

  initialYear = document.getElementById("loan-years");
  initialYear.value = defaulValues.years;

  initialRate = document.getElementById("loan-rate");
  initialRate.value = defaulValues.rate;

  // call the update function
  update();
}

/* 
Get the current values from the UI
Update the monthly payment
*/
function update() {

  // what updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

/*
Given an object of values (a value has amount, years and rate ),
calculate the monthly payment.  The output should be a string
that always has 2 decimal places.
*/
function calculateMonthlyPayment(values) {
}

/*
Given a string representing the monthly payment value,
update the UI to show the value.
*/
function updateMonthly(monthly) {
}
