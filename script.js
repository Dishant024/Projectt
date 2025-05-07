// Login Function
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  if (!email || !email.includes("@")) {
    return alert("Please enter a valid email.");
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("userEmail", email);
  alert(`OTP sent to ${email} (Simulated): ${otp}`);

  const userOTP = prompt("Enter the OTP:");
  if (parseInt(userOTP) === otp) {
    localStorage.setItem("isLoggedIn", "true");
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("paymentPage").style.display = "block";
    alert("✅ MFA Verified. Welcome to PayBindass!");
  } else {
    alert("❌ Incorrect OTP. Try again.");
  }
});

// Scan & Pay Demo
document.getElementById("scanBtn").addEventListener("click", () => {
  const riskScore = Math.floor(Math.random() * 100);
  const status = riskScore > 70 ? "⚠️ High Risk!" : "✅ Safe Transaction";
  alert(`UPI Scan Completed\nRisk Score: ${riskScore}\nStatus: ${status}`);
});

// Pay with BI Coins
document.getElementById("payWithCoinsBtn").addEventListener("click", () => {
  const amount = prompt("Enter amount to pay with BI Coins:");
  if (amount && parseFloat(amount) > 0) {
    alert(`BI Coins worth ₹${amount} used. Payment successful.`);
  } else {
    alert("Invalid amount entered.");
  }
});

// Clickable Card Alerts
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Feature demo loading... Stay tuned!");
  });
});
