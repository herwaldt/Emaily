const express = require('express');
const app = express();


app.get ('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

// localhost:5000 if Heroku does not define a port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
