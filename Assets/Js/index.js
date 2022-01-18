gsap.from('ul', {
    duration: 1,
    opacity: 0,
    transform: 'translateY(3rem)',
    stagger: .4
})

gsap.from('ul li', {
    duration: .5,
    opacity: 0,
    transform: 'translateY(3rem)',
    stagger: .4
})

gsap.from('.image span', {
    duration: 1,
    height: '400px',
    stagger: .3
})
gsap.to('.image span', {
    duration: 1,
    height: '0px',
    stagger: .3
})

gsap.from('h1 span', {
    duration: 1.3,
    opacity: 0,
    stagger: .6
})

gsap.to('.bi', {
    delay: 1.5,
    duration: 2,
    transform: 'rotate(335deg)',
    color: 'yellow',
    ease: 'elastic'
})
