document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    //console.log(newDepositAmount);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(previousDepositTotal);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const previousBalanceValue = document.getElementById('balance');
    const previousBalanceString = previousBalanceValue.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = previousBalance + currentDepositTotal;

    previousBalanceValue.innerText = currentBalance;


})