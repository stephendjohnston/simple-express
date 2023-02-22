const express = require('express');
const path = require('path');

const app = express();

app.all('/', (req, res) => {
    console.log("Just got a request!")
    // res.send('Yo!')
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
})