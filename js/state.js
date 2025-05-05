// js/state.js

const State = {
    students: [],
    currentStudent: null,

    load() {
        const data = localStorage.getItem('faaQuizAppData');
        if (data) {
            const parsed = JSON.parse(data);
            this.students = parsed.students || [];
            this.currentStudent = parsed.currentStudent || null;
        }
    },

    save() {
        const data = {
            students: this.students,
            currentStudent: this.currentStudent
        };
        localStorage.setItem('faaQuizAppData', JSON.stringify(data));
    },

    addStudent(name) {
        const exists = this.students.find(s => s.name === name);
        if (!exists) {
            this.students.push({
                name,
                history: []
            });
            this.currentStudent = name;
            this.save();
        }
    },

    getStudent(name) {
        return this.students.find(s => s.name === name);
    },

    deleteStudent(name) {
        this.students = this.students.filter(s => s.name !== name);
        if (this.currentStudent === name) {
            this.currentStudent = null;
        }
        this.save();
    },

    exportData() {
        const blob = new Blob([JSON.stringify(this.students, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'faa_quiz_data.json';
        a.click();
        URL.revokeObjectURL(url);
    },

    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (Array.isArray(imported)) {
                    this.students = imported;
                    this.save();
                    UI.showMessage('Data imported successfully!');
                } else {
                    UI.showMessage('Invalid data format.');
                }
            } catch (err) {
                UI.showMessage('Error reading file.');
            }
        };
        reader.readAsText(file);
    },

    setCurrentStudent(name) {
        this.currentStudent = name;
        console.log(`Current student set to: ${this.currentStudent}`);
    }
};

State.load();
