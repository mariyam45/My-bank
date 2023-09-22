document.getElementById("btn-diposit").addEventListener("click", function () {
  const dipositField = document.getElementById("diposit-field");
  const newDipositAmountString = dipositField.value;
  const newDipositAmount = parseFloat(newDipositAmountString);
  dipositField.value = "";
  if (isNaN(newDipositAmount)) {
    alert("Please provide a valid number");
    return;
  }

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

  //   console.log(dipositTotal);
});

// --------------
