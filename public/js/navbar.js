// click navbar sign in, show sign in form
const signInBtn = document.querySelector('.sign-in-btn');
const signInForm = document.querySelector('.sign-in');
const signUpForm = document.querySelector('.sign-up');
const signInController = () => {
    signInForm.style.display = 'flex';
    signInForm.classList.add('show-animation');
}
signInBtn.addEventListener('click', signInController);


// click close btn, close sign in or sign up
const closeInBtn = document.querySelector('.close-in-btn');
const closeUpBtn = document.querySelector('.close-up-btn');
const closeController = (e) => {
    const target = e.target.className;
    if(target.includes('-in')){
        signInForm.style.display = 'none';
    }else{
        signUpForm.style.display = 'none';
    }
}
closeInBtn.addEventListener('click', closeController);
closeUpBtn.addEventListener('click', closeController);


// switch sign in andcsign up
const switchIn = document.querySelector('.switch-in');
const switchUp = document.querySelector('.switch-up');
const switchConteoller = (e) => {
    const target = e.target.className;
    if(target.includes('-up')){
        signInForm.style.display = 'none';
        signUpForm.style.display = 'flex';
    }else{
        signUpForm.style.display = 'none';
        signInForm.style.display = 'flex';
        signInForm.classList.remove('show-animation');
    }
}
switchIn.addEventListener('click', switchConteoller);
switchUp.addEventListener('click', switchConteoller);