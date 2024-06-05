const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');

dotenv.config();

const port = process.env.PORT || 3001;

// Serve static files from the root directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
    const serviceId = process.env.SERVICE_ID;
    const templateId = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;
    const data = {
        serviceId,
        templateId,
        publicKey
    };
    res.json(data);
});

app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
