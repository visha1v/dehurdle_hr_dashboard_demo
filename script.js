import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhb4_MyhLq-SBmzhZP7vt2ZXXOn1ckJiE",
  authDomain: "dehurdle-dashboard.firebaseapp.com",
  projectId: "dehurdle-dashboard",
  storageBucket: "dehurdle-dashboard.firebasestorage.app",
  messagingSenderId: "473200896089",
  appId: "1:473200896089:web:f06dab99950b4c532b2948",
  measurementId: "G-25QCBQJP9H"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const signupContainer = document.getElementById("signup-container");
const loginContainer = document.getElementById("login-container");
const dashboard = document.getElementById("dashboard");
const signupButton = document.getElementById("signup-button");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const showLogin = document.getElementById("show-login");
const showSignup = document.getElementById("show-signup");

// Toggle between signup and login
showLogin.addEventListener("click", () => {
  signupContainer.style.display = "none";
  loginContainer.style.display = "block";
});

showSignup.addEventListener("click", () => {
  loginContainer.style.display = "none";
  signupContainer.style.display = "block";
});

// Signup functionality
signupButton.addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful! Please log in.");
      signupContainer.style.display = "none";
      loginContainer.style.display = "block";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});

// Login functionality
loginButton.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      loginContainer.style.display = "none";
      dashboard.style.display = "block";
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
});

// Logout functionality
logoutButton.addEventListener("click", () => {
  signOut(auth).then(() => {
    dashboard.style.display = "none";
    loginContainer.style.display = "block";
  });
});

// Charts
const ctx1 = document.getElementById("monthlyReport1").getContext("2d");
new Chart(ctx1, { type: "bar", data: { labels: ["Week 1", "Week 2", "Week 3", "Week 4"], datasets: [{ label: "Engagement", data: [20, 30, 50, 40], backgroundColor: "rgba(75, 192, 192, 0.6)" }] } });

const ctx2 = document.getElementById("monthlyReport2").getContext("2d");
new Chart(ctx2, { type: "pie", data: { labels: ["Product A", "Product B", "Product C"], datasets: [{ data: [40, 30, 30], backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"] }] } });
