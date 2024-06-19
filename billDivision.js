function billSplit() {
    let totalBill;
    let numFriends;

    totalBill = prompt("What is your total bill?");
    numFriends = prompt("How many friends are in your group?");

    let totalNumber = Number(totalBill);
    let friendsNumber = Number(numFriends);
    splitChecks = totalNumber/friendsNumber; 
    //Round to 2 decimal points and still keep it a number
    let rounded = Math.round(splitChecks * 100) / 100;
    
    billHeader.innerHTML = `Your total bill is... $${totalBill}...Split ${numFriends} ways.`;
    billResult.innerHTML = `Each person in your group should pay: <strong>$${rounded}</strong>`;
    billParagraph.innerHTML = "Don't forget to tip your servers!";

}
billButton.onclick = billSplit;

function tipCalculator() {
    
    let checkTotal = prompt("How much is your check?")
    let tip = prompt("Enter the tip percent you would like? 0.15 or 0.20");

    let tipAnswer = Number(tip);
    let checkAmount = Number(checkTotal);
    let tipAmount = checkAmount * tipAnswer;
    let roundedTip = Math.round(tipAmount * 100) / 100;
    let totalCheck = checkAmount + roundedTip;

    tipHeader.innerHTML = `Your bill before tip is $${checkAmount}. and you selected ${tipAnswer*100}% tip. `;
    tipParagraph2.innerHTML = `Your tip amount is <strong>$${roundedTip}</strong>.`
    tipParagraph.innerHTML = `With your tip added your new total is <strong>$${totalCheck}</strong>.`;


}
tipButton.onclick = tipCalculator;