function restart() {
    location.href = "./main.html"
}

function topFive() {
    let url = `https://memgame-server.herokuapp.com/top_five`
    let res = fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
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

topFive()