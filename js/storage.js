const Storage = {
    keyPrefix: 'faa_part107_quiz_',
  
    getStudentNames: function () {
      const data = localStorage.getItem(this.keyPrefix + 'students');
      return data ? JSON.parse(data) : [];
    },
  
    saveStudentName: function (name) {
      let students = this.getStudentNames();
      if (!students.includes(name)) {
        students.push(name);
        localStorage.setItem(this.keyPrefix + 'students', JSON.stringify(students));
      }
    },
  
    saveResult: function (studentName, result) {
      let results = this.getResults(studentName);
      results.push({
        date: new Date().toISOString(),
        correct: result.correct,
        total: result.total,
        score: result.score
      });
      localStorage.setItem(
        this.keyPrefix + 'results_' + studentName,
        JSON.stringify(results)
      );
    },
  
    getResults: function (studentName) {
      const data = localStorage.getItem(this.keyPrefix + 'results_' + studentName);
      return data ? JSON.parse(data) : [];
    }
  };
  
  // Add a function to initialize storage with a default empty array if not set
  (function initializeStorage() {
    if (!localStorage.getItem(Storage.keyPrefix + 'students')) {
      localStorage.setItem(Storage.keyPrefix + 'students', JSON.stringify([]));
    }
  })();
  