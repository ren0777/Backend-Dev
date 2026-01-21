const http=require("http");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const myurl=url.parse(req.url,true);
    const path=myurl.pathname;

    console.log();

    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Welcome message");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });   
            res.end("This is about page");
            break;
        case "/user":
            const username = myurl.query.name;
            const age=myurl.query.age;

            const userdata={
                name: username,
                age: age
            }   
            res.end(JSON.stringify(userdata));
            res.end(`Welcome , ${username} and your age is ${age}`);

            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });   
            res.end("404 Page Not Found");
    }
});

myServer.listen(3000, () => console.log("Server Started"));