const mainContent = Array.from(document.querySelectorAll('.main__content'));

// ANIMATION
const timeline = new TimelineMax({
    paused: true
});

const swipeLeft = (currentSlide) => {

    target = CSSRulePlugin.getRule(".main__content::after");

    var tl = new TimelineMax();
    tl.to(target, 2, {width: '100%', ease: Power2.easeInOut}, '+=.5')

    return tl;
}

const initScroll = () => {
    mainContent.forEach(item => {
        item.addEventListener("wheel", scrollProjects);
    });
};

const scrollProjects = (event) => {
    let currentSlide, nextSlide;

    // uitzetten event listener, en weer aan na 2 sec
    mainContent.forEach(item => {
        item.removeEventListener("wheel", scrollProjects)
    });

    setTimeout(initScroll, 2000);

    // 1. Bepalen huidige slide
    currentSlide = document.querySelector('.main__content.active').getAttribute('data-slide');


    // 2. Check of naar beneden (rechts) of naar boven gescrolld (links)
    if (event.deltaY < 0) {
        // up
        scrollDirection = 'left';
    }
    else if (event.deltaY > 0) {
        // down
        scrollDirection = 'right';
    }

    // 3. Bepalen wat volgende slide wordt
    const countSlides = document.querySelectorAll('.main__content').length;

    if (scrollDirection === 'right') {
        currentSlide != countSlides ? nextSlide = currentSlide + 1 : nextSlide = 1;
    } else if (scrollDirection === 'left') {
        currentSlide != 1 ? nextSlide = currentSlide - 1 : nextSlide = countSlides;
    }

    // 4. Huidige slide weghalen
    timeline.add( swipeLeft(currentSlide) );
    timeline.play();


    // 5. Volgende slide tonen
}

initScroll();
