// VARIABLES

let fadeSpeed = .5;
let dotSpeed =  .5;

const mainContent = Array.from(document.querySelectorAll('.main__content'));

// ANIMATION
const timeline = new TimelineMax({
    paused: true
});

// Huidige slide weg
const swipeOut = (currentSlide, directionOut) => {
    
    var target = document.querySelector(`.main__content[data-slide='${currentSlide}'`);
    target.classList.toggle('active');

    var tl = new TimelineMax();
    tl.fromTo(target, fadeSpeed, {opacity: 1, transform: 'translateY(0px)'}, {opacity: 0, transform: `translateY(${directionOut}300px)`, ease: Power4.easeInOut},)

    return tl;
}

// Volgende slide laten zien
const swipeIn = (nextSlide, directionIn) => {

    var target = document.querySelector(`.main__content[data-slide='${nextSlide}'`);
    target.classList.toggle('active');

    var tl = new TimelineMax();
    tl.fromTo(target, fadeSpeed, {opacity: 0, transform: `translateY(${directionIn}300px)`}, {opacity: 1, transform: 'translateY(0px)', ease: Power4.easeInOut},)

    return tl;
}

// Navigatie bolletje updaten

const dotOut = (currentSlide) => {

    var target = document.querySelector(`.scroll__dot[data-slide='${currentSlide}'`);
    target.classList.toggle('active');

    var tl = new TimelineMax();
    tl.to(target, dotSpeed, {height: '8px', ease: Power4.easeInOut},  )

    return tl;
}

const dotIn = (nextSlide) => {

    var target = document.querySelector(`.scroll__dot[data-slide='${nextSlide}'`);
    target.classList.toggle('active');

    var tl = new TimelineMax();
    tl.to(target, dotSpeed, {height: '60px', ease: Power4.easeInOut},  )

    return tl;
}

// Scroll weer aanzetten na x seconden
const initScroll = () => {
    mainContent.forEach(item => {
        item.addEventListener("wheel", scrollProjects);
    });
};

const scrollProjects = (event) => {
    let currentSlide, nextSlide, directionOut, directionIn;

    console.log(event);

    // 1. Bepalen huidige slide
    currentSlide = parseInt(document.querySelector('.main__content.active').getAttribute('data-slide'));

    // 2. Check of naar beneden (rechts) of naar boven gescrolld (links)
    if (event.deltaY < 0) {
        scrollDirection = 'up'; // naar boven
    }
    else if (event.deltaY > 0) {
        scrollDirection = 'down'; // naar onderen
    }

    // 3. Bepalen wat volgende slide wordt
    const countSlides = document.querySelectorAll('.main__content').length;

    if (scrollDirection === 'down') {
        currentSlide != countSlides ? nextSlide = currentSlide + 1 : nextSlide = 1;
        directionOut = '-';
        directionIn = '+';
    } else if (scrollDirection === 'up') {
        currentSlide != 1 ? nextSlide = currentSlide - 1 : nextSlide = countSlides;
        directionOut = '+';
        directionIn = '-';
    }

    // 4.1 Huidige slide weghalen
    timeline.add( swipeOut(currentSlide, directionOut) );

    // 4.2 Volgende slide laten zien
    timeline.add( swipeIn(nextSlide, directionIn) );

    // 4.3 bolletjes updaten
    timeline.add( dotOut(currentSlide) );
    timeline.add( dotIn(nextSlide) );

    // 5. Volgende slide tonen
    timeline.play();

    // 3 sec eventlistenere uitschakelen
    mainContent.forEach(item => {
        item.removeEventListener("wheel", scrollProjects)
    });
    setTimeout(initScroll, 1000);
}

initScroll();
