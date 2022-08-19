const imgContainer = document.querySelector('.img-container');
const [name, imgName] = document.cookie.split('item=');
const itemController = () => {
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
    const f1Opt = document.querySelector('.f1-opt');
    const f2Opt = document.querySelector('.f2-opt');
    const f3Opt = document.querySelector('.f3-opt');
    const f4Opt = document.querySelector('.f4-opt');
    const f5Opt = document.querySelector('.f5-opt');
    const f6Opt = document.querySelector('.f6-opt');
    const age = e.target.value;
    for(let i = 0; i < options.length; i++){
        options[i].classList.remove('hide');
    }
    if(imgName.includes('1')){
        f6Opt.classList.add('hide');
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
    }else{
        if(age >= 15){
            f1Opt.classList.add('hide');
            if(age > 69 && age < 79){
                f4Opt.classList.add('hide');
                f5Opt.classList.add('hide');
                f6Opt.classList.add('hide');
            }else if(age > 74){
                f3Opt.classList.add('hide');
                f4Opt.classList.add('hide');
                f5Opt.classList.add('hide');
                f6Opt.classList.add('hide');
            }
        }else if(age < 15 && age !== ''){
            f2Opt.classList.add('hide');
            f3Opt.classList.add('hide');
            f4Opt.classList.add('hide');
            f5Opt.classList.add('hide');
            f6Opt.classList.add('hide');
        }
    }
}
ageField.addEventListener('blur', optionConteoller);


const calForm = document.querySelector('.cal-form');
const main = document.querySelector('main');
const itemContainer = document.querySelector('.item-container');
const calculateController = async (e) => {
    e.preventDefault();
    const [name, productNum] = document.cookie.split('item=travel-');
    const age = document.querySelector('.age').value;
    let plan = document.querySelector('.assured').value;

    itemContainer.innerHTML = '';
    if(plan === '5' && age < 15){ plan = 6 };

    const response = await fetch('/api/data', {
        method: "POST",
        body: JSON.stringify({
            "product": productNum,
            "plan": plan
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
    const data = await response.json();

    Object.keys(data.title).forEach(key => {
        const item = document.createElement('li');
        const title = document.createElement('div');
        const value = document.createElement('div');

        title.textContent = data.title[key];
        value.textContent = data.data[key];

        item.appendChild(title);
        item.appendChild(value);
        itemContainer.appendChild(item);
    });
    main.classList.remove('hide')
}
calForm.addEventListener('submit', calculateController);