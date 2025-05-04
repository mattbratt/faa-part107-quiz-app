const Admin = {
    showAdminPanel() {
      const app = document.getElementById("app");
  
      app.innerHTML = `
        <h2>Admin Panel</h2>
        <button id="addQuestionBtn" class="btn btn-primary mb-2">Add New Question</button>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Correct</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="questionTableBody"></tbody>
        </table>
        <button id="backToMenuBtn" class="btn btn-secondary">Back to Menu</button>
      `;
  
      const tbody = document.getElementById("questionTableBody");
      tbody.innerHTML = questions.map(q => `
        <tr>
          <td>${q.id}</td>
          <td>${q.question.slice(0, 50)}${q.question.length > 50 ? "..." : ""}</td>
          <td>${q.correct}</td>
          <td>
            <button class="btn btn-sm btn-warning editBtn" data-id="${q.id}">Edit</button>
          </td>
        </tr>
      `).join("");
  
      document.querySelectorAll(".editBtn").forEach(btn => {
        btn.addEventListener("click", () => {
          const qid = parseInt(btn.dataset.id);
          this.showEditQuestion(qid);
        });
      });
  
      document.getElementById("addQuestionBtn").addEventListener("click", () => {
        this.showEditQuestion(null);
      });
  
      document.getElementById("backToMenuBtn").addEventListener("click", () => {
        UI.showMainMenu();
      });
    },
  
    showEditQuestion(qid) {
      const q = qid !== null ? questions.find(q => q.id === qid) : { id: this.nextId(), question: "", answers: { A: "", B: "", C: "" }, correct: "A", explanation: "", tags: [], figure: null, source: "" };
  
      const app = document.getElementById("app");
      app.innerHTML = `
        <h2>${qid !== null ? "Edit Question" : "Add Question"}</h2>
        <label>Question: <textarea id="qText" class="form-control">${q.question}</textarea></label><br>
        <label>Answer A: <input id="aText" class="form-control" value="${q.answers.A}"></label><br>
        <label>Answer B: <input id="bText" class="form-control" value="${q.answers.B}"></label><br>
        <label>Answer C: <input id="cText" class="form-control" value="${q.answers.C}"></label><br>
        <label>Correct Answer: 
          <select id="correctAnswer" class="form-select">
            <option value="A" ${q.correct === "A" ? "selected" : ""}>A</option>
            <option value="B" ${q.correct === "B" ? "selected" : ""}>B</option>
            <option value="C" ${q.correct === "C" ? "selected" : ""}>C</option>
          </select>
        </label><br>
        <label>Explanation: <textarea id="qExplanation" class="form-control">${q.explanation}</textarea></label><br>
        <label>Tags (comma separated): <input id="qTags" class="form-control" value="${q.tags.join(",")}"></label><br>
        <label>Figure (optional filename): <input id="qFigure" class="form-control" value="${q.figure || ""}"></label><br>
        <label>Source: <input id="qSource" class="form-control" value="${q.source}"></label><br>
        <button id="saveQuestionBtn" class="btn btn-success mt-2">Save</button>
        <button id="cancelBtn" class="btn btn-secondary mt-2">Cancel</button>
      `;
  
      document.getElementById("saveQuestionBtn").addEventListener("click", () => {
        const updated = {
          id: q.id,
          question: document.getElementById("qText").value,
          answers: {
            A: document.getElementById("aText").value,
            B: document.getElementById("bText").value,
            C: document.getElementById("cText").value
          },
          correct: document.getElementById("correctAnswer").value,
          explanation: document.getElementById("qExplanation").value,
          tags: document.getElementById("qTags").value.split(",").map(t => t.trim()),
          figure: document.getElementById("qFigure").value || null,
          source: document.getElementById("qSource").value
        };
  
        if (qid !== null) {
          const idx = questions.findIndex(q => q.id === qid);
          questions[idx] = updated;
        } else {
          questions.push(updated);
        }
  
        alert("Question saved locally (requires manual save to persist externally).");
        this.showAdminPanel();
      });
  
      document.getElementById("cancelBtn").addEventListener("click", () => {
        this.showAdminPanel();
      });
    },
  
    nextId() {
      return questions.length ? Math.max(...questions.map(q => q.id)) + 1 : 1;
    }
  };
  