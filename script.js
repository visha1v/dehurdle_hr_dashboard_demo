// Firebase configuration (replace with your Firebase project config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const authSection = document.getElementById("auth-section");
const dashboardSection = document.getElementById("dashboard-section");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const logoutButton = document.getElementById("logout-button");
const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");

// Toggle between Login and Signup
showSignup.addEventListener("click", () => {
  loginContainer.style.display = "none";
  signupContainer.style.display = "block";
});

showLogin.addEventListener("click", () => {
  signupContainer.style.display = "none";
  loginContainer.style.display = "block";
});

// Login
loginButton.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Login successful");
      toggleDashboard(true);
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Signup
signupButton.addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful. Please login.");
      signupContainer.style.display = "none";
      loginContainer.style.display = "block";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Logout
logoutButton.addEventListener("click", () => {
  signOut(auth).then(() => {
    console.log("Logout successful");
    toggleDashboard(false);
  });
});

// Monitor auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    toggleDashboard(true);
  } else {
    toggleDashboard(false);
  }
});

// Toggle Dashboard Visibility
function toggleDashboard(isLoggedIn) {
  if (isLoggedIn) {
    authSection.style.display = "none";
    dashboardSection.style.display = "block";
  } else {
    authSection.style.display = "block";
    dashboardSection.style.display = "none";
  }
}

// Graph generation logic (same as before)
function generateRandomData(count, min, max) {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

const monthlyReport1 = new Chart(document.getElementById("monthlyReport1"), {
  type: "bar",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{ label: "Engagement (hrs)", data: [20, 35, 50, 45], backgroundColor: "rgba(75, 192, 192, 0.6)" }],
  },
});

const monthlyReport2 = new Chart(document.getElementById("monthlyReport2"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [{ label: "Revenue ($)", data: [5000, 7000, 8000, 9000], borderColor: "rgba(255, 99, 132, 0.6)", fill: false }],
  },
});
