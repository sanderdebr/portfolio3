/*
parcel build index.html --public-url ./

git subtree push --prefix dist origin gh-pages
 */

window.addEventListener('load', (event) => {
    console.log("Time until everything loaded: ", Date.now()-timerStart, 'ms');
});