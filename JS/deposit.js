/*
add event listener to te deposit button
2/ get deposit amount from the input field
2.5/makesure amount convert defosit amount into integer
3/clear the deposit input Fieldafter getting the value
4/get the previous deposit total
5/calculate new deposit find out new deposit number

*/
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit_field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //stape-3
    depositField.value = '';
    //stape-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotatString = depositTotalElement.innerText;
    const previousDepositTotat = parseFloat(previousDepositTotatString);
    //stape-5
    const newDepositTotal = (previousDepositTotat + newDepositAmount);
    depositTotalElement.innerText = newDepositTotal;
    //stap-6
    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotatString = balanceTotalElement.innerText;
    const previousBalanceTotat = parseFloat(previousBalanceTotatString);
    //step-7
    const finaldepositBalance = (previousBalanceTotat + newDepositAmount);
    balanceTotalElement.innerText = finaldepositBalance;





})
//withdrawPart
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdeawField = document.getElementById('withdraw_field');
    const newWithdrawAmountString = withdeawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //stape-3
    withdeawField.value = '';
    //step-4
    const WithdeawElement = document.getElementById('withdraw-total');
    const prevWithdrawAmountString = WithdeawElement.innerText;
    const previousWithdrawTotal = parseFloat(prevWithdrawAmountString);
    //stape-5
    const newWithdraw = (previousWithdrawTotal + newWithdrawAmount);
    WithdeawElement.innerText = newWithdraw;
    //stap-6
    const wbalanceTotalElement = document.getElementById('Balance-total');
    const previouswBalanceTotatString = wbalanceTotalElement.innerText;
    const previouswBalanceTotat = parseFloat(previouswBalanceTotatString);
    //step-7
    const finalwithdrawBalance = (previouswBalanceTotat - newWithdrawAmount);
    wbalanceTotalElement.innerText = finalwithdrawBalance;



})
//DepositPart
