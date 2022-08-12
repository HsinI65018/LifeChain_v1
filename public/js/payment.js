const imgContainer = document.querySelector('.img-container');
const itemController = () => {
    const [name, imgName] = document.cookie.split('item=')
    const image = document.createElement('img');
    image.src = `https://d1dd0qmbf0xvcr.cloudfront.net/LifeChain/${imgName}.jpg`;
    imgContainer.appendChild(image);
}
window.addEventListener('load', itemController);