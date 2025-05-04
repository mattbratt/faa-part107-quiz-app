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
        <button id="importData" class="btn btn-outline-primary mt-2">Import Data</button>
        <input type="file" id="importFile" style="display:none;">
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
        UI.showStats();
      });
  
      document.getElementById("adminPanel").addEventListener("click", () => {
        UI.showAdminPanel();
      });
  
      document.getElementById("exportData").addEventListener("click", () => {
        Storage.exportData();
      });
  
      document.getElementById("importData").addEventListener("click", () => {
        document.getElementById("importFile").click();
      });
  
      document.getElementById("importFile").addEventListener("change", (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = evt => {
          Storage.importData(evt.target.result);
        };
        reader.readAsText(file);
      });
    },
  
    showMessage(msg) {
      alert(msg);
    }
  };
  