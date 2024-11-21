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


// Monthly Report 1: User Engagement (Bar Graph)
new Chart(document.getElementById("monthlyReport1"), {
  type: "bar",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: "Engagement (hrs)",
      data: [20, 35, 50, 45],
      backgroundColor: "rgba(75, 192, 192, 0.6)"
    }]
  }
});

// Monthly Report 2: Revenue Distribution (Pie Chart)
new Chart(document.getElementById("monthlyReport2"), {
  type: "pie",
  data: {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [{
      label: "Revenue Distribution",
      data: [40, 30, 30],
      backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"]
    }]
  }
});

// Daily Report 1: Active Users (Line Graph)
const dailyReport1Ctx = document.getElementById("dailyReport1").getContext("2d");
const dailyReport1Chart = new Chart(dailyReport1Ctx, {
  type: "line",
  data: {
    labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
    datasets: [{
      label: "Active Users",
      data: generateRandomData(5, 10, 100),
      borderColor: "rgba(54, 162, 235, 0.6)",
      fill: false
    }]
  }
});

// Daily Report 2: Daily Transactions (Bar Graph)
const dailyReport2Ctx = document.getElementById("dailyReport2").getContext("2d");
const dailyReport2Chart = new Chart(dailyReport2Ctx, {
  type: "bar",
  data: {
    labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
    datasets: [{
      label: "Transactions",
      data: generateRandomData(5, 20, 200),
      backgroundColor: "rgba(255, 206, 86, 0.6)"
    }]
  }
});

// Simulate real-time updates for daily reports
setInterval(() => {
  const newActiveUsersData = generateRandomData(5, 10, 100);
  const newTransactionsData = generateRandomData(5, 20, 200);

  dailyReport1Chart.data.datasets[0].data = newActiveUsersData;
  dailyReport2Chart.data.datasets[0].data = newTransactionsData;

  dailyReport1Chart.update();
  dailyReport2Chart.update();
}, 5000); // Updates every 5 seconds
