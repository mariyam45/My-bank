document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);
  withdrawField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalStn = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalStn);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalStn = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStn);
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("!! You have no enough money :-( ");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  if (currentBalanceTotal === 0) {
    alert("Your balance is Finished :-)");
  }
});
