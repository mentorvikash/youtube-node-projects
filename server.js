const express = require('express');
const React = require('react');
const path = require('path');
const ReactDomServer = require('react-dom/server');
const App = require('./src/component/App').default;

const app = express();
const port = 4000;

// ======== To server static files
// app.use(express.static(path.join(__dirname, 'public')))
// const portfolioPath = path.join(__dirname, 'public', "index.html")
// app.get("/", (req, res) => {
//     res.sendFile(portfolioPath)
// })

// ======== To server react file
const jsx = React.createElement(App)
const reactDom = ReactDomServer.renderToString(jsx)
app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Portfolio Website</title>
  </head>
  <body>
    <div id="root">${reactDom}</div>
  </body>
</html>
    `)
})

app.listen(port, () => {
    console.log("server is running at " + port);
})