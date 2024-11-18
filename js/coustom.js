// wow 
    new WOW().init();
// conuter up
$('.counter').counterUp();
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

var typed = new Typed('.element', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 30
  });

// counter
    $(document).ready(function(){
        // Initialize Counter-Up
        $('.counter').counterUp({
            delay: 10,  // The delay in milliseconds per count up tick
            time: 1000  // The total duration of the counting animation in milliseconds
        });
    });
 
 
