const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.get('/', (req, res) => (res.sendFile(path.join(__dirname, 'public/index.html') )));

app.get('/data', (req, res) => {
    const accessToken = process.env.ACCESS_TOKEN;
    const spaceId = process.env.SPACE_ID;
    const data = {
        accessToken,
        spaceId,
    };
    res.json(data);
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;