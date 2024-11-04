function initializeLocomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
initializeLocomotiveScroll();

function customCursor(){
    window.addEventListener('mousemove',function(dets){
        this.document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}
customCursor();

function  page1Animation(){
    gsap.from("#headline span",{
        y: 150,
        duration: 0.5,
        delay: 0.1,
        stagger: 0.2,
        opacity: 0,
        ease: Sine.easeInOut
    });

    gsap.from("#smallHeadline span",{
        y:-50,
        duration: 0.3,
        delay: 0.8,
        stagger: 0.2,
        opacity: 0,
        ease: Sine.easeInOut
    });
    gsap.from("#hero nav",{
        y:-50,
        duration: 0.3,
        delay: 0.8,
        stagger: 0.2,
        opacity: 0,
        ease: Sine.easeInOut
    });
    gsap.from(".heroFooteranimation",{
        y:50,
        duration: 0.3,
        delay: 1.5,
        stagger: 0.2,
        opacity: 0,
        ease: Sine.easeInOut
    });
}
page1Animation();

function page2Animation(){
    gsap.from(".element",{
        y:100,
        opacity:0,
        duration:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:"#secondPage",
            scroller:"#main",
            start: "top 70%",
            end: "top 20%",
            scrub: 2,  
        }
    })
}
page2Animation();

document.querySelectorAll(".element").forEach(function(elem) {
    var img = elem.querySelector("img");
    
    elem.addEventListener('mousemove', function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        img.style.display = "block";
        img.style.zIndex = "10"; 
        img.style.cursor = "none";
        img.style.customCursor = "none";
        gsap.to(img, {
            opacity: 1,
            top: diff,
            left: dets.clientX,
        });
    });

    elem.addEventListener('mouseenter', function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        img.style.display = "block";
        img.style.zIndex = "10"; 
        img.style.cursor = "none";
        img.style.customCursor = "none";
        gsap.to(img, {
            opacity: 1,
            top: diff,
            left: dets.clientX,

        });
    });

    elem.addEventListener('mouseleave', function() {
        gsap.to(img, {
            opacity: 0,
            duration: 0.1,
            onComplete: function() {
                img.style.display = "none";
            }
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

function page3Animation() {
    gsap.from("#aboutSection", {
        y: 400,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#aboutPage",
            scroller: "#main",
            start: "top 90%",
            end: "top 20%",
            scrub: 2,
        }
    });

    gsap.from("#footerRight a", {
        y: 50,
        duration: 0.8,
        stagger: 0.5,
        opacity: 0,
        ease: "sine.Out",
        scrollTrigger: {
            trigger: "#aboutPage",
            scroller: "#main",
            start: "top 90%",
            end: "top 90%",
            scrub: 2,
        }
    });

    gsap.from("#footerLeft h4", {
        y: 50,
        duration: 0.8,
        stagger: 0.5,
        opacity: 0,
        ease: "sine.in",
        scrollTrigger: {
            trigger: "#aboutPage",
            scroller: "#main",
            start: "top 90%",
            end: "top 90%",
            scrub: 2,
        }
    });
}

page3Animation();






