const TestEngine = {
    currentTest: null,
    currentIndex: 0,
    answers: {},
    timer: null,
    timeLeft: 0,
  
    startStandardTest() {
      this.startTest(60, false, 2 * 60 * 60); // 60 questions, timer 2 hours
    },
  
    startCustomTest(numQuestions, disableTimer) {
      this.startTest(numQuestions, disableTimer, 2 * 60 * 60); // use same 2h default for timer
    },
  
    startTest(numQuestions, disableTimer, totalTimeSeconds) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      this.currentTest = shuffled.slice(0, numQuestions);
      this.currentIndex = 0;
      this.answers = {};
      this.timeLeft = disableTimer ? null : totalTimeSeconds;
      this.renderQuestion();
  
      if (!disableTimer) {
        this.startTimer();
      }
    },
  
    startTimer() {
      const timerDisplay = document.createElement("div");
      timerDisplay.id = "timer";
      timerDisplay.className = "alert alert-info";
      document.getElementById("app").prepend(timerDisplay);
  
      this.timer = setInterval(() => {
        if (this.timeLeft <= 0) {
          clearInterval(this.timer);
          alert("Time is up! Submitting test.");
          this.submitTest();
        } else {
          this.timeLeft--;
          const minutes = Math.floor(this.timeLeft / 60);
          const seconds = this.timeLeft % 60;
          timerDisplay.textContent = `Time left: ${minutes}m ${seconds}s`;
        }
      }, 1000);
    },
  
    renderQuestion() {
      const q = this.currentTest[this.currentIndex];
      const app = document.getElementById("app");
      const total = this.currentTest.length;
      const answered = Object.keys(this.answers).length;
      const progress = Math.floor((answered / total) * 100);
  
      app.innerHTML = `
        <div class="progress mb-2" style="position:relative; height:25px;">
          <div class="progress-bar bg-success" style="width:${progress}%"></div>
          <div class="progress-bar-text">${answered} of ${total} answered</div>
        </div>
        <h3>Question ${this.currentIndex + 1} of ${total}</h3>
        <p>${q.question}</p>
        ${q.figure ? `<img src="assets/figures/${q.figure}" alt="Figure" class="mb-2">` : ""}
        ${Object.entries(q.answers).map(([key, val]) =>
          `<div><label><input type="radio" name="answer" value="${key}" ${this.answers[q.id] === key ? "checked" : ""}> ${key}: ${val}</label></div>`
        ).join("")}
        <button id="prevBtn" class="btn btn-secondary mt-2" ${this.currentIndex === 0 ? "disabled" : ""}>Previous</button>
        <button id="nextBtn" class="btn btn-secondary mt-2">${this.currentIndex === total - 1 ? "Review/Submit" : "Next"}</button>
      `;
  
      document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.addEventListener("change", e => {
          this.answers[q.id] = e.target.value;
        });
      });
  
      document.getElementById("prevBtn").addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderQuestion();
        }
      });
  
      document.getElementById("nextBtn").addEventListener("click", () => {
        if (this.currentIndex < total - 1) {
          this.currentIndex++;
          this.renderQuestion();
        } else {
          this.showReviewScreen();
        }
      });
    },
  
    showReviewScreen() {
      const app = document.getElementById("app");
      const total = this.currentTest.length;
      const answered = Object.keys(this.answers).length;
      const unanswered = total - answered;
  
      app.innerHTML = `
        <h2>Review Answers</h2>
        <p>${answered} answered, ${unanswered} unanswered</p>
        <ul>
          ${this.currentTest.map((q, idx) => {
            const status = this.answers[q.id] ? "answered" : "unanswered";
            return `<li class="${status}">Q${idx + 1}: ${status}</li>`;
          }).join("")}
        </ul>
        <button id="backToQuestion" class="btn btn-secondary">Go Back</button>
        <button id="submitTest" class="btn btn-primary">Submit Test</button>
      `;
  
      document.getElementById("backToQuestion").addEventListener("click", () => {
        this.currentIndex = 0;
        this.renderQuestion();
      });
  
      document.getElementById("submitTest").addEventListener("click", () => {
        this.submitTest();
      });
    },
  
    submitTest() {
      if (this.timer) {
        clearInterval(this.timer);
      }
  
      let correct = 0;
      const incorrectAnswers = [];
  
      this.currentTest.forEach(q => {
        if (this.answers[q.id] === q.correct) {
          correct++;
        } else {
          incorrectAnswers.push(q);
        }
      });
  
      const score = Math.round((correct / this.currentTest.length) * 100);
      const passed = score >= 70;
      const timeTaken = this.timeLeft !== null ? (2 * 60 * 60 - this.timeLeft) : null;
  
      Storage.logTest(score, this.currentTest.length, timeTaken, incorrectAnswers.map(q => q.id));
  
      const app = document.getElementById("app");
      app.innerHTML = `
        <h2>Test Completed</h2>
        <p>Score: ${score}% (${correct} correct out of ${this.currentTest.length})</p>
        <p>Status: ${passed ? "<span class='text-success'>PASS</span>" : "<span class='text-danger'>FAIL</span>"}</p>
        <button id="backToMenu" class="btn btn-primary">Return to Main Menu</button>
      `;
  
      document.getElementById("backToMenu").addEventListener("click", () => {
        UI.showMainMenu();
      });
    }
  };
  