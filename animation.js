const timeline = gsap.timeline();

timeline.from('#logo, a, button', {
    y: -80,
    duration: 0.5,
    delay: 1,
    stagger: 0.2,
    opacity: 0
})

timeline.from('.content h1', {
    x: -700,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
    scale: 0
});

timeline.from('#tl-img', {
    x: -400,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
})

timeline.from('#tr-img', {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scale: 0,
});

timeline.from('#bl-img', {
    opacity: 0,
    y: 600,
    duration: 0.5,
    stagger: 0.2
});
timeline.from('#br-img', {
    opacity: 0,
    x: 600,
    duration: 0.5,
    stagger: 0.2
});

timeline.from('.scroll-down', {
    y: 20,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
    repeat: -1,
    yoyo:true
})