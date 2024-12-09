function homepageAnimation(){
    
gsap.set(".slideM",{scale: 4})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2
       
    },
})

tl.to(".vdodiv",{

    '--clip':"0%",
    ease: Power2,
    
},'a')
tl.to(".slideM",{
    scale:1,
    ease: Power2,
    
},'a')
tl.to(".nev",{
    scale:1,
    ease: Power4,
    
},'a')
tl.to(".lft",{
    xPercent: -10,
    ease: Power2,
    stagger: 0.3
    
},'b')
tl.to(".rgt",{
    xPercent: 10,
    ease: Power2,
    stagger: .03
    
},'b')

}

function realpageAnimation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:" 80%",
            end: "bottom bottom",
            scrub: 2,
        stagger: 3
    
        },
        xPercent: -150,
        ease: Power4
    })
}

function listitemAnimation(){
    document.querySelectorAll(".listitem")
.forEach(function (e) {
  e.addEventListener("mousemove",function(dets){
    

    
 gsap.to(this.querySelector(".img"),{opacity:1 , ease : Power4, duration: .5});
  })  

  e.addEventListener("mouseleave",function(dets){
    gsap.to(this.querySelector(".img"),{opacity:0 , ease : Power4, duration: .5});

  })  
})
}


function locomotiveAnimation(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsule",
            start: "top 70%",
            end: "bottom bottom",
          
            scrub:2
        },
        y:0,
        ease:Power4
    })
}

document.querySelectorAll(".section")
.forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem ,
        start:"top 50%",
        end:"bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme", e.dataset.color);

        }
    })
    
})


homepageAnimation();
realpageAnimation();
listitemAnimation();
locomotiveAnimation();
capsulesAnimation()


var obj = {a:2,
           b:3,
           c:9,
           "a":1,
           b:7
}
console.log(obj);
