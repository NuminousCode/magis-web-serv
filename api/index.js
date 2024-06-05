const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require('path');

dotenv.config();

const port = process.env.PORT || 3001;

// Define the /data route before the static file middleware
app.get('/data', (req, res) => {
    const serviceId = process.env.SERVICE_ID;
    const templateId = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;
    const data = {
        serviceId,
        templateId,
        publicKey
    };
    res.json({
        "serviceId": "your_service_id",
        "templateId": "your_template_id",
        "publicKey": "your_public_key"
      }
      );
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve index.html for any other routes to support client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
