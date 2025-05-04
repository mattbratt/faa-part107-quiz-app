const UI = {
    renderQuestion: (question, index, total, selectedAnswer = null) => {
        const questionContainer = document.getElementById('questionContainer');
        const figureHtml = question.figure
            ? `<div class="my-4"><img src="figures/${question.figure}" alt="Figure"></div>`
            : '';

        let answersHtml = '';
        for (let key in question.answers) {
            const checked = selectedAnswer === key ? 'checked' : '';
            answersHtml += `
                <label class="block bg-white shadow p-4 rounded my-2 cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="answer" value="${key}" ${checked} 
                      onchange="Quiz.selectAnswer(${index - 1}, '${key}')">
                    <span class="ml-2 font-medium">${key}: ${question.answers[key]}</span>
                </label>`;
        }

        questionContainer.innerHTML = `
            <div class="text-xl font-bold mb-2">Question ${index} of ${total}</div>
            <div class="text-lg mb-4">${question.question}</div>
            ${figureHtml}
            ${answersHtml}
            <div class="flex justify-between mt-6">
                <button onclick="Quiz.prevQuestion()" class="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50" ${index === 1 ? 'disabled' : ''}>Previous</button>
                <button onclick="Quiz.nextQuestion()" class="px-4 py-2 bg-blue-500 text-white rounded" ${index === total ? 'disabled' : ''}>Next</button>
            </div>
        `;
    },

    updateTimer: (secondsLeft) => {
        const timerElement = document.getElementById('timerDisplay');
        const mins = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
        const secs = (secondsLeft % 60).toString().padStart(2, '0');
        timerElement.textContent = `Time Remaining: ${mins}:${secs}`;
    },

    markAnswered: (questionIndex) => {
        const reviewList = document.getElementById('questionReview');
        if (reviewList) {
            const btn = reviewList.querySelector(`button[data-q='${questionIndex}']`);
            if (btn) btn.classList.add('bg-green-300');
        }
    },

    showResults: (result, studentName) => {
        const container = document.getElementById('questionContainer');
        const passFail = result.score >= 70 ? '✅ PASS' : '❌ FAIL';
        let missedList = '';
        result.incorrectQuestions.forEach((missed, i) => {
            missedList += `
                <div class="border rounded p-3 my-2 bg-red-50">
                    <div class="font-bold">Missed Q${i + 1}: ${missed.question.question}</div>
                    <div>Your Answer: ${missed.selected}</div>
                    <div>Correct Answer: ${missed.question.correct}</div>
                    <div>Explanation: ${missed.question.explanation}</div>
                    ${missed.question.figure ? `<img src="figures/${missed.question.figure}" class="mt-2">` : ''}
                </div>`;
        });

        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">Test Complete</div>
            <div class="text-xl">Student: ${studentName}</div>
            <div class="text-lg">Score: ${result.correct}/${result.total} (${result.score.toFixed(1)}%) → ${passFail}</div>
            <div class="my-4">
                <button onclick="Quiz.retakeSameTest()" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Retake Same Test</button>
                <button onclick="location.reload()" class="px-4 py-2 bg-green-500 text-white rounded">Take New Test</button>
            </div>
            <div class="text-lg font-semibold mt-6">Review of Incorrect Answers:</div>
            ${missedList}
        `;
    },

    showReview: (questions, answers, detailedReview) => {
        const container = document.getElementById('questionContainer');
        let html = `<div class="text-2xl font-bold mb-4">Review Incorrect Answers</div>`;
        detailedReview.forEach((item, i) => {
            if (item.selected !== item.correct) {
                html += `
                    <div class="border rounded p-3 my-2 bg-red-50">
                        <div class="font-bold">Q${i + 1}: ${item.question.question}</div>
                        <div>Your Answer: ${item.selected}</div>
                        <div>Correct Answer: ${item.correct}</div>
                        <div>Explanation: ${item.question.explanation}</div>
                        ${item.question.figure ? `<img src="figures/${item.question.figure}" class="mt-2">` : ''}
                    </div>`;
            }
        });
        html += `<button onclick="location.reload()" class="px-4 py-2 bg-green-500 text-white rounded mt-4">Take New Test</button>`;
        container.innerHTML = html;
    },

    showStudentPicker: (students) => {
        const container = document.getElementById('questionContainer');
        let options = students.map(s => `<option value="${s}">${s}</option>`).join('');
        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">Select Student</div>
            <select id="studentSelect" class="p-2 border rounded mb-4">${options}</select>
            <div>
                <button onclick="App.startTest()" class="px-4 py-2 bg-blue-500 text-white rounded">Start Test</button>
            </div>`;
    },

    showStats: (stats, studentName) => {
        const container = document.getElementById('questionContainer');
        let rows = stats.map(s => `
            <tr>
                <td class="border px-4 py-2">${new Date(s.date).toLocaleString()}</td>
                <td class="border px-4 py-2">${s.score.toFixed(1)}%</td>
                <td class="border px-4 py-2">${s.correct}/${s.total}</td>
            </tr>`).join('');
        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">Stats for ${studentName}</div>
            <table class="table-auto border-collapse w-full">
                <thead>
                    <tr>
                        <th class="border px-4 py-2">Date</th>
                        <th class="border px-4 py-2">Score</th>
                        <th class="border px-4 py-2">Correct</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
            <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Back</button>`;
    },

    showAdminPanel: () => {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">Admin Panel</div>
            <button onclick="Admin.listQuestions()" class="px-4 py-2 bg-blue-500 text-white rounded my-2">List Questions</button>
            <button onclick="Admin.addQuestion()" class="px-4 py-2 bg-green-500 text-white rounded my-2">Add New Question</button>
            <button onclick="location.reload()" class="px-4 py-2 bg-gray-500 text-white rounded my-2">Back</button>`;
    },

    // ✅ Added missing init() function here
    init: function() {
        console.log('UI initialized');
    }
};
