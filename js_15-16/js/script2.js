function Human(){
    this.name = 'Jack';
    this.age = 30;
    this.gender = 'M';
    this.height = 180;
    this.weight = 90;
}

function Worker(){
    this.work = 'home';
    this.salary = 1000;
    this.worked = function(){
        alert('worked');
    }
}

Worker.prototype = new Human();

var newWorker = new Worker();

newWorker.worked();

console.log('newWorker', newWorker);


function Student(){
    this.study = 'znu';
    this.scholarship = 0;
    this.watch = function(){
        alert('watch TV shows');
    }
}

Student.prototype = new Human();

var newStudent = new Student();

newStudent.watch();

console.log('newStudent', newStudent);
