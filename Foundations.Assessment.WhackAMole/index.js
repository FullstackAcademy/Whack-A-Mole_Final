// 9 boxes, each with the hole image
// 3 moles appear in random holes to start
// If *clicked*, mole goes to random hole
// If *clicked* score at the top goes up by 1

// Create a "big box" to contain all the holes
let section = document.querySelector("#section")

const whackTitle = document.querySelector("#whackTitle")

// All the holes x9
let whackHoles = document.querySelector("#whackHoles")

// Counter to increase by 1 everytime the mole is clicked
var whackScore = document.querySelector("#whackScore")
whackScore.textContent = "0"
console.log(whackScore)

// querySelectorAll to capture all of the holes into an array
let moleArray = document.querySelectorAll(".whackHoles")
console.log(moleArray, "moleArray")

// Set a variable equal to a random number between 0 and 8, to be used to index the array for first mole
let randomMole = Math.floor(Math.random() * 9);
console.log(randomMole)

let randomMole1 = Math.floor(Math.random() * 9);
console.log(randomMole1)

let randomMole2 = Math.floor(Math.random() * 9);
console.log(randomMole2)

// Append the mole image onto one hole image
let moleImage = document.createElement("img")
    moleImage.id = "moleImage"
    // Make the mole appear at a random hole every time the page is refreshed
    moleArray[randomMole].append(moleImage)

// Make a second mole
let moleImage1 = document.createElement("img")
    moleImage1.id = "moleImage"
    moleArray[randomMole1].append(moleImage1)

// Make a third mole
let moleImage2 = document.createElement("img")
    moleImage2.id = "moleImage"
    moleArray[randomMole2].append(moleImage2)

// Add a click function to the mole image
moleImage.addEventListener("click", function() {
    console.log(moleImage)
    // Same as above, but added into the function for it to activate if clicked
    randomMole = Math.floor(Math.random() * 9);
    // If clicked, the score counter will increase by 1
    whackScore.textContent = parseInt(whackScore.textContent) + 1
    // Same as above, if clicked, the mole will dissapear and reappear at a random hole
    moleArray[randomMole].append(moleImage)
    })

// Need to add click function to second mole
// *Important to have the moleImage's position as "absolute", or else the mole will stack side by side with other moles*
moleImage1.addEventListener("click", function() {
    console.log(moleImage1)
    randomMole1 = Math.floor(Math.random() * 9);
    whackScore.textContent = parseInt(whackScore.textContent) + 1
    moleArray[randomMole1].append(moleImage1)
    })

// Need to add click function to third mole
moleImage2.addEventListener("click", function() {
    console.log(moleImage2)
    randomMole2 = Math.floor(Math.random() * 9);
    whackScore.textContent = parseInt(whackScore.textContent) + 1
    moleArray[randomMole2].append(moleImage2)
    })
 