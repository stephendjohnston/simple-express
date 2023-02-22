const express = require('express');

const app = express();

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
})