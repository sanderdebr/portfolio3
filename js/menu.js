let menuOpen = false;

const menuBtn = document.querySelector('.main__menu, main__menu *');
const main = document.querySelector('.main');
const body = document.querySelector('.body');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');

const menuIconBefore =  CSSRulePlugin.getRule(".menu__h2::before");
const menuIconAfter =  CSSRulePlugin.getRule(".menu__h2::after");

const menuClose = document.querySelector('.menu__item:first-child');

// Close menu

menuClose.addEventListener('click', () => {
    
    const tl = new TimelineMax();

    menuOpen = false;

    Array.from(menuItems).forEach(item => {
        tl.fromTo(item, .15, {transform: 'translateX(0px)', opacity: 1}, {  opacity: 0, transform: 'translateX(-50px)', ease: Back.easeInOut}  )
    })

    tl.fromTo(menu, .5, {transform: 'translateY(0vh) skewY(5deg)', zIndex: 1000, opacity: 1}, { zIndex: 0, opacity: 1, transform: 'translateY(-100vh)', ease: Back.easeInOut}  )
    tl.to(main, .7, {transform: 'translateY(0vh)', ease: Back.easeInOut}, '-=.2'  )

    return tl;
})

// Open menu

menuBtn.addEventListener('click', () => {

    const tl = new TimelineMax();

    if (menuOpen === false) {

        menuOpen = true;

        tl.to(main, 2.5, {transform: 'translateY(100vh) rotate(180deg)', ease: Back.easeInOut}, '-=.2' )

        tl.fromTo(menu, .5, {transform: 'translateY(-100vh)', zIndex: 0, opacity: 1}, { zIndex: 1000, opacity: 1, transform: 'translateY(0vh) skewY(5deg)', ease: Power1.easeInOut}, "-=.5"  )

        Array.from(menuItems).forEach(item => {
            tl.fromTo(item, .15, {transform: 'translateX(-50px)', zIndex: 0, opacity: 0}, { zIndex: 1, opacity: 1, transform: 'translateX(0px)', ease: Back.easeInOut}  )
        })


    } 

    return tl;
})