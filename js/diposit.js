document.getElementById("btn-diposit").addEventListener("click", function () {
  const dipositField = document.getElementById("diposit-field");
  const newDipositAmountString = dipositField.value;
  const newDipositAmount = parseFloat(newDipositAmountString);

  const dipositTotalElement = document.getElementById("diposit-total");
  const previousDipositTotalStn = dipositTotalElement.innerText;
  const previousDipositTotal = parseFloat(previousDipositTotalStn);

  const currentDipositTOtal = newDipositAmount + previousDipositTotal;
  dipositTotalElement.innerText = currentDipositTOtal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalStn = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStn);

  const currentBalanceTotal = previousBalanceTotal + newDipositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  dipositField.value = "";
  //   console.log(dipositTotal);
});

// --------------
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalStn = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalStn);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalStn = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalStn);

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  withdrawField.value = "";
});
