let timeElement = document.getElementById('time');

function convertTZ(date) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: "Asia/Bangkok"}));   
}

setInterval(function() {
    const date = new Date();
    let calidate = convertTZ(date);
    timeElement.innerHTML = calidate.toLocaleTimeString();
}, 100);