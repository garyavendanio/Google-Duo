//# browser-sync start --server --files "./*.*"
//# browser-sync start --proxy localhost:80/directory/ --files "./*.*" 


/*
 *  @ Navbar ScrollReveal.
 */
let main = document.querySelector(".main")
let containerGrid = document.querySelector("._grid")
window.addEventListener("scroll", scrollBrain, false)
let body = document.body,
    html = document.documentElement;
let height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight)

function scrollBrain() {
    if (window.pageYOffset >= containerGrid.offsetTop + 64) {
        return main.classList.add("visible")
    }
    if (main.classList.contains("visible")) {
        return main.classList.remove("visible")
    }
    if (window.pageYOffset >= 0.85 * (height - window.clientHeight)) {
        _gaq.push(['_trackEvent', 'Behavior', 'Scroll', 'Viewed the entire page.'])
    }
}

/*
 *   @ Content Animate.
 */

window.sr = ScrollReveal();
sr.reveal('._g', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
});

window.sr = ScrollReveal();
sr.reveal('._f', {
    duration: 2000,
    origin: 'right',
    distance: '500px',
});

window.sr = ScrollReveal();
sr.reveal('._e', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px',
});

//  content with a delay of 1000mls
window.sr = ScrollReveal();
sr.reveal('._h', {
    duration: 2000,
    delay: 1000,
});