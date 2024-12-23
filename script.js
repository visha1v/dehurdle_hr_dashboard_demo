// Charts
const ctx1 = document.getElementById("monthlyReport1").getContext("2d");
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Overthinker", "Distractor", "Pessimist", "Pleaser", "Fearful", "Comparer", "Hyper-Emotional", "Procastinator"],
    datasets: [
      {
        label: "No. of employees",
        data: [50,23,31,26,15,46,38,41],
        backgroundColor: "rgba(75, 192, 192, 0.6)"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true
  }
});

const ctx2 = document.getElementById("monthlyReport2").getContext("2d");
new Chart(ctx2, {
  type: "pie",
  data: {
    labels: ["Thriving", "Moderate", "Surviving"],
    datasets: [
      {
        data: [10, 35, 55],
        backgroundColor: [
          "rgba(0, 128, 0, 0.6)","rgba(255, 255, 0, 0.6)",
          "rgba(255, 0, 0, 0.6)"
          
        ]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: false // Disables tooltips
      },
      datalabels: {
        color: 'black', // Label color
        font: {
          size: 14, // Label font size
          weight: 'bold'
        },
        formatter: (value, context) => `${value}%`, // Add percentage symbol
      }
    }
  },
  plugins: [ChartDataLabels]
});

const ctx3 = document.getElementById("dailyReport1").getContext("2d");
new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Suday"],
    datasets: [
      {
        label: "Focus Score",
        data: [45, 55, 49, 62, 68, 30, 38],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true
  }
});

const ctx4 = document.getElementById("dailyReport2").getContext("2d");
new Chart(ctx4, {
  type: "doughnut",
  data: {
    labels: ["Happy", "Sad", "Angry", "Frustrated", "Calm"],
    datasets: [
      {
        data: [15,19,23,32,11],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)","rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 125, 0.6)",
          "rgba(255, 206, 86, 0.6)"]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: false // Disables tooltips
      },
      datalabels: {
        color: 'black', // Label color
        font: {
          size: 14, // Label font size
          weight: 'bold'
        },
        formatter: (value, context) => `${value}%`, // Add percentage symbol
      }
    }
  },
  plugins: [ChartDataLabels]
});
