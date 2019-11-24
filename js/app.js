const intro = document.querySelector('.intro');
const introAfter = CSSRulePlugin.getRule(".intro::after");
const introTitle = document.querySelector('.intro__title');
const introProgressBar = document.querySelector('.intro__progressbar');
const introProgressBarInner = CSSRulePlugin.getRule(".intro__progressbar::after");
const main = document.querySelector('.main');
const mainBoxesInner = CSSRulePlugin.getRule(".main__box::after");
const bottom = document.querySelector('.main__bottom');

const timeline = new TimelineMax();
    timeline.to(introProgressBar, 1, {height: '330px', ease: Power2.easeInOut}, '+=.5')
    timeline.to(introProgressBar, .7, {rotation: 90, transformOrigin:"center", ease: Power2.easeInOut}, '-=.6');
    timeline.to(introProgressBarInner, 1, {height: '350px', transformOrigin:"0 100%", ease: Power2.easeInOut}, '-=.2');
    timeline.fromTo(introTitle, .7, {marginTop: 100}, {marginTop: -75, ease: Power2.easeInOut}, '-=.3');
    timeline.to(introTitle, .5, {opacity: 0, ease: Power2.easeInOut}, '+=.2')
    timeline.to(introProgressBar, .5, {opacity: 0, ease: Power2.easeInOut}, '-=.5')
    timeline.to(introAfter, 1, {height: '100%', ease: Power2.easeInOut}, '-=.5')
    timeline.to(main, 0, {background: '#f1f1f1' }, '-=.5');
    timeline.to(intro, 0, {display: 'none' });
    timeline.to(mainBoxesInner, .8, {width: '20%', ease: Power2.easeInOut});
    timeline.to(mainBoxesInner, 0, {display: 'none' });
    timeline.to(main, 0, {background: '#080808' });
    timeline.fromTo(bottom, 1.2, {marginBottom: -100}, {marginBottom: 0, ease: Power2.easeInOut}, '-=.5');