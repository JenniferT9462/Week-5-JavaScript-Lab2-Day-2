function cakeOrder() {
    let customerName;
    let greeting;
    let cakeFlavor;
    let icing;

    customerName = prompt("What is your name?");
    greeting = prompt("Enter the message you want on the cake.");
    cakeFlavor = prompt("What flavor cake would you like for your cake(...chocolate...vanilla)?");
    icing = prompt("What flavor icing would you like on your cake?");

    cakeHeader.innerHTML = `Thank You, ${customerName} for your order!`
    reviewOrder.innerHTML = "You can review your order below";
    cakeParagraph.innerHTML = `You ordered a <strong>${cakeFlavor}</strong> flavor cake with <strong>${icing}</strong> icing.`;
    greetingParagraph.innerHTML = `Your greeting on your cake is: <br><br> "${greeting}"`;

}
cakeButton.onclick = cakeOrder;
