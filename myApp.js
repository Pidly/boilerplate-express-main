let express = require('express');
let app = express();

var path = require('path');
var publicPath = path.join(__dirname, "/public");

app.use("/public", express.static(publicPath));

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({time: req.time});
});

app.get('/:word/echo', (req, res) => {
    res.send({echo: req.params.word})
});

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === "uppercase") {
        res.send({"message": "HELLO JSON"});
    } else {
        res.send({"message": "Hello json"});
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


 module.exports = app;
