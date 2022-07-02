// TODO: Declare any global variables we need
let headsFlips = 0
let tailsFlips = 0

document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#flip').addEventListener('click', () => {
      let flippedHeads = Math.random() <.5;
       if (flippedHeads) {
           document.querySelector('#penny-image').src ='./assets/images/penny-heads.jpg';
           document.querySelector('#message').textContent = "You Flipped Heads!";
           headsFlips++;
        } else {
        document.querySelector('#penny-image').src ='./assets/images/penny-tails.jpg';
        document.querySelector('#message').textContent = "You Flipped Tails!";
        tailsFlips++;



    }
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
      let totalFlips = headsFlips + tailsFlips;
      let percentHeads = 0;
      let percentTails = 0;

      if (totalFlips > 0) {
         percentHeads = Math.round((headsFlips / totalFlips) * 100);
         percentTails = Math.round((tailsFlips / totalFlips) * 100);
      }
      
      document.querySelector("#heads").textContent = headsFlips;
      document.querySelector("#heads-percent").textContent = percentHeads + '%';
      document.querySelector("#tails").textContent = tailsFlips;
      document.querySelector("#tails-percent").textContent = percentTails + '%';
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


      document.querySelector("#clear").addEventListener("click", function () {
        headsFlips = 0;
        tailsFlips = 0;

        document.querySelector('#message').textContent = "Let's Get Rolling";

        let totalFlips = headsFlips + tailsFlips;
      let percentHeads = 0;
      let percentTails = 0;


        if (totalFlips > 0) {
            percentHeads = Math.round((headsFlips / totalFlips) * 100);
            percentTails = Math.round((tailsFlips / totalFlips) * 100);
         }
         
         document.querySelector("#heads").textContent = headsFlips;
         document.querySelector("#heads-percent").textContent = percentFlips + '%';
         document.querySelector("#tails").textContent = tailsFlips;
         document.querySelector("#tails-percent").textContent = percentTails + '%';



      }) 

    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

    })})