const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res) => {
  const url = `https://api.darksky.net/forecast/${YOUR_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`;
  axios({
    url: url,
    responseType: 'json'
  }).then(data => res.json(data.data));
});

app.listen(PORT, () => {
  console.log('server started');
});
