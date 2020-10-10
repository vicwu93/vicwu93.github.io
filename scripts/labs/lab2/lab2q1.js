letters = ['A', 'B', 'C', 'D', 'E', 
            'F', 'G', 'H', 'I', 'J', 
            'K', 'L', 'M', 'N', 'O', 
            'P', 'Q', 'R', 'S', 'T', 
            'U', 'V', 'W', 'X', 'Y', 'Z']

function generateButtons(num){
    for (i = 0; i < num; i++) {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = letters[i];
        btn.id = letters[i]
        document.body.appendChild(btn);
        btn.onclick = function () {
            console.log("Button " + btn.id + " was clicked.")
        }
    }
}

generateButtons(prompt("Enter a value between 0 and 26"))
