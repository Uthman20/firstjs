const mycheckbox = document.getElementById("mycheckbox");
const Visabtn = document.getElementById("Visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const PaymentResult = document.getElementById("PaymentResult");

mysubmit.onclick = function () {
    const username = document.getElementById("username").value;
    if (mycheckbox.checked) {
    subResult.textContent = `Hello ${username} You are Subscribed`;
    }
    else{
        subResult.textContent = `Hello ${username} You are not Subscribed`;
    }
    if (Visabtn.checked) {
        PaymentResult.textContent = `Hello ${username} You are paying with Visa`;
    }
    else if (mastercardbtn.checked) {
        PaymentResult.textContent = `Hello ${username} You are paying with Mastercard`;
    }
    else if (paypalbtn.checked) {
        PaymentResult.textContent = `Hello ${username} You are paying with Paypal`;
    }
    else {
        PaymentResult.textContent = 'You must select an option';
    }
};