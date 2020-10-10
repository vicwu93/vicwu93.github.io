
// console.log("hello world from my module");
exports.myDateTime = 
function() {
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes()
    return time
}