function search() {
    const defn = document.getElementById("defn")

    const word = document.getElementById("word").value
    // console.log(word)
        const url = `https://lab5-api-definitions.herokuapp.com/api/search/?word=${word}`;
        console.log(url)

        fetch(url)
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data)
                    defn.innerHTML = `<p>${data.definition}</p>`
            });

}
// let form = document.getElementById("form");
// form.addEventListener('submit', submit);
function submit() {

    let user_defn = {word: document.getElementById("word").value, 
                    definition: document.getElementById("definition").value}
    console.log(user_defn)
    const url = `https://lab5-api-definitions.herokuapp.com/api/submit`;
    console.log(url)
    fetch(url, 
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_defn)
        })
    .then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
        resp.innerHTML = "added!"
    });
}