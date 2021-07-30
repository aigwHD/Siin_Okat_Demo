gsap.from('.homeDivSec',{duration :1, x: '200%' , opacity: 0,stagger: .1, ease: 'expo'})
gsap.from('.smsDivSec',{duration :1, y: '-200%' , opacity: 0,stagger: .1, ease: 'expo'})

gsap.from('#introImg',{duration :1, y: '-100%' })
gsap.from('.textTemp',{duration :1, opacity:0, delay:1})

gsap.fromTo('.graphDivSec', {opacity:0, scale:0}, {duration :1, opacity:1 ,scale:1})

