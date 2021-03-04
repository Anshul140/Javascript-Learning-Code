console.log('This is tutorial-37 || CallBack Function');

// let studentList = document.getElementById("students");

const students = [
    {name:"Harry", subject: "Machine Learning"},
    {name:"Anshul", subject: "Javascript"},
]

function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 8000);
}


function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students list has been fetched");
    }, 1000);
}

let newStudent = {name: "Sunny", subject: "Python"};
// enrollStudent(newStudent);
// getStudents();
//here on doing above two steps, we can't see Sunny in our DOM because enrollStudent takes more time than fetching students
//In order to overcome this, we are using callback functions

enrollStudent(newStudent, getStudents);