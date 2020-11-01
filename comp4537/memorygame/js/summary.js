function restart() {
    location.href = "./main.html"
}

function submit() {
    let name = document.getElementById("name").value
    let urlParams = new URLSearchParams(window.location.search)
    let score = urlParams.get("score")
    let url = `https://memgame-server.herokuapp.com/insert_score?name=${name}&${score}`
    let res = fetch(url)
    .then((res) => res.json())
    .then((data) => {data.score
    });
    location.href="./leaderboard.html"
    return res.json()
}

