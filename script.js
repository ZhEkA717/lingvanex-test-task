const buttonsContainer = document.querySelector('.product-for__buttons');
const buttons = document.querySelectorAll('.product-for__button');
const cards = document.querySelectorAll('.product-for__card');

const data = {
    0:  {
        zIndex: 3,
        top: 0,
        transform: 'scale(1)'
    },
    40: {
        zIndex: 2,
        top: '40px',
        transform: 'scale(0.935)'
    },
    80: {
        zIndex: 1,
        top: '80px',
        transform: 'scale(0.845)'
    },
}

const buttonsContainerHandler = (e) => {
    if (e.target.classList.contains('product-for__button')) {
        const oldId = changeButtonActive(e)
        const id = e.target.id;
        changeCardPosition(oldId, id);
    }
}

const changeButtonActive = (e) => {
    let oldId;
    buttons.forEach(item => {
        if (item === e.target) {
            item.classList.add('product-for__button_active');
        } else {
            if (item.classList.contains('product-for__button_active')) {
                oldId = item.id;
                item.classList.remove('product-for__button_active');
            }
        }
    })
    return oldId;
}

const changeCardPosition = (oldId, newId) => {
    const el = cards[newId];
    const oldEl = cards[oldId];

    const topEl = el.offsetTop;
    const {zIndex, top, transform} = data[topEl];


    el.style.zIndex = data[0].zIndex;
    el.style.top = data[0].top;
    el.style.transform = data[0].transform;


    if (oldEl) {
        oldEl.style.zIndex = zIndex;
        oldEl.style.top = top;
        oldEl.style.transform = transform;
    }
}

buttonsContainer.addEventListener('click', buttonsContainerHandler);
