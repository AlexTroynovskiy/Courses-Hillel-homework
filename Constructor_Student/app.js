/* Конструкторы
Вам нужно сделать конструктор сущности Студент.

У Студента есть имя, фамилия, год рождения — это свойства.
Есть массив с оценками, это тоже свойство.
И есть возможность получить возраст студента и его средний бал — это методы.
Еще у всех Студентов есть по массиву одинаковой длины, в нем 30 элементов,
изначально он не заполнен, но на 30 элементов. Это массив в котором отмечается посещаемость, 
каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, 
когда вызываем .absent() — записывается false.
Есть массив с оценками и метод mark(), мы можем передать оценку от 0 до 10.


Предусмотрите какую нибудь защиту от того чтоб в массивах не могло быть более 30 записей. Массив это свойство, present и absent, mark — методы.



Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение, и если средняя оценка больше 9 а среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!", если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "
Редиска!". Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(конкретных студентов) и подергать методы. */


const Student = function (name, surname, bDay) {
    this.name = name,
        this.surname = surname,
        this.bDay = bDay,
        this.marks = new Array(30);
    this.visit = new Array(30);
    this.counterPresentAbsent = 0;
    this.counterMarks = 0;
    this.counterPresent = 0;
}

Student.prototype.getAge = function () {   // метод получения возраста
    let currentYear = new Date().getFullYear();
    return currentYear - this.bDay;
}

Student.prototype.present = function () {  // присутсвие
    if (this.counterPresentAbsent === 30) {
        console.log("Занятия закончились");
    } else {
        this.visit[this.counterPresentAbsent] = true;
        this.counterPresentAbsent++;
        this.visit[this.counterPresent] = true;
        this.counterPresent++;
    }

}
Student.prototype.absent = function () {  // отсутсвие
    if (this.counterPresentAbsent === 30) {
        console.log("Занятия закончились");
    } else {
        this.visit[this.counterPresentAbsent] = false;
        this.counterPresentAbsent++;
    }
}

Student.prototype.mark = function (n) {   // оценка
    if (n >= 0 && n <= 10) {
        if (this.counterMarks !== 30) {
            this.marks[this.counterMarks] = n;
            this.counterMarks++;
        } else console.log('Домашка закончилсь');
    } else {
        console.log("Таких оценок не бывает!");
    }
}

Student.prototype.AverageMarks = function () {   // успеваемость среднеея оценка
    let totalMarks = this.marks.reduce(function (ac, el) {
        ac = (ac + el);
        // ac = ac / (this.counterMarks);
        return ac;
    }, 0)
    let averageMarks = totalMarks / this.counterMarks;
    return averageMarks;
}

Student.prototype.AvarageVisit = function () {  // посещаеомсть среднеее
    return (this.counterPresent) / (this.visit.length);
}


Student.prototype.Result = function () {   // общий результат студента

    if (this.AverageMarks() > 9 && this.AvarageVisit() > 0.9) {
        return console.log("Ути какой молодчинка!");
    } else if (this.AverageMarks() < 9 && this.AvarageVisit() > 0.9 || this.AverageMarks() > 9 && this.AvarageVisit() < 0.9) {
        return console.log("Норм но можно лучше!");
    } else if (this.AverageMarks() < 9 && this.AvarageVisit() < 0.9) {
        return console.log("Редиска");
    }
}


const Jon = new Student("Jon", "Brown", 1990);
console.log(Jon.name, Jon.surname);
console.log(Jon.getAge());



// посещаемость

Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.absent()
Jon.absent()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()
Jon.present()

// оценки 

Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(7)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(7)
Jon.mark(9)
Jon.mark(7)
Jon.mark(9)
Jon.mark(9)
Jon.mark(10)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(8)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(10)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)
Jon.mark(9)


console.log(Jon.AvarageVisit());
console.log(Jon.AverageMarks());
Jon.Result();







