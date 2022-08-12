// click btn scroll to second page
const insureNowBtn = document.querySelector('.insure-now');
const scrollController = () => {
    window.scrollTo(0, 790);
}
insureNowBtn.addEventListener('click', scrollController);


//
const firstItem = document.querySelector('.item-1');
const secondItem = document.querySelector('.item-2');
const itemDetailController = (e) => {
    const target = e.target.className;
    if(target.includes('-1')){
        document.cookie = "item=travel-1";
    }else{
        document.cookie = "item=travel-2";
    }
    window.location = '/calculate';
}
firstItem.addEventListener('click', itemDetailController);
secondItem.addEventListener('click', itemDetailController);