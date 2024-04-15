function sendMoney() {
   var myAccountBalanceString = document.getElementById("myAccountBalance").innerText;
   var myAccountBalance = parseInt(myAccountBalanceString.replace(/,/g, ""));
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > myAccountBalance) {
       alert("Insufficient Balance.");
   } else if (enterAmount > 50000) {
       alert("Transaction amount cannot exceed $50,000.");
   } else {
       var findUserBankAccount = enterName + "BankBalance";
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerText) + enterAmount;
       var myNewAccountBalance = myAccountBalance - enterAmount;
       document.getElementById("myAccountBalance").innerText = myNewAccountBalance.toLocaleString();
       document.getElementById(findUserBankAccount).innerText = finalAmount.toLocaleString();
       alert(`Successful Transaction! $${enterAmount.toLocaleString()} has been sent to ${enterName}@email.com.`);

       // Transaction history
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`$${enterAmount.toLocaleString()} has been sent to recipient with Email-id ${enterName}@email.com on ${new Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
   }
}
