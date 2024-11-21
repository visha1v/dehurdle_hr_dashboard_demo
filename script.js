// Charts
const ctx1 = document.getElementById("monthlyReport1").getContext("2d");
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Overthinker", "Distractor", "Pessimist", "Pleaser", "Fearful", "Comparer", "Hyper-Emotional", "Procastinator"],
    datasets: [
      {
        label: "No. of emplyees with this wrecker",
        data: [50,23,31,26,15,46,38,41],
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
          "rgba(75, 192, 192, 0.6)","rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)"
          
        ]
      }
    ]
  }
});

const ctx3 = document.getElementById("dailyReport1").getContext("2d");
new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Suday"],
    datasets: [
      {
        label: "Department Focus Score",
        data: [45, 55, 49, 62, 68, 30, 38],
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
    labels: ["Happy", "Sad", "Angry", "Frustrated", "Depressed"],
    datasets: [
      {
        data: [15,19,23,32,11],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)","rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 125, 0.6)",
          "rgba(255, 206, 86, 0.6)"]
      }
    ]
  }
});
