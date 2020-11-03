function restart() {
    location.href = "./index.html"
}

// Elements I want loaded when users load onto this page
window.onload = () => {
    let urlParams = new URLSearchParams(window.location.search)
    let score = urlParams.get("score")
    let name = urlParams.get("name")
    let rank = urlParams.get("rank")

    if(score == undefined || name == undefined || rank == undefined) 
        return restart()
    document.getElementById("topfive").innerHTML = TOPFIVE
    document.getElementById("restartBtn").innerHTML = RESTART
    document.getElementById("user").innerHTML = `Name: ${name} Score: ${score} Rank: ${parseInt(rank)+1}`
    topFive()
} 

// Gets top five from database and appends it onto innerHTML
function topFive() {
    let url = `https://memgame-server.herokuapp.com/top_five`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        let topfive = document.getElementById("topfive")
        let rank = 1
        for(let i = 0; i < 5; i++) {
            let ranks = document.createElement("div")
            ranks.className = "ranks"
            ranks.innerHTML += `<div>${rank} ${data[i].name} ${data[i].score}`
            rank++
            topfive.appendChild(ranks)
        }
    });
}
