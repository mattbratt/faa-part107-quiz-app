const ChartManager = {
    chartInstance: null,

    renderStudentScores: function (results, studentName) {
        const container = document.getElementById('questionContainer');
        const tableRows = results.map((r, idx) => `
            <tr class="border-b">
                <td class="p-2 text-center">${idx + 1}</td>
                <td class="p-2 text-center">${r.date}</td>
                <td class="p-2 text-center">${r.score}%</td>
                <td class="p-2 text-center">${r.correct}/${r.total}</td>
            </tr>`).join('');

        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">Stats for ${studentName}</div>
            <canvas id="scoreChart" class="w-full max-w-2xl mx-auto mb-4"></canvas>

            <div class="overflow-x-auto">
                <table class="table-auto w-full border-collapse border border-gray-300">
                    <thead class="bg-gray-200">
                        <tr>
                            <th class="p-2 border">#</th>
                            <th class="p-2 border">Date</th>
                            <th class="p-2 border">Score (%)</th>
                            <th class="p-2 border">Correct/Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>

            <div class="mt-4">
                <button onclick="UI.showStudentPicker(QuizStorage.getStudentNames())" class="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
            </div>`;

        const dates = results.map(r => r.date);
        const scores = results.map(r => r.score);

        const ctx = document.getElementById('scoreChart').getContext('2d');

        // Destroy existing chart if re-rendered
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        this.chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Score (%)',
                    data: scores,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { callbacks: {
                        label: (context) => `${context.parsed.y}%`
                    }}
                }
            }
        });
    }
};
