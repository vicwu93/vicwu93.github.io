

// function formSubmit() { 
//     document.forms['myForm'].submit()
// }
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
canvas.width = canvas.clientWidth * 2
canvas.height = canvas.clientHeight * 2
ctx.scale(2, 2)

// setting defaults
// canvas.width = 0
// canvas.height = 0


// var imageLoader = document.getElementById("imageLoader")
// imageLoader.addEventListener("change", handleFile, false)

function inputUpdate(e) { 
    let input = e.target.value
    console.log(input)
    addTextToImage()
}

function addTextToImage(img) {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)

    
    ctx.scale(0.3, 0.3)
    ctx.font = "200px Montserrat"
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 15
    ctx.fillStyle = "#ffffff"
    ctx.strokeText("Hello World", 0, 400)
    ctx.fillText("Hello World", 0, 400)
    ctx.scale(1, 1)
}

function handleFile(event){
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = (e) => {
        let img = new Image()
        img.onload = () => {
            addTextToImage(img)
        }
        img.src = e.target.result
    }
    reader.readAsDataURL(file)
}

let inputTop = document.getElementById("txtTop")
inputTop.oninput = inputUpdate

let inputBot = document.getElementById("txtBot")
inputBot.oninput = inputUpdate

/Users/victorwu/Documents/projects/site/vicwu93.github.io/projects/meme/index.js