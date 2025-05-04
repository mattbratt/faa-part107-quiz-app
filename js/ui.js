const UI = {
    init() {
      Storage.loadStudents();
      this.showStudentSelection();
    },
  
    showStudentSelection() {
      const app = document.getElementById("app");
      app.innerHTML = `
        <h2>Select Student</h2>
        <select id="studentSelect" class="form-select mb-3"></select>
        <button id="createStudentBtn" class="btn btn-primary">Create New Student</button>
        <button id="continueBtn" class="btn btn-success mt-2">Continue</button>
      `;
  
      const select = document.getElementById("studentSelect");
      Storage.students.forEach(s => {
        const option = document.createElement("option");
        option.value = s.name;
        option.textContent = s.name;
        select.appendChild(option);
      });
  
      document.getElementById("createStudentBtn").addEventListener("click", () => {
        const name = prompt("Enter student first name:");
        if (name) {
          Storage.addStudent(name);
          const opt = document.createElement("option");
          opt.value = name;
          opt.textContent = name;
          select.appendChild(opt);
          select.value = name;
        }
      });
  
      document.getElementById("continueBtn").addEventListener("click", () => {
        const selected = select.value;
        if (selected) {
          Storage.selectStudent(selected);
          this.showMainMenu();
        } else {
          alert("Please select or create a student.");
        }
      });
    },
  
    showMainMenu() {
      const app = document.getElementById("app");
      app.innerHTML = `
        <h2>Welcome, ${Storage.selectedStudent}</h2>
        <button id="startStandard" class="btn btn-primary">Start FAA Standard Test</button>
        <button id="startCustom" class="btn btn-secondary">Start Custom Test</button>
        <button id="viewStats" class="btn btn-info">View Statistics</button>
        <button id="adminPanel" class="btn btn-warning">Admin Panel</button>
        <button id="exportData" class="btn btn-outline-success mt-2">Export Data</button>
        <button id="switchStudentBtn" class="btn btn-outline-secondary mt-2">Switch Student</button>
      `;
  
      document.getElementById("startStandard").addEventListener("click", () => {
        TestEngine.startStandardTest();
      });
  
      document.getElementById("startCustom").addEventListener("click", () => {
        const numQ = prompt("How many questions? (1-200)");
        const disableTimer = confirm("Disable timer?");
        TestEngine.startCustomTest(parseInt(numQ), disableTimer);
      });
  
      document.getElementById("viewStats").addEventListener("click", () => {
        ChartManager.showStats(Storage.selectedStudent);
      });
  
      document.getElementById("adminPanel").addEventListener("click", () => {
        Admin.showAdminPanel();
      });
  
      document.getElementById("exportData").addEventListener("click", () => {
        Storage.exportData();
      });
  
      document.getElementById("switchStudentBtn").addEventListener("click", () => {
        Storage.selectedStudent = null;
        UI.showStudentSelection();
      });
    },
  
    showMessage(msg) {
      alert(msg);
    }
  };
  