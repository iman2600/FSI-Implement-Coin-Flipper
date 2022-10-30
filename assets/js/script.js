// TODO: Declare any global variables we need
let headsFlips = 0;
let tailsFlips = 0;
let headsPercent = "0%";
let tailsPercent = "0%";
let totalFlips = 0;

document.addEventListener("DOMContentLoaded", function () {
  // TODO: Add event listener and handler for flip and clear buttons
  document.querySelector("#flip").addEventListener("click", function () {
    if (Math.random() > 0.499999999) {
      //lets assume heads
      document.querySelector("#penny-image").src =
        "assets/images/penny-heads.jpg";
      document.querySelector("#message").innerHTML = "You Flipped Heads";
      headsFlips++;
      totalFlips++;
      headsPercent = Math.round((headsFlips / totalFlips) * 100);
      tailsPercent = Math.round((tailsFlips / totalFlips) * 100);
      document.querySelector("#heads").innerHTML = headsFlips;
      document.querySelector("#heads-percent").innerHTML = headsPercent + "%";
      document.querySelector("#tails").innerHTML = tailsFlips;
      document.querySelector("#tails-percent").innerHTML = tailsPercent + "%";
    } else {
      //lets assume tails
      document.querySelector("#penny-image").src =
        "assets/images/penny-tails.jpg";
      document.querySelector("#message").innerHTML = "You Flipped Tails";
      tailsFlips++;
      totalFlips++;
      headsPercent = Math.round((headsFlips / totalFlips) * 100);
      tailsPercent = Math.round((tailsFlips / totalFlips) * 100);
      document.querySelector("#heads").innerHTML = headsFlips;
      document.querySelector("#heads-percent").innerHTML = headsPercent + "%";
      document.querySelector("#tails").innerHTML = tailsFlips;
      document.querySelector("#tails-percent").innerHTML = tailsPercent + "%";
    }
  });

 
  document.querySelector("#clear").addEventListener("click", function () {
    headsFlips = 0;
    tailsFlips = 0;
    headsPercent = "0%";
    tailsPercent = "0%";
    totalFlips = 0;
    document.querySelector("#message").innerHTML = "Let's Get Flipping!";
    document.querySelector("#heads").innerHTML = headsFlips;
    document.querySelector("#heads-percent").innerHTML = headsPercent;
    document.querySelector("#tails").innerHTML = tailsFlips;
    document.querySelector("#tails-percent").innerHTML = tailsPercent;
    document.querySelector("#penny-image").src =
      "assets/images/penny-heads.jpg";
   
  });
});
