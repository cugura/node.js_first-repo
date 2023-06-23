const http1 = require("http")

const server = http1.createServer((req, res)=>{
    if(req.url == "/") {
        res.end("Welcome to second web page")
    }
    if(req.url == "/about") {
        res.end("Short history")
    }
    res.end(`<h1>OooOps!</h1>
    <p>Can't find page you're looking for</p>
    <a href="/">back home</a>`)
})

server.listen(5000)