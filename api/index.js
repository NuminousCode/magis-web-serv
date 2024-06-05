const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3001;
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

app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;