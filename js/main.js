// hide login area when clicked enter button
const login = document.getElementById('login');
login.addEventListener('click', () => {
    document.getElementById('login-area').style.display =
        'none';
    document.getElementById('transaction-area').style.display =
        'block';
})

// deposit event handler
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', (event) => {
   const depositAmount = getInputNum('deposit-amount');
    updateSpanText('current-deposit',depositAmount);
    updateSpanText('total-balance', depositAmount);
    document.getElementById('deposit-amount').value = "";
})
// withdraw event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', (event)=>{
    const withdrawAmount = getInputNum('withdraw-amount');
    updateSpanText('current-withdraw', withdrawAmount);
    updateSpanText('total-balance', -1 * withdrawAmount);
    document.getElementById('withdraw-amount').value = "";
})

//convert string number to number
function getInputNum(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}

//update amount 
function updateSpanText(id, amount) {
    let currentAmount = document.getElementById(id).innerText;
    const currentAmountNum = parseFloat(currentAmount);
    const totalAmount = amount + currentAmountNum;
    document.getElementById(id).innerHTML = totalAmount;
}