/*
parcel build index.html --public-url ./

git subtree push --prefix dist origin gh-pages
 */

require('./animations.js');
// require('./cursor.js');
require('./scroll.js');
require('./menu.js');
require('./projects.js');

window.addEventListener('load', (event) => {
    console.log("Time until everything loaded: ", Date.now()-timerStart, 'ms');
});

// Img hover effect 

const profileImg = document.querySelector('.cutout');
const touchMe = document.querySelector('.img__hover');
var touched = false;

if (!touched) {
    profileImg.addEventListener('mouseover', () => {
        console.log(touched);
        touched = true;
        // touchMe.textContent = 'thank you';
        var tl = new TimelineMax();
        tl.to(touchMe, 4, {opacity: '0', textContent: 'thank you', transform: 'translateY(200px)', ease: Power4.easeInOut});
        return tl;
    });
};