function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showamount = document.querySelector("span.showamount");
    let amount = parseInt(amountInput.value) * price;
    showamount.innerHTML = amount;
   


}