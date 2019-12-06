import { get } from "http";

// INTRO ELEMENTS
const intro = document.querySelector('.intro');
const introAfter = CSSRulePlugin.getRule(".intro::after");
const introTitle = document.querySelector('.intro__title');
const introProgressBar = document.querySelector('.intro__progressbar');
const introProgressBarInner = CSSRulePlugin.getRule(".intro__progressbar::after");

// MAIN ELEMENTS
const main = document.querySelector('.main');
const mainBoxes = document.querySelectorAll('.main__box');
const mainBoxesInner = CSSRulePlugin.getRule(".main__box::after");
const mainContent = document.querySelectorAll('.main__content');
const bottom = document.querySelector('.main__bottom');
const bottomAfter = CSSRulePlugin.getRule(".main__bottom::after");
const logoH1 = document.querySelector('.logo__h1');
const logoH1After = CSSRulePlugin.getRule(".logo__h1::after");
const menu = document.querySelector('.main__menu');
const menuAfter = CSSRulePlugin.getRule(".main__menu::after");
const menuItems = document.querySelectorAll('.items__item');
const menuItemsAfter = CSSRulePlugin.getRule(".items__item::after");
const scroll = document.querySelector('.main__scroll');
const scrollAfter = CSSRulePlugin.getRule(".main__scroll::after");
let contentH1 = document.querySelectorAll('.content__h1');
let contentH4 = document.querySelectorAll('.content__h4');
const contentH1After = CSSRulePlugin.getRule(".content__h1::after");
const contentH4After = CSSRulePlugin.getRule(".content__h4::after");
const contentRight = document.querySelectorAll('.content__right');
const contentRightAfter = CSSRulePlugin.getRule(".content__right::after");
const circle = document.querySelector('.circle');
const buttons = document.querySelectorAll('.btn-group');
const buttonsAfter = CSSRulePlugin.getRule(".btn-group::after");

// ANIMATION
const timeline = new TimelineMax();


// INTRO ANIMATION
const introTl = () => {

    var tl = new TimelineMax();
    // tl.to(introProgressBar, 1, {height: '280px', ease: Power2.easeInOut}, '+=.5')
    // tl.to(introProgressBarInner, 1, {height: '300px', transformOrigin:"0 100%", ease: Power2.easeInOut}, '-=.55');
    // tl.fromTo(introTitle, .7, {marginTop: 100, visibility: 'hidden'}, {marginTop: -75, visibility: 'visible', ease: Power2.easeInOut}, '-=.3');
    // tl.to(introProgressBar, 1, {height: '100vw', ease: Power2.easeInOut}, '-=.67');
    // tl.to(introProgressBarInner, 1, {height: '2000px', ease: Power2.easeInOut}, '-=1');
    // tl.to(introTitle, .7, {marginTop: 100, ease: Power2.easeInOut}, '+=.5');
    // tl.to(introProgressBar, .5, {opacity: 0, ease: Power2.easeInOut}, '-=.5')
    // tl.to(introAfter, 1, {height: '100%', ease: Power2.easeInOut}, '-=.5')
    tl.to(main, 0, {background: '#e41143' }, '-=.5');
    tl.to(intro, 0, {display: 'none' });

    return tl;
}

// MAIN ANIMATION
const mainTl = () => {

    var tl = new TimelineMax();
    tl.to(mainBoxesInner, .8, {width: '20%', ease: Power2.easeInOut});
    tl.to(mainBoxesInner, 0, {display: 'none' });
    tl.to(main, 0, {background: '#191A1E' });

    tl.to(logoH1, 0, {visibility: 'visible'}, );
    tl.to(bottom, 0, {visibility: 'visible'});
    tl.to(menu, 0, {visibility: 'visible'});
    tl.to(menuItems, 0, {visibility: 'visible'});
    tl.to(scroll, 0, {visibility: 'visible'});
    tl.to(buttons, 0, {visibility: 'visible'});

    Array.from(contentH1).forEach(content => {
        tl.to(content, 0, {visibility: 'visible'});
    })
    Array.from(contentH4).forEach(content => {
        tl.to(content, 0, {visibility: 'visible'});
    })
    tl.to(contentRight, 0, {visibility: 'visible'});

    tl.to(logoH1After, 1, {width: '0%',  ease: Power2.easeInOut}, );
    tl.to(bottomAfter, 1, {width: '0%', ease: Power2.easeInOut}, '-=.2' );
    tl.to(menuAfter, 1, {width: '0%',  ease: Power2.easeInOut}, '-=1');
    tl.to(menuItemsAfter, 1, {width: '0%',  ease: Power2.easeInOut}, '-=1.5' );
    tl.to(scrollAfter, 1, {height: '0%', ease: Power2.easeInOut}, '-=1.5' );
    tl.to(contentH1After, 1, {width: '0%',  ease: Power2.easeInOut}, '-=1.5' );
    tl.to(contentH4After, 1, {width: '0%',  ease: Power2.easeInOut}, '-=1.5' );
    tl.to(contentRightAfter, 1, {width: '0%', ease: Power2.easeInOut}, '-=1.5' );
    tl.to(buttonsAfter, 1, {width: '0%', ease: Power2.easeInOut}, '-=1' );

    Array.from(mainBoxes).forEach(box => {
        tl.to(box, 2, {height: '100%', zIndex: '0', borderRight: '1px solid rgba(184, 193, 236, .1)', ease: Power4.easeInOut }, '-=1.5' );
    });

    tl.fromTo(circle, 2, {opacity: 0 }, {opacity: 1, ease: Power2.easeInOut}, '-=.3');

    // Array.from(mainContent).forEach((content, i) => {
    //     tl.to(content, 0, {zIndex: '1' }, );
    // });

    return tl;
}

timeline.add( introTl() );
timeline.add( mainTl() );