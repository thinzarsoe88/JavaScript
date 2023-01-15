document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const masterBtn = document.getElementById("masterBtn");
  const paypalBtn = document.getElementById("paypalBtn");
  if (myCheckBox.checked) {
    console.log("You are subscribed");
  } else {
    console.log("You are NOT subscribed");
  }
  if (visaBtn.checked) {
    console.log("You are paying with a Visa");
  } else if (masterBtn.checked) {
    console.log("You are paying with a Mastercard");
  } else if (paypalBtn.checked) {
    console.log("You are paying with PayPal!");
  } else {
    console.log("You must select a payment type!!!");
  }
};




