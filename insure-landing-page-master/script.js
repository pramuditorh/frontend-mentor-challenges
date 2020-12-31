
/*---Show the hamburger menu--- */
let hamburger = document.querySelector('.hamburger'),
    navMenu = document.querySelector('.nav2');
    
hamburger.appendChild(navMenu);
navMenu.classList = 'nav2';

function showNav(){
    if (navMenu.classList.length == 1) {
        navMenu.classList += ' nav2Show'
    } else if (navMenu.classList.length == 2) {
        navMenu.classList = 'nav2'
    }   
}

hamburger.addEventListener('click',showNav);


/*---Adding onload event to the top section (Opacity)--- */
let topText = document.querySelector('.top_text');
let topImg = document.querySelector('.topImg').children[0];

function showTop() {
    topImg.style.opacity = '1';
    setTimeout(()=>topText.style.opacity = '1', 200);
}
    
window.addEventListener('load', showTop);



/*---Social media icons hover effect--- */
let snsIcons = document.getElementsByTagName('svg');

for(i = 0; i < snsIcons.length; i++) {
    snsIcons[i].addEventListener('mouseover', function(event) {
        this.children[0].attributes[0].nodeValue = '#2b272f';
    })
}

for(i = 0; i < snsIcons.length; i++) {
    snsIcons[i].addEventListener('mouseout', function() {
        this.children[0].attributes[0].nodeValue = '#837D88';
    })
}