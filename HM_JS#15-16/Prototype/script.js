$(function () {

function Human(name, age, gender, height, weight) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

    Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;
    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;

    Human.prototype.does = function() {
        console.log('Занятие: ' + this.work);
    }

    function Worker(name, age, gender, height, weight, workplace, sale) {
        Human.apply(this, arguments);
        this.workplace = workplace;
        this.sale = sale;
        this.work = 'Я работаю!';
    }

    function Student(name, age, gender, height, weight, study, sale) {
        Human.apply(this, arguments);
        this.study = study;
        this.sale = sale;
        this.work = 'Я учусь!';
    }

    var den = new Worker('Ден', 28, 'male', 178, 68, 'smartukraine', 3000);
    console.log(den);
    den.does();

    var stacy = new Worker('Стася', 25, 'female', 168, 50, 'somewhere', 5000);
    console.log(stacy);
    stacy.does();

    var misha = new Student('Миша', 28, 'male', 188, 74, 'university', 500);
    console.log(misha);
    misha.does();

    var artem = new Student('Артем', 24, 'male', 178, 70, 'school', 300);
    console.log(artem);
    artem.does();

});