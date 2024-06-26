window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        gsap.to(".marquee", {
            transform: "translateX(-200%)",
            duration: 5,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marquee img", {
            rotate: 180
        })
    } else {
        gsap.to(".marquee", {
            transform: "translateX(0%)",
            duration: 5,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marquee img", {
            rotate: 0
        })
    }
})

