function restart() {
    location.href = "./index.html"
}

function submit() {
    let name = document.getElementById("name").value
    let urlParams = new URLSearchParams(window.location.search)
    let score = urlParams.get("score")
    let url = `https://memgame-server.herokuapp.com/insert_score?name=${name}&score=${score}`
    // let res = await (await fetch(url, {mode: "cors"})).json()
    // res = await res.json()
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        location.href=`./leaderboard.html?name=${data.name}&score=${data.score}&rank=${data.rank}`
    })
}