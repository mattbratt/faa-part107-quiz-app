const UI = {
    renderQuestion: function (question, index, total, selectedAnswer = null) {
        const questionContainer = document.getElementById('questionContainer');
        const figureHtml = question.figure
            ? `<div class="my-4"><img src="figures/${question.figure}" alt="Figure">`
            : '';

        let answersHtml = '';
        for (let key in question.answers) {
            const checked = selectedAnswer === key ? 'checked' : '';
            answersHtml += `
                <label class="block bg-white shadow p-4 rounded my-2 cursor-pointer hover:bg-gray-100">
                    <input type="radio" name="answer" value="${key}" ${checked}
                      onchange="App.selectAnswer('${key}')">
                    <span class="ml-2 font-medium">${key}: ${question.answers[key]}</span>
                </label>`;
        }

        let buttonsHtml = '';
        if (index === total) {
            buttonsHtml = `
                <button onclick="App.previousQuestion()" class="px-4 py-2 bg-blue-500 text-white rounded ${index === 1 ? 'opacity-50 pointer-events-none' : ''}">Previous</button>
                <button onclick="UI.showReviewScreen(App.quizQuestions, App.selectedAnswers)" class="px-4 py-2 bg-green-500 text-white rounded">Review Answers</button>
                <button onclick="App.submitQuiz()" class="px-4 py-2 bg-red-500 text-white rounded">Submit Test</button>`;
        } else {
            buttonsHtml = `
                <button onclick="App.previousQuestion()" class="px-4 py-2 bg-blue-500 text-white rounded ${index === 1 ? 'opacity-50 pointer-events-none' : ''}">Previous</button>
                <button onclick="App.nextQuestion()" class="px-4 py-2 bg-blue-500 text-white rounded">Next</button>`;
        }

        questionContainer.innerHTML = `
            <div id="timerDisplay" class="text-right text-lg font-semibold text-red-600 mb-2"></div>
            <div class="text-xl font-bold mb-2">Question ${index} of ${total}</div>
            <div class="text-lg mb-4">${question.question}</div>
            ${figureHtml}
            ${answersHtml}
            <div class="flex justify-between mt-6">
                ${buttonsHtml}
            </div>`;
    },

    updateTimer: function (secondsLeft) {
        const timerElement = document.getElementById('timerDisplay');
        const mins = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
        const secs = (secondsLeft % 60).toString().padStart(2, '0');
        timerElement.textContent = `Time Remaining: ${mins}:${secs}`;
    },

    markAnswered: function (questionIndex) {
        const reviewList = document.getElementById('questionReview');
        if (reviewList) {
            const btn = reviewList.querySelector(`button[data-q='${questionIndex}']`);
            if (btn) btn.classList.add('bg-green-300');
        }
    },

    showResults: function (result, studentName) {
        const container = document.getElementById('questionContainer');
        const passFail = result.score >= 70 ? '✅ PASS' : '❌ FAIL';
        let missedList = '';
        result.incorrectQuestions.forEach((missed, i) => {
            const userAnswerDesc = missed.selected && missed.question.answers[missed.selected]
                ? `${missed.selected}: ${missed.question.answers[missed.selected]}`
                : missed.selected;
            const correctDesc = `${missed.question.correct}: ${missed.question.answers[missed.question.correct]}`;
            const sourceLink = missed.question.source
                ? `<div>Source: <a href="${missed.question.source}" target="_blank" class="text-blue-600 underline">${missed.question.source}</a></div>`
                : '';
            missedList += `
                <div class="border rounded p-3 my-2 bg-red-50">
                    <div class="font-bold">Missed Q${i + 1}: ${missed.question.question}</div>
                    <div>Your Answer: ${userAnswerDesc}</div>
                    <div>Correct Answer: ${correctDesc}</div>
                    <div>Explanation: ${missed.question.explanation}</div>
                    ${sourceLink}
                    ${missed.question.figure ? `<img src="figures/${missed.question.figure}" class="mt-2">` : ''}
                </div>`;
        });

        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">Test Complete</div>
            <div class="text-xl">Student: ${studentName}</div>
            <div class="text-lg">Score: ${result.correct}/${result.total} (${result.score.toFixed(1)}%) → ${passFail}</div>
            <div class="my-4">
                <button onclick="App.retakeQuiz()" class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Retake Same Test</button>
                <button onclick="location.reload()" class="px-4 py-2 bg-green-500 text-white rounded">Take New Test</button>
            </div>
            <div class="text-lg font-semibold mt-6">Review of Incorrect Answers:</div>
            ${missedList}`;
    },

    showReviewScreen: function (questions, answers) {
        const container = document.getElementById('questionContainer');
        let reviewHtml = `<div class="text-2xl font-bold mb-4">Review Answers</div><ul>`;

        questions.forEach((q, index) => {
            const userAnswer = answers[q.id];
            const userAnswerText = userAnswer ? `${userAnswer}: ${q.answers[userAnswer]}` : 'No Answer';
            reviewHtml += `
                <li class="border rounded p-2 my-1">
                    <strong>Q${index + 1}:</strong> ${q.question}<br>
                    <strong>Your Answer:</strong> ${userAnswerText}<br>
                    <button onclick="App.currentQuestionIndex=${index}; App.showQuestion(${index});"
                        class="mt-1 px-2 py-1 bg-blue-500 text-white rounded text-sm">Edit Answer</button>
                </li>`;
        });

        reviewHtml += `</ul>
            <div class="mt-4">
                <button onclick="App.submitQuiz()" class="px-4 py-2 bg-green-600 text-white rounded">Submit Test</button>
            </div>`;
        container.innerHTML = reviewHtml;
    },

    showStudentPicker: function (students) {
        const container = document.getElementById('questionContainer');
        let options = students.map(s => `<option value="${s}">${s}</option>`).join('');
        container.innerHTML = `
            <div class="text-2xl font-bold mb-4 text-center">Select Student</div>
            <div class="text-center">
                <select id="studentSelect" class="p-2 border rounded mb-4 w-1/2">${options}</select><br>
                <button id="startTestBtn" class="px-4 py-2 bg-blue-500 text-white rounded mt-2">Start Quiz</button>
                <button id="startCustomBtn" class="px-4 py-2 bg-green-500 text-white rounded mt-2">Custom Quiz</button>
                <button id="viewStatsBtn" class="px-4 py-2 bg-purple-500 text-white rounded mt-2">View Stats</button>
                <button id="createStudentBtn" class="px-4 py-2 bg-gray-700 text-white rounded mt-2">Create Student</button>
                <button id="editQABtn" class="px-4 py-2 bg-yellow-500 text-black rounded mt-2">Edit Q/A</button>
            </div>`;

        document.getElementById('startTestBtn').addEventListener('click', () => {
            const selectedName = document.getElementById('studentSelect').value;
            State.setCurrentStudent(selectedName);
            App.startQuiz();
        });

        document.getElementById('startCustomBtn').addEventListener('click', () => {
            const selectedName = document.getElementById('studentSelect').value;
            State.setCurrentStudent(selectedName);
            UI.showCustomTestConfig();
        });

        document.getElementById('viewStatsBtn').addEventListener('click', () => {
            const selectedName = document.getElementById('studentSelect').value;
            State.setCurrentStudent(selectedName);
            const stats = QuizStorage.getResults(selectedName);
            UI.showStats(stats, selectedName);
        });

        document.getElementById('createStudentBtn').addEventListener('click', () => {
            const newName = prompt("Enter new student name:");
            if (newName) {
                QuizStorage.saveStudentName(newName);
                const updated = QuizStorage.getStudentNames();
                UI.showStudentPicker(updated);
                State.setCurrentStudent(newName);
            }
        });

        document.getElementById('editQABtn').addEventListener('click', () => {
            UI.showEditQuestions();
        });
    },

    showCustomTestConfig: function () {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `
            <div class="text-2xl font-bold mb-4 text-center">Custom Test Configuration</div>
            <div class="text-center">
                <label>Number of Questions (10-${QUESTIONS.length}):</label><br>
                <input type="number" id="customQuestionCount" min="10" max="${QUESTIONS.length}" value="10" class="p-2 border rounded mb-4 w-1/2"><br>
                <label>Time Limit (minutes, 0 = no limit):</label><br>
                <input type="number" id="customTimeLimit" min="0" max="240" value="0" class="p-2 border rounded mb-4 w-1/2"><br>
                <button id="startCustomConfirmBtn" class="px-4 py-2 bg-blue-500 text-white rounded">Start Custom Quiz</button>
            </div>`;

        document.getElementById('startCustomConfirmBtn').addEventListener('click', () => {
            const count = parseInt(document.getElementById('customQuestionCount').value, 10);
            const mins = parseInt(document.getElementById('customTimeLimit').value, 10);
            const disableTimer = (mins === 0);
            App.startQuiz('custom', count, mins, disableTimer);
        });
    },

    showEditQuestions: function () {
        const container = document.getElementById('questionContainer');
        let listHtml = `
            <div class="flex justify-between items-center mb-4">
                <div class="text-2xl font-bold">Edit Questions</div>
                <button onclick="UI.addNewQuestion()" class="px-4 py-2 bg-green-600 text-white rounded">Add Question</button>
            </div>
            <ul>`;
        QUESTIONS.forEach((q, idx) => {
            listHtml += `
                <li class="border rounded p-2 my-1 flex justify-between items-center">
                    <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
                    <div>
                        <button onclick="UI.editQuestion(${idx})" class="px-2 py-1 bg-yellow-500 text-black rounded text-sm mr-1">Edit</button>
                        <button onclick="UI.deleteQuestion(${idx})" class="px-2 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
                    </div>
                </li>`;
        });
        listHtml += '</ul><button onclick="UI.showStudentPicker(QuizStorage.getStudentNames())" class="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Back</button>';
        container.innerHTML = listHtml;
    },

    editQuestion: function (index) {
        const q = QUESTIONS[index];
        UI.showQuestionEditForm(q, index);
    },

    addNewQuestion: function () {
        const newQ = {
            question: '',
            answers: { A: '', B: '', C: '', D: '' },
            correct: 'A',
            explanation: '',
            figure: '',
            source: ''
        };
        UI.showQuestionEditForm(newQ, QUESTIONS.length, true);
    },

    deleteQuestion: function (index) {
        if (confirm(`Delete question ${index + 1}?`)) {
            QUESTIONS.splice(index, 1);
            alert('Question deleted.');
            UI.showEditQuestions();
        }
    },

    showQuestionEditForm: function (q, index, isNew = false) {
        const container = document.getElementById('questionContainer');
        container.innerHTML = `
            <div class="text-2xl font-bold mb-4">${isNew ? 'Add New Question' : 'Edit Question ' + (index + 1)}</div>
            <label>Question:</label><br>
            <textarea id="editQuestionText" class="w-full p-2 border rounded mb-2">${q.question}</textarea><br>
            <label>Answers (A-D):</label><br>
            <input id="editAnswerA" value="${q.answers.A}" class="w-full p-2 border rounded mb-1"><br>
            <input id="editAnswerB" value="${q.answers.B}" class="w-full p-2 border rounded mb-1"><br>
            <input id="editAnswerC" value="${q.answers.C}" class="w-full p-2 border rounded mb-1"><br>
            <input id="editAnswerD" value="${q.answers.D}" class="w-full p-2 border rounded mb-1"><br>
            <label>Correct Answer (A-D):</label><br>
            <input id="editCorrect" value="${q.correct}" class="w-full p-2 border rounded mb-2"><br>
            <label>Explanation:</label><br>
            <textarea id="editExplanation" class="w-full p-2 border rounded mb-2">${q.explanation}</textarea><br>
            <label>Figure (filename):</label><br>
            <input id="editFigure" value="${q.figure || ''}" class="w-full p-2 border rounded mb-2"><br>
            <label>Source (URL):</label><br>
            <input id="editSource" value="${q.source || ''}" class="w-full p-2 border rounded mb-2"><br>
            <button onclick="UI.saveEditedQuestion(${index}, ${isNew})" class="px-4 py-2 bg-green-500 text-white rounded mr-2">${isNew ? 'Add' : 'Save'}</button>
            <button onclick="UI.showEditQuestions()" class="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>`;
    },

    saveEditedQuestion: function (index, isNew = false) {
        const q = {
            question: document.getElementById('editQuestionText').value,
            answers: {
                A: document.getElementById('editAnswerA').value,
                B: document.getElementById('editAnswerB').value,
                C: document.getElementById('editAnswerC').value,
                D: document.getElementById('editAnswerD').value
            },
            correct: document.getElementById('editCorrect').value.toUpperCase(),
            explanation: document.getElementById('editExplanation').value,
            figure: document.getElementById('editFigure').value,
            source: document.getElementById('editSource').value
        };

        if (isNew) {
            QUESTIONS.push(q);
            alert('New question added!');
        } else {
            QUESTIONS[index] = q;
            alert('Question saved!');
        }

        UI.showEditQuestions();
    },

    init: function () {
        console.log('UI initialized');
    }
};
