// Helper function to generate random data
function generateRandomData(count, min, max) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  
  // Monthly Report 1: User Engagement
  new Chart(document.getElementById('monthlyReport1'), {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Engagement (hrs)',
        data: [20, 35, 50, 45],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    }
  });
  
  // Monthly Report 2: Revenue Growth
  new Chart(document.getElementById('monthlyReport2'), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [{
        label: 'Revenue ($)',
        data: [5000, 7000, 8000, 9000],
        borderColor: 'rgba(255, 99, 132, 0.6)',
        fill: false
      }]
    }
  });
  
  // Daily Report 1: Active Users
  const dailyReport1Ctx = document.getElementById('dailyReport1').getContext('2d');
  const dailyReport1Chart = new Chart(dailyReport1Ctx, {
    type: 'line',
    data: {
      labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
      datasets: [{
        label: 'Active Users',
        data: generateRandomData(5, 10, 100),
        borderColor: 'rgba(54, 162, 235, 0.6)',
        fill: false
      }]
    }
  });
  
  // Daily Report 2: Daily Transactions
  const dailyReport2Ctx = document.getElementById('dailyReport2').getContext('2d');
  const dailyReport2Chart = new Chart(dailyReport2Ctx, {
    type: 'bar',
    data: {
      labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
      datasets: [{
        label: 'Transactions',
        data: generateRandomData(5, 20, 200),
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
      }]
    }
  });
  
  // Simulate real-time data for daily reports
  setInterval(() => {
    const newActiveUsersData = generateRandomData(5, 10, 100);
    const newTransactionsData = generateRandomData(5, 20, 200);
  
    dailyReport1Chart.data.datasets[0].data = newActiveUsersData;
    dailyReport2Chart.data.datasets[0].data = newTransactionsData;
  
    dailyReport1Chart.update();
    dailyReport2Chart.update();
  }, 5000); // Updates every 5 seconds
  