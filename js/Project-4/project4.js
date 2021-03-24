console.log("This is project-4");

const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validEmail = false;
let validName = false;
let validPhone = false;


Name.addEventListener('blur', () => {
    console.log("name is blurred");
    //Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your name is valid");
        Name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.error("Invalid UserName!");
        Name.classList.add('is-invalid');
    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    //Validate email here

    let regex = /^([_\-\.a-z0-9]+)@([_\-\.a-z0-9]+)\.([a-z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.error("Invalid Email-ID!");
        email.classList.add('is-invalid');

    }
});

phone.addEventListener('blur', () => {
    console.log("phone no. is blurred");
    //Validate name here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.error("Invalid Phone Number!");
        phone.classList.add('is-invalid');
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    
    e.preventDefault();
    console.log("You have clicked on submit button");

    if(validEmail && validName && validPhone){
        let success = document.getElementById('success');
        success.classList.add('show');
    }
    else{
        let failure = document.getElementById('failure');
        failure.classList.add('show');
    }
})