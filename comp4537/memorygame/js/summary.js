function restart() {
    location.href = "./main.html"
}

async function submit() {
    let name = document.getElementById("name").value
    let urlParams = new URLSearchParams(window.location.search)
    let score = urlParams.get("score")
    let url = `https://memgame-server.herokuapp.com/insert_score?name=${name}&score=${score}`
    let res = await (await fetch(url)).json()
    // res = await res.json()
    console.log(res)

    location.href=`./leaderboard.html?name=${res.name}&score=${res.score}&rank=${res.rank}`
}

