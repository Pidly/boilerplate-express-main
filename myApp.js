let express = require('express');
let app = express();

var path = require('path');
var publicPath = path.join(__dirname, "/public");

app.use("/public", express.static(publicPath));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


 module.exports = app;
