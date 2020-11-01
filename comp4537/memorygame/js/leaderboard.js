function restart() {
    location.href = "./main.html"
}

async function topFive() {
    let url = `https://memgame-server.herokuapp.com/top_five`
    let res = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
    });
    return res.json()
}

topFive()