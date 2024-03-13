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
// tl.from(".image .round",{
//     rotate:360,

// })
let tween = gsap.fromTo(".image .round",{
    rotation: 0
  },{
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: "linear"
  })

gsap.fromTo(tween, {timeScale: 3}, {timeScale: 1, duration: 1})