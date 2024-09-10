var tl = gsap.timeline();

tl.from("#nav h2, #nav h3",{
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    stagger: 0.3
})

tl.from("#content h1",{
    x: -250,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

tl.from("img",{
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from("#footer",{
    opacity: 0,
    duration: 0.3,
})    

