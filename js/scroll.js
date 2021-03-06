// VARIABLES

let fadeSpeed = .4;
let dotSpeed =  0;

const mainContent = Array.from(document.querySelectorAll('.main__content'));
const bottomNumFirst = document.querySelector('.bottom__num');
const bottomNumSecond = document.querySelector('.bottom__num.second');

// ANIMATION
const timeline = new TimelineMax({
    paused: true
});

// Huidige slide weg
const swipeOut = (currentSlide, directionOut) => {

    var target = document.querySelector(`.main__content[data-slide='${currentSlide}'`);
    target.classList.toggle('active');

    var tl = new TimelineMax();
    tl.fromTo(target, fadeSpeed, {opacity: 1, transform: 'translateY(0px)'}, {opacity: 0, zIndex: 0, transform: `translateY(${directionOut}100px)`, ease: Power4.easeInOut},)
     return tl;
}

// Volgende slide laten zien
const swipeIn = (nextSlide, directionIn) => {

    // Slide nummer aanpassen
    bottomNumFirst.innerHTML = `0${nextSlide}`;

    var target = document.querySelector(`.main__content[data-slide='${nextSlide}'`);
    target.classList.toggle('active');
    var tl = new TimelineMax();
    tl.fromTo(target, fadeSpeed, {opacity: 0, transform: `translateY(${directionIn}100px)`}, {opacity: 1, zIndex: 1, transform: 'translateY(0px)', ease: Power4.easeInOut},)
    return tl;

}

// Navigatie bolletje updaten

const dotIn = (nextSlide) => {
    var target = document.querySelector(`.scroll__dot[data-slide='${nextSlide}'`);
    target.classList.toggle('active');
}

const dotOut = (currentSlide) => {
    var target = document.querySelector(`.scroll__dot[data-slide='${currentSlide}'`);
    target.classList.toggle('active');
}

// Scroll weer aanzetten na x seconden
const initScroll = () => {
    mainContent.forEach(item => {
        item.addEventListener("wheel", scrollProjects);
    });
    // array totaal aantal
    bottomNumSecond.innerHTML = `0${mainContent.length}`;
};

const scrollProjects = (event) => {
    let currentSlide, nextSlide, directionOut, directionIn;

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
    dotIn(nextSlide);
    dotOut(currentSlide);

    // 5. Volgende slide tonen
    timeline.play();

    // 6. Projects gedeelte scroll uitschakelen
    if (currentSlide === 3) {
        let projectSection = document.querySelector('.main__content.active');
        projectSection.removeEventListener("wheel", scrollProjects);
    } else {
        // Eventlisteners 700ms uitschakelen
        mainContent.forEach(item => {
            item.removeEventListener("wheel", scrollProjects)
        });
        setTimeout(initScroll, 700);
    }
}

// Dots als navigatie
const dots = document.querySelectorAll('.scroll__dot');
dots.forEach(dot => dot.addEventListener("click", e => {
    nextSlide = e.target.getAttribute("data-slide");
    currentSlide = document.querySelector('.main__content.active').getAttribute("data-slide");
    swipeIn(nextSlide, '+');
    swipeOut(currentSlide, '-');
    dotIn(nextSlide);
    dotOut(currentSlide);
}))

// Learn more klik naar tweede slide
document.querySelector('.learnmore').addEventListener('click', () => {
    timeline.add( swipeOut(1, '-') );
    timeline.add( swipeIn(2, '+') );
    dotIn(2);
    dotOut(1);
    timeline.play();
});

// View projects naar vierde slide
document.querySelector('.viewprojects').addEventListener('click', () => {
    viewProjects = true;
    timeline.add( swipeOut(1, '-') );
    timeline.add( swipeIn(4, '+') );
    dotIn(4);
    dotOut(1);
    timeline.play();
    // Remove slide controls
    let projectSection = document.querySelector('.main__content.active');
    projectSection.removeEventListener("wheel", scrollProjects);
});

// Logo naar eerste slide
document.querySelector('.logo__h1').addEventListener('click', () => {
    currentSlide = document.querySelector('.main__content.active').getAttribute("data-slide");
    if (currentSlide == 1) return;
    nextSlide = 1;
    swipeIn(nextSlide, '+');
    swipeOut(currentSlide, '-');
    dotIn(nextSlide);
    dotOut(currentSlide);
});


initScroll();