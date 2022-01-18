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

gsap.to('.image span', {
    delay: 1.5,
    duration: 1,
    width: '150px',
    left: '40%'
})
gsap.to('.image span', {
    duration: 1,
    delay: 2,
    left: '100%'
})

gsap.from('.image img', {
    duration: 4,
    delay: 1.5,
    opacity: 0
})

gsap.from('h1 span', {
    duration: .5,
    opacity: 0,
    stagger: .4
})

gsap.to('.bi', {
    delay: 1.5,
    duration: 2,
    transform: 'rotate(-5deg)',
    ease: 'elastic'
})

gsap.from('.vertical_text', {
    duration: 1,
    left: '-3rem'
})