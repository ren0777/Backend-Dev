const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {

  let responseText = "";
  let statusCode = 200;

  switch (req.url) {
    case "/":
      responseText = "Home page";
      break;

    case "/about":
      responseText = "About page";
      break;

    case "/contact":
      responseText = "Contact page";
      break;

    default:
      responseText = "404 Page Not Found";
      statusCode = 404;
  }

  // Send response to browser
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(responseText);

  // Log EXACT browser data
  const log = `${new Date()} | ${req.url} | ${responseText}\n`;

  fs.appendFile("./log.txt", log, (err) => {
    if (err) console.error(err);
  });
});

myServer.listen(8000, () => console.log("Server Started"));