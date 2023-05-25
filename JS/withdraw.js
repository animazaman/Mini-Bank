document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        return;
    }
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    console.log(previousWithdrawTotalString);
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const previousBalanceValue = document.getElementById('balance');
    const previousBalanceString = previousBalanceValue.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    //withdrawField.value = '';

    if(newWithdrawAmount>previousBalance){
        alert('You have not enough money to withdraw!!!!!');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalance = previousBalance - currentWithdrawTotal;
    previousBalanceValue.innerText = currentBalance;

})