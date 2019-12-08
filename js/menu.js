let menuOpen = false;

const menuBtn = document.querySelector('.main__menu, main__menu *');
const main = document.querySelector('.main');
const body = document.querySelector('.body');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');

const menuIconBefore =  CSSRulePlugin.getRule(".menu__h2::before");
const menuIconAfter =  CSSRulePlugin.getRule(".menu__h2::after");

menuBtn.addEventListener('click', () => {

    const tl = new TimelineMax();

    if (menuOpen === false) {

        menuOpen = true;
        tl.to(body, 0, {backgroundColor: '#fffffe', ease: Power4.easeInOut}  )
        tl.to(main, .5, {transform: 'scale(.8) translateX(250px)', ease: Power4.easeInOut}  )

        tl.fromTo(menu, .5, {transform: 'translateX(-300px)', zIndex: 0, opacity: 0}, { zIndex: 1000, opacity: 1, transform: 'translateX(0px)', ease: Power4.easeInOut}  )

        Array.from(menuItems).forEach((item, i) => {
            tl.fromTo(item, .3, {transform: 'translateX(-300px)', opacity: 0}, {opacity: 1, transform: 'translateX(0px)', ease: Power4.easeInOut}, `-=.5`  )
        })

    } else if (menuOpen) {

        menuOpen = false;

        tl.fromTo(menu, .5, {transform: 'translateX(0px)', zIndex: 1000, opacity: 1}, { zIndex: 0, opacity: 0, transform: 'translateX(-300px)', ease: Power4.easeInOut}  )

        Array.from(menuItems).forEach((item, i) => {
            tl.fromTo(item, .3, {transform: 'translateX(0px)', opacity: 1}, {opacity: 0, transform: 'translateX(-300px)', ease: Power4.easeInOut}, `-=.5`  )
        })

        tl.to(main, .5, {transform: 'scale(1) translateX(0px)', ease: Power4.easeInOut}  )
        tl.to(body, 0, {background: 'white', ease: Power4.easeInOut}  )

    }

    return tl;
})