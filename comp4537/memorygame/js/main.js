// colours 
// #94f2e1 teal -> Default
// #b96ad4 purple -> True
// #000000 black -> False

let score = 0 
let numRight = 0 
let attempts = 0

// Game settings
let maxrc = 7
let minrc = 3
let rows = 3
let cols = 3
let numFrontCards = 3

let grid = new Grid(rows, cols, numFrontCards)

async function init() {
    grid = new Grid(rows, cols, numFrontCards)
    numRight = 0
    attempts = 0
    grid.makeGrid()
    grid.makeFrontCards()
    await sleep(1000)

    // Show front cards
    grid.showFrontCards()
    await sleep(1500)
    grid.hideFrontCards()
    grid.appendOnclickEvents()
    await sleep(500)
    rotate()
}

// local counter to rotate one direction
let counter = 0
function rotate() {
    counter += 90;
    $("#grid").css({"transform": "rotate(" + counter + "deg)"})
}

function terminate() {
    if(confirm("Terminating this session..."))
        location.href="./summary.html"
    else
        return false
}

function gameover() {
    alert("game over")
    location.href="./summary.html"
}


// Sleeps the function being called from
function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

// Checks the number of clicks clicked
function checkNumClicked() {
    if(attempts >= numFrontCards)
        return true
    else
        return false
}

async function cardClicked(e) {

    // If clicked card is in randgen # array
    if(grid.checkCardClicked(e.target)) {
        numRight++
        score++
        attempts++
        e.target.style.backgroundColor = "#b96ad4"


    // If clicked card is not in randgen # array
    } else {
        score--
        attempts++
        e.target.style.backgroundColor = "#000000"
    }

    // Check if # of attempted clicks equates to # of front facing cards
    if(checkNumClicked() == true) {
        // console.log(grid.cards)
        let rma = document.querySelectorAll(".card")
        rma.forEach(card => card.removeAttribute("onclick"))
        grid.frontCardsArr.forEach(card => card.style.backgroundColor = "#b96ad4")

        // Check if number of clicked card equates to number of front cards
        if(numRight == numFrontCards) {
            e.target.style.backgroundColor = "#fd6a02"
            await sleep(1000)
            next()
            await init()
        } else {
            await sleep(1000)
            before()
            await init()
        }
    }

    // Remove card onclick attribute
    e.target.removeAttribute("onclick")

    // Append score onto body
    document.querySelector("#score").innerHTML = "Score: " + score

    if(score <= 0) {
        gameover()
        console.log("gameover")
    }
}

function next() {
    if(rows < maxrc) {
        if(rows == cols)
            rows++
        else if(rows > cols)
            cols++
    } 
    else if(cols < maxrc) 
        cols++
    else 
        return 
    numFrontCards++
}

function before() {
    if(cols > minrc) {
        if(cols == rows)
            cols--
        else if(cols < rows)
            rows--
    }
    else if(rows > minrc) 
        rows--
    else 
        return
    numFrontCards--
}
