const App = {
    currentQuestionIndex: 0,
    selectedAnswers: {},
    quizQuestions: [],
    timerInterval: null,
    quizDuration: 7200,
    timeRemaining: 7200,
    lastQuizConfig: null,         // stores last config
    lastQuizQuestions: null,      // ✅ stores last question set

    init: () => {
        console.log("App initialized");

        const students = QuizStorage.getStudentNames();
        UI.showStudentPicker(students);

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'startStandardBtn') {
                const selectedName = document.getElementById('studentSelect').value;
                State.setCurrentStudent(selectedName);
                App.startQuiz('standard');
            }
            if (e.target && e.target.id === 'startCustomConfirmBtn') {
                const selectedName = State.currentStudent || document.getElementById('studentSelect').value;
                State.setCurrentStudent(selectedName);

                const numInput = document.getElementById('customQuestionCount');
                const timeInput = document.getElementById('customTimeLimit');
                const numQuestions = parseInt(numInput.value) || 10;
                const timeMinutes = parseInt(timeInput.value) || 60;
                const disableTimer = (timeMinutes === 0);

                App.startQuiz('custom', numQuestions, timeMinutes, disableTimer);
            }

        });
    },

    startQuiz: function (mode = 'standard', numQuestions = 60, timeMinutes = 120, disableTimer = false, specificQuestions = null) {
        console.log(`Starting quiz mode: ${mode}`);

        if (mode === 'standard') {
            numQuestions = 60;
            timeMinutes = 120;
            disableTimer = false;
        }

        // ✅ Save config and selected questions
        App.lastQuizConfig = { mode, numQuestions, timeMinutes, disableTimer };

        if (specificQuestions) {
            App.quizQuestions = specificQuestions;  // reuse same questions if provided
        } else {
            App.quizQuestions = QuizStorage.getRandomQuestions(numQuestions);
            App.lastQuizQuestions = [...App.quizQuestions]; // store a copy
        }

        App.selectedAnswers = {};
        App.currentQuestionIndex = 0;

        App.quizDuration = disableTimer ? Infinity : (timeMinutes * 60);
        App.timeRemaining = App.quizDuration;

        console.log(`Selected ${App.quizQuestions.length} questions`);
        console.log(`Timer: ${disableTimer ? 'disabled' : `${timeMinutes} minutes`}`);

        App.showQuestion(App.currentQuestionIndex);

        if (!disableTimer) {
            App.startTimer();
        } else {
            const timerDisplay = document.getElementById('timerDisplay');
            if (timerDisplay) timerDisplay.textContent = 'No Timer (Unlimited)';
        }
    },

    retakeQuiz: function () {
        if (!App.lastQuizConfig || !App.lastQuizQuestions) {
            alert("No previous quiz found to retake.");
            return;
        }
        console.log("Retaking same quiz...");
        App.startQuiz(
            App.lastQuizConfig.mode,
            App.lastQuizConfig.numQuestions,
            App.lastQuizConfig.timeMinutes,
            App.lastQuizConfig.disableTimer,
            App.lastQuizQuestions  // ✅ reuse same questions
        );
    },

    showQuestion: (index) => {
        const question = App.quizQuestions[index];
        UI.renderQuestion(
            question,
            index + 1,
            App.quizQuestions.length,
            App.selectedAnswers[question.id]
        );
    },

    selectAnswer: (answer) => {
        const question = App.quizQuestions[App.currentQuestionIndex];
        App.selectedAnswers[question.id] = answer;
        console.log(`Selected ${answer} for question ID ${question.id}`);
    },

    nextQuestion: () => {
        if (App.currentQuestionIndex < App.quizQuestions.length - 1) {
            App.currentQuestionIndex++;
            App.showQuestion(App.currentQuestionIndex);
        } else {
            alert("You have reached the last question. You can review or submit.");
            UI.renderQuestion(
                App.quizQuestions[App.currentQuestionIndex],
                App.currentQuestionIndex + 1,
                App.quizQuestions.length,
                App.selectedAnswers[App.quizQuestions[App.currentQuestionIndex].id]
            );
        }
    },

    previousQuestion: () => {
        if (App.currentQuestionIndex > 0) {
            App.currentQuestionIndex--;
            App.showQuestion(App.currentQuestionIndex);
        }
    },

    submitAnswer: (answer) => {
        App.selectAnswer(answer);
        App.nextQuestion();
    },

    submitQuiz: () => {
        clearInterval(App.timerInterval);
        const total = App.quizQuestions.length;
        let correct = 0;
        const incorrect = [];

        App.quizQuestions.forEach(q => {
            const userAnswer = App.selectedAnswers[q.id];
            if (userAnswer === q.correct) {
                correct++;
            } else {
                incorrect.push({
                    question: q,
                    selected: userAnswer || 'No Answer'
                });
            }
        });

        const scorePercent = Math.round((correct / total) * 100);
        const result = {
            score: scorePercent,
            correct: correct,
            total: total,
            incorrectQuestions: incorrect
        };

        QuizStorage.saveResult(State.currentStudent, {
            date: new Date().toLocaleString(),
            score: scorePercent,
            correct: correct,
            total: total
        });

        UI.showResults(result, State.currentStudent);
    },

    startTimer: () => {
        if (App.quizDuration === Infinity) {
            console.log("Timer disabled → no interval started");
            const timerDisplay = document.getElementById('timerDisplay');
            if (timerDisplay) {
                timerDisplay.textContent = 'No Timer (Unlimited)';
            }
            return;
        }

        App.timeRemaining = App.quizDuration;
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) {
            timerDisplay.textContent = App.formatTime(App.timeRemaining);
        }
        App.timerInterval = setInterval(() => {
            App.timeRemaining--;
            if (timerDisplay) {
                timerDisplay.textContent = App.formatTime(App.timeRemaining);
            }
            if (App.timeRemaining <= 0) {
                clearInterval(App.timerInterval);
                alert("Time's up! Submitting quiz.");
                App.submitQuiz();
            }
        }, 1000);
    },

    formatTime: (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }
};

document.addEventListener('DOMContentLoaded', App.init);
