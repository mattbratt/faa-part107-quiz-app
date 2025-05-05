const QuizStorage = {
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
  
  // ✅ Fixed reference here:
  (function initializeStorage() {
    if (!localStorage.getItem(QuizStorage.keyPrefix + 'students')) {
      localStorage.setItem(QuizStorage.keyPrefix + 'students', JSON.stringify([]));
    }
  })();

  QuizStorage.getRandomQuestions = function (count) {
    if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS)) {
        console.error("QUESTIONS array is not defined.");
        return [];
    }
    const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
