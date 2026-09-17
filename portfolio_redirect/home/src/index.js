const express = require('express');
const app = express();
const port = 9000;


app.get('/', async (req, res) => {
    res.redirect("https://lukas.soigneux.works");
});

app.listen(port, () => {
    console.log(`Home app listening on port ${port}`);
});
