const burger = document.querySelector('.burger');
const background = document.querySelector('.background');
const listLink = document.querySelectorAll('.list-link');
const list = document.querySelector('.list');

let isOpen = 0;

const reset = () => {
    background.classList.remove('bgAppear');
    list.classList.remove('appearList');
    listLink.forEach((link) => {
        link.style.animation = ``
    })
}

burger.addEventListener('click', () => {
    background.classList.toggle('bgAppear');

    listLink.forEach((link, index) => {
        list.classList.toggle('appearList');
        if(link.style.animation) {
            link.style.animation = ``
        } else {
            link.style.animation = `appearLink 1s ${index / 7 + .2}s backwards`
        }
    })

    if(background.classList.contains('bgAppear')) {
        isOpen = 1;
    } else {
        isOpen = 0;
    }
})

window.addEventListener('resize', () => {
    if(isOpen === 1 && window.innerWidth > 768) {
        reset();
        isOpen = 0;
    }
})
