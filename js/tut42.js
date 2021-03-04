console.log("Tut-42 || Fetch API");

//Button with id- myBtn
let myBtn = document.getElementById("myBtn");

//div with id- content
let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData")
//     url = "harry.txt"
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

//JSON.stringify()- is used when data is in object form
//JSON.stringify()- is not used when data is string form

function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users"
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.json();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}


function postData(){
    url = "https://api.mocki.io/v1/13f44462";
    data = '{"title":"Anshul42732","description":"He is undefinable"}';
    params = {
        method: 'post',
        headers:{
            'Content-type': 'application/json'
        },
        body: data
    };
    fetch(url, params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

// console.log("Before running getData");
// getData();
// console.log("After running getData");

postData();
