const intro = document.querySelector('.intro');
const introProgressBar = document.querySelector('.intro__progressbar');
const introProgressBarInner = CSSRulePlugin.getRule(".intro__progressbar::after");
const mainBoxes = document.querySelectorAll('.main__box');

const timeline = new TimelineMax();
    timeline.to(introProgressBar, 1, {height: '330px', ease: Power2.easeOut}, '+=.5')
    timeline.to(introProgressBar, .7, {rotation: 90, transformOrigin:"center", ease: Power2.easeOut}, '-=.6');
    timeline.to(introProgressBarInner, 1, {height: '350px', transformOrigin:"0 100%", ease: Power2.easeOut}, '-=.2');
    timeline.to(introProgressBar, 1, {height: '100vw', background: '#080808', width: '100vh', ease: Power4.easeOut}, '-=.3');
    timeline.to(intro, 0, {display: 'none' });
    for (i = 0; i < mainBoxes.length; i++) {
        timeline.to(mainBoxes[i], .5, {height: '100%', ease: Power1.easeOut}), '-=.7';
    }

var introHeading = document.querySelector('.intro__heading').textContent;
var introHeadingArr = introHeading.split("");