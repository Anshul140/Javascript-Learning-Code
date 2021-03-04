console.log('AJAX tutorial in one video');

// http://dummy.restapiexample.com/api/v1/employees

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');
    
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();
    
    //Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);     //true- non blocking call. Further process is running. This process is running in background
    
    //POST Request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);   
    xhr.getAllResponseHeaders('Content-type', 'application/json');
    
    //What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On Progress');
    }
    
    // xhr.onreadystatechange = function(){
        //     console.log('Ready state is', xhr.readyState);
        // }

    //what to do when response is ready
    xhr.onload = function(){
        
        if(this.status === 200){         //
            
            console.log(this.responseText);
        }
        else{
            console.error('Some error occured!');
        }
    }
    
    //send the request
    params = {"name":"test567","salary":"123","age":"23"};
    xhr.send(params);
    console.log('Last statement');
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {

    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    //what to do when response is ready
    xhr.onload = function(){
        
        if(this.status === 200){         //
            
            let obj = JSON.parse(this.responseText)
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj)
            {
                str += `<li>${obj[key]}</li>`
            }
            list.innerHTML = str;
        }
        else{
            console.error('Some error occured!');
        }
    }

    //send the request
    xhr.send();
    console.log('We are done fetching employees!');


}