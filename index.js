const axios = require("axios")
const urls = ["https://hissing-splendid-utahraptor.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 70 * 1000);
