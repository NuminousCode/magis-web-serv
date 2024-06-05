// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const path = require("path");

// dotenv.config();

// app.get('/', (req, res) => (res.sendFile(path.join(__dirname, '/index.html') )));

// app.use(express.static(path.join(__dirname, '/')));

// app.get('/data', (req, res) => {
//     const serviceId = process.env.SERVICE_ID;
//     const templateId = process.env.TEMPLATE_ID;
//     const publicKey = process.env.PUBLIC_KEY;
//     const data = {
//         serviceId,
//         templateId,
//         publicKey
//     };
//     res.json(data);
// });

// app.listen(3001, () => console.log("Server ready on port 3001."));

// module.exports = app;