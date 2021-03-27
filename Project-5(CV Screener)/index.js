console.log("CV Screener APP");

//Array of objects which contains info about candidates
const data = [
    {
        name: 'Rohan Gupta',
        age: 20,
        city: 'Bettiah',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Saurabh Verma',
        age: 20,
        city: 'Patna',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Anshul Mahato',
        age: 21,
        city: 'Jamshedpur',
        language: 'Javascript',
        framework: 'NodeJS',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        name: 'Sohana Behera',
        age: 21,
        city: 'Kolkata',
        language: 'Javascript',
        framework: 'ReactJS',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
        name: 'Kaushaki Pandey',
        age: 21,
        city: 'Bhagalpur',
        language: 'Javascript',
        framework: 'AngularJS',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    }
]

//CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < profiles.length) {
                return {
                    value: profiles[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    };
}
let candidates = cvIterator(data);  //instance for iterating over data(profiles)
nextCV();

//Button listener 
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;

    if (currentCandidate != undefined) {
        let image = document.getElementById('image');
        let profile = document.getElementById('profile');
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Location: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>  
  </ul>`
    }
    
    else{
        let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
        <strong>Done:</strong> No more applications remaining!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
    }
}