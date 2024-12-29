$("#c1, #Title").hover(function(){
    $("#Title").toggleClass("underLine")
})

$(document).ready(function () {
    // Select the elements to observe
    const $containers = $('.ContentContainer');

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class when the element is in view
          $(entry.target).addClass('ShowLeft');
        } 
        
      });
    }, {
      root: null, // Observe relative to the viewport
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 50% of the element is visible
    });

    // Observe each box
    $containers.each(function () {
      observer.observe(this);
    });
  });




//   $("#MobileMenu, #MobileClose").click(function () {
//     if ($("#MobileDrop").hasClass("HiddenMobile")) {
//         // If currently hidden, slide down
//         $("#MobileDrop").removeClass("HiddenMobile").addClass("ShowMobile");
//     } else if ($("#MobileDrop").hasClass("ShowMobile")) {
//         // If currently shown, slide up
//         $("#MobileDrop").removeClass("ShowMobile").addClass("HideMobile");
        
//         // Remove `HideMobile` class and reset to `HiddenMobile` after animation ends
//         setTimeout(function () {
//             $("#MobileDrop").removeClass("HideMobile").addClass("HiddenMobile");
//         }, 1000); // Matches the animation duration (1s)
//     }
// });


$("#MobileMenu, #MobileClose").click(function () {
  const $mobileDrop = $("#MobileDrop");

  if ($mobileDrop.hasClass("HiddenMobile")) {
      // Slide down (show)
      $mobileDrop.removeClass("HiddenMobile").addClass("ShowMobile");
  } else if ($mobileDrop.hasClass("ShowMobile")) {
      // Slide up (hide)
      $mobileDrop.removeClass("ShowMobile").addClass("HideMobile");

      // After animation ends, reset to HiddenMobile
      $mobileDrop.one("animationend", function () {
          $mobileDrop.removeClass("HideMobile").addClass("HiddenMobile");
      });
  }
});

  // $("#MobileMenu, #MobileClose").click(function(){
  //   if($('#MobileDrop').hasClass("HiddenMobile"))
  //     {
  //       $("#MobileDrop").removeClass("HiddenMobile")
  //       $("#MobileDrop").addClass("ShowMobile")
  //     }
  //     else
  //     {
  //       setTimeout(function () {
  //         $("#MobileDrop").removeClass("HideMobile").addClass("HiddenMobile");
  //     }, 1000);
  //     }
  // })
