const ChartManager = {
    currentChart: null,
  
    showStats(studentName = null) {
      const app = document.getElementById("app");
  
      const student = Storage.students.find(s => s.name === studentName) || null;
      const data = student ? student.tests : Storage.students.flatMap(s => s.tests);
  
      if (data.length === 0) {
        app.innerHTML = `
          <h2>Statistics</h2>
          <p>No test data available${student ? ` for ${studentName}` : ""}.</p>
          <button id="backBtn" class="btn btn-secondary">Back</button>
        `;
        document.getElementById("backBtn").addEventListener("click", () => {
          UI.showMainMenu();
        });
        return;
      }
  
      app.innerHTML = `
        <h2>Statistics ${student ? `for ${studentName}` : "Overall"}</h2>
        <canvas id="scoreChart" width="600" height="400"></canvas>
        <button id="backBtn" class="btn btn-secondary mt-3">Back</button>
      `;
  
      const ctx = document.getElementById("scoreChart").getContext("2d");
  
      if (this.currentChart) {
        this.currentChart.destroy();
      }
  
      this.currentChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(t => new Date(t.date).toLocaleDateString()),
          datasets: [{
            label: 'Test Scores (%)',
            data: data.map(t => t.score),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true, max: 100 }
          }
        }
      });
  
      document.getElementById("backBtn").addEventListener("click", () => {
        if (this.currentChart) {
          this.currentChart.destroy();
          this.currentChart = null;
        }
        UI.showMainMenu();
      });
    }
  };
  