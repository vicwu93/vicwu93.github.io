class Grid {
    grid = document.querySelector("#grid")
    frontCardsArr = [] 
    cards = []
    constructor(rows, cols, frontCards) {
        this.rows = rows
        this.cols = cols
        this.frontCards = frontCards
    }

    checkCardClicked(card) {
        console.log(this.frontCardsArr)
        if(this.frontCardsArr.includes(card))
            return true
        else 
            return false
    }

    // helper function for makeGrid to create a div element for rows
    makeRow() {
        let row = document.createElement("div")
        row.className = "row" 
        return row 
    }

    // helper function for makeGrid to create a div element for columns
    makeCard(row, col) {
        let card = document.createElement("div")
        card.className = "card"
        card.id = `${row}-${col}`
        return card 
    }

    // creates the grid by x and y axis
    makeGrid(){ 
        this.grid.innerHTML = ""
        for(let i = 0; i < this.rows; i++) {
            let row = this.makeRow()
            for(let j = 0; j < this.cols; j++) {
                let card = this.makeCard(i, j)
                row.appendChild(card)
            }
            this.grid.appendChild(row)
        }
        return this.grid 
    }

    randNumGen(cl) {
        const rand = parseInt(Math.floor(Math.random()*(cl)));
        return rand
    }

    makeFrontCards() {
        this.cards = [...document.querySelectorAll(".card")];
        // console.log(cards)
        for(let i = 0; i < this.frontCards; i++) {
            let rand = this.randNumGen(this.cards.length)
            this.frontCardsArr[i] = this.cards[rand]
            // keep all cards != to randgen front cards
            this.cards = this.cards.filter(card => card != this.frontCardsArr[i])
        }
        console.log("ans: ", this.frontCardsArr)
    }

    // show and hide the front cards
    showFrontCards() {
        for(let i = 0; i < this.frontCardsArr.length; i++)
            this.frontCardsArr[i].style.backgroundColor = "#b96ad4"
    }
    hideFrontCards() {
        for(let i = 0; i < this.frontCardsArr.length; i++)
            this.frontCardsArr[i].style.backgroundColor = "#94f2e1"
    }

    appendOnclickEvents() {
        this.cards = [...document.querySelectorAll(".card")]
        this.cards.forEach(card => card.setAttribute("onclick", "cardClicked(event)"))
    }

    returnGrid() {
        return this
    }
}
