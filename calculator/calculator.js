/*
Questions:
1. Is calculator-test.html automatically generated?
2. Code walk through to make sure I have it right
3. why is this asking for a string when we converted to nums?
4. math part?
5.
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
    /* 
    gets UI values currently as a string then converts them to numbers data type
    */
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
  const defaultValues = { amount: 1000, years: 2, rate: 1.5 }
  
  /*
   Create initial variables for the DOM then set the inital variables values to the default values. 
   */
  initialAmount = document.getElementById("loan-amount");
  initialAmount.value = defaultValues.amount;

  initialYear = document.getElementById("loan-years");
  initialYear.value = defaultValues.years;

  initialRate = document.getElementById("loan-rate");
  initialRate.value = defaultValues.rate;

  // call the update function
  update();
}

/* 
Get the current values from the UI
Update the monthly payment
*/
function update() {
  // gets current UI values
  const currentUIvalues = getCurrentUIValues();

  // update the monthly payment
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues(currentUIvalues)));
}

/*
Given an object of values (a value has amount, years, and rate ), calculate the monthly payment. The output should be a string that always has 2 decimal places.
*/
// why is this asking for a string when we converted to nums?
function calculateMonthlyPayment(defaultValues) {
  //calculate the monthly rate
  const getMonthlyRate = (defaultValues.rate / 100) / 12;

  //calculate num years?
  const num = Math.floor(defaultValues.years * 12);

  /* 
  return the value from calculation 
  .tofixed returns a string with 2 decimal places
  */
  (getMonthlyRate * defaultValues.amount) * (1 / (1 - Math.pow((1 + getMonthlyRate), - num))).toFixed;

}

/*
Given a string representing the monthly payment value,
update the UI to show the value.
*/
function updateMonthly(monthly) {
  //create an element to display to
  const displayMonthly = document.getElementById("monthly-payment");
  displayMonthly.innerText = "$" + monthly;
}
