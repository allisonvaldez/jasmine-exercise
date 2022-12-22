/*
 Questions:
 1. should I have individual describes or just one big one how they have it
 */

// test for cannot tip full amt of bill?

// test for not allowing 0 entry on either bill amt
describe("Ensure that the bill amount is never $0", function () {
    
});

describe("Ensure proper setup and tear down after each test", function () {
    afterEach(function () {
        allPayments = {};
        paymentId = 0;

        //from form
        billAmtInput.value = "";
        tipAmtInput.value = "";
        
        //from table on both sides of the aside
        paymentTbody.innerHTML = "";
        serverTbody.innerHTML = "";
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
    });
     
});

