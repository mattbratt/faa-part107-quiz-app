const App = {
    currentQuestionIndex: 0,
    selectedAnswers: [],
    timer: null,
    timeLeft: 60 * 120, // 2 hours in seconds
    studentName: '',
    currentQuestions: [],
  
    init: function () {
      console.log("UI initialized");
      UI.showStudentPicker(Storage.getStudentNames());
    },
  
    startTest: function () {
      const studentSelect = document.getElementById('studentSelect');
      App.studentName = studentSelect.value;
      App.currentQuestions = [...questions]; // use imported questions.js array
      App.selectedAnswers = new Array(App.currentQuestions.length).fill(null);
      App.currentQuestionIndex = 0;
      App.timeLeft = 60 * 120;
  
      App.startTimer();
      UI.renderQuestion(App.currentQuestions[0], 1, App.currentQuestions.length);
    },
  
    startTimer: function () {
      App.timer = setInterval(() => {
        App.timeLeft--;
        UI.updateTimer(App.timeLeft);
        if (App.timeLeft <= 0) {
          clearInterval(App.timer);
          App.finishTest();
        }
      }, 1000);
    },
  
    selectAnswer: function (index, answerKey) {
      App.selectedAnswers[index] = answerKey;
      UI.markAnswered(index);
    },
  
    nextQuestion: function () {
      if (App.currentQuestionIndex < App.currentQuestions.length - 1) {
        App.currentQuestionIndex++;
        UI.renderQuestion(
          App.currentQuestions[App.currentQuestionIndex],
          App.currentQuestionIndex + 1,
          App.currentQuestions.length,
          App.selectedAnswers[App.currentQuestionIndex]
        );
      }
    },
  
    prevQuestion: function () {
      if (App.currentQuestionIndex > 0) {
        App.currentQuestionIndex--;
        UI.renderQuestion(
          App.currentQuestions[App.currentQuestionIndex],
          App.currentQuestionIndex + 1,
          App.currentQuestions.length,
          App.selectedAnswers[App.currentQuestionIndex]
        );
      }
    },
  
    finishTest: function () {
      clearInterval(App.timer);
      const result = App.evaluate();
      Storage.saveResult(App.studentName, result);
      UI.showResults(result, App.studentName);
    },
  
    retakeSameTest: function () {
      App.selectedAnswers = new Array(App.currentQuestions.length).fill(null);
      App.currentQuestionIndex = 0;
      App.timeLeft = 60 * 120;
      App.startTimer();
      UI.renderQuestion(App.currentQuestions[0], 1, App.currentQuestions.length);
    },
  
    evaluate: function () {
      let correctCount = 0;
      let incorrectQuestions = [];
  
      App.currentQuestions.forEach((q, index) => {
        const selected = App.selectedAnswers[index];
        if (selected === q.correct) {
          correctCount++;
        } else {
          incorrectQuestions.push({
            question: q,
            selected: selected,
            correct: q.correct
          });
        }
      });
  
      const scorePercent = (correctCount / App.currentQuestions.length) * 100;
  
      return {
        correct: correctCount,
        total: App.currentQuestions.length,
        score: scorePercent,
        incorrectQuestions: incorrectQuestions
      };
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });
  