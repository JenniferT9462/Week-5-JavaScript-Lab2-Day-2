function billSplit() {
    let totalBill;
    let numFriends;

    totalBill = prompt("What is your total bill?");
    numFriends = prompt("How many friends are in your group?");

    let totalNumber = Number(totalBill);
    let friendsNumber = Number(numFriends);
    splitChecks = (totalNumber/friendsNumber); 
    //Round to 2 decimal points and still keep it a number
    rounded = Math.round(splitChecks * 100) / 100
    
    billHeader.innerHTML = `Your total bill is... $${totalBill}...Split ${numFriends} ways.`;
    billResult.innerHTML = `Each person in your group should pay: <strong>$${rounded}</strong>`;
    billParagraph.innerHTML = "Don't forget to tip your servers!";

}
billButton.onclick = billSplit;