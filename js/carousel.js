const carouselContainer = document.querySelector('.carousel__container')
const carouselIndicator = document.querySelector('.carousel__indicator')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

const indicators = [...carouselIndicator.children]
indicators.forEach((el, id) => {
    el.addEventListener('click', () => {
        moveSliderByIndicator(id + 1)
        const currentActive = document.querySelector('.active')
        currentActive.classList.remove('active')
        el.classList.add('active')
    })
});

const setIndicatorForBtnMove = (index) => {
    const currentActive = document.querySelector('.active')
    el = indicators[index - 1]
    currentActive.classList.remove('active')
    el.classList.add('active')
}


let index = 1;

btnNext.addEventListener('click', () => {
    const carouselContainerSize = carouselContainer.clientWidth;
    if (index == carouselContainer.childElementCount) {
        carouselContainer.scrollLeft -= carouselContainerSize * index;
        index = 1;
    } else {
        index++;
        carouselContainer.scrollLeft += carouselContainerSize;
    }
    setIndicatorForBtnMove(index)
})

btnPrev.addEventListener('click', () => {
    const carouselContainerSize = carouselContainer.clientWidth;
    if (index == 1) {
        index = 3;
        carouselContainer.scrollLeft += carouselContainerSize * index;
    } else {
        index--;
        carouselContainer.scrollLeft -= carouselContainerSize;
    }
    setIndicatorForBtnMove(index)
})


const moveSliderByIndicator = (targetIndex) => {
    const carouselContainerSize = carouselContainer.clientWidth;
    if (targetIndex < index) {
        carouselContainer.scrollLeft -= carouselContainerSize * (index - targetIndex);
    } else {
        carouselContainer.scrollLeft += carouselContainerSize * (targetIndex - index);
    }
    index = targetIndex
}


carouselContainer.addEventListener('touchstart', (e) => {
    e.preventDefault()
    console.log(e)
    const touches = e.changedTouches
    for(let i =0; i<=touches ; i++) {
        console.log(touches)
    }
})