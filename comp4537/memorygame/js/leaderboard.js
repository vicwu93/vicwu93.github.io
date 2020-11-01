function restart() {
    location.href = "./main.html"
}

async function topFive() {
    let url = `https://memgame-server.herokuapp.com/top_five`
    let res = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
    });
    let topfive = document.getElementById("#topfive")
    let rank = 1
    for(let i = 0; i < 5; i++) {
        let ranks = document.createElement("div")
        ranks.className = "ranks"
        ranks.innerHTML += `<div>${rank} ${res.name} ${res.score}`
        rank++
        topfive.appendChild(ranks)
    }
    return res.json()
}

topFive()