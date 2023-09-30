var tl =  gsap.timeline()

tl.from(".nav img,.navh",{
    y:-100,
    duration:0.5,
    delay:.2,
    opacity:0,
    stagger:0.2
})
tl.from("h1",{
   y:100,
   duration:0.5,
   delay:.2,
   opacity:0,
   stagger:0.2
})