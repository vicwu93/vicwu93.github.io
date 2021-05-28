// let inputFile = document.getElementById("inputFile")
// inputFile.addEventListener("change", onChange, false)

// Callback from a <input type="file" onchange="onChange(event)">
function onChange(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      // The file's text will be printed here
      console.log(e.target.result)
    };
  
    reader.readAsText(file);
}

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

function draw() {
    ctx.drawImage()
}