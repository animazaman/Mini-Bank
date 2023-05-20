document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    console.log(previousWithdrawTotalString);
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    const previousBalanceValue = document.getElementById('balance');
    const previousBalanceString = previousBalanceValue.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if(previousBalance>0){

        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;
        withdrawField.value = '';

        const currentBalance = previousBalance - currentWithdrawTotal;
        previousBalanceValue.innerText = currentBalance;
    }
    else
    {
        alert('You have not enough money to withdraw!!!!!');
    }
     
})