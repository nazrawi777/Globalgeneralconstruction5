;(function($) {

    "use strict";

    var gsapanim = function() {
       const smoother = ScrollSmoother.create({
 content: ".page-wrapper",
 smooth: 2,
  effects: true,
 normalizeScroll: true
});





const splitTypes = document.querySelectorAll('.themeht-anim-text');
            if (splitTypes) {
                splitTypes.forEach((char, i) => {
                    const text = new SplitType(char, {types: 'chars, words'});

                    gsap.from(text.chars, {
                        scrollTrigger: {
                            opacity: 1, // Initial state
                            trigger: char,
                            start: 'top 80%',
                            end: 'top -10%',
                            scrub: true
                        },
                        opacity: 0.2,
                        stagger: 0.5
                    })
                });
            }


var elementParallax = jQuery('.bg-parallax');
elementParallax.each(function(){
        gsap.to(".bg-parallax", {
  backgroundPosition: `50% ${-innerHeight / 4}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".bg-parallax",
    scrub: 0.2
  }, 
});
    });


var elementsplitText = jQuery('.hero-lg-text');
elementsplitText.each(function(){
        var splitText = new SplitText('.hero-lg-text', {type: 'chars'});
var tl = gsap.timeline();
tl
	.from(splitText.chars, {duration: .5, opacity: 0, stagger: .325,  ease: 'power1. In'});
    });


    }
    jQuery(function() {
                gsapanim();
            });

})(jQuery);