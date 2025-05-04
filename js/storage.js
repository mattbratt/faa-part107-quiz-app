const Storage = {
    students: [],
    selectedStudent: null,
  
    loadStudents() {
      const data = localStorage.getItem("students");
      if (data) {
        this.students = JSON.parse(data);
      } else {
        this.students = [];
      }
    },
  
    saveStudents() {
      localStorage.setItem("students", JSON.stringify(this.students));
    },
  
    addStudent(name) {
      if (!this.students.find(s => s.name === name)) {
        const newStudent = { name, tests: [] };
        this.students.push(newStudent);
        this.saveStudents();
      }
      this.selectedStudent = name;
    },
  
    selectStudent(name) {
      if (this.students.find(s => s.name === name)) {
        this.selectedStudent = name;
      }
    },
  
    logTest(score, totalQuestions, timeTaken, incorrectAnswers) {
      const student = this.students.find(s => s.name === this.selectedStudent);
      if (student) {
        student.tests.push({
          date: new Date().toISOString(),
          score,
          totalQuestions,
          timeTaken,
          incorrectAnswers
        });
        this.saveStudents();
      }
    },
  
    deleteStudent(name) {
      this.students = this.students.filter(s => s.name !== name);
      this.saveStudents();
      if (this.selectedStudent === name) {
        this.selectedStudent = null;
      }
    },
  
    exportData() {
      const dataStr = JSON.stringify(this.students, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "student_data.json";
      link.click();
      URL.revokeObjectURL(url);
    },
  
    importData(jsonString) {
      try {
        const imported = JSON.parse(jsonString);
        if (Array.isArray(imported)) {
          this.students = imported;
          this.saveStudents();
          alert("Import successful.");
        } else {
          alert("Invalid import data.");
        }
      } catch (e) {
        alert("Error importing data.");
      }
    }
  };
  