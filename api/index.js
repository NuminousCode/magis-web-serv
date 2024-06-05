const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3001;
app.get('/', (req, res) => (res.sendFile(path.join(__dirname, 'public/index.html') )));

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