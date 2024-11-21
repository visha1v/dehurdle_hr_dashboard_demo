// Charts
const ctx1 = document.getElementById("monthlyReport1").getContext("2d");
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Engagement",
        data: [20, 30, 50, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      }
    ]
  }
});

const ctx2 = document.getElementById("monthlyReport2").getContext("2d");
new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Thriving", "Moderate", "Surviving"],
    datasets: [
      {
        data: [10, 40, 50],
        backgroundColor: [
          "rgb(60, 179, 113)",
          "rgb(255, 165, 0)",
          "rgb(255, 0, 0)"
        ]
      }
    ]
  }
});

const ctx3 = document.getElementById("dailyReport1").getContext("2d");
new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM"],
    datasets: [
      {
        label: "Active Users",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false
      }
    ]
  }
});

const ctx4 = document.getElementById("dailyReport2").getContext("2d");
new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["Success", "Failure"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"]
      }
    ]
  }
});
