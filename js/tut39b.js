//Convert callback methods into promise methods

const students = [
    {name:"Harry", subject: "Machine Learning"},
    {name:"Anshul", subject: "Javascript"},
]

function enrollStudent(student){

    return new Promise(function(resolve, reject){
        setTimeout(function() {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error)
            {
                resolve();
            }
            else{
                reject();
            }
        }, 1000);
    })
    
}


function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students list has been fetched");
    }, 5000);
}

let newStudent = {name: "Sunny", subject: "Python"};
// enrollStudent(newStudent);
// getStudents();
//here on doing above two steps, we can't see Sunny in our DOM because enrollStudent takes more time than fetching students
//In order to overcome this, we are using callback functions

enrollStudent(newStudent).then(getStudents).catch(console.log("Some error occured"));

//function inside then is ran as - resolve()
//function inside catch is ran as - reject
()