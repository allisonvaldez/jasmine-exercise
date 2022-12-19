/*
 Questions:
 1. should I have individual describes or just one big one how they have it
 */

// test for cannot tip full amt of bill?

describe("Ensure proper setup and tear down after each test", function () {
    afterEach(function () {
        //from form
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};
        paymentId = 0;
        //from table
        paymentTbody.innerHTML = "";
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
    })
     
});

