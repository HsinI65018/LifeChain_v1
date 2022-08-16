const imgContainer = document.querySelector('.img-container');
const itemController = () => {
    const [name, imgName] = document.cookie.split('item=')
    const image = document.createElement('img');
    image.src = `https://d1dd0qmbf0xvcr.cloudfront.net/LifeChain/${imgName}.jpg`;
    imgContainer.appendChild(image);
}
window.addEventListener('load', itemController);


// sum assured options
const ageField = document.querySelector('.age');
const assured = document.querySelector('.assured');
const options = document.querySelectorAll('option');
const optionConteoller = (e) => {
    const f2Opt = document.querySelector('.f2-opt');
    const f3Opt = document.querySelector('.f3-opt');
    const f4Opt = document.querySelector('.f4-opt');
    const f5Opt = document.querySelector('.f5-opt');
    const age = e.target.value;
    for(let i = 0; i < options.length; i++){
        options[i].classList.remove('hide');
    }
    if(age >=15 && age <20 || age >65 && age < 85){
        if(age >75){
            f2Opt.classList.add('hide');
            f3Opt.classList.add('hide');
            f4Opt.classList.add('hide');
            f5Opt.classList.add('hide');
        }else{
            f4Opt.classList.add('hide');
            f5Opt.classList.add('hide');
        }
    }else if(age < 15 && age !== ''){
        f2Opt.classList.add('hide');
        f3Opt.classList.add('hide');
        f4Opt.classList.add('hide');
        f5Opt.classList.add('hide');
    }
}
ageField.addEventListener('blur', optionConteoller);


const calForm = document.querySelector('.cal-form');
const main = document.querySelector('main');
const col_1 = document.querySelector('.col-1');
const col_2 = document.querySelector('.col-2');
const col_3 = document.querySelector('.col-3');
const col_4 = document.querySelector('.col-4');
const col_5 = document.querySelector('.col-5');
const col_6 = document.querySelector('.col-6');
const col_7 = document.querySelector('.col-7');
const col_8 = document.querySelector('.col-8');
const col_9 = document.querySelector('.col-9');
const calculateController = (e) => {
    e.preventDefault();
    const plan = document.querySelector('.assured').value;
    const age = document.querySelector('.age').value;
    if(plan === '8,000,000'){
        col_1.textContent = '8,000,000';
        col_2.textContent = '0';
        col_3.textContent = '400,000';
        col_4.textContent = '2,000,000';
        col_5.textContent = '800,000';
        col_6.textContent = '800,000';
        col_7.textContent = '80,000';
        col_8.textContent = '8,000';
        col_9.textContent = '8,000';
    }else if(plan === '5,000,000'){
        col_1.textContent = '5,000,000';
        col_2.textContent = '0';
        col_3.textContent = '250,000';
        col_4.textContent = '1,250,000';
        col_5.textContent = '500,000';
        col_6.textContent = '500,000';
        col_7.textContent = '50,000';
        col_8.textContent = '5,000';
        col_9.textContent = '5,000';
    }else if(plan === '3,000,000'){
        col_1.textContent = '3,000,000';
        col_2.textContent = '0';
        col_3.textContent = '150,000';
        col_4.textContent = '750,000';
        col_5.textContent = '300,000';
        col_6.textContent = '300,000';
        col_7.textContent = '30,000';
        col_8.textContent = '3,000';
        col_9.textContent = '3,000';
    }else if(plan === '2,000,000' && age < 15){
        col_1.textContent = '0';
        col_2.textContent = '2,000,000'
        col_3.textContent = '0';
        col_4.textContent = '500,000';
        col_5.textContent = '200,000';
        col_6.textContent = '200,000';
        col_7.textContent = '20,000';
        col_8.textContent = '2,000';
        col_9.textContent = '2,000';
    }else{
        col_1.textContent = '2,000,000';
        col_2.textContent = '0';
        col_3.textContent = '100,000';
        col_4.textContent = '500,000';
        col_5.textContent = '200,000';
        col_6.textContent = '200,000';
        col_7.textContent = '20,000';
        col_8.textContent = '2,000';
        col_9.textContent = '2,000';
    }
    main.classList.remove('hide')
}
calForm.addEventListener('submit', calculateController);