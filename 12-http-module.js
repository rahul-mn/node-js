const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Welome to our home page`)
    }
    if (req.url === '/about') {
        res.end(`This is about page.`)
    }
    res.end(`
    <h1>Page Not Found</h1>
    <p>We are unable to find the page you are looking for. 
    <a href='/'> Go back to Home page</a>
    `)
})

server.listen(3000)