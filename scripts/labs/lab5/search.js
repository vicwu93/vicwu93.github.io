const searchWord = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/api/search", false);
    xhttp.send();

    const definitions = JSON.parse(xhttp.responseText);

    for (let d of definitions) {
        const x = `${d.definition}`
        document.getElementById('word_defn').innerHTML = document.getElementById('word_defn').innerHTML + x;
    }
}

searchWord();