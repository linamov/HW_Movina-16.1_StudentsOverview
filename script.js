function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null); // 25 елементів

    // Метод: отримати вік
    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear;
    }

    // Метод: середній бал
    this.getAverageGrade = function() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }

    // Метод: відмітка присутності
    this.present = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) this.attendance[index] = true;
    }

    // Метод: відмітка відсутності
    this.absent = function() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) this.attendance[index] = false;
    }

    // Метод: підсумок
    this.summary = function() {
        const avgGrade = this.getAverageGrade();
        const attendedCount = this.attendance.filter(a => a === true).length;
        const filledCount = this.attendance.filter(a => a !== null).length;
        const attendanceRate = filledCount === 0 ? 0 : attendedCount / filledCount;

        if (avgGrade >= 90 && attendanceRate >= 0.9) {
            return "Молодець!";
        } else if (avgGrade >= 90 || attendanceRate >= 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

// Приклади
const student1 = new Student('Ivan', 'Kvit', 2000, [95, 88, 92]);
const student2 = new Student('Olena', 'Petrova', 1999, [80, 85, 78]);
const student3 = new Student('Mykola', 'Sadoviy', 2001, [91, 93, 95]);

// Відмітки відвідуваності
student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();

student3.present();
student3.present();
student3.present();

// Вивід у консоль
console.log(student1.firstName, student1.getAge(), student1.getAverageGrade(), student1.attendance, student1.summary());
console.log(student2.firstName, student2.getAge(), student2.getAverageGrade(), student2.attendance, student2.summary());
console.log(student3.firstName, student3.getAge(), student3.getAverageGrade(), student3.attendance, student3.summary());
