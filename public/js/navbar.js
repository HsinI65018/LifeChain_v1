// update display status
const displayController = (firstItem, secondItem) => {
    firstItem.style.display = 'none';
    secondItem.style.display = 'flex';
}


// click navbar sign in, show sign in form
const signInBtn = document.querySelector('.sign-in-btn');
const signInContainer = document.querySelector('.sign-in');
const signUpcontainer = document.querySelector('.sign-up');
const showSignInController = () => {
    signInContainer.style.display = 'flex';
    signInContainer.classList.add('show-animation');
}
signInBtn.addEventListener('click', showSignInController);


// click close btn, close sign in or sign up
const closeInBtn = document.querySelector('.close-in-btn');
const closeUpBtn = document.querySelector('.close-up-btn');
const closeController = (e) => {
    const target = e.target.className;
    if(target.includes('-in')){
        signInContainer.style.display = 'none';
    }else{
        signUpcontainer.style.display = 'none';
    }
}
closeInBtn.addEventListener('click', closeController);
closeUpBtn.addEventListener('click', closeController);


// switch sign in and sign up
const switchIn = document.querySelector('.switch-in');
const switchUp = document.querySelector('.switch-up');
const switchConteoller = (e) => {
    const target = e.target.className;
    if(target.includes('-up')){
        displayController(signInContainer, signUpcontainer);
    }else{
        displayController(signUpcontainer, signInContainer);
        signInContainer.classList.remove('show-animation');
    }
}
switchIn.addEventListener('click', switchConteoller);
switchUp.addEventListener('click', switchConteoller);


// sign up
const signUpForm = document.querySelector('.sign-up-form');
const signUpController = async (e) => {
    e.preventDefault();
    const userName = document.querySelector('.sign-up-name');
    const email = document.querySelector('.sign-up-email');
    const password = document.querySelector('.sign-up-password');
    const response = await fetch('/api/user', {
        method: "POST",
        body: JSON.stringify({
            userName: userName.value,
            email: email.value,
            password: password.value
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    // const data = await response.json();

    displayController(signUpcontainer, signInContainer);
    userName.value = '';
    email.value = '';
    password.value = '';
};
signUpForm.addEventListener('submit', signUpController);


// Sign in
const signInForm = document.querySelector('.sign-in-form');
const signInController = async (e) => {
    e.preventDefault();
    const email = document.querySelector('.sign-in-email');
    const password = document.querySelector('.sign-in-password');
    const response = await fetch('/api/user/login', {
        method: "POST",
        body:JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    if(data.success === true){
        location.reload();
    }
}
signInForm.addEventListener('submit', signInController);


// check if user sign in
const signInUser = document.querySelector('.sign-in-user');
const signOutBtn = document.querySelector('.sign-out-btn');
const checkUserController = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    if(data.success === true){
        signInUser.textContent = `Hi, ${data.data.name.charAt(0).toUpperCase() + data.data.name.slice(1)}`;
        signInBtn.classList.add('hide');
        signOutBtn.classList.remove('hide');
    }else{
        signOutBtn.classList.add('hide');
    }
}
window.addEventListener('load', checkUserController);


// sign out
const signOutController = async () => {
    const response = await fetch('/api/user', {
        method: "DELETE"
    })
    const data = await response.json();
    if(data.success === true){
        window.location = '/';
    }
}    
signOutBtn.addEventListener('click', signOutController);
