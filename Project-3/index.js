console.log("News API Project");
// fb5f3f2b8955467cb3ad5ff7de373b80

let apiKey = 'fb5f3f2b8955467cb3ad5ff7de373b80';
let source = 'bbc-news';

//Grab the conatiner
let newsAccordion = document.getElementById("newsAccordion");

//Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function(){
        
    if(this.status === 200){         
        
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        console.log(articles);

        articles.forEach(function(element, index) {
            
            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}</b>:${element["title"]}
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">
                                ${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
                            </div>
                        </div>
                    </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
        
    }
    else{
        console.error('Some error occured!');
    }
}

xhr.send();

