//You have to pretend to use a word api which will contain an object and you have to print definition from all the results of that word api. 
//You have to take input from an input tag
//You have to print it in the DOM
//If you are using bootstrap then its a plus

console.log("Dictionary API Exercise");  //html page name is index38

const dictionary = [
    { word: "Awesome", meaning: "causing or inducing awe; inspiring an overwhelming feeling of reverence", type: "adjective" },
    { word: "Blush", meaning: "to become red in the face, especially because you are embarrassed", type: "verb" },
    { word: "Console", meaning: "to make somebody happier when he/she is very sad or disappointed", type: "verb" },
    { word: "Dumbstruck", meaning: "so shocked or surprised as to be unable to speak", type: "adjective" },
    { word: "Exotic", meaning: "unusual or interesting because it comes from a different country or culture", type: "adjective" },
    { word: "Foster", meaning: "to help or encourage the development of something (especially feelings or ideas)", type: "verb" }
];

let wordSrch = document.getElementById('wordSrch');
wordSrch.addEventListener('submit', wordSrchFunc);


function wordSrchFunc(e) {
    let Word = document.getElementById("word");
    let wordStr = Word.value;

    console.log("You have clicked the submit button")
    let str = "";
    if (wordStr == "Awesome"){
        str = `${dictionary[0].meaning}`;
    }
    else if (wordStr == "Blush") {
        str = `${dictionary[1].meaning}`;
    }
    else if (wordStr == "Console") {
        str = `${dictionary[2].meaning}`;
    }
    else if (wordStr == "Dumbstruck") {
        str = `${dictionary[3].meaning}`;
        
    }
    else if (wordStr == "Exotic") {
        str = `${dictionary[4].meaning}`;
    }
    else if (wordStr == "Foster") {
        str = `${dictionary[5].meaning}`;
    }
    else {
        str = "Invalid Word Entry...!!!";
    }
    console.log(str);

    document.getElementById("meaning").innerHTML = str;
    e.preventDefault();
}



