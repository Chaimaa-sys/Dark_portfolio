const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e){
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout',function(e){
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(95% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
    .fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement:'.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

const showRequiredCategory = event =>{
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0; i<links.length; i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for(i=0; i<categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  

    burger.addEventListener('click',() =>{
          //Toggle nav
        nav.classList.toggle('nav-active');
 
        //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation =''
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
    });
    // Burger animation
    burger.classList.toggle('toggle');

});
}

navSlide();