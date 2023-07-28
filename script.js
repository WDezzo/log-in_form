let users=[];
if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
}


// log in script 
// <<<start here>>>

const logUser = document.getElementById("l-username");
const logPassword = document.getElementById("l-password");
const logIn = document.getElementById("log-btn");

logIn.addEventListener('click', (e) => {
    e.preventDefault();
    let userInput = logUser.value;
    let passInput = logPassword.value;
    loginCheck(userInput,passInput);
    loginCheck?alert('seccefull log-in'):alert('wrong username or password');
});

loginCheck=(userInput,passInput)=>{
    users.forEach(user=>{
        if (userInput === user.userName && passInput === user.password) {
            return   true;
        } 
    });
}
// <<<end here>>>

// sign up script
// <<<start here>>>

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const signUser = document.getElementById('s-username');
const signPassword = document.getElementById('s-password');
const confPassword = document.getElementById('sc-password');
const terms = document.getElementById('terms-condition');
const signUp = document.getElementById('sign-btn')


// if(signPassword===confPassword){
// }

const createUser=()=>{
    const obj={};
    obj.fullname=fullName.value;
    obj.email=email.value;
    obj.userName=signUser.value;
    obj.password=signPassword.value;
    users.push(obj)
}
signUp.addEventListener('click',(e)=>{
    e.preventDefault();
    createUser();
    window.localStorage.setItem('Users',JSON.stringify(users));  
})

// <<<end here>>>

