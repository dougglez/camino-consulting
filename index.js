const express = require('express');
const path = require('path');
const app = express();

console.log(path.join(__dirname))
app.use(express.static(__dirname));
app.use("/styles", express.static(__dirname, ''));
app.use("/images", express.static(__dirname + '/images'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.get('*', (req, res) => {
  console.log('hit');
  res.sendFile(path.join(__dirname, '/../index.html'))
});

app.listen(8080, console.log('running on localhost:8080'));